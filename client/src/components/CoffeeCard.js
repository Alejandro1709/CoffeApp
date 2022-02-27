import React from 'react';

function CoffeeCard({ coffee }) {
  return (
    <div className='flex justify-center items-center h-[250px] w-96 mx-auto rounded-md mb-3 bg-white shadow cursor-pointer'>
      <div className='flex flex-col justify-center items-center gap-4'>
        <div className='w-40 h-40 mb-3'>
          <img
            src={`../images/${coffee.coffeImage}.png`}
            alt={coffee.coffeeName}
          />
        </div>
        <div className='flex flex-col justify-center items-center text-center'>
          <p className='font-bold'>{coffee.coffeeName}</p>
          <span className='text-gray-500'>
            S/. {coffee.coffeePrices[0].price}
          </span>
        </div>
      </div>
    </div>
  );
}

export default CoffeeCard;
