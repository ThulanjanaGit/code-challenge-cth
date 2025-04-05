import { useEffect, useState } from "react";
import ProductListingFilters from "../../components/filters/ProductListingFilters";
import ProductListingContent from "../../components/listing/ProductListingContent";
import { DataService } from "../../shared/services/data.service";
import {
  DataResponse,
  Product,
  SearchFilters,
  SelectedFilters,
} from "../../shared/types/shared.types";

const ProductListing = () => {
  const [filters, setFilters] = useState<SearchFilters>();
  const [products, setProducts] = useState<Product[]>([]);
  const [totalItems, setTotalItems] = useState<number>(0);
  const [pageNumber, setPageNumber] = useState<number>(1);
  const [productPerPage, setProductPerPage] = useState<number>(9);
  const [productSortBy, setProductSortBy] = useState<string>("id");
  const [productSortOrder, setProductSortOrder] = useState<"asc" | "desc">(
    "asc"
  );

  // Filters
  const [selectedFilters, setSelectedFilters] = useState<SelectedFilters>({
    make: "any",
    model: "any",
    minBid: 0,
    maxBid: Infinity,
    favourite: false,
  });

  const retrieveData = () => {
    DataService.getData(
      selectedFilters,
      productSortBy,
      productSortOrder,
      productPerPage,
      pageNumber
    ).then((response: DataResponse) => {
      setFilters(response.filters);
      setProducts(response.products);
      setTotalItems(response.totalItems);
    });
  };

  useEffect(() => {
    retrieveData();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [
    selectedFilters,
    pageNumber,
    productPerPage,
    productSortBy,
    productSortOrder,
  ]);

  const setFavouriteById = (id: number) => {
    DataService.setFavouriteById(id);
    retrieveData();
  };

  const onProductSorting = (sortBy: string, sortOrder: "asc" | "desc") => {
    setProductSortBy(sortBy);
    setProductSortOrder(sortOrder);
  };

  return (
    <div className="w-full font-serif">
      {/* Page description */}
      <h1 className="text-2xl font-bold mb-4">Cars for auction</h1>
      <p className="mb-6">
        Welcome to our Cars for Auction page, where you'll find a diverse
        selection of vehicles ready for bidding. Whether you're a car enthusiast
        searching for a classic gem, a collector seeking rare models, or someone
        in the market for a reliable everyday car, our auction listings have
        something for everyone. Each listing includes detailed information on
        the car’s make, model, year, condition, mileage, and unique features,
        along with high-quality images that showcase every angle of the vehicle.
      </p>
      <p className="mb-6">
        Our auction process is simple and transparent, giving you the chance to
        place bids on vehicles that suit your needs and budget. All vehicles are
        thoroughly inspected, and we provide comprehensive descriptions so you
        can make an informed decision before placing your bid. From vintage cars
        to modern day favorites, our auction platform is designed to connect
        buyers with the cars they desire.
      </p>
      <p className="mb-6">
        Take your time exploring the listings, and when you find the perfect
        car, place your bid confidently. Don't miss out on your opportunity to
        win—start bidding today and drive off with a great deal!
      </p>

      {/* Listing area */}
      <div className="flex flex flex-col text-firstColor md:flex-row">
        <ProductListingFilters
          filters={filters}
          selectedFilters={selectedFilters}
          onFilterUpdate={setSelectedFilters}
        />
        <ProductListingContent
          products={products}
          totalItems={totalItems}
          pageNumber={pageNumber}
          productsPerPage={productPerPage}
          onProductPerPageChange={setProductPerPage}
          onPageChange={setPageNumber}
          onFavouriteBtnClick={setFavouriteById}
          onProductSorting={onProductSorting}
        />
      </div>
    </div>
  );
};

export default ProductListing;
