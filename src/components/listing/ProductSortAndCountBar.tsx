type ProductSortAndCountBarProps = {
  productCount: number;
  pageNumber: number;
  productsPerPage: number;
  onProductPerPageChange: (count: number) => void;
};

const ProductSortAndCountBar = ({
  productCount,
  pageNumber,
  productsPerPage,
  onProductPerPageChange,
}: ProductSortAndCountBarProps) => {
  const firstCardIndex = 1 + (pageNumber - 1) * productsPerPage;
  const lastCardIndex = Math.min(pageNumber * productsPerPage, productCount);

  return (
    <div className="flex flex-col md:flex-row">
      <div className="w-full md:w-1/2 p-4 md:p-1">
        <p className="font-semibold">
          {firstCardIndex} to {lastCardIndex} of {productCount} results
        </p>
      </div>
      <div className="w-full md:w-1/2 p-4 md:p-1">
        <div className="flex gap-4 justify-end">
          <div className="flex items-center gap-2">
            <label className="font-semibold">Items per page</label>
            <select
              className="p-2 border rounded-lg shadow-md"
              onChange={(e) => {
                onProductPerPageChange(parseInt(e.target.value));
              }}
            >
              <option value="9">9</option>
              <option value="18">18</option>
              <option value="30">30</option>
              <option value="60">60</option>
            </select>
          </div>
          <div className="flex items-center gap-2">
            <label className="font-semibold">Sort by</label>
            <select className="p-2 border rounded-lg shadow-md">
              <option value="">Make</option>
              <option value="Filter01">Starting Bid</option>
              <option value="Filter02">Milage</option>
              <option value="Filter02">Auction Date</option>
            </select>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProductSortAndCountBar;
