import React from 'react';

function Navbar() {
  return (
    <div className='flex justify-between items-center bg-white p-4'>
      <div className='text-xl font-bold'>Coffee</div>
      <nav role='navigation'>
        <ul className='flex gap-4'>
          <li>Cart</li>
          <li>Account</li>
        </ul>
      </nav>
    </div>
  );
}

export default Navbar;
