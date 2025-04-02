import carPhoto from "../../assets/Car.png";
import CountDown from "../../components/listing/CountDown";

const ProductDetails = () => {
  const vehicle = [
    { description: "Make", data: "Toyota" },
    { description: "Model", data: "C-HR" },
    { description: "Engine Size", data: "1.8L" },
    { description: "Fuel Type", data: "diesel" },
    { description: "Year", data: "2022" },
    { description: "Mileage", data: "743" },
    { description: "Vehicle Type", data: "Car" },
    { description: "Colour", data: "RED" },
    { description: "Transmission", data: "Manual" },
    { description: "Number Of Doors", data: "3" },
    { description: "CO2 Emissions", data: "139 g/km" },
    { description: "NOX Emission", data: "230" },
    { description: "Number Of Keys", data: "2" },
  ];

  const vehicleOwnership = [
    { description: "Logbook", data: "Present" },
    { description: "Number Of Owners", data: "8" },
    { description: "Date Of Registration", data: "2015/03/31" },
  ];

  const vehicleEquipment = [
    "Air Conditioning",
    "Tyre Inflation Kit",
    "Photocopy of V5 Present",
    "Navigation HDD",
    "17 Alloy Wheels",
    "Engine Mods/Upgrades",
    "Modifd/Added Body Parts",
  ];

  return (
    <div className="text-firstColor">
      <div className="flex flex-col md:flex-row">
        <div className="w-full md:w-3/5 p-4 md:p-6">
          <img
            src={carPhoto}
            alt="Car Image"
            className="w-full h-96 object-cover rounded-xl"
          />
        </div>
        <div className="w-full h-96 content-center md:w-2/5 p-4 md:p-6">
          <h1 className="my-6 text-4xl font-serif font-bold">Toyota - C-HR</h1>
          <h4 className="text-xl font-bold my-4">
            Get Ready! The Auction Starts In:
          </h4>
          <div className="my-4 bg-fifthColor text-white rounded-lg">
            <CountDown />
          </div>
          <h4 className="text-xl font-bold my-4">Date: 2024/04/15 09:00:00</h4>
          <h4 className="text-xl font-bold my-4">Starting Bid: €17000</h4>
        </div>
      </div>
      <div className="w-full p-4 md:p-6">
        <h2 className="mb-4 text-2xl font-serif font-bold">Vehicle Overview</h2>
        <h3 className="text-xl font-serif font-bold text-secondColor border-b-2 border-thirdColor my-4">
          Specification
        </h3>
        <div className="grid grid-cols-1 md:grid-cols-4 gap-3">
          {vehicle.map((vehicle, index) => (
            <div key={index} className="p-4 shadow-lg rounded-lg">
              <p className="font-medium">
                {vehicle.description} : {vehicle.data}
              </p>
            </div>
          ))}
        </div>
      </div>
      <div className="flex flex-col md:flex-row">
        <div className="w-full md:w-2/5 p-4 md:p-6">
          <h3 className="text-xl font-serif font-bold text-secondColor border-b-2 border-thirdColor mb-4">
            Ownership Details
          </h3>
          <div className="grid grid-cols-1 gap-3">
            {vehicleOwnership.map((vehicle, index) => (
              <div key={index} className="p-4 shadow-lg rounded-lg">
                <p className="font-medium">
                  {vehicle.description} : {vehicle.data}
                </p>
              </div>
            ))}
          </div>
        </div>
        <div className="w-full md:w-3/5 p-4 md:p-6">
          <h3 className="text-xl font-serif font-bold text-secondColor border-b-2 border-thirdColor mb-4">
            Equipment
          </h3>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-3">
            {vehicleEquipment.map((vehicle, index) => (
              <div key={index} className="p-4 shadow-lg rounded-lg">
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
