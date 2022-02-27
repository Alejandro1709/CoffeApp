import React from 'react';

function CoffeeCard() {
  return (
    <div className='flex justify-center items-center h-[250px] w-96 mx-auto rounded-md mb-3 bg-white shadow'>
      <div className='gap-4'>
        <div className='w-40 h-40 mb-3'>
          <img
            src='https://www.starbucks.pe/Multimedia/productos/MOCHA_FRAPP_V2.png'
            alt=''
          />
        </div>
        <div className='flex flex-col justify-center items-center'>
          <p className='font-bold'>Mocha Frappuccino</p>
          <span className='text-gray-500'>S/. 13.00</span>
        </div>
      </div>
    </div>
  );
}

export default CoffeeCard;
