import data from "../../assets/vehicles_dataset.json";
import {
  DataResponse,
  Product,
  SearchFilters,
  SelectedFilters,
} from "../types/shared.types";
import carPhoto1 from "../../assets/Car01.png";
import carPhoto2 from "../../assets/Car02.jpg";
import carPhoto3 from "../../assets/Car03.jpg";
import carPhoto4 from "../../assets/Car04.png";
import carPhoto5 from "../../assets/Car05.png";
import carPhoto6 from "../../assets/Car06.jpg";
import carPhoto7 from "../../assets/Car07.jpg";

const photos: string[] = [
  carPhoto1,
  carPhoto2,
  carPhoto3,
  carPhoto4,
  carPhoto5,
  carPhoto6,
  carPhoto7,
];

const products: Product[] = (data as object[]).map(
  (item: object, index: number) => {
    const id = index + 1;
    return { ...item, id, photo: photos[id % photos.length] };
  }
) as Product[];

const generateFilters = () => {
  const filters: SearchFilters = {
    make: [],
    model: new Map(),
    priceRange: { min: 0, max: Infinity },
  };
  filters.make = [...new Set(products.map((product: Product) => product.make))];

  filters.model = products.reduce((map, item) => {
    if (!map.has(item.make)) {
      map.set(item.make, []);
    }

    if (!map.get(item.make).includes(item.model)) {
      map.get(item.make).push(item.model);
    }
    return map;
  }, new Map());

  filters.priceRange = products.reduce(
    (acc, item) => {
      if (item.startingBid < acc.min) {
        acc.min = item.startingBid;
      }
      if (item.startingBid > acc.max) {
        acc.max = item.startingBid;
      }
      return acc;
    },
    { min: Infinity, max: -Infinity }
  );

  return filters;
};

const getProductDetailsById = (productId: number): Product | null => {
  const product = products.filter((product) => product.id == productId);
  if (product.length == 0) {
    return null;
  }

  return product[0];
};

const getData = (
  filters: SelectedFilters,
  sortBy: string,
  sortOrder: "asc" | "desc",
  itemsPerPage: number,
  pageNumber: number
): DataResponse => {
  const response: DataResponse = {
    products: [],
    filters: {
      make: [],
      model: new Map(),
      priceRange: {
        min: 0,
        max: 0,
      },
    },
    currentPage: pageNumber,
  };

  response.filters = generateFilters();

  response.products = products
    .filter(
      (product) => filters.make === "any" || product.make === filters.make
    )
    .filter(
      (product) => filters.model === "any" || product.model === filters.model
    )
    .filter(
      (product) => filters.minBid === 0 || product.startingBid >= filters.minBid
    )
    .filter(
      (product) =>
        filters.maxBid === Infinity || product.startingBid <= filters.maxBid
    );
  response.totalItems = response.products.length;

  return response;
};

export const DataService = {
  getData,
  getProductDetailsById,
};
