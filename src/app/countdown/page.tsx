import Countdown from "@/classes/Countdown";

const CountdownPage = () => {
  const thirtiethBirthday = new Date("2031-08-31");
  const countdown = new Countdown(thirtiethBirthday);
  const weeks = countdown.getWeeksUntilTarget();
  const days = countdown.getDaysUntilTarget();
  const months = countdown.getMonthsUntilTarget();
  const minutes = countdown.getMinutesUntilTarget();

  return (
    <div className="">
      <h1>Until I turn 30:</h1>
      <div className="flex flex-col items-center justify-center">
        <div className="flex flex-row items-center justify-center">
          <h2 className="mr-4">{months}</h2> <p className="">months</p>
        </div>
        or
        <div className="flex flex-row items-center justify-center">
          <h2 className="mr-4">{weeks}</h2> <p className="">weeks</p>
        </div>
        or
        <div className="flex flex-row items-center justify-center">
          <h2 className="mr-4">{days.toLocaleString()}</h2>{" "}
          <p className="">days</p>
        </div>
        or
        <div className="flex flex-row items-center justify-center">
          <h2 className="mr-4">{minutes.toLocaleString()}</h2>{" "}
          <p className="">minutes</p>
        </div>
      </div>
    </div>
  );
};

export default CountdownPage;
