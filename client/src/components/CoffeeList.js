import React from 'react';
import CoffeeCard from './CoffeeCard';

function CoffeeList() {
  return (
    <div className='flex flex-col md:flex-row md:flex-wrap mt-8'>
      <CoffeeCard />
      <CoffeeCard />
      <CoffeeCard />
      <CoffeeCard />
      <CoffeeCard />
      <CoffeeCard />
    </div>
  );
}

export default CoffeeList;
