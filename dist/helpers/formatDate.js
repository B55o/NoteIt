export function formatDate(date) {
    const finalOptions = {
        month: "long",
        day: "numeric",
    };
    return date.toLocaleDateString("en-US", finalOptions);
}
