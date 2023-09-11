export function dateFormatter(
  isoDate: string,
  locale: string = 'en-US',
  options: Intl.DateTimeFormatOptions = {}
): string {
  const formattedDate = new Intl.DateTimeFormat(locale, options).format(
    new Date(isoDate)
  );

  return formattedDate;
}
