import React from 'react';
import { AiOutlineMail } from 'react-icons/ai';
import { BsFacebook, BsGoogle } from 'react-icons/bs';
import { FaKey } from 'react-icons/fa';
import { Link, NavLink } from 'react-router-dom';

const Login = () => {
  const activeStyle = {
    backgroundColor: "#1e3799",
  }
  return (
    <div className='flex items-center justify-center login-regi'>
      <div className="form-container w-100% md:w-2/5 rounded-md overflow-hidden">
        <div className="text-white font-medium text-xl form-header bg-secondary w-full flex items-center justify-between text-center">
          <NavLink activeStyle={activeStyle} className='flex-1' to='/login'>Login</NavLink>
          <NavLink activeStyle={activeStyle} className='flex-1' to='registration'>Registration</NavLink>
        </div>
        <form className='p-5'>
          <div className='form-control flex items-center w-full h-12 rounded-md'>
            <div className='icon bg-text_primary h-full flex items-center justify-center'>
              <AiOutlineMail />
            </div>
            <input className='h-full px-4 border-none outline-none' type="Email" placeholder='Email' />
          </div>
          <div className='form-control flex items-center w-full h-12 rounded-md'>
            <div className='icon bg-text_primary h-full flex items-center justify-center'>
              <FaKey />
            </div>
            <input className='h-full px-4 border-none outline-none' type="password" placeholder='Password' />
          </div>
          <input className='py-2.5 border-none outline-none rounded bg-secondary text-md tracking-wide text-white' type="submit" value="Regeitration" />
        </form>
        <p className='text-center mb-3'>New Here? <Link className='text-text_primary' to='/registration'>Registration</Link></p>
        <p className='text-center text-xl font-extralight text-text_gray pb-3'>or</p>
        <div className="other-login pb-4 flex justify-center items-center gap-4">
          <button className='google w-1/3 py-3 px-4 text-white rounded-full flex items-center gap-2 justify-center text-lg'><BsGoogle />Google</button>
          <button className='facebook w-1/3 py-3 px-4 text-white rounded-full flex items-center gap-2 justify-center text-lg'><BsFacebook />Facebook</button>
        </div>
      </div>
    </div>
  );
};

export default Login;