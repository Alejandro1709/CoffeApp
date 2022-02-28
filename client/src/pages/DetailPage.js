import React, { useEffect } from 'react';
import { useParams } from 'react-router-dom';
import { useSelector, useDispatch } from 'react-redux';
import { handleGetSingleCoffee } from '../actions/coffeeActions';
import CoffeCard from '../components/CoffeeCard';

function DetailPage() {
  const { slug } = useParams();

  const dispatch = useDispatch();

  const getSingleCoffee = useSelector((state) => state.getSingleCoffee);
  const { coffee, loading, error } = getSingleCoffee;

  useEffect(() => {
    dispatch(handleGetSingleCoffee(slug));
  }, [dispatch, slug]);

  loading && <span>loading...</span>;

  return (
    <div>
      {error && <span>{error}</span>}
      {coffee ? <CoffeCard coffee={coffee} /> : <span>No Coffee Found</span>}
    </div>
  );
}

export default DetailPage;

// TODO:
// REDUX
// DETAIL PAGE
