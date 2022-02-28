import { createStore, combineReducers, applyMiddleware } from 'redux';
import thunk from 'redux-thunk';
import { composeWithDevTools } from 'redux-devtools-extension';
import {
  getCoffeesReducer,
  getSingleCoffeeReducer,
} from './reducers/coffeeReducers';

const reducer = combineReducers({
  getCoffees: getCoffeesReducer,
  getSingleCoffee: getSingleCoffeeReducer,
});

const initialState = {};

const middleware = [thunk];

const store = createStore(
  reducer,
  initialState,
  composeWithDevTools(applyMiddleware(...middleware))
);

export default store;
