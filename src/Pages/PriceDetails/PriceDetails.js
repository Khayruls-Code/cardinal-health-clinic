import React from 'react';
import '../Pricing/Pricing.css'

const PriceDetails = (props) => {
  const { product: { title, desc, img, price } } = props
  return (
    <div className='md:flex pricing-row overflow-hidden mb-8 md:mb-0'>
      <div className="price-info flex-1">
        <h1 className='p-4 text-xl lg:text-2xl'>{title}</h1>
        <p className='text-text_gray px-4 text-md'>{desc.slice(0, 200)}</p>
        <h2 className='px-4 mt-2 text-2xl font-extralight text-text_primary'>Per weak Cost: ${price}</h2>
        <button className='mx-4 py-2 px-8 rounded border-none outline-none text-white bg-secondary mt-3 hover:bg-text_dark mb-5 transition-bg duration-300'>Book Now</button>
      </div>
      <div className="price-img flex-1 overflow-hidden">
        <img className='h-full w-full' src={img} alt="" />
      </div>
    </div>
  );
};

export default PriceDetails;