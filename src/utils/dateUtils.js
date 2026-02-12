// Date utility functions
export const calculateTimeLeft = (day, month) => {
  const now = new Date();
  let target = new Date(now.getFullYear(), parseInt(month) - 1, parseInt(day));
  if (now > target) target.setFullYear(now.getFullYear() + 1);
  
  const diff = target - now;
  
  return {
    days: Math.floor(diff / (1000 * 60 * 60 * 24)),
    hours: Math.floor((diff / (1000 * 60 * 60)) % 24),
    minutes: Math.floor((diff / 1000 / 60) % 60),
    seconds: Math.floor((diff / 1000) % 60),
    totalDays: Math.floor(diff / (1000 * 60 * 60 * 24)),
  };
};

export const isToday = (day, month) => {
  const now = new Date();
  return now.getDate() === parseInt(day) && now.getMonth() === parseInt(month) - 1;
};

export const getPhaseMessage = (days) => {
  if (days >= 200) return { phase: 'calm', emoji: '', message: 'Perjalanan masih panjang...' };
  if (days >= 100) return { phase: 'alert', emoji: '', message: 'Target sudah dekat!' };
  if (days >= 50) return { phase: 'intense', emoji: '', message: 'Persiapkan diri!' };
  if (days > 0) return { phase: 'critical', emoji: '', message: 'Tinggal hitungan hari!' };
  return { phase: 'finished', emoji: '', message: 'Waktunya tiba!' };
};

export const formatDate = (day, month) => {
  const months = ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec'];
  return `${day} ${months[parseInt(month) - 1]}`;
};

export const getMonthName = (month) => {
  const months = ['Januari', 'Februari', 'Maret', 'April', 'Mei', 'Juni', 'Juli', 'Agustus', 'September', 'Oktober', 'November', 'Desember'];
  return months[parseInt(month) - 1];
};
