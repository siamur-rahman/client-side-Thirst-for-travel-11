import React from 'react';
import { Link } from 'react-router-dom';
import Doc from '../../../404.jpg'

import './Error.css';

const Error = () => {
   return (
      <div className=" error">
         <div className=" ">

            <h1 className="text-danger mt-5">Cant found error 404 !!! <Link to="/"><button className="btn btn-primary">Go Back</button>
            </Link></h1>
            <img style={{ width: '100%' }} src={Doc} alt="" />

         </div>
      </div>
   );
};

export default Error;