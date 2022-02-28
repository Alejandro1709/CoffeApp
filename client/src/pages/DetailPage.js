import React, { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import axios from 'axios';

function DetailPage() {
  const { id } = useParams();

  const [currentCoffee, setCurrentCoffee] = useState({});

  useEffect(() => {
    const fetchSingleCoffee = async (id) => {
      try {
        const { data } = await axios.get(`/api/v1/coffees/${id}`);

        setCurrentCoffee(data);
      } catch (error) {
        console.error(error);
      }
    };

    fetchSingleCoffee(id);

    return () => {
      setCurrentCoffee({});
    };
  }, [id]);

  return <div>DetailPage {currentCoffee._id}</div>;
}

export default DetailPage;
