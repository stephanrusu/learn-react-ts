import React from 'react';
import TodoContainer from './todo/TodoContainer';

// function App():JSX.Element {
function App() {
  return (
    <section className="section">
      <div className="container">
        <div className="columns is-centered">
          <div className="column is-half">
            <h4 className="is-size-4 has-text-weight-medium mb-3">Todo App React + Typescript</h4>
            <TodoContainer />
          </div>
        </div>
      </div>
    </section>
  );
};

export default App;
