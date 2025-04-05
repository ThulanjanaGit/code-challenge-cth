import { useState, useEffect } from "react";
import { calculateTimeLeft } from "../../shared/util/shared.util";

type CountDownForDetailsProps = {
  auctionDateTime?: string;
};

const CountDownForDetails = ({ auctionDateTime }: CountDownForDetailsProps) => {
  const [timeLeft, setTimeLeft] = useState(
    calculateTimeLeft(auctionDateTime ?? "")
  );

  useEffect(() => {
    const updateCountdown = () => {
      const timeLeft = calculateTimeLeft(auctionDateTime ?? "");
      setTimeLeft(timeLeft);
    };

    // Update timeLeft variable every second
    const timer = setInterval(updateCountdown, 1000);

    return () => clearInterval(timer);
  }, [auctionDateTime]);

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
