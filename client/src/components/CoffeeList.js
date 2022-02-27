import React from 'react';
import CoffeeCard from './CoffeeCard';

function CoffeeList({ data }) {
  return (
    <div className='flex flex-col md:flex-row md:flex-wrap mt-8'>
      {data.map((coffe) => (
        <CoffeeCard key={coffe.id} coffee={coffe} />
      ))}
    </div>
  );
}

export default CoffeeList;
