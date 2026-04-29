/**
 * Server-side timer. Ticks every second and calls onTick/onTimeout callbacks.
 * This is the source of truth — the client only displays what the server sends.
 */
export class Timer {
  constructor(durationSeconds, { onTick, onTimeout }) {
    this.duration = durationSeconds;
    this.remaining = durationSeconds;
    this.onTick = onTick;
    this.onTimeout = onTimeout;
    this.interval = null;
  }

  start() {
    this.stop();
    this.remaining = this.duration;
    this.onTick(this.remaining);

    this.interval = setInterval(() => {
      this.remaining--;
      this.onTick(this.remaining);

      if (this.remaining <= 0) {
        this.stop();
        this.onTimeout();
      }
    }, 1000);
  }

  reset() {
    this.start();
  }

  stop() {
    if (this.interval) {
      clearInterval(this.interval);
      this.interval = null;
    }
  }
}
