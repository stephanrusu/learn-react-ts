import React from 'react';
import DataTableEntries from './DataTableEntries';
import DataTablePagination from './DataTablePagination';

function DataTableContainer() {
  return (
    <>
      <div className="card">
        <div className="card-header">
          <p className="card-header-title">DataTable</p>
        </div>
      </div>
      <DataTablePagination />
      <DataTableEntries />
    </>
  );
}

export default DataTableContainer;
