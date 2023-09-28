export const date = new Date();
export const currYear = new Date().getFullYear();
export const currDate = new Date().getDate();
export const currMonth = new Date().getMonth();

// renderDays method is used to renders blocks of dates in a calendar
export const renderDays = (daysInMonth: number, monthIndex: number) => {
  let allDays: any[] = [];

  for (let day: number = 1; day <= daysInMonth; day++) {
    if (day === currDate && currMonth === monthIndex) {
      // highlight current date
      allDays.push(
        <div className="curr-date date" key={day}>
          {day}
        </div>
      );
    } else
      allDays.push(
        <div className="date" key={day}>
          {day}
        </div>
      );
  }

  return allDays;
};

// addPadding method is used to add white space before 1st day of the month
export const addPadding = (firstDayOfMonth: Date) => {
  let padding: number = firstDayOfMonth.getDay();
  let paddingBox: any[] = [];
  for (let box: number = 1; box <= padding; box++) {
    paddingBox.push(
      <div className="padding" key={box}>
        {""}
      </div>
    );
  }
  return paddingBox;
};
