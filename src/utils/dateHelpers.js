export const calculateTimeLeft = (targetDay, targetMonth) => {
  const now = new Date();
  const currentYear = now.getFullYear();
  let targetDate = new Date(currentYear, targetMonth - 1, targetDay);

  // Jika tanggal sudah lewat tahun ini, targetkan tahun depan
  if (now > targetDate) {
    targetDate.setFullYear(currentYear + 1);
  }

  const difference = targetDate - now;
  
  // Hitung fase urgensi
  const daysLeft = Math.floor(difference / (1000 * 60 * 60 * 24));
  let phase = 'CALM';
  if (daysLeft === 0) phase = 'IMMINENT';
  else if (daysLeft < 7) phase = 'CRITICAL';
  else if (daysLeft < 30) phase = 'INTENSE';

  return {
    total: difference,
    days: daysLeft,
    hours: Math.floor((difference / (1000 * 60 * 60)) % 24),
    minutes: Math.floor((difference / 1000 / 60) % 60),
    seconds: Math.floor((difference / 1000) % 60),
    phase: phase
  };
};