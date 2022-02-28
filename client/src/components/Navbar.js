import React from 'react';
import { Link } from 'react-router-dom';

function Navbar() {
  return (
    <div className='flex justify-between items-center bg-white p-4'>
      <Link to='/' className='text-xl font-bold'>
        Coffee
      </Link>
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
