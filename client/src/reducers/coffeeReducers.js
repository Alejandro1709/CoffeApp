import {
  GET_ALL_COFFEES_REQUEST,
  GET_ALL_COFFEES_SUCCESS,
  GET_ALL_COFFEES_FAIL,
  GET_SINGLE_COFFEE_REQUEST,
  GET_SINGLE_COFFEE_SUCCESS,
  GET_SINGLE_COFFEE_FAIL,
} from '../constants/coffeeConstants';

export const getCoffeesReducer = (state = { coffees: [] }, action) => {
  switch (action.type) {
    case GET_ALL_COFFEES_REQUEST:
      return { loading: true };
    case GET_ALL_COFFEES_SUCCESS:
      return { loading: false, coffees: action.payload };
    case GET_ALL_COFFEES_FAIL:
      return { loading: false, error: action.payload };
    default:
      return state;
  }
};

export const getSingleCoffeeReducer = (state = { coffee: {} }, action) => {
  switch (action.type) {
    case GET_SINGLE_COFFEE_REQUEST:
      return { loading: true };
    case GET_SINGLE_COFFEE_SUCCESS:
      return { loading: false, coffee: action.payload };
    case GET_SINGLE_COFFEE_FAIL:
      return { loading: false, error: action.payload };
    default:
      return state;
  }
};
