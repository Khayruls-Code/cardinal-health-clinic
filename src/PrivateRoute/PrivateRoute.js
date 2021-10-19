import React from 'react';
import { Redirect, Route } from 'react-router';
import useAuth from '../hooks/useAuth';
import spinner from '../images/spinner.gif'

const PrivateRoute = ({ children, ...rest }) => {
  const { user, isLoading } = useAuth()
  if (isLoading) {
    return <div className='h-screen e-full flex justify-center items-center bg-white'><img src={spinner} alt="" /></div>
  }
  return (
    <Route
      {...rest}
      render={({ location }) =>
        user.email ? (
          children
        ) : (
          <Redirect
            to={{
              pathname: "/login",
              state: { from: location }
            }}
          />
        )
      }
    />
  );
};

export default PrivateRoute;