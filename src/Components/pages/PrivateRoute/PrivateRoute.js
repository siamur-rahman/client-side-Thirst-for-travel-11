import React from 'react';
import { Spinner } from 'react-bootstrap';
import { Redirect, Route } from 'react-router';
import useFirebase from '../../hooks/useFirebase';

const PrivateRoute = ({ children, ...rest }) => {
   const { user, isLoading } = useFirebase();
   if (isLoading) {
      return <div className="d-flex mt-5 pt-5  justify-content-center align-items-center"><Spinner animation="border" variant="danger" /></div>
   }
   return (
      <Route
         {...rest}
         render={({ location }) => user.email ? children : <Redirect
            to={{
               pathname: "/login",
               state: { from: location }
            }}
         ></Redirect>
         }
      >
      </Route>
   );
};

export default PrivateRoute;