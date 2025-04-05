type PaginationProps = {
  totalItems: number;
  pageNumber: number;
  productsPerPage: number;
  onPageChange: (newPage: number) => void;
};

const Pagination = ({
  totalItems,
  pageNumber,
  productsPerPage,
  onPageChange,
}: PaginationProps) => {
  const totalPages = Math.ceil(totalItems / productsPerPage);

  // Genarate page numbers
  const generatePages = () => {
    const pages: (number | string)[] = [];

    // Add buffer to make it mobile friendly
    const buffer = window.innerWidth < 640 ? 1 : 2;

    pages.push(1);
    if (pageNumber - buffer > 2) pages.push("...");
    for (
      let i = Math.max(2, pageNumber - buffer);
      i <= Math.min(totalPages - 1, pageNumber + buffer);
      i++
    ) {
      pages.push(i);
    }
    if (pageNumber + buffer < totalPages - 1) pages.push("...");
    if (totalPages > 1) pages.push(totalPages);

    return pages;
  };

  return (
    <div className="flex flex-wrap justify-center items-center space-x-2 mt-5">
      {/* Previous Button */}
      <button
        onClick={() => onPageChange(pageNumber - 1)}
        disabled={pageNumber === 1}
        className={`px-3 py-2 border rounded ${
          pageNumber === 1
            ? "opacity-50 cursor-not-allowed"
            : "hover:bg-gray-200"
        }`}
      >
        Prev
      </button>

      {/* Page Numbers */}
      {generatePages().map((page, index) =>
        typeof page === "number" ? (
          <button
            key={index}
            onClick={() => onPageChange(page)}
            className={`px-4 py-2 border rounded ${
              page === pageNumber
                ? "font-bold bg-eighthColor text-white"
                : "hover:bg-gray-300"
            }`}
          >
            {page}
          </button>
        ) : (
          <span key={index} className="px-3 py-2 select-none">
            {page}
          </span>
        )
      )}

      {/* Next Button */}
      <button
        onClick={() => onPageChange(pageNumber + 1)}
        disabled={pageNumber === totalPages}
        className={`px-3 py-2 border rounded ${
          pageNumber === totalPages
            ? "opacity-50 cursor-not-allowed"
            : "hover:bg-gray-200"
        }`}
      >
        Next
      </button>
    </div>
  );
};

export default Pagination;
