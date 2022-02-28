import {
  GET_ALL_COFFEES_REQUEST,
  GET_ALL_COFFEES_SUCCESS,
  GET_ALL_COFFEES_FAIL,
  GET_SINGLE_COFFEE_REQUEST,
  GET_SINGLE_COFFEE_SUCCESS,
  GET_SINGLE_COFFEE_FAIL,
} from '../constants/coffeeConstants';
import axios from 'axios';

export const handleGetAllCoffees = () => async (dispatch) => {
  try {
    dispatch({
      type: GET_ALL_COFFEES_REQUEST,
    });

    const { data } = await axios.get('/api/v1/coffees');

    dispatch({
      type: GET_ALL_COFFEES_SUCCESS,
      payload: data,
    });
  } catch (error) {
    dispatch({
      type: GET_ALL_COFFEES_FAIL,
      payload: error,
    });
  }
};

export const handleGetSingleCoffee = (slug) => async (dispatch) => {
  try {
    dispatch({
      type: GET_SINGLE_COFFEE_REQUEST,
    });

    const { data } = await axios.get(`/api/v1/coffees/${slug}`);

    dispatch({
      type: GET_SINGLE_COFFEE_SUCCESS,
      payload: data,
    });
  } catch (error) {
    dispatch({
      type: GET_SINGLE_COFFEE_FAIL,
      payload: error,
    });
  }
};
