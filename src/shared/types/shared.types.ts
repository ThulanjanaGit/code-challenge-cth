export type DataResponse = {
  products: Product[];
  filters: SearchFilters;
  totalItems?: number;
  currentPage?: number;
};

export type SelectedFilters = {
  make: string;
  model: string;
  minBid: number;
  maxBid: number;
  favourite: boolean;
};

// Product
export type Product = {
  id: number;
  make: string;
  model: string;
  engineSize: string;
  fuel: string;
  year: number;
  mileage: number;
  auctionDateTime: string;
  startingBid: number;
  favourite: boolean;
  details: ProductDetails;
  photo: string;
};

export type ProductDetails = {
  specification: ProductDetailsSpecification;
  ownership: ProductDetailsOwnership;
  equipment: string[];
};

export type ProductDetailsSpecification = {
  vehicleType: string;
  colour: string;
  fuel: string;
  transmission: string;
  numberOfDoors: number;
  co2Emissions: string;
  noxEmissions: number;
  numberOfKeys: number;
};

export type ProductDetailsOwnership = {
  logBook: string;
  numberOfOwners: number;
  dateOfRegistration: string;
};

// Search Filters
export type SearchFilters = {
  make: string[];
  model: Map<string, string[]>;
  priceRange: ProductPriceRange;
  favourite?: boolean[];
};

type ProductPriceRange = {
  max: number;
  min: number;
};
