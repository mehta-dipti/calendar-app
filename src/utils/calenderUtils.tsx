export const weekDays: String[] = ["Su", "Mo", "Tu", "We", "Th", "Fr", "Sa"];
export const monthNames = ["January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"];

export const date = new Date();
export const currYear = new Date().getFullYear();
export const currDate = new Date().getDate();
export const currMonth = new Date().getMonth();

// renderDays method is used to renders blocks of dates in a calender
export const renderDays = (daysInMonth: number, monthIndex: number, showOtherMonth: string) => {
  let allDays: any[] = [];

  for (let day: number = 1; day <= daysInMonth; day++) {
    if (day === currDate && currMonth == monthIndex && !showOtherMonth) {
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
        {}
      </div>
    );
  }
  return paddingBox;
};
