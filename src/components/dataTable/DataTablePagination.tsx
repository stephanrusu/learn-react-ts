import React, { useState } from 'react';

function DataTablePagination(): React.ReactElement {
  const [currentPage, setCurrentPage] = useState<number>(1);
  // const [totalPages, setTotalPages] = useState<number>(15);
  const totalPages = 15;

  const getRange = (start: number, end: number): number[] => {
    return Array(end - start + 1)
      .fill(0)
      .map((_, i) => i + start);
  };

  const pagination = (): number[] => {
    let delta;
    if (totalPages <= 7) {
      // delta === 7: [1 2 3 4 5 6 7]
      delta = 7;
    } else {
      // delta === 2: [1 ... 4 5 6 ... 10]
      // delta === 4: [1 2 3 4 5 ... 10]
      delta = currentPage > 4 && currentPage < totalPages - 3 ? 2 : 4;
    }

    const range = {
      start: Math.round(currentPage - delta / 2),
      end: Math.round(currentPage + delta / 2),
    };

    if (range.start - 1 === 1 || range.end + 1 === totalPages) {
      range.start += 1;
      range.end += 1;
    }

    let pages =
      currentPage > delta
        ? getRange(Math.min(range.start, totalPages - delta), Math.min(range.end, totalPages))
        : getRange(1, Math.min(totalPages, delta + 1));

    const withDots = (value: number, pair: number[]): number[] => (pages.length + 1 !== totalPages ? pair : [value]);

    if (pages[0] !== 1) {
      // -1 will represent '...' (dots range)
      pages = withDots(1, [1, -1]).concat(pages);
    }

    if (pages[pages.length - 1] < totalPages) {
      const temp = withDots(totalPages, [-1, totalPages]);
      pages = pages.concat(temp);
    }

    return pages;
  };

  const hasPrev = (): boolean => {
    return currentPage > 1;
  };
  const hasNext = (): boolean => {
    return currentPage < totalPages;
  };
  const prev = () => {
    if (!hasPrev) return;
    setCurrentPage(currentPage - 1);
  };
  const next = () => {
    if (!hasNext) return;
    setCurrentPage(currentPage + 1);
  };
  const goToPage = (page: number) => {
    if (currentPage === page) return;
    setCurrentPage(page);
  };

  return (
    <div className="card mt-4 card-pagination">
      <div className="card-content">
        <nav className="pagination is-centered" role="navigation" aria-label="pagination">
          <button className="pagination-action pagination-previous" aria-label="Previous page" disabled={!hasPrev} onClick={() => prev}>
            <svg
              fill="none"
              height="24"
              stroke="#000"
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="2"
              viewBox="0 0 24 24"
              width="24"
              className="feather"
            >
              <polyline points="15 18 9 12 15 6"></polyline>
            </svg>
          </button>
          <button className="pagination-action pagination-next" aria-label="Next page" disabled={!hasNext} onClick={() => next()}>
            <svg
              fill="none"
              height="24"
              stroke="#000"
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="2"
              viewBox="0 0 24 24"
              width="24"
              className="feather"
            >
              <polyline points="9 18 15 12 9 6" />
            </svg>
          </button>
          <ul className="pagination-list">
            {pagination().map((page: number) => {
              if (page > 0) {
                return (
                  <li key={page}>
                    <button
                      className={`pagination-link ${currentPage === page ? 'is-current' : ''}`}
                      aria-label={`Goto page ${page}`}
                      onClick={() => goToPage(page)}
                    >
                      {page}
                    </button>
                  </li>
                );
              } else {
                return (
                  <li key={Math.random()}>
                    <span className="pagination-ellipsis">&hellip;</span>
                  </li>
                );
              }
            })}
          </ul>
        </nav>
        <div className="pagination-portal">
          <div className="field is-horizontal">
            <div className="field-label is-normal">
              <div className="label">Go to page</div>
            </div>
            <div className="field-body">
              <div className="control control-input">
                <input className="input" type="text" />
              </div>
              <div className="control control-button">
                <button type="button" className="button">
                  Go
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default DataTablePagination;
