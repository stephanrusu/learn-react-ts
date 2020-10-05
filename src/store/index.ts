import { createStore, applyMiddleware } from 'redux';
import { composeWithDevTools } from 'redux-devtools-extension';
import thunk from 'redux-thunk';
import rootReducer from './reducers/rootReducer';
import initialState from './initialState';

const composeEnhancers = composeWithDevTools({
  // Specify name here, actionsBlacklist, actionsCreators and other options if needed
});
const middleware = [thunk];

const store = createStore(
  rootReducer,
  initialState,
  composeEnhancers(
    applyMiddleware(...middleware),
  ),
);

export default store;
