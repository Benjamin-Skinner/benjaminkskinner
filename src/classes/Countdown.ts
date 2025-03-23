class Countdown {
  constructor(private targetDate: Date) {
    this.targetDate = targetDate;
  }

  getDaysUntilTarget() {
    return Math.floor(
      (this.targetDate.getTime() - new Date().getTime()) / (1000 * 60 * 60 * 24)
    );
  }

  getWeeksUntilTarget() {
    return Math.floor(
      (this.targetDate.getTime() - new Date().getTime()) /
        (1000 * 60 * 60 * 24 * 7)
    );
  }

  getMonthsUntilTarget() {
    return Math.floor(
      (this.targetDate.getTime() - new Date().getTime()) /
        (1000 * 60 * 60 * 24 * 30)
    );
  }

  getMinutesUntilTarget() {
    return Math.floor(
      (this.targetDate.getTime() - new Date().getTime()) / (1000 * 60)
    );
  }
}

export default Countdown;
