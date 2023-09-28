export interface IYearProps {
  monthlyCalender: boolean;
}

export interface IMonthProps {
  date: Date;
  monthIndex: number;
  showOtherMonth: string;
}

export interface IDayProps {
  year: number;
  month: number;
  monthIndex: number;
  showOtherMonth: string;
}
