import React from 'react';
import { NavLink } from 'react-router-dom';
import { BsArrowRightCircle } from 'react-icons/bs'

const Service = (props) => {
  const { service: { name, desc, img } } = props
  return (
    <div className='overflow-hidden rounded-md service-box'>
      <div className='overflow-hidden w-full'>
        <img className='transition-transform duration-500 w-full' src={img} alt="" />
      </div>
      <h1 className='transition-bg duration-500 py-3 text-center text-white bg-text_primary text-xl font-medium uppercase tracking-wide'>{name}</h1>
      <p className='m-4 text-text_gray'>{desc.slice(0, 100)}</p>
      <NavLink className='transition-tracking transition-color duration-500 text-center pl-3 text-text_dark py-3 flex items-center gap-2' to='/home'>Make an Appoinment <BsArrowRightCircle /></NavLink>
    </div>
  );
};

export default Service;