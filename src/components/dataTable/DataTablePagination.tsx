import React from 'react';

function DataTablePagination() {
  return (
    <div className="card mt-4">
      <div className="card-content">
        <nav className="pagination is-centered" role="navigation" aria-label="pagination">
          <button className="pagination-previous">Previous</button>
          <button className="pagination-next">Next page</button>
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
      </div>
    </div>
  );
};

export default DataTablePagination;
