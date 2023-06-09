export function generateDateTimeToMysql(date: Date): string {
  const offsetCorrectedDate = new Date(
    date.getTime() - date.getTimezoneOffset() * 60 * 1000
  );
  return offsetCorrectedDate.toISOString().slice(0, 19).replace("T", " ");
}

export function getDateTimeBackFromMysql(date: Date): string {
  return new Date(date).toISOString().slice(0, 19).replace("T", " ");
}
