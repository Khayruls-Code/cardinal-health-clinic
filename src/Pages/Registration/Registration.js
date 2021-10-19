import React from 'react';
import { Link, NavLink, useHistory } from 'react-router-dom';
import { FaUserAlt, FaImage, FaKey } from 'react-icons/fa';
import { AiOutlineMail } from 'react-icons/ai';
import { BsFacebook, BsGoogle } from 'react-icons/bs'
import './Registration.css';
import useAuth from '../../hooks/useAuth';

const Registration = () => {
  const { singInUsingGoogle, singInUsingFacebook, handleName, handleEmail, handleImgUrl, handlePassword, handleConPassword, singUpUsingPassword, error } = useAuth()
  const history = useHistory()
  const activeStyle = {
    backgroundColor: "#1e3799",
  }

  const handelGoogle = () => {
    singInUsingGoogle()
      .then(() => {
        history.push('/')
      })
  }
  const handelFacebook = () => {
    singInUsingFacebook()
  }

  return (
    <div className='flex items-center justify-center login-regi'>
      <div className="form-container w-100% md:w-2/5 rounded-md overflow-hidden">
        <div className="text-white font-medium text-xl form-header bg-secondary w-full flex items-center justify-between text-center">
          <NavLink activeStyle={activeStyle} className='flex-1' to='/login'>Login</NavLink>
          <NavLink activeStyle={activeStyle} className='flex-1' to='registration'>Registration</NavLink>
        </div>
        <form onSubmit={singUpUsingPassword} className='p-5'>
          <div className='form-control flex items-center w-full h-12 rounded-md'>
            <div className='icon bg-text_primary h-full flex items-center justify-center'>
              <FaUserAlt />
            </div>
            <input onBlur={handleName} className='h-full px-4 border-none outline-none' type="text" placeholder='Your Name' />
          </div>
          <div className='form-control flex items-center w-full h-12 rounded-md'>
            <div className='icon bg-text_primary h-full flex items-center justify-center'>
              <FaImage />
            </div>
            <input onBlur={handleImgUrl} className='h-full px-4 border-none outline-none' type="text" placeholder='Image url(optional)' />
          </div>
          <div className='form-control flex items-center w-full h-12 rounded-md'>
            <div className='icon bg-text_primary h-full flex items-center justify-center'>
              <AiOutlineMail />
            </div>
            <input onBlur={handleEmail} className='h-full px-4 border-none outline-none' type="Email" placeholder='Email' />
          </div>
          <div className='form-control flex items-center w-full h-12 rounded-md'>
            <div className='icon bg-text_primary h-full flex items-center justify-center'>
              <FaKey />
            </div>
            <input onBlur={handlePassword} className='h-full px-4 border-none outline-none' type="password" placeholder='Password' />
          </div>
          <div className='form-control flex items-center w-full h-12 rounded-md'>
            <div className='icon bg-text_primary h-full flex items-center justify-center'>
              <FaKey />
            </div>
            <input onBlur={handleConPassword} className='h-full px-4 border-none outline-none' type="password" placeholder='Confirm password' />
          </div>
          <p className='text-primary text-center my-2'>{error}</p>
          <input className='py-2.5 border-none outline-none rounded bg-secondary text-md tracking-wide text-white' type="submit" value='Registration' />
        </form>
        <p className='text-center mb-3'>Already have an account? <Link className='text-text_primary' to='/login'>Login</Link></p>
        <p className='text-center text-xl font-extralight text-text_gray pb-3'>or</p>
        <div className="other-login pb-4 lg:flex justify-center items-center gap-4">
          <button onClick={handelGoogle} className='mx-auto lg:mx-0 mb-3 google w-2/3 lg:w-1/3 py-3 px-4 text-white rounded-full flex items-center gap-2 justify-center text-lg'><BsGoogle />Google</button>
          <button onClick={handelFacebook} className='mx-auto lg:mx-0 mb-3 facebook w-2/3 lg:w-1/3 py-3 px-4 text-white rounded-full flex items-center gap-2 justify-center text-lg'><BsFacebook />Facebook</button>
        </div>
      </div>
    </div>
  );
};

export default Registration;