import React from 'react';
import TodoContainer from './todo/TodoContainer';

// function App():JSX.Element {
function App() {
  return (
    <section className="section">
      <div className="container">
        <div className="columns is-centered">
          <div className="column is-half">
            <TodoContainer />
          </div>
        </div>
      </div>
    </section>
  );
};

export default App;
