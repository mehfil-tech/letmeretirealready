export default function monthYearToDateFormatter(year: number, month = 0) {
  const firstDayOfMonth = new Date(Date.UTC(year, month, 1));
  const formattedDateString = firstDayOfMonth
    .toISOString()
    .replace(".000Z", "+00:00");
  const formattedDate = new Date(formattedDateString).toISOString();
  return formattedDate;
}
