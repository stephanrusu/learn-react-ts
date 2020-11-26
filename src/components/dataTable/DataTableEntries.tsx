import React from 'react';
import { useSelector } from 'react-redux';
import { RootState } from '../../store/rootReducer';

function DataTableEntries() {
  const entries = useSelector(
    (state: RootState) => state.dataTable.entries
  );

  return (
    <table className="table is-striped is-hoverable is-fullwidth mt-4 has-mobile-cards">
      <thead>
        <tr>
          <th className="">
            <div className="th-wrap is-numeric">
              <div className="is-relative">
                <div className="toggle checkbox">
                  <div className="toggle-inner"></div>
                </div>
              </div>
            </div>
          </th>
          <th className="">
            <div className="th-wrap">
              <div className="is-relative">Title</div>
            </div>
          </th>
          <th className="">
            <div className="th-wrap">
              <div className="is-relative">Director</div>
            </div>
          </th>
          <th className="">
            <div className="th-wrap">
              <div className="is-relative">Year</div>
            </div>
          </th>
          <th className="">
            <div className="th-wrap">
              <div className="is-relative">Genre</div>
            </div>
          </th>
        </tr>
      </thead>
      <tbody>
        {
          entries.map((movie: Movie) => (
            <tr draggable="false" className="" key={movie.id}>
              <td className="">
                <div className="toggle checkbox">
                  <div className="toggle-inner"></div>
                </div>
              </td>
              <td data-label="Title" className="">
                <span>{movie.title}</span>
              </td>
              <td data-label="Director" className="">
                <span>{movie.director}</span>
              </td>
              <td data-label="Year" className="">
                <span>{movie.year}</span>
              </td>
              <td data-label="Genre" className="">
                <div>
                  {
                    movie.genres.map((genre: string, index: number) => (
                      <span className="tag is-primary is-light" key={`${movie.id}-${index}`}>{genre}</span>
                    ))
                  }
                </div>
              </td>
            </tr>
          ))
        }
      </tbody>
    </table>
  );
};

export default DataTableEntries;
