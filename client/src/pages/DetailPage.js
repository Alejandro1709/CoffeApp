import React, { useState, useEffect } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import { useSelector, useDispatch } from 'react-redux';
import { handleGetSingleCoffee } from '../actions/coffeeActions';
import CoffeCard from '../components/CoffeeCard';

function DetailPage() {
  const { slug } = useParams();

  const [qty, setQty] = useState(1);
  const [type, setType] = useState('');

  const dispatch = useDispatch();

  const navigate = useNavigate();

  const getSingleCoffee = useSelector((state) => state.getSingleCoffee);
  const { coffee, loading, error } = getSingleCoffee;

  const handleAddToCard = (e) => {
    e.preventDefault();

    navigate(`/cart/${coffee.coffeeSlug}?qty=${qty}&type=${type}`);
  };

  useEffect(() => {
    dispatch(handleGetSingleCoffee(slug));
  }, [dispatch, slug]);

  loading && <span>loading...</span>;

  return (
    <div className='mt-8'>
      {error && <span>{error}</span>}
      {coffee && coffee !== null ? (
        <div className='flex flex-col md:flex-row md:gap-3 justify-center items-center'>
          {/* Coffee Preview */}
          <CoffeCard coffee={coffee} disabled />
          {/* Coffee Form */}
          <div className=''>
            <h3 className='text-2xl font-bold'>{coffee.coffeeName}</h3>
            <form onSubmit={handleAddToCard}>
              <div className='m-3'>
                <select
                  name='coffeeType'
                  className='border p-2 rounded-md'
                  onChange={(e) => setType(e.target.value)}
                  required
                >
                  <option>-- SELECT COFFEE SIZE --</option>
                  {coffee.coffeePrices &&
                    coffee.coffeePrices.map((price) => (
                      <option key={price._id} value={price.type.toLowerCase()}>
                        {price.type} - S/. {price.price}
                      </option>
                    ))}
                </select>
              </div>
              <div className='m-3'>
                <input
                  className='border p-2 rounded-md w-full'
                  type='number'
                  name={qty}
                  placeholder='Quantity'
                  min={1}
                  defaultValue={1}
                  onChange={(e) => setQty(e.target.value)}
                  required
                />
              </div>
              <div className='mb-3'>
                <button
                  type='submit'
                  className='bg-green-800 text-white p-2 w-full rounded-md hover:bg-green-900'
                >
                  Add to cart
                </button>
              </div>
            </form>
          </div>
        </div>
      ) : (
        <span>No Coffee Found</span>
      )}
    </div>
  );
}

export default DetailPage;
