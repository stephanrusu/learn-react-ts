import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { RootState } from '../../store/rootReducer';
import { updateEntries } from '../../store/slices/dataTableSlice';
import DataTableEntries from './DataTableEntries';
import DataTablePagination from './DataTablePagination';

function DataTableContainer(): React.ReactElement {
  const dispatch = useDispatch();

  useEffect(() => {
    fetch('http://localhost:3004/movies')
      .then((res) => res.json())
      .then(
        (result) => {
          dispatch(updateEntries(result));
        },
        // Note: it's important to handle errors here
        // instead of a catch() block so that we don't swallow
        // exceptions from actual bugs in components.
        (error) => {
          // eslint-disable-next-line
          console.error(error);
        },
      );
  }, [dispatch]);
  const entriesLength = useSelector((state: RootState) => state.dataTable.entries.length);

  return (
    <>
      <div className="card">
        <div className="card-header">
          <p className="card-header-title">DataTable</p>
        </div>
      </div>
      {entriesLength > 0 && (
        <DataTablePagination>
          <DataTableEntries />
        </DataTablePagination>
      )}
    </>
  );
}

export default DataTableContainer;
