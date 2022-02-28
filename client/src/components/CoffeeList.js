import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { handleGetAllCoffees } from '../actions/coffeeActions';
import CoffeeCard from './CoffeeCard';

function CoffeeList() {
  const dispatch = useDispatch();

  const getCoffees = useSelector((state) => state.getCoffees);
  const { coffees, loading, error } = getCoffees;

  useEffect(() => {
    dispatch(handleGetAllCoffees());
  }, [dispatch]);

  return (
    <div className='flex justify-center md:gap-4 flex-col md:flex-row md:flex-wrap mt-8'>
      {loading && <span>Loading...</span>}
      {error && <span>{error}</span>}
      {coffees && coffees.length > 0 ? (
        coffees.map((coffee) => <CoffeeCard key={coffee._id} coffee={coffee} />)
      ) : (
        <h1>No Coffees Were Found</h1>
      )}
    </div>
  );
}

export default CoffeeList;
