import { format } from 'date-fns';

export const getYear = () => new Date().getFullYear();
export const getMonth = () => new Date().getMonth() + 1;
export const getMonthStr = () => format(new Date(), 'MMMM').toUpperCase();
