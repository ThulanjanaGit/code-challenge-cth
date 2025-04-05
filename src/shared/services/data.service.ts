import axios from "axios";
import {
  DataResponse,
  Product,
  SearchFilters,
  SelectedFilters,
} from "../types/shared.types";

// Load photos based on the index
const photos: string[] = [
  "http://pramod-20.infinityfreeapp.com/Car01.png",
  "http://pramod-20.infinityfreeapp.com/Car02.jpg",
  "http://pramod-20.infinityfreeapp.com/Car03.jpg",
  "http://pramod-20.infinityfreeapp.com/Car04.png",
  "http://pramod-20.infinityfreeapp.com/Car05.png",
  "http://pramod-20.infinityfreeapp.com/Car06.jpg",
  "http://pramod-20.infinityfreeapp.com/Car07.jpg",
];

let products: Product[] = [];

const getProducts = async () => {
  const response = await axios.get(
    "https://raw.githubusercontent.com/ThulanjanaGit/code-challenge-cth/refs/heads/main/src/assets/vehicles_dataset.json"
  );
  products = (response.data as object[]).map((item: object, index: number) => {
    const id = index + 1;
    // Add id and photo to products
    return { ...item, id, photo: photos[id % photos.length] };
  }) as Product[];
};

// Filer functions for the listing page
const generateFilters = () => {
  const filters: SearchFilters = {
    make: [],
    model: new Map(),
    priceRange: { min: 0, max: Infinity },
  };

  // Make filter
  filters.make = [...new Set(products.map((product: Product) => product.make))];

  // Model filter
  filters.model = products.reduce((map, item) => {
    if (!map.has(item.make)) {
      map.set(item.make, []);
    }

    if (!map.get(item.make).includes(item.model)) {
      map.get(item.make).push(item.model);
    }
    return map;
  }, new Map());

  // Price filter
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

const getProductDetailsById = async (
  productId: number
): Promise<Product | null> => {
  if (products.length === 0) {
    await getProducts();
  }

  const product = products.filter((product) => product.id == productId);
  if (product.length == 0) {
    return null;
  }

  return product[0];
};

const getPaginatedProducts = (
  products: Product[],
  pageNumber: number,
  itemsPerPage: number
) => {
  const startIndex = (pageNumber - 1) * itemsPerPage;
  const endIndex = startIndex + itemsPerPage;
  return products.slice(startIndex, endIndex);
};

const sortProducts = (
  products: Product[],
  sortBy: string,
  sortOrder: "asc" | "desc"
): Product[] => {
  return products.sort((a, b) => {
    // Get the value of the sortBy field for each product
    const fieldA = a[sortBy as keyof Product];
    const fieldB = b[sortBy as keyof Product];

    // Handle auctionDateTime
    if (sortBy === "auctionDateTime") {
      const dateA = new Date(fieldA as string);
      const dateB = new Date(fieldB as string);

      if (sortOrder === "asc") {
        return dateA.getTime() - dateB.getTime();
      } else {
        return dateB.getTime() - dateA.getTime();
      }
    }

    // If the field is a string
    if (typeof fieldA === "string" && typeof fieldB === "string") {
      if (sortOrder === "asc") {
        return fieldA.localeCompare(fieldB);
      } else {
        return fieldB.localeCompare(fieldA);
      }
    }

    // If the field is a number
    if (typeof fieldA === "number" && typeof fieldB === "number") {
      if (sortOrder === "asc") {
        return fieldA - fieldB;
      } else {
        return fieldB - fieldA;
      }
    }

    // Handle other cases to default comparison
    if (sortOrder === "asc") {
      return fieldA > fieldB ? 1 : fieldA < fieldB ? -1 : 0;
    } else {
      return fieldA < fieldB ? 1 : fieldA > fieldB ? -1 : 0;
    }
  });
};

const getData = async (
  filters: SelectedFilters,
  sortBy: string,
  sortOrder: "asc" | "desc",
  itemsPerPage: number,
  pageNumber: number
): Promise<DataResponse> => {
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
    totalItems: 0,
    currentPage: pageNumber,
  };

  if (products.length === 0) {
    await getProducts();
  }

  response.filters = generateFilters();

  const allProducts = products
    // Filter by make
    .filter(
      (product) => filters.make === "any" || product.make === filters.make
    )
    // Filter by model
    .filter(
      (product) => filters.model === "any" || product.model === filters.model
    )
    // Filter by minimum bid price
    .filter(
      (product) => filters.minBid === 0 || product.startingBid >= filters.minBid
    )
    // Filter by maximum bid price
    .filter(
      (product) =>
        filters.maxBid === Infinity || product.startingBid <= filters.maxBid
    )
    // Filter by favourite
    .filter(
      (product) => filters.favourite === false || product.favourite === true
    );

  const sortedProducts = sortProducts(allProducts, sortBy, sortOrder);

  response.products = getPaginatedProducts(
    sortedProducts,
    pageNumber,
    itemsPerPage
  );
  response.totalItems = sortedProducts.length;

  return response;
};

const setFavouriteById = async (id: number) => {
  if (products.length === 0) {
    await getProducts();
  }

  if (id > products.length) {
    return;
  }

  // Change the favourite to the opposite
  products[id - 1].favourite = !products[id - 1].favourite;
};

// Make the following functions accesible from outside
export const DataService = {
  getData,
  getProductDetailsById,
  setFavouriteById,
};
