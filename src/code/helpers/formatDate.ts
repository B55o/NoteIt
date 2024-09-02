export function formatDate(date: Date) {
    const finalOptions: Intl.DateTimeFormatOptions = {
      month: "long",
      day: "numeric",
    };
    return date.toLocaleDateString("en-US", finalOptions);
  }