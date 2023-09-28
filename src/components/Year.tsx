import React, { useState } from "react";
import { Month } from "./Month";
import { date, monthNames } from "../utils/calenderUtils";
import { IYearProps } from "../types/interface";

export const Year = (props: IYearProps) => {
  const { monthlyCalender } = props;

  const [showOtherMonth, setShowOtherMonth] = useState<string>("");

  const handleOnMonthChange = (e: any) => {
    if (e.target.value !== monthNames[date.getMonth()]) {
      setShowOtherMonth(e.target.value);
    } else setShowOtherMonth("");
  };

  return (
    <>
      {monthlyCalender ? (
        <>
          <div className="month-selection">
            {monthNames.map((monthItem) => (
              <>
                <input type="radio" value={monthItem} name="month" onChange={handleOnMonthChange} />
                <label htmlFor="month">{monthItem}</label>
              </>
            ))}
          </div>
          <Month date={showOtherMonth ? new Date(2023, monthNames.indexOf(showOtherMonth)) : date} monthIndex={date.getMonth()} showOtherMonth={showOtherMonth} />
        </>
      ) : (
        <div className="year-container">
          {monthNames.map((month, index) => (
            <Month date={new Date(2023, index)} monthIndex={index} showOtherMonth={showOtherMonth} />
          ))}
        </div>
      )}
    </>
  );
};
