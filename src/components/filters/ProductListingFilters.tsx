const ProductListingFilters = () => {
  return (
    <div className="w-full md:w-1/5 bg-eighthColor p-4 md:p-6 rounded-lg shadow-md h-full">
      <h2 className="text-xl font-mono font-bold mb-4">Filters</h2>

      {/* Filter 01 */}
      <div className="mb-4">
        <label className="block font-semibold">Filter 01</label>
        <select
          className="mt-1 p-2 w-full border rounded-lg shadow-md"
          onChange={() => {}}
        >
          <option value="">All Filters</option>
          <option value="Filter01">Filter01</option>
          <option value="Filter02">Filter02</option>
        </select>
      </div>

      {/* Filters 02 */}
      <div className="mb-4">
        <label className="block font-semibold">Filter 02</label>
        <select
          className="mt-1 p-2 w-full border rounded-lg shadow-md"
          onChange={() => {}}
        >
          <option value="">All Filters</option>
          <option value="Filter01">Filter01</option>
          <option value="Filter02">Filter02</option>
        </select>
      </div>

      {/* Filters 03 */}
      <div className="mb-4">
        <label className="block font-semibold">Filter 03</label>
        <select
          className="mt-1 p-2 w-full border rounded-lg shadow-md"
          onChange={() => {}}
        >
          <option value="">All Filters</option>
          <option value="Filter01">Filter01</option>
          <option value="Filter02">Filter02</option>
        </select>
      </div>

      {/* Filters 04 */}
      <div className="mb-4">
        <label className="block font-semibold">Filter 04</label>
        <select
          className="mt-1 p-2 w-full border rounded-lg shadow-md"
          onChange={() => {}}
        >
          <option value="">All Filters</option>
          <option value="Filter01">Filter01</option>
          <option value="Filter02">Filter02</option>
        </select>
      </div>
      {/* Filters 05 */}
      <div className="mb-4">
        <label className="block font-semibold">Filter 05</label>
        <select
          className="mt-1 p-2 w-full border rounded-lg shadow-md"
          onChange={() => {}}
        >
          <option value="">All Filters</option>
          <option value="Filter01">Filter01</option>
          <option value="Filter02">Filter02</option>
        </select>
      </div>
    </div>
  );
};

export default ProductListingFilters;
