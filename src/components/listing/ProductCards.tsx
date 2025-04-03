import carPhoto from "../../assets/Car.png";
import CountDownForCards from "../count-down/CountDownForCards";

const ProductCards = () => {
  const cards = [{}, {}, {}, {}, {}, {}, {}, {}, {}, {}, {}].map(() => ({
    title: "Toyota - C-HR",
    description: "The Auction Starts In:",
    tags: ["diesel", "2022", "743 Miles", "RED", "Manual"],
  }));

  return (
    <div className="mx-auto mt-10 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
      {cards.map((card, index) => (
        <div
          key={index}
          className="bg-white shadow-lg rounded-xl overflow-hidden"
        >
          <a href="/details" target="_blank">
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
              <CountDownForCards />
            </div>
          </a>
          <button className="w-full bg-eighthColor hover:text-white hover:bg-sixthColor py-2 px-5 inline-flex items-center  justify-center">
            <svg
              className="fill-current w-4 h-4 mr-2"
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 24 24"
            >
              <path d="M12 21.35l-1.45-1.32C5.4 15.36 2 12.28 2 8.5 2 5.42 4.42 3 7.5 3c1.74 0 3.41.81 4.5 2.09C13.09 3.81 14.76 3 16.5 3 19.58 3 22 5.42 22 8.5c0 3.78-3.4 6.86-8.55 11.54L12 21.35z" />
            </svg>
            Favourite
          </button>
        </div>
      ))}
    </div>
  );
};

export default ProductCards;
