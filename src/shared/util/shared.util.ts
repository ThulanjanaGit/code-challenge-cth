export const calculateTimeLeft = (
  endDate: string
): {
  days: number;
  hours: number;
  minutes: number;
  seconds: number;
} => {
  const now = new Date().getTime();
  const targetTime = new Date(endDate).getTime();

  const difference = targetTime - now;

  // If the date is past return 0
  if (difference <= 0) {
    return { days: 0, hours: 0, minutes: 0, seconds: 0 };
  }

  return {
    days: Math.floor(difference / (1000 * 60 * 60 * 24)),
    hours: Math.floor((difference / (1000 * 60 * 60)) % 24),
    minutes: Math.floor((difference / (1000 * 60)) % 60),
    seconds: Math.floor((difference / 1000) % 60),
  };
};
