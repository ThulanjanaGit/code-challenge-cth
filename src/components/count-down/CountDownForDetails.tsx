import { useState, useEffect } from "react";

type CountDownForDetailsProps = {
  auctionDateTime: string;
};

const CountDownForDetails = ({ auctionDateTime }: CountDownForDetailsProps) => {
  const [timeLeft, setTimeLeft] = useState({
    days: 0,
    hours: 0,
    minutes: 0,
    seconds: 0,
  });

  useEffect(() => {
    const targetTime = new Date(auctionDateTime).getTime();

    const updateCountdown = () => {
      const now = Date.now();
      const diff = targetTime - now;

      setTimeLeft({
        days: Math.floor(diff / (1000 * 60 * 60 * 24)),
        hours: Math.floor((diff / (1000 * 60 * 60)) % 24),
        minutes: Math.floor((diff / (1000 * 60)) % 60),
        seconds: Math.floor((diff / 1000) % 60),
      });
    };

    const timer = setInterval(updateCountdown, 1000);
    updateCountdown();

    return () => clearInterval(timer);
  }, []);

  return (
    <div className="p-2 grid grid-flow-col gap-3 text-center capitalize">
      {Object.entries(timeLeft).map(([unit, value]) => (
        <div key={unit} className="flex flex-col">
          <span className="countdown font-mono">{value}</span>
          {unit}
        </div>
      ))}
    </div>
  );
};

export default CountDownForDetails;
