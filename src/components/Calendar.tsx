import React, { useState } from "react";
import { Month } from "./Month";
import { date, currYear } from "../utils/calendarUtils";
import { monthNames } from "../constants/constants";
import { ICalendarProps } from "../types/interface";

export const Calendar = (props: ICalendarProps) => {
  const { monthlyCalendar } = props;

  const [monthIndex, setMonthIndex] = useState<number>(date.getMonth());

  const handleOnMonthChange = (e: any) => {
    setMonthIndex(monthNames.indexOf(e.target.value));
  };

  return (
    <>
      {monthlyCalendar ? (
        <>
          <div className="month-selection">
            {monthNames.map((monthItem) => (
              <>
                <input type="radio" value={monthItem} name="month" onChange={handleOnMonthChange} />
                <label htmlFor="month">{monthItem}</label>
              </>
            ))}
          </div>
          <Month date={new Date(currYear, monthIndex)} monthIndex={monthIndex} />
        </>
      ) : (
        <div className="year-container">
          {monthNames.map((month, index) => (
            <Month date={new Date(currYear, index)} monthIndex={index} />
          ))}
        </div>
      )}
    </>
  );
};
