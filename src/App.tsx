import { useState } from "react";
import { Year } from "./components/Year";
import "./style.scss";

function App() {
  const [monthlyCalender, setMonthlyCalender] = useState<boolean>(true);

  const handleOnChange = (e: any) => {
    const { value } = e.target;
    console.log(value);
    value === "month" ? setMonthlyCalender(true) : setMonthlyCalender(false);
  };

  return (
    <div className="App">
      <div>
        <form>
          <input type="radio" id="year" value="year" name="calender" onChange={handleOnChange} />
          <label htmlFor="year">Yearly Calender</label>
          <input type="radio" id="month" value="month" name="calender" onChange={handleOnChange} checked={monthlyCalender} />
          <label htmlFor="month">Monthly Calender</label>
        </form>
      </div>
      <Year monthlyCalender={monthlyCalender} />
    </div>
  );
}

export default App;
