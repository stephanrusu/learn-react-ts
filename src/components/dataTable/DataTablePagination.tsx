import React from 'react';

function DataTablePagination() {
  return (
    <div className="card mt-4 card-pagination">
      <div className="card-content">
        <nav className="pagination is-centered" role="navigation" aria-label="pagination">
          <button className="pagination-action pagination-previous" aria-label="Previous page">
            <svg
              fill="none"
              height="24"
              stroke="#000"
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="2"
              viewBox="0 0 24 24"
              width="24"
              xmlns="http://www.w3.org/2000/svg"
              className="feather"
            >
              <polyline points="15 18 9 12 15 6"></polyline>
            </svg>
          </button>
          <button className="pagination-action pagination-next" aria-label="Next page">
            <svg
              fill="none"
              height="24"
              stroke="#000"
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="2"
              viewBox="0 0 24 24"
              width="24"
              xmlns="http://www.w3.org/2000/svg"
              className="feather"
            >
              <polyline points="9 18 15 12 9 6" />
            </svg>
          </button>
          <ul className="pagination-list">
            <li>
              <button className="pagination-link" aria-label="Goto page 1">
                1
              </button>
            </li>
            <li>
              <span className="pagination-ellipsis">&hellip;</span>
            </li>
            <li>
              <button className="pagination-link" aria-label="Goto page 5">
                5
              </button>
            </li>
            <li>
              <button className="pagination-link is-current" aria-label="Page 6" aria-current="page">
                6
              </button>
            </li>
            <li>
              <button className="pagination-link" aria-label="Goto page 7">
                7
              </button>
            </li>
            <li>
              <span className="pagination-ellipsis">&hellip;</span>
            </li>
            <li>
              <button className="pagination-link" aria-label="Goto page 15">
                15
              </button>
            </li>
          </ul>
        </nav>
        <div className="pagination-portal">
          <div className="field is-horizontal">
            <div className="field-label is-normal">
              <label className="label">Go to page</label>
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
