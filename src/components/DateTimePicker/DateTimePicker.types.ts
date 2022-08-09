export type DateTimePickerProps = {
  isAllDay: boolean;
  startDate: Date;
  endDate: Date;
  setIsInvalid: React.Dispatch<React.SetStateAction<boolean>>;
  setStartDate: React.Dispatch<React.SetStateAction<Date>>;
  setEndDate: React.Dispatch<React.SetStateAction<Date>>;
};
