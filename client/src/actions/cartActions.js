import {
  CART_ADD_ITEM,
  CART_REMOVE_ITEM,
  CART_CLEAR_ITEMS,
} from '../constants/cartConstants';
import axios from 'axios';

export const addToCard = (slug, qty, type) => async (dispatch, getState) => {
  try {
    const { data } = await axios.get(`/api/v1/coffees/${slug}`);

    dispatch({
      type: CART_ADD_ITEM,
      payload: {
        coffee: data._id,
        coffeeName: data.coffeeName,
        coffeImage: data.coffeImage,
        coffeePrice: type,
        qty,
      },
    });

    localStorage.setItem(
      'cartItems',
      JSON.stringify(getState().cart.cartItems)
    );
  } catch (error) {
    console.error(error);
  }
};
