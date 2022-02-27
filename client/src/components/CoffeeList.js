import React from 'react';
import CoffeeCard from './CoffeeCard';

function CoffeeList({ data }) {
  return (
    <div className='flex flex-col md:flex-row md:flex-wrap mt-8'>
      {data.map((coffee) => (
        <CoffeeCard key={coffee.id} coffee={coffee} />
      ))}
    </div>
  );
}

export default CoffeeList;
