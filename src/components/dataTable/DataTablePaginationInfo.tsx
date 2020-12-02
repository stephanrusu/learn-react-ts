import React, { useState } from 'react';

function DataTablePaginationInfo() {
  const [dropdownToggle, setDropdownToggle] = useState<boolean>(false);
  return (
    <div className="card mt-4 card-pagination-info">
        <div className="card-content">
          <div>
            Showing <b>10</b> of <b>146</b> items
          </div>
          <div className="items-page">
            <div className="text-label">Items per page</div>
            <div className={`dropdown is-right is-mobile-modal ${dropdownToggle ? 'is-active': ''}`}>
              <div role="button" aria-haspopup="true" className="dropdown-trigger">
                <button className="button is-primary" onClick={() => setDropdownToggle(!dropdownToggle)}>
                  <span>30</span>
                </button>
              </div>
              <div className="dropdown-background"></div>
              <div className="dropdown-menu">
                <div role="list" className="dropdown-content">
                  <span role="listitem" tabIndex={0} className="dropdown-item is-active">10</span>
                  <span role="listitem" tabIndex={1} className="dropdown-item">30</span>
                  <span role="listitem" tabIndex={2} className="dropdown-item">50</span>
                  <span role="listitem" tabIndex={2} className="dropdown-item">100</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
  );
};

export default DataTablePaginationInfo;
