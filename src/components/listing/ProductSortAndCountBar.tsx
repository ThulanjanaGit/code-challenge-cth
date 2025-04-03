const ProductSortAndCountBar = () => {
  return (
    <div className="flex flex-col md:flex-row">
      <div className="w-full md:w-1/2 p-4 md:p-1">
        <p className="font-semibold">1 to 9 of 500 results</p>
      </div>
      <div className="w-full md:w-1/2 p-4 md:p-1">
        <div className="flex gap-4 justify-end">
          <div className="flex items-center gap-2">
            <label className="font-semibold">Items per page</label>
            <select className="p-2 border rounded-lg shadow-md">
              <option value="">9</option>
              <option value="Filter01">18</option>
              <option value="Filter02">30</option>
              <option value="Filter02">60</option>
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
