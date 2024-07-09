//import React from "react";
import PropTypes from "prop-types";

const Pagination = ({ currentPage, totalPages, onPageChange }) => {
    const handleClick = (event, pageNumber) => {
        event.preventDefault();
        if (pageNumber >= 1 && pageNumber <= totalPages) {
            onPageChange(pageNumber);
        }
    };

    const renderPaginationButtons = () => {
        let buttons = [];

        if (totalPages <= 3) {
            for (let i = 1; i <= totalPages; i++) {
                buttons.push(
                    <button key={i} onClick={(event) => handleClick(event, i)} className={`px-4 py-2 mx-1 rounded ${currentPage === i ? "text-gray-600" : ""}`}>
                        {i}
                    </button>
                );
            }
        } else {
            let startPage = Math.max(1, currentPage - 1);
            let endPage = Math.min(totalPages, currentPage + 1);

            if (startPage > 1) {
                buttons.push(
                    <button key={1} onClick={(event) => handleClick(event, 1)} className={`px-4 py-2 mx-1 rounded ${currentPage === 1 ? "text-gray-600" : ""}`}>
                        1
                    </button>
                );
                if (startPage > 2) {
                    buttons.push(
                        <span key="dots-start" className="px-4 py-2 mx-1">
                            ...
                        </span>
                    );
                }
            }

            for (let i = startPage; i <= endPage; i++) {
                buttons.push(
                    <button key={i} onClick={(event) => handleClick(event, i)} className={`px-4 py-2 mx-1 rounded ${currentPage === i ? "text-gray-600" : ""}`}>
                        {i}
                    </button>
                );
            }

            if (endPage < totalPages) {
                if (endPage < totalPages - 1) {
                    buttons.push(
                        <span key="dots-end" className="px-4 py-2 mx-1">
                            ...
                        </span>
                    );
                }
                buttons.push(
                    <button key={totalPages} onClick={(event) => handleClick(event, totalPages)} className={`px-4 py-2 mx-1 rounded ${currentPage === totalPages ? "text-gray-600" : ""}`}>
                        {totalPages}
                    </button>
                );
            }
        }

        return buttons;
    };

    return (
        <div className="flex justify-center mt-4">
            <button onClick={(event) => handleClick(event, currentPage - 1)} disabled={currentPage === 1} className="px-4 py-2 mx-1 rounded">
                &lt;
            </button>
            {renderPaginationButtons()}
            <button onClick={(event) => handleClick(event, currentPage + 1)} disabled={currentPage === totalPages} className="px-4 py-2 mx-1 rounded">
                &gt;
            </button>
        </div>
    );
};

Pagination.propTypes = {
    currentPage: PropTypes.number.isRequired,
    totalPages: PropTypes.number.isRequired,
    onPageChange: PropTypes.func.isRequired,
};

export default Pagination;
