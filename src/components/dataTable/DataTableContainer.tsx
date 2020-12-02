import React from 'react';
import DataTableEntries from './DataTableEntries';
import DataTablePagination from './DataTablePagination';
import DataTablePaginationInfo from './DataTablePaginationInfo';

function DataTableContainer() {
  return (
    <>
      <div className="card">
        <div className="card-header">
          <p className="card-header-title">DataTable</p>
        </div>
      </div>
      <DataTablePaginationInfo />
      <DataTableEntries />
      <DataTablePagination />
    </>
  );
}

export default DataTableContainer;
