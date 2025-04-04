import ProductSortAndCountBar from "./ProductSortAndCountBar";
import Pagination from "./Pagination";
import ProductCards from "./ProductCards";
import { Product } from "../../shared/types/shared.types";

type ProductListingContentProps = {
  products: Product[];
};

const ProductListingContent = ({ products }: ProductListingContentProps) => {
  return (
    <div className="w-full overflow-y-auto font-serif md:w-4/5 p-4 md:p-6">
      <ProductSortAndCountBar />
      <ProductCards products={products} />
      <Pagination />
    </div>
  );
};

export default ProductListingContent;
