import React, { useEffect } from 'react';
import { useParams, useSearchParams } from 'react-router-dom';
import { addToCard } from '../actions/cartActions';
import { handleGetSingleCoffee } from '../actions/coffeeActions';
import { useSelector, useDispatch } from 'react-redux';
import CoffeeCard from '../components/CoffeeCard';

function CartPage() {
  const { slug } = useParams();

  const dispatch = useDispatch();

  const [searchParams] = useSearchParams();

  const cart = useSelector((state) => state.cart);
  const { cartItems } = cart;

  const getSingleCoffee = useSelector((state) => state.getSingleCoffee);
  const { coffee } = getSingleCoffee;

  const type = searchParams.get('type');
  const qty = Number(searchParams.get('qty'));

  useEffect(() => {
    if (slug) {
      dispatch(handleGetSingleCoffee(slug));

      const selectedPrice =
        coffee.coffeePrices &&
        coffee.coffeePrices.find((p) => p.type.toLowerCase() === type);

      let total;

      if (selectedPrice) {
        total = selectedPrice.price * qty;
      } else {
        total = 0;
      }

      dispatch(addToCard(slug, qty, total));
    }
    console.log('Cart');
  }, [dispatch, qty, slug, type]);

  return (
    <div>
      <h1 className='text-2xl font-bold mt-4'>Your Cart</h1>
      {cartItems && cartItems.length > 0 ? (
        cartItems.map((item) => <CoffeeCard coffee={item} />)
      ) : (
        <h3>Nothing to show...</h3>
      )}
    </div>
  );
}

export default CartPage;
