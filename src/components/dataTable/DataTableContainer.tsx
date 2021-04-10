import React from 'react';
import DataTableEntries from './DataTableEntries';
import DataTablePagination from './DataTablePagination';
import DataTablePaginationInfo from './DataTablePaginationInfo';

function DataTableContainer(): React.ReactElement {
  return (
    <>
      <div className="card">
        <div className="card-header">
          <p className="card-header-title">DataTable</p>
        </div>
        <DataTablePaginationInfo />
      </div>
      <DataTableEntries />
      <DataTablePagination />
    </>
  );
}

export default DataTableContainer;
