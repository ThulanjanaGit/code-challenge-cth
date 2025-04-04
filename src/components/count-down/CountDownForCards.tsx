import { useState, useEffect } from "react";

type CountDownForCardsProps = {
  auctionDateTime: string;
};

const CountDownForCards = ({ auctionDateTime }: CountDownForCardsProps) => {
  const calculateTimeLeft = () => {
    const now = new Date().getTime();
    const targetTime = new Date(auctionDateTime).getTime();

    const difference = targetTime - now;
    if (difference <= 0) {
      return { days: 0, hours: 0, minutes: 0 };
    }

    return {
      days: Math.floor(difference / (1000 * 60 * 60 * 24)),
      hours: Math.floor((difference / (1000 * 60 * 60)) % 24),
      minutes: Math.floor((difference / (1000 * 60)) % 60),
    };
  };

  const [timeLeft, setTimeLeft] = useState(calculateTimeLeft);

  useEffect(() => {
    setTimeLeft(calculateTimeLeft());
  }, []);

  return (
    <div className="grid grid-flow-col gap-5 text-center auto-cols-max justify-center capitalize">
      <div className="flex flex-col">
        <span className="countdown font-mono text-2xl">
          <span
            style={{ "--value": timeLeft.days } as React.CSSProperties}
            aria-live="polite"
          >
            {timeLeft.days}
          </span>
        </span>
        days
      </div>
      <div className="flex flex-col">
        <span className="countdown font-mono text-2xl">
          <span
            style={{ "--value": timeLeft.hours } as React.CSSProperties}
            aria-live="polite"
          >
            {timeLeft.hours}
          </span>
        </span>
        hours
      </div>
      <div className="flex flex-col">
        <span className="countdown font-mono text-2xl">
          <span
            style={{ "--value": timeLeft.minutes } as React.CSSProperties}
            aria-live="polite"
          >
            {timeLeft.minutes}
          </span>
        </span>
        min
      </div>
    </div>
  );
};

export default CountDownForCards;
