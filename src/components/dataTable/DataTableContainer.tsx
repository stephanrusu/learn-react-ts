import React from 'react';
import DataTableEntries from './DataTableEntries';
import DataTablePagination from './DataTablePagination';

function DataTableContainer(): React.ReactElement {
  return (
    <>
      <div className="card">
        <div className="card-header">
          <p className="card-header-title">DataTable</p>
        </div>
      </div>
      <DataTablePagination>
        <DataTableEntries />
      </DataTablePagination>
    </>
  );
}

export default DataTableContainer;
