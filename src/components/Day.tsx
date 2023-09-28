import { IDayProps } from "../types/interface";
import { addPadding, renderDays } from "../utils/calenderUtils";

export const Day = (props: IDayProps) => {
  const { year, month, monthIndex, showOtherMonth } = props;
  const firstDayOfMonth = new Date(year, month, 1);
  const daysInMonth = new Date(year, month + 1, 0).getDate();

  return (
    <div className="day-container">
      {addPadding(firstDayOfMonth)}
      {renderDays(daysInMonth, monthIndex, showOtherMonth)}
    </div>
  );
};
