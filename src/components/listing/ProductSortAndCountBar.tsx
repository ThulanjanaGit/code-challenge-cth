type ProductSortAndCountBarProps = {
  productCount: number;
  pageNumber: number;
  productsPerPage: number;
  onProductPerPageChange: (count: number) => void;
  onProductSorting: (sortBy: string, sortOrder: "asc" | "desc") => void;
};

const ProductSortAndCountBar = ({
  productCount,
  pageNumber,
  productsPerPage,
  onProductPerPageChange,
  onProductSorting,
}: ProductSortAndCountBarProps) => {
  const firstCardIndex = 1 + (pageNumber - 1) * productsPerPage;
  const lastCardIndex = Math.min(pageNumber * productsPerPage, productCount);

  return (
    <div className="flex flex-col md:flex-row">
      {/* Card counts */}
      <div className="w-full md:w-1/2 p-4 md:p-1">
        <p className="font-semibold">
          {firstCardIndex} to {lastCardIndex} of {productCount} results
        </p>
      </div>

      <div className="w-full md:w-1/2 p-4 md:p-1 flex gap-4 justify-end">
        {/* Cards per page selector */}
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

        {/* Sort cards */}
        <div className="flex items-center gap-2">
          <label className="font-semibold">Sort by</label>
          <select
            className="p-2 border rounded-lg shadow-md"
            onChange={(e) => {
              const [sortBy, sortOrder] = e.target.value.split(":");
              onProductSorting(sortBy, sortOrder as "asc" | "desc");
            }}
          >
            <option value="id:asc">Defalt</option>
            <option value="make:asc">Make: A to Z</option>
            <option value="make:desc">Make: Z to A</option>
            <option value="startingBid:asc">Starting Bid: low to high</option>
            <option value="startingBid:desc">Starting Bid: high to low</option>
            <option value="mileage:asc">Milage: low to high</option>
            <option value="mileage:desc">Milage: high to low</option>
            <option value="auctionDateTime:asc">
              Auction Date: newest to oldest
            </option>
            <option value="auctionDateTime:desc">
              Auction Date: oldest to newest
            </option>
          </select>
        </div>
      </div>
    </div>
  );
};

export default ProductSortAndCountBar;
