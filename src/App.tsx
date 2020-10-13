import React from 'react';
import { Provider } from 'react-redux';
import store from './store';
import RouteHandler from './router/RouteHandler';

// function App():JSX.Element {
function App() {
  return (
    <Provider store={store}>
      <section className="section">
        <div className="container">
          <RouteHandler />
        </div>
      </section>
    </Provider>
  );
}

export default App;
