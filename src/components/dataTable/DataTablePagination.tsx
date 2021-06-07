import React, { ChangeEvent, ReactNode, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { RootState } from '../../store/rootReducer';
import { updateCurrentPage, updateItemsPerPage } from '../../store/dataTableSlice';

interface PaginationProps {
  children: ReactNode;
}

function DataTablePagination({ children }: PaginationProps): React.ReactElement {
  const dispatch = useDispatch();

  const [dropdownToggle, setDropdownToggle] = useState<boolean>(false);
  const [gotoText, setGotoText] = useState<string>('');
  const currentPage = useSelector((state: RootState) => state.dataTable.currentPage);
  const itemsPerPage = useSelector((state: RootState) => state.dataTable.itemsPerPage);
  const entriesList = useSelector((state: RootState) => state.dataTable.entries);

  const totalPages = Math.ceil(entriesList.length / itemsPerPage);
  const itemOptions = [10, 30, 50, 100];

  const handleChange = (e: ChangeEvent<HTMLInputElement>) => {
    setGotoText(e.target.value);
  };

  const handleClick = () => {
    const page = parseInt(gotoText, 10);
    if (isNaN(page)) return;
    if (currentPage === page) return;
    if (totalPages < page) {
      dispatch(updateCurrentPage(totalPages));
    } else {
      dispatch(updateCurrentPage(page));
    }
  };

  const hasPrev = (): boolean => {
    return currentPage > 1;
  };
  const hasNext = (): boolean => {
    return currentPage < totalPages;
  };
  const prev = () => {
    if (!hasPrev()) return;
    dispatch(updateCurrentPage(currentPage - 1));
  };
  const next = () => {
    if (!hasNext()) return;
    dispatch(updateCurrentPage(currentPage + 1));
  };
  const goToPage = (page: number) => {
    if (currentPage === page) return;
    dispatch(updateCurrentPage(page));
  };

  const setItemsPage = (itemValue: number) => {
    dispatch(updateItemsPerPage(itemValue));
    setDropdownToggle(false);
  };
  const getRange = (start: number, end: number): number[] => {
    return Array(end - start + 1)
      .fill(0)
      .map((_, i) => i + start);
  };

  const pagination = (): number[] => {
    let delta;
    if (totalPages <= 7) {
      // delta === 7: [1 2 3 4 5 6 7]
      delta = 7;
    } else {
      // delta === 2: [1 ... 4 5 6 ... 10]
      // delta === 4: [1 2 3 4 5 ... 10]
      delta = currentPage > 4 && currentPage < totalPages - 3 ? 2 : 4;
    }

    const range = {
      start: Math.round(currentPage - delta / 2),
      end: Math.round(currentPage + delta / 2),
    };

    if (range.start - 1 === 1 || range.end + 1 === totalPages) {
      range.start += 1;
      range.end += 1;
    }

    let pages =
      currentPage > delta
        ? getRange(Math.min(range.start, totalPages - delta), Math.min(range.end, totalPages))
        : getRange(1, Math.min(totalPages, delta + 1));

    const withDots = (value: number, pair: number[]): number[] => (pages.length + 1 !== totalPages ? pair : [value]);

    if (pages[0] !== 1) {
      // -1 will represent '...' (dots range)
      pages = withDots(1, [1, -1]).concat(pages);
    }

    if (pages[pages.length - 1] < totalPages) {
      const temp = withDots(totalPages, [-1, totalPages]);
      pages = pages.concat(temp);
    }

    return pages;
  };

  return (
    <>
      <div className="card">
        <div className="card-content card-pagination-info">
          <div>
            Showing
            <b className="mx-1">{(currentPage - 1) * itemsPerPage}</b>
            to
            <b className="mx-1">{currentPage * itemsPerPage > entriesList.length ? entriesList.length : currentPage * itemsPerPage}</b>
            of
            <b className="mx-1">{entriesList.length}</b>
            items
          </div>

          <div className="items-page">
            <div className="text-label">Items per page</div>
            <div className={`dropdown is-right is-mobile-modal ${dropdownToggle ? 'is-active' : ''}`}>
              <div role="button" aria-haspopup="true" className="dropdown-trigger">
                <button className="button is-primary" onClick={() => setDropdownToggle(!dropdownToggle)}>
                  <span>{itemsPerPage}</span>
                </button>
              </div>
              <div className="dropdown-background"></div>
              <div className="dropdown-menu">
                <div role="list" className="dropdown-content">
                  {itemOptions.map((itemValue: number) => (
                    <span
                      role="listitem"
                      className={`dropdown-item ${itemValue === itemsPerPage ? 'is-active' : ''}`}
                      key={itemValue}
                      onClick={() => setItemsPage(itemValue)}
                    >
                      {itemValue}
                    </span>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      {children}
      <div className="card mt-4 card-pagination">
        <div className="card-content">
          <nav className="pagination is-centered" role="navigation" aria-label="pagination">
            <button className="pagination-action pagination-previous" aria-label="Previous page" disabled={!hasPrev} onClick={() => prev}>
              <svg
                fill="none"
                height="24"
                stroke="#000"
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                viewBox="0 0 24 24"
                width="24"
                className="feather"
              >
                <polyline points="15 18 9 12 15 6"></polyline>
              </svg>
            </button>
            <button className="pagination-action pagination-next" aria-label="Next page" disabled={!hasNext} onClick={() => next()}>
              <svg
                fill="none"
                height="24"
                stroke="#000"
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                viewBox="0 0 24 24"
                width="24"
                className="feather"
              >
                <polyline points="9 18 15 12 9 6" />
              </svg>
            </button>
            <ul className="pagination-list">
              {pagination().map((page: number) => {
                if (page > 0) {
                  return (
                    <li key={page}>
                      <button
                        className={`pagination-link ${currentPage === page ? 'is-current' : ''}`}
                        aria-label={`Goto page ${page}`}
                        onClick={() => goToPage(page)}
                      >
                        {page}
                      </button>
                    </li>
                  );
                } else {
                  return (
                    <li key={Math.random()}>
                      <span className="pagination-ellipsis">&hellip;</span>
                    </li>
                  );
                }
              })}
            </ul>
          </nav>
          <div className="pagination-portal">
            <div className="field is-horizontal">
              <div className="field-label is-normal">
                <div className="label">Go to page</div>
              </div>
              <div className="field-body">
                <div className="control control-input">
                  <input className="input" type="number" min="1" max={totalPages} step="1" value={gotoText} onChange={handleChange} />
                </div>
                <div className="control control-button">
                  <button type="button" className="button" onClick={handleClick}>
                    Go
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default DataTablePagination;
