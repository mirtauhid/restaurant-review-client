import React, { useContext } from 'react';
import { Redirect, Route } from 'react-router-dom';
import { GlobalContext } from './MainContexts';

const PrivateRoute = ({ children, ...rest }) => {
  const [data, setData] = useContext(GlobalContext);
  return (
    <Route
      {...rest}
      render={({ location }) =>
        data.token && sessionStorage.getItem('token') ? (
          children
        ) : (
          <Redirect
            to={{
              pathname: '/signin',
              state: { from: location },
            }}
          />
        )
      }
    />
  );
};

export default PrivateRoute;
