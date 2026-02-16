const MONTHS = [
  'January',
  'February',
  'March',
  'April',
  'May',
  'June',
  'July',
  'August',
  'September',
  'October',
  'November',
  'December'
];

export function formatPublishDate(ymd: string): string {
  const match = /^(\d{4})-(\d{2})-(\d{2})$/.exec(ymd);
  if (!match) return ymd;

  const year = Number(match[1]);
  const monthIndex = Number(match[2]) - 1;
  const day = Number(match[3]);

  if (monthIndex < 0 || monthIndex > 11 || day < 1 || day > 31) return ymd;

  return `${MONTHS[monthIndex]} ${day}, ${year}`;
}
