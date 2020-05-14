class CountdownTimer {
  constructor({ selector, targetDate }) {
    this.selector = selector;
    this.targetDate = targetDate;
    this.__BegginTimer();
   }

  __BegginTimer() {
    const currentTime = new Date().getTime();
    const endTime = this.targetDate.getTime();
    const time = endTime - currentTime;

    const pad = function pad(value) {
      return String(value).padStart(2, "0");
    };

    const days = pad(Math.floor(time / (1000 * 60 * 60 * 24)));

    const hours = pad(
      Math.floor((time % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60))
    );

    const mins = pad(Math.floor((time % (1000 * 60 * 60)) / (1000 * 60)));

    const secs = pad(Math.floor((time % (1000 * 60)) / 1000));

    const selectorLinksTimer = document.querySelector(this.selector);
    selectorLinksTimer.querySelector(`[data-value="days"]`).textContent = days;

    selectorLinksTimer.querySelector(
      `[data-value="hours"]`
    ).textContent = hours;

    selectorLinksTimer.querySelector(`[data-value="mins"]`).textContent = mins;

    selectorLinksTimer.querySelector(`[data-value="secs"]`).textContent = secs;
    
    setInterval(() => {
      this.__BegginTimer();
    }, 1000);
  }
}
// new CountdownTimer({
//   selector: "#timer-1",
//   targetDate: new Date("Jul 17, 2019"),
// });

new CountdownTimer({
  selector: "#timer-1",
  targetDate: new Date("Jul 25, 2021"),
});