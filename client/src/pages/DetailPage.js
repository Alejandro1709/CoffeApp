import React, { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import axios from 'axios';

function DetailPage() {
  const { slug } = useParams();

  const [currentCoffee, setCurrentCoffee] = useState({});

  useEffect(() => {
    const fetchSingleCoffee = async (slug) => {
      try {
        const { data } = await axios.get(`/api/v1/coffees/${slug}`);

        setCurrentCoffee(data);
      } catch (error) {
        console.error(error);
      }
    };

    fetchSingleCoffee(slug);

    return () => {
      setCurrentCoffee({});
    };
  }, [slug]);

  return <div>DetailPage {currentCoffee.coffeeSlug}</div>;
}

export default DetailPage;
