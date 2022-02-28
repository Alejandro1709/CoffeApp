import React, { useState, useEffect } from 'react';
import CoffeeCard from './CoffeeCard';
import axios from 'axios';

function CoffeeList() {
  const [coffees, setCoffees] = useState([]);

  useEffect(() => {
    const fetchCoffees = async () => {
      try {
        const { data } = await axios.get('/api/v1/coffees');

        setCoffees(data);
      } catch (error) {
        console.error(error);
      }
    };

    fetchCoffees();

    return () => {
      setCoffees([]);
    };
  }, []);

  return (
    <div className='flex justify-center md:gap-4 flex-col md:flex-row md:flex-wrap mt-8'>
      {coffees &&
        coffees.map((coffee) => (
          <CoffeeCard key={coffee._id} coffee={coffee} />
        ))}
    </div>
  );
}

export default CoffeeList;
