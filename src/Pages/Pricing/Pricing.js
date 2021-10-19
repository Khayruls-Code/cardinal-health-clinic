import React, { useEffect, useState } from 'react';
import PriceDetails from '../PriceDetails/PriceDetails';

const Pricing = () => {
  const [products, setProducts] = useState([])
  useEffect(() => {
    fetch('/pricingData.json')
      .then(res => res.json())
      .then(data => setProducts(data))
  }, [])
  return (
    <div className='mt-12 mb-28'>
      <div className='small-container'>
        {
          products.map(product => <PriceDetails
            key={product.id}
            product={product}
          />)
        }
      </div>
    </div>
  );
};

export default Pricing;