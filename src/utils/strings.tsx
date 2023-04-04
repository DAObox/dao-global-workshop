export const shortenHash = (
  hash: string,
  charsStart = 4,
  charsEnd?: number
): string => {
  return `${hash.substring(0, charsStart + 2)}...${hash.substring(
    hash.length - (charsEnd || charsStart)
  )}`;
};

export function classNames(...classes: string[]) {
  return classes.filter(Boolean).join(" ");
}

export const formatDateLabel = (date: string) => {
  const d = new Date(date);
  return d.toLocaleString("en-US", {
    month: "short",
    day: "numeric",
    hour: "2-digit",
    minute: "2-digit",
    hour12: false,
  });
};
