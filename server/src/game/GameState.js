import { matches } from "../utils/normalize.js";
import { Timer } from "./Timer.js";

/**
 * Manages the state of a single game round between two players.
 *
 * Lifecycle: waiting -> playing -> finished
 */
export class GameState {
  constructor(question, answerSet, turnDuration, { onTick, onTurnChange, onGameOver }) {
    this.question = question;
    this.answerSet = answerSet;
    this.status = "waiting"; // waiting | playing | finished

    this.players = [];         // [{ id, name }]
    this.currentPlayerIndex = 0;
    this.givenAnswers = [];    // answers already accepted
    this.winner = null;
    this.lastAnswer = null;    // { answer, playerId, correct }

    this.onTurnChange = onTurnChange;
    this.onGameOver = onGameOver;

    this.timer = new Timer(turnDuration, {
      onTick,
      onTimeout: () => this.handleTimeout(),
    });
  }

  get currentPlayer() {
    return this.players[this.currentPlayerIndex];
  }

  get otherPlayer() {
    return this.players[1 - this.currentPlayerIndex];
  }

  get remainingAnswers() {
    return this.question.correctAnswers.filter(
      (a) => !this.givenAnswers.some((g) => matches(g, a))
    );
  }

  start() {
    if (this.players.length !== 2) return false;
    this.status = "playing";
    this.currentPlayerIndex = 0;
    this.timer.start();
    return true;
  }

  /**
   * Process a player's answer submission.
   * Returns { valid, correct, alreadyGiven, answer } or null if not allowed.
   */
  submitAnswer(playerId, answer) {
    if (this.status !== "playing") return null;
    if (this.currentPlayer.id !== playerId) return null;

    // Check if already given
    const alreadyGiven = this.givenAnswers.some((g) => matches(g, answer));
    if (alreadyGiven) {
      return { valid: false, correct: false, alreadyGiven: true, answer };
    }

    // Check if the answer is in the correct answers list
    const correct = this.question.correctAnswers.some((a) => matches(a, answer));

    if (!correct) {
      this.endGame(this.otherPlayer, `wrong_answer`);
      return { valid: true, correct: false, alreadyGiven: false, answer };
    }

    // Correct answer
    this.givenAnswers.push(answer);
    this.lastAnswer = { answer, playerId, correct: true };

    // Check if all answers have been found
    if (this.remainingAnswers.length === 0) {
      this.endGame(null, "all_found");
      return { valid: true, correct: true, alreadyGiven: false, answer, allFound: true };
    }

    // Switch turns
    this.currentPlayerIndex = 1 - this.currentPlayerIndex;
    this.timer.reset();
    this.onTurnChange(this.currentPlayer);

    return { valid: true, correct: true, alreadyGiven: false, answer };
  }

  handleTimeout() {
    if (this.status !== "playing") return;
    this.endGame(this.otherPlayer, "timeout");
  }

  endGame(winner, reason) {
    this.status = "finished";
    this.winner = winner;
    this.timer.stop();
    this.onGameOver({ winner, reason, givenAnswers: this.givenAnswers });
  }

  toJSON() {
    return {
      question: { id: this.question.id, text: this.question.text },
      answerSetId: this.question.answerSetId,
      players: this.players,
      currentPlayerIndex: this.currentPlayerIndex,
      givenAnswers: this.givenAnswers,
      status: this.status,
      winner: this.winner,
    };
  }
}
