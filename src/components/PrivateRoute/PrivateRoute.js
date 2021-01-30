import React, { useContext } from 'react';
import { Redirect, Route } from 'react-router-dom';
import { UserContext } from '../../App';

const PrivateRoute = ({ children, ...rest }) => {
    const [newLogin] = useContext(UserContext);
    console.log(newLogin);
    return (
        <Route
      {...rest}
      render={({ location }) =>
        newLogin.user ? (
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