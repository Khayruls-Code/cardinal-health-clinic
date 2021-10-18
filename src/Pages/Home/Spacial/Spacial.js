import React, { useEffect, useState } from 'react';
import { FcPortraitMode, FcCollect, FcBullish, FcAdvance } from 'react-icons/fc'

const Spacial = () => {
  const [spacials, setSpacials] = useState([])
  useEffect(() => {
    fetch('/spacialData.json')
      .then(res => res.json())
      .then(data => setSpacials(data))
  }, [])
  return (
    <div className='mb-32 mt-16'>
      <div className='container'>
        <div className="section-title">
          <h1 className='uppercase text-4xl text-center font-semibold text-primary'><span className='text-text_dark'>Why Patient</span> Choose Us</h1>
          <p className='text-center italic text-text_gray'>We provide the best service to our patient. Our Employee Behavior is vary friendly</p>
        </div>
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-4">
          {
            spacials.map(spacial => <SpacialDetails
              key={spacial.id}
              spacial={spacial}
            />)
          }
        </div>
      </div>
    </div>
  );
};

const SpacialDetails = (props) => {
  const { spacial: { title, desc, id } } = props
  return (
    <div className=' spacial-box relative rounded-lg mt-16'>
      <div className="icon absolute flex items-center justify-center text-4xl rounded-full bg-text_gray">
        {
          id === 1 ? <FcPortraitMode /> : id === 2 ? <FcCollect /> : <FcBullish />
        }
      </div>
      <h1 className='text-xl font-medium text-text_dark'>{title}</h1>
      <p className='text-text_gray my-2'>{desc}</p>
      <button className='flex items-center gap-1 text-secondary transition-tracking duration-300'>See More<FcAdvance /></button>
    </div>
  )
}

export default Spacial;