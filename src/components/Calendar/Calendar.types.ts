export type CalendarProps = {
  year: number;
  month: number;
  setYear: React.Dispatch<React.SetStateAction<number>>;
  setMonth: React.Dispatch<React.SetStateAction<number>>;
};

export type CalendarWeekProps = {
  year: number;
  month: number;
  date: number;
};
