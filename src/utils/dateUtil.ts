import { format } from 'date-fns';
const week = ['SUN', 'MON', 'TUE', 'WED', 'THU', 'FRI', 'SAT'];

export const getYear = () => new Date().getFullYear();
export const getMonth = () => new Date().getMonth() + 1;
export const getMonthStr = () => format(new Date(), 'MMMM').toUpperCase();
export const getDayStr = (day: number) => week[day];
