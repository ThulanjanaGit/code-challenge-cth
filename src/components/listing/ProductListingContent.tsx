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
};

const ProductListingContent = ({
  products,
  totalItems,
  pageNumber,
  productsPerPage,
  onProductPerPageChange,
  onPageChange,
}: ProductListingContentProps) => {
  return (
    <div className="w-full overflow-y-auto font-serif md:w-4/5 p-4 md:p-6">
      <ProductSortAndCountBar
        productCount={totalItems}
        pageNumber={pageNumber}
        productsPerPage={productsPerPage}
        onProductPerPageChange={onProductPerPageChange}
      />
      <ProductCards products={products} />
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
