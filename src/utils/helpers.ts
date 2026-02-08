export const cls = (...args: Array<string | false | null | undefined>) => {
  return args.filter(Boolean).join(" ");
};

export const formatPeriod = (start?: string, end?: string) => {
  if (!start) return "";
  return end ? `${start} – ${end}` : `${start} – Actualidad`;
};
