import carPhoto from "../../assets/Car.png";
import CountDown from "./CountDown";

const ProductListingCards = () => {
  const cards = [{}, {}, {}, {}, {}].map(() => ({
    title: "Toyota - C-HR",
    description: "Get Ready! The Auction Starts In:",
    tags: ["diesel", "2022", "743 Miles", "RED", "Manual"],
  }));

  return (
    <div className="mx-auto mt-10 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
      {cards.map((card, index) => (
        <div
          key={index}
          className="bg-white shadow-lg rounded-xl overflow-hidden"
        >
          <a href="/details">
            <img
              src={carPhoto}
              alt="Car Image"
              className="w-full h-48 object-cover"
            />

            <div className="p-3">
              <h2 className="text-xl font-bold">{card.title}</h2>
              <div className="flex flex-wrap gap-2 mt-4">
                {card.tags.map((tag, i) => (
                  <span
                    key={i}
                    className="bg-firstColor text-white uppercase text-xs px-3 py-1 rounded-lg"
                  >
                    {tag}
                  </span>
                ))}
              </div>

              <p className="mt-4">{card.description}</p>
              <CountDown />
            </div>
          </a>
          {/* Favourite */}
          <div>
            <button className="w-full px-4 py-2 bg-eighthColor hover:text-white hover:bg-sixthColor">
              Favourite
            </button>
          </div>
        </div>
      ))}
    </div>
  );
};

export default ProductListingCards;
