import React, { useState, useEffect } from "react";

const Pagination: React.FC = () => {
  const totalPages = 50;
  const [currentPage, setCurrentPage] = useState(25);

  useEffect(() => {
    localStorage.setItem("currentPage", currentPage.toString());
  }, [currentPage]);

  const generatePages = () => {
    const pages: (number | string)[] = [];
    const buffer = window.innerWidth < 640 ? 1 : 2;

    pages.push(1);
    if (currentPage - buffer > 2) pages.push("...");
    for (
      let i = Math.max(2, currentPage - buffer);
      i <= Math.min(totalPages - 1, currentPage + buffer);
      i++
    ) {
      pages.push(i);
    }

    if (currentPage + buffer < totalPages - 1) pages.push("...");
    if (totalPages > 1) pages.push(totalPages);

    return pages;
  };

  return (
    <div className="flex flex-wrap justify-center items-center space-x-2 mt-5">
      {/* Previous Button */}
      <button
        onClick={() => setCurrentPage((prev) => Math.max(1, prev - 1))}
        disabled={currentPage === 1}
        className={`px-3 py-2 border rounded ${
          currentPage === 1
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
            onClick={() => setCurrentPage(page)}
            className={`px-4 py-2 border rounded ${
              page === currentPage
                ? "font-bold bg-eighthColor"
                : "hover:bg-gray-300"
            }`}
          >
            {page}
          </button>
        ) : (
          <span key={index} className="px-3 py-2">
            ...
          </span>
        )
      )}

      {/* Next Button */}
      <button
        onClick={() => setCurrentPage((prev) => Math.min(totalPages, prev + 1))}
        disabled={currentPage === totalPages}
        className={`px-3 py-2 border rounded ${
          currentPage === totalPages
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
