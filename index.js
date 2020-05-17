class CountdownTimer {
  constructor({ selector, targetDate }) {
    this.selector = selector;
    this.targetDate = targetDate;
    this.selectorLinksTimer = document.querySelector(selector);

    this.days = this.selectorLinksTimer.querySelector(`[data-value="days"]`);

    this.hours = this.selectorLinksTimer.querySelector(`[data-value="hours"]`);

    this.mins = this.selectorLinksTimer.querySelector(`[data-value="mins"]`);

    this.secs = this.selectorLinksTimer.querySelector(`[data-value="secs"]`);

    this.pad();
    this.counterStart();
    this.counterInterval();
  }


  pad(value) {
    return String(value).padStart(2, "0");
  }

  counterStart() {
    const currentTime = new Date().getTime();
    const endTime = this.targetDate.getTime();
    const time = endTime - currentTime;

    this.days.textContent = this.pad(Math.floor(time / (1000 * 60 * 60 * 24)));

    this.hours.textContent = this.pad(
      Math.floor((time % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60))
    );
    this.mins.textContent = this.pad(
      Math.floor((time % (1000 * 60 * 60)) / (1000 * 60))
    );

    this.secs.textContent = this.pad(Math.floor((time % (1000 * 60)) / 1000));
  }

  counterInterval() {
    const timerID = setInterval(() => {
      this.counterStart();
    }, 1000);

    if (new Date().getTime() >= this.targetDate.getTime()) {
      clearInterval(timerID);
      return;
    }
  }
}


new CountdownTimer({
  selector: "#timer-1",
  targetDate: new Date("May 30, 2020"),
});
