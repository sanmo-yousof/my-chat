export const formatMessageDate = (dateString) => {
  const now = new Date();
  const messageDate = new Date(dateString);

  const diffMs = now - messageDate;
  const diffHours = diffMs / (1000 * 60 * 60);
  const diffDays = diffMs / (1000 * 60 * 60 * 24);
  const diffWeeks = diffDays / 7;

  // If less than 24 hours → show 24-hour time
  if (diffHours < 24) {
    return messageDate.toLocaleTimeString([], {
      hour: "2-digit",
      minute: "2-digit",
      hour12: false, // 24 hour format
    });
  }

  // If less than 7 days → show days ago
  if (diffDays < 7) {
    return `${Math.floor(diffDays)}d`;
  }

  // If more than 7 days → show weeks
  return `${Math.floor(diffWeeks)}w`;
};