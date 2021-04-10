import React from 'react';
import ReturnHome from './common/ReturnHome';
import DataTableContainer from './dataTable/DataTableContainer';

function DataTablePage(): React.ReactElement {
  return (
    <>
      <ReturnHome />
      <DataTableContainer />
    </>
  );
}

export default DataTablePage;
