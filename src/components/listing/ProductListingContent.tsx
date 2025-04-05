import ProductSortAndCountBar from "./ProductSortAndCountBar";
import Pagination from "./Pagination";
import ProductCards from "./ProductCards";
import { Product } from "../../shared/types/shared.types";

type ProductListingContentProps = {
  products: Product[];
  totalItems: number;
  pageNumber: number;
  productsPerPage: number;
  onProductPerPageChange: (count: number) => void;
  onPageChange: (newPage: number) => void;
  onFavouriteBtnClick: (id: number) => void;
  onProductSorting: (sortBy: string, sortOrder: "asc" | "desc") => void;
};

const ProductListingContent = ({
  products,
  totalItems,
  pageNumber,
  productsPerPage,
  onProductPerPageChange,
  onPageChange,
  onFavouriteBtnClick,
  onProductSorting,
}: ProductListingContentProps) => {
  return (
    <div className="w-full overflow-y-auto font-serif md:w-4/5 p-4 md:p-6">
      <ProductSortAndCountBar
        productCount={totalItems}
        pageNumber={pageNumber}
        productsPerPage={productsPerPage}
        onProductPerPageChange={onProductPerPageChange}
        onProductSorting={onProductSorting}
      />
      <ProductCards
        products={products}
        onFavouriteBtnClick={onFavouriteBtnClick}
      />
      <Pagination
        totalItems={totalItems}
        pageNumber={pageNumber}
        productsPerPage={productsPerPage}
        onPageChange={onPageChange}
      />
    </div>
  );
};

export default ProductListingContent;
