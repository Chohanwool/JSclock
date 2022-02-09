class DigitalClock {
  constructor(element) {
    this.element = element;
  }

  start() {
    this.update();

    setInterval(() => {
      this.update();
    }, 500);
  }

  update() {
    const parts = this.getTimeParts();
    const minutesFormatted = parts.minute.toString().padStart(2, "0");
    const timeFormatted = `${parts.hour}:${minutesFormatted}`;
    const amPm = parts.isAM ? "오전" : "오후";

    this.element.querySelector(".clock-time").textContent = timeFormatted;
    this.element.querySelector(".clock-AMPM").textContent = amPm;
  }

  getTimeParts() {
    const now = new Date();

    return {
      hour: now.getHours() % 12 || 12,
      minute: now.getMinutes(),
      isAM: now.getHours < 12,
    };
  }
}

const clockElement = document.querySelector(".clock");
const clockObject = new DigitalClock(clockElement);

clockObject.start();

//https://www.youtube.com/watch?v=paiI1N96EpQ
