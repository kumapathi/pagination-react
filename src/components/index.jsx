function Pagination({ currentPages, totalPages = 10, onPageChange }) {

    function generateNoOfPages() {
        const pages = [];

        for (let i = 1; i <= totalPages; i++) {
            pages.push(i)
        }
        return pages;
        { }
    }

    return (
        <div className="Pagination">
            <button onClick={() => onPageChange(currentPages - 1)}
                className="pagination-btn"
                disabled={currentPages === 1}>Prev</button>

            {generateNoOfPages().map((pageNo) => (
                <button
                    className={`pagination-btn 
                    ${currentPages === pageNo ? `active` : ``}`}
                    key={pageNo}
                    onClick={() => onPageChange(pageNo)}
                >
                    {pageNo}
                </button>
            ))}

            <button onClick={() => onPageChange(currentPages + 1)}
                className="pagination-btn"
                disabled={currentPages === totalPages}>Next</button>
        </div >
    );
}

export default Pagination;