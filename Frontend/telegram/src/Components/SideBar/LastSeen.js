export function LastSeen({ lastOnline }) {
    const timeAgo = getTimeAgo(lastOnline);
    return <span className="text-xs"> {timeAgo}</span>;
  }
  
  export function getTimeAgo(lastOnline) {
    const now = new Date();
    const diff = (now - new Date(lastOnline)) / 1000; // получение разницы в секундах
    if (diff < 10) {
      return "online";
    } else if (diff < 60) {
      return "last seen just now";
    } else if (diff < 60 * 60) { // 1 час в секундах
      const minutes = Math.floor(diff / 60);
      return `last seen ${minutes} min ago`;
    } else if (diff < 60 * 60 * 24) { // 1 день в секундах
      const hours = Math.floor(diff / 60 / 60);
      return `last seen ${hours} ${hours === 1 ? 'hour' : 'hours'} ago`;
    } else if (diff < 60 * 60 * 24 * 7) { // 1 неделя в секундах
      const days = Math.floor(diff / 60 / 60 / 24);
      return `last seen ${days} ${days === 1 ? 'day' : 'days'} ago`;
    } else if (diff < 60 * 60 * 24 * 30) { // 1 месяц в секундах (приблизительно)
      const weeks = Math.floor(diff / 60 / 60 / 24 / 7);
      return `last seen ${weeks} ${weeks === 1 ? 'week' : 'weeks'} ago`;
    } else {
      const months = Math.floor(diff / 60 / 60 / 24 / 30);
      return `last seen ${months} ${months === 1 ? 'month' : 'months'} ago`;
    }
  }
  