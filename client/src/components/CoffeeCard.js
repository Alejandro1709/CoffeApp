import React from 'react';
import { Link } from 'react-router-dom';

function CoffeeCard({ coffee }) {
  return (
    <Link to={`/coffees/${coffee._id}`}>
      <div className='flex justify-center items-center h-[250px] w-96 mx-auto rounded-md mb-3 bg-white shadow cursor-pointer'>
        <div className='flex flex-col justify-center items-center gap-4'>
          <div className='w-40 h-40 mb-3'>
            <img src={coffee.coffeImage} alt={coffee.coffeeName} />
          </div>
          <div className='flex flex-col justify-center items-center text-center'>
            <p className='font-bold'>{coffee.coffeeName}</p>
            <span className='text-gray-500'>
              S/. {coffee.coffeePrices[0].price}
            </span>
          </div>
        </div>
      </div>
    </Link>
  );
}

export default CoffeeCard;
