import { Product } from "../../shared/types/shared.types";
import CountDownForCards from "../count-down/CountDownForCards";

type ProductCardsProps = {
  products: Product[];
};

const ProductCards = ({ products }: ProductCardsProps) => {
  return (
    <div className="mx-auto mt-10 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
      {products.map((product) => (
        <div
          key={product.id}
          className="bg-white shadow-lg rounded-xl overflow-hidden flex flex-col h-full "
        >
          <a
            href={`/details/${product.id}`}
            target="_blank"
            className="flex-grow"
          >
            <img
              src={product.photo}
              alt="Car Image"
              className="w-full h-48 object-cover"
            />

            <div className="p-3">
              <h2 className="text-xl font-bold">
                {product.make} - {product.model}
              </h2>
              <div className="flex flex-wrap gap-2 mt-4">
                <span className="bg-firstColor text-white uppercase text-xs px-3 py-1 rounded-lg">
                  {product.fuel}
                </span>
                <span className="bg-firstColor text-white uppercase text-xs px-3 py-1 rounded-lg">
                  {product.year}
                </span>
                <span className="bg-firstColor text-white uppercase text-xs px-3 py-1 rounded-lg">
                  {product.mileage} Miles
                </span>
                <span className="bg-firstColor text-white uppercase text-xs px-3 py-1 rounded-lg">
                  {product.details.specification.transmission}
                </span>
                <span className="bg-firstColor text-white uppercase text-xs px-3 py-1 rounded-lg">
                  {product.details.specification.colour}
                </span>
              </div>

              <p className="mt-4">The Auction Starts In:</p>
              <CountDownForCards auctionDateTime={product.auctionDateTime} />
            </div>
          </a>
          <button
            className={`w-full py-2 px-5 inline-flex items-center justify-center ${
              product.favourite
                ? "text-white bg-sixthColor hover:text-black hover:bg-eighthColor"
                : "text-black bg-eighthColor hover:text-white hover:bg-sixthColor"
            }`}
          >
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
