import React from 'react';
import { FiArrowUpRight, FiFacebook, FiTwitter, FiInstagram, FiLinkedin } from 'react-icons/fi'
import { FaGooglePlusG } from 'react-icons/fa'

const Doctor = (props) => {
  const { doctor: { name, img, about, spacial } } = props
  return (
    <div className="doctor-box rounded-md overflow-hidden">
      <div className="doctor-img overflow-hidden w-full h-auto">
        <img className='w-full' src={img} alt="" />
        <button className='flex items-center hover:bg-text_primary hover:text-white py-1 px-3 border-text_dark hover:border-text_primary border-2 w-2/3'>Book Appoinment<FiArrowUpRight /></button>
      </div>
      <h1 className='text-xl text-text_primary px-4 py-2'>{name}</h1>
      <h2 className='pl-4 text-text_dark italic'>--{spacial}</h2>
      <p className='px-4 text-sm py-2 text-text_gray'>{about}</p>
      <div className="socila flex items-center justify-center py-3 gap-3 text-text_primary mt-2">
        <a className='hover:text-secondary' href="/"><FiFacebook /></a>
        <a className='hover:text-secondary' href="/"><FiTwitter /></a>
        <a className='hover:text-secondary' href="/"><FiInstagram /></a>
        <a className='hover:text-secondary' href="/"><FiLinkedin /></a>
        <a className='hover:text-secondary' href="/"><FaGooglePlusG /></a>
      </div>
    </div>
  );
};

export default Doctor;