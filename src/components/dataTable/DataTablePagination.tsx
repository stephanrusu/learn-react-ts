import React from 'react';

function DataTablePagination() {
  return (
    <div className="card mt-4 card-pagination">
      <div className="card-content">
        <nav className="pagination is-centered" role="navigation" aria-label="pagination">
          <button className="pagination-action pagination-previous">
            <svg fill="none" height="24" stroke="#000" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewBox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg" className="feather"><polyline points="15 18 9 12 15 6"></polyline></svg>
          </button>
          <button className="pagination-action pagination-next">
            <svg fill="none" height="24" stroke="#000" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewBox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg" className="feather"><polyline points="9 18 15 12 9 6"/></svg>
          </button>
          <ul className="pagination-list">
            <li><button className="pagination-link" aria-label="Goto page 1">1</button></li>
            <li><span className="pagination-ellipsis">&hellip;</span></li>
            <li><button className="pagination-link" aria-label="Goto page 45">45</button></li>
            <li><button className="pagination-link is-current" aria-label="Page 46" aria-current="page">46</button></li>
            <li><button className="pagination-link" aria-label="Goto page 47">47</button></li>
            <li><span className="pagination-ellipsis">&hellip;</span></li>
            <li><button className="pagination-link" aria-label="Goto page 86">86</button></li>
          </ul>
        </nav>
        <div className="pagination-portal">

        </div>
      </div>
    </div>
  );
};

export default DataTablePagination;
