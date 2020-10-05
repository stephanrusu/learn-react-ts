import React from 'react';
import { Provider } from 'react-redux';
import store from './store';
import RouteHandler from './router/RouteHandler';

// function App():JSX.Element {
function App() {
  return (
    <Provider store={store}>
      <RouteHandler />
    </Provider>
  );
}

export default App;
