import React from 'react';
import { Link } from 'react-router-dom';

function ErrorPage() {
  return (
    <div className='flex flex-col justify-center items-center mt-8'>
      <h1 className='text-3xl'>
        <span className='text-red-400 mr-2'>404</span>Page Not Found.
      </h1>
      <Link className='underline ' to='/'>
        Go back home
      </Link>
    </div>
  );
}

export default ErrorPage;
