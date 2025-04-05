import { calculateTimeLeft } from "../../shared/util/shared.util";

type CountDownForCardsProps = {
  auctionDateTime: string;
};

const CountDownForCards = ({ auctionDateTime }: CountDownForCardsProps) => {
  // Calculate the remaining time
  const timeLeft = calculateTimeLeft(auctionDateTime);

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
