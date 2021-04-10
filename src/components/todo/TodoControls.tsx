import React, { Dispatch, SetStateAction } from 'react';
import classNames from 'classnames';

interface TodoControlsProps {
  totalTodos: number;
  completedTodos: number;
  activeFilter: string;
  setActiveFilter: Dispatch<SetStateAction<string>>;
}

interface FilterButtons {
  all: string;
  active: string;
  completed: string;
  [key: string]: string;
}

function TodoControls(props: TodoControlsProps) {
  const { totalTodos, completedTodos, activeFilter, setActiveFilter } = props;
  const filterButtons: FilterButtons = { all: 'All', active: 'Active', completed: 'Completed' };

  return (
    <>
      <div className="buttons card-footer-item is-justify-content-start">
        {Object.keys(filterButtons).map((value: string, index: number) => {
          const buttonClassNames = classNames('button is-primary', {
            'is-active': value === activeFilter,
          });

          return (
            <button key={index} className={buttonClassNames} onClick={() => setActiveFilter(value)}>
              {filterButtons[value]}
            </button>
          );
        })}
      </div>
      <div className="completed-info card-footer-item is-justify-content-end">{`${completedTodos}/${totalTodos} Completed`}</div>
    </>
  );
}
export default TodoControls;
