import React from 'react';
import { AiOutlineMail } from 'react-icons/ai';
import { BsFacebook, BsGoogle } from 'react-icons/bs';
import { FaKey } from 'react-icons/fa';
import { Link, NavLink, useLocation, useHistory } from 'react-router-dom';
import useAuth from '../../hooks/useAuth';

const Login = () => {
  const { singInUsingGoogle, singInUsingFacebook, error, handleEmail, handlePassword, singInUsingPassword } = useAuth()

  const location = useLocation()
  const location_url = location.state?.from
  console.log(location_url)
  const history = useHistory()
  const activeStyle = {
    backgroundColor: "#1e3799",
  }

  const handlePaswordSingIn = (e) => {
    e.preventDefault()
    singInUsingPassword()
      .then(() => {
        history.push(location_url)
      })
  }

  const handelGoogle = () => {
    singInUsingGoogle()
      .then(() => {
        history.push(location_url)
      })
  }
  const handelFacebook = () => {
    singInUsingFacebook()
      .then(() => {
        history.push(location_url)
      })
  }


  return (
    <div className='flex items-center justify-center login-regi'>
      <div className="form-container w-100% md:w-2/5 rounded-md overflow-hidden">
        <div className="text-white font-medium text-xl form-header bg-secondary w-full flex items-center justify-between text-center">
          <NavLink activeStyle={activeStyle} className='flex-1' to='/login'>Login</NavLink>
          <NavLink activeStyle={activeStyle} className='flex-1' to='registration'>Registration</NavLink>
        </div>
        <form onSubmit={handlePaswordSingIn} className='p-5'>
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
          <p className='text-primary text-center my-2'>{error}</p>
          <input className='py-2.5 border-none outline-none rounded bg-secondary text-md tracking-wide text-white' type="submit" value="Login" />
        </form>
        <p className='text-center mb-3'>New Here? <Link className='text-text_primary' to='/registration'>Registration</Link></p>
        <p className='text-center text-xl font-extralight text-text_gray pb-3'>or</p>
        <div className="other-login pb-4 flex justify-center items-center gap-4">
          <button onClick={handelGoogle} className='google w-1/3 py-3 px-4 text-white rounded-full flex items-center gap-2 justify-center text-lg'><BsGoogle />Google</button>
          <button onClick={handelFacebook} className='facebook w-1/3 py-3 px-4 text-white rounded-full flex items-center gap-2 justify-center text-lg'><BsFacebook />Facebook</button>
        </div>
      </div>
    </div>
  );
};

export default Login;