import { useParams } from "react-router-dom";
import CountDownForDetails from "../../components/count-down/CountDownForDetails";
import { DataService } from "../../shared/services/data.service";
import { Product } from "../../shared/types/shared.types";
import NotFoundPage from "../not-found-page/NotFoundPage";

const ProductDetails = () => {
  const { product_id } = useParams();

  const product: Product | null = DataService.getProductDetailsById(
    parseInt(product_id!)
  );

  if (!product) {
    return <NotFoundPage />;
  }

  const vehicle = [
    { description: "Make", data: product.make },
    { description: "Model", data: product.model },
    { description: "Engine Size", data: product.engineSize },
    { description: "Fuel Type", data: product.fuel },
    { description: "Year", data: product.year },
    { description: "Mileage", data: product.mileage },
    {
      description: "Vehicle Type",
      data: product.details.specification.vehicleType,
    },
    { description: "Colour", data: product.details.specification.colour },
    {
      description: "Transmission",
      data: product.details.specification.transmission,
    },
    {
      description: "Number Of Doors",
      data: product.details.specification.numberOfDoors,
    },
    {
      description: "CO2 Emissions",
      data: product.details.specification.co2Emissions,
    },
    {
      description: "NOX Emission",
      data: product.details.specification.noxEmissions,
    },
    {
      description: "Number Of Keys",
      data: product.details.specification.numberOfKeys,
    },
  ];

  const vehicleOwnership = [
    { description: "Logbook", data: product.details.ownership.logBook },
    {
      description: "Number Of Owners",
      data: product.details.ownership.numberOfOwners,
    },
    {
      description: "Date Of Registration",
      data: product.details.ownership.dateOfRegistration,
    },
  ];

  const vehicleEquipment = product.details.equipment;

  return (
    <div className="text-firstColor">
      <button
        onClick={() => (window.location.href = "/")}
        className="font-semibold py-2 px-5 inline-flex items-center hover:text-thirdColor"
      >
        <svg
          className="fill-current w-4 h-4 mr-2"
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 10 20"
        >
          <path d="M10 3L4 10l6 7h2l-5-7 5-7h-2z" />
        </svg>
        <span>Back to results</span>
      </button>
      <div className="flex flex-col md:flex-row">
        <div className="w-full md:w-3/5 p-4 md:p-6">
          <img
            src={product.photo}
            alt="Car Image"
            className="w-full h-96 object-cover rounded-xl"
          />
        </div>
        <div className="w-full h-96 content-center md:w-2/5 p-4 md:p-6">
          <h1 className="my-6 text-4xl font-serif font-bold">
            {product.make} - {product.model}
          </h1>
          <h4 className="text-xl font-bold my-4">
            Get Ready! The Auction Starts In:
          </h4>
          <div className="my-4 bg-fifthColor text-white rounded-lg">
            <CountDownForDetails />
          </div>
          <h4 className="text-xl font-bold my-4">
            Date: {product.auctionDateTime}
          </h4>
          <h4 className="text-xl font-bold my-4">
            Starting Bid: €{product.startingBid}
          </h4>
        </div>
      </div>
      <div className="w-full md:p-6">
        <h2 className="mb-4 text-2xl font-serif font-bold">Vehicle Overview</h2>
        <h3 className="text-xl font-serif font-bold text-secondColor border-b-2 border-thirdColor pb-2 mb-4">
          Specification
        </h3>
        <div className="grid grid-cols-1 md:grid-cols-4 gap-3">
          {vehicle.map((vehicle, index) => (
            <div key={index} className="p-1 border-b border-black-300">
              <p className="font-medium">
                {vehicle.description} : {vehicle.data}
              </p>
            </div>
          ))}
        </div>
      </div>
      <div className="flex flex-col md:flex-row">
        <div className="w-full md:w-1/4 p-4 md:p-6">
          <h3 className="text-xl font-serif font-bold text-secondColor border-b-2 border-thirdColor pb-2 mb-4">
            Ownership Details
          </h3>
          <div className="grid grid-cols-1 gap-3">
            {vehicleOwnership.map((vehicle, index) => (
              <div key={index} className="p-1 border-b border-black-300">
                <p className="font-medium">
                  {vehicle.description} : {vehicle.data}
                </p>
              </div>
            ))}
          </div>
        </div>
        <div className="w-full md:w-3/4 p-4 md:p-6">
          <h3 className="text-xl font-serif font-bold text-secondColor border-b-2 border-thirdColor pb-2 mb-4">
            Equipment
          </h3>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-3">
            {vehicleEquipment.map((vehicle, index) => (
              <div key={index} className="p-1 border-b border-black-300">
                <p className="font-medium">{vehicle}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProductDetails;
