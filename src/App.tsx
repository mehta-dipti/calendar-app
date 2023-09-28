import { useState } from "react";
import { Calendar } from "./components/Calendar";
import "./style.scss";
import { calendarConstants } from "./constants/constants";

function App() {
  const [isMonthlyCalendar, setIsMonthlyCalendar] = useState<boolean>(true);

  const handleOnChange = (e: any) => {
    const { value } = e.target;
    console.log(value);
    value === "month" ? setIsMonthlyCalendar(true) : setIsMonthlyCalendar(false);
  };

  return (
    <div className="App">
      <div>
        <form>
          <input type="radio" id="year" value="year" name="calendar" onChange={handleOnChange} />
          <label htmlFor="year">{calendarConstants.YEARLY}</label>
          <input type="radio" id="month" value="month" name="calendar" onChange={handleOnChange} checked={isMonthlyCalendar} />
          <label htmlFor="month">{calendarConstants.MONTHLY}</label>
        </form>
      </div>
      <Calendar monthlyCalendar={isMonthlyCalendar} />
    </div>
  );
}

export default App;
