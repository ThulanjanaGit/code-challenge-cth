import ProductSortAndCountBar from "./ProductSortAndCountBar";
import Pagination from "./Pagination";
import ProductCards from "./ProductCards";

const ProductListingContent = () => {
  return (
    <div className="w-full overflow-y-auto font-serif md:w-4/5 p-4 md:p-6">
      <ProductSortAndCountBar />
      <ProductCards />
      <Pagination />
    </div>
  );
};

export default ProductListingContent;
