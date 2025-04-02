import ProductListingCards from "./ProductListingCards";

const ProductListingContent = () => {
  return (
    <div className="w-full font-serif md:w-4/5 p-4 md:p-6">
      <h1 className="text-2xl font-bold mb-4">Cars for auction</h1>
      <p className="mb-4">
        Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod
        tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim
        veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea
        commodo consequat. Duis aute irure dolor in reprehenderit in voluptate
        velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint
        occaecat cupidatat non proident, sunt in culpa qui officia deserunt
        mollit anim id est laborum.
      </p>
      <ProductListingCards />
    </div>
  );
};

export default ProductListingContent;
