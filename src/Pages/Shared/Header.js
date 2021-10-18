import React, { useState } from 'react';
import { NavLink } from 'react-router-dom';
import logo from '../../images/logo.png'
import { FaBars } from 'react-icons/fa'
import useAuth from '../../hooks/useAuth';

const Header = () => {
  const { user, singOutUser } = useAuth()
  const [isHide, setIsHide] = useState(false)
  const activeStyle = {
    color: '#6F00FF',
  }
  const handleMenu = () => {
    setIsHide(!isHide)
  }
  return (
    <div className="header py-3 lg:py-0 shadow sticky top-0 w-full bg-white">
      <div className='container flex items-center justify-between'>
        <div className="logo">
          <img className='w-52' src={logo} alt="" />
        </div>
        <div className={!isHide ? "navigation hide" : "navigation"}>
          <ul>
            <li>
              <NavLink activeStyle={activeStyle} className='py-5 inline-block px-2 mx-4 text-lg font-medium' to='/home'>Home</NavLink>
              <NavLink activeStyle={activeStyle} className='py-5 inline-block px-2 mx-4 text-lg font-medium' to='/Contact'>Contact</NavLink>
              <NavLink activeStyle={activeStyle} className='py-5 inline-block px-2 mx-4 text-lg font-medium' to='/Pricing'>Pricing</NavLink>
            </li>
          </ul>
        </div>
        <div className="header-btns">
          {
            user.email ?
              <div className='flex gap-4'>
                <button onClick={singOutUser} className='px-6 py-2 bg-primary border-primary rounded-full text-white font-medium transition-bg duration-500'>Sing Out</button>
                <img className='w-12 h-12 rounded-full' src={user.photoURL || user.displayName} alt="" />
              </div>
              :
              <div>
                <NavLink className='px-6 py-2 hover:bg-primary border-primary rounded-full hover:text-white font-medium transition-bg duration-500' to='/login'>Login</NavLink>
                <NavLink className='px-6 py-2 hover:bg-secondary border-secondary ml-3 rounded-full hover:text-white font-medium transition-bg duration-500' to='/registration'>Sing Up</NavLink>
              </div>
          }
        </div>
        <div onClick={handleMenu} className="menubar hidden text-xl cursor-pointer">
          <FaBars />
        </div>
      </div>
    </div>
  );
};

export default Header;