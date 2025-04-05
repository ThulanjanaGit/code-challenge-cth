import {
  SearchFilters,
  SelectedFilters,
} from "../../shared/types/shared.types";

type ProductListingFiltersProps = {
  filters?: SearchFilters;
  selectedFilters: SelectedFilters;
  onFilterUpdate: (filters: SelectedFilters) => void;
};

// Calculate price filter details
const generateMultiples = (start: number, end: number) => {
  const result = [];
  for (let i = start; i <= end; i++) {
    if (i % 500 === 0) {
      result.push(i);
    }
  }
  return result;
};

const ProductListingFilters = ({
  filters,
  selectedFilters,
  onFilterUpdate,
}: ProductListingFiltersProps) => {
  const bidRange: number[] = filters
    ? generateMultiples(filters.priceRange.min, filters.priceRange.max)
    : [];

  return (
    <div className="w-full md:w-1/5 bg-eighthColor p-4 md:p-6 rounded-lg shadow-md h-full">
      <h2 className="text-xl font-mono font-bold mb-4">Filters</h2>

      {/* Make filter */}
      <div className="mb-4">
        <label className="block font-semibold">Make</label>
        <select
          className="mt-1 p-2 w-full border rounded-lg shadow-md"
          onChange={(e) => {
            const newFilters: SelectedFilters = {
              ...selectedFilters,
              make: e.target.value,
              model: "any",
            };
            onFilterUpdate(newFilters);
          }}
        >
          <option value="any">Any</option>
          {filters?.make.map((make) => (
            <option key={make} value={make}>
              {make}
            </option>
          ))}
        </select>
      </div>

      {/* Model filter */}
      <div className="mb-4">
        <label className="block font-semibold">Model</label>
        <select
          className="mt-1 p-2 w-full border rounded-lg shadow-md"
          onChange={(e) => {
            const newFilters: SelectedFilters = {
              ...selectedFilters,
              model: e.target.value,
            };
            onFilterUpdate(newFilters);
          }}
        >
          <option value="any">Any</option>
          {selectedFilters.make != "any" &&
            filters!.model!.get(selectedFilters.make)!.map((model) => (
              <option key={model} value={model}>
                {model}
              </option>
            ))}
        </select>
      </div>

      {/* Min price filter */}
      <div className="mb-4">
        <label className="block font-semibold">Min Bid</label>
        <select
          className="mt-1 p-2 w-full border rounded-lg shadow-md"
          onChange={(e) => {
            const newFilters: SelectedFilters = {
              ...selectedFilters,
              minBid: parseInt(e.target.value),
            };
            onFilterUpdate(newFilters);
          }}
        >
          <option value="0">Any</option>
          {bidRange.map((bid) => (
            <option key={bid} value={bid}>
              {bid}
            </option>
          ))}
        </select>
      </div>

      {/* Max price filter */}
      <div className="mb-4">
        <label className="block font-semibold">Max Bid</label>
        <select
          className="mt-1 p-2 w-full border rounded-lg shadow-md"
          onChange={(e) => {
            const newFilters: SelectedFilters = {
              ...selectedFilters,
              maxBid: parseInt(e.target.value),
            };
            onFilterUpdate(newFilters);
          }}
        >
          <option value="Infinity">Any</option>
          {bidRange.map((bid) => (
            <option key={bid} value={bid}>
              {bid}
            </option>
          ))}
        </select>
      </div>

      {/* Favourite filter */}
      <div className="mb-4">
        <label className="block font-semibold">Favourite</label>
        <select
          className="mt-1 p-2 w-full border rounded-lg shadow-md"
          onChange={(e) => {
            const newFilters: SelectedFilters = {
              ...selectedFilters,
              favourite: e.target.value === "true",
            };
            onFilterUpdate(newFilters);
          }}
        >
          <option value="any">Any</option>
          <option value="true">Favourites</option>
        </select>
      </div>
    </div>
  );
};

export default ProductListingFilters;
