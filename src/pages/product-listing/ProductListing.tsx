import ProductListingFilters from "../../components/filters/ProductListingFilters";
import ProductListingContent from "../../components/listing/ProductListningContent";

const ProductListing = () => {
  return (
    <div className="flex flex-col text-firstColor md:flex-row">
      <ProductListingFilters />
      <ProductListingContent />
    </div>
  );
};

export default ProductListing;
