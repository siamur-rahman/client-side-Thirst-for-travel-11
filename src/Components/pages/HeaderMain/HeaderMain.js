import React from 'react';
import { Carousel } from 'react-bootstrap';
// import Doc from '../../../MyOrders/doc-1.jpg';
// import Doc1 from '../../../MyOrders/doc-2.jpg';
// import Doc2 from '../../../MyOrders/doc-3.jpg';
import './HeadrMain.css';


const HeaderMain = () => {
   return (
      <main style={{ height: '750px' }} className=" header-container bg-primary my-row  p-2 w-100">

         <div className="col-md-12 col-lg-4  offset-md-1   fw-bolder text-white">

            <h1> <span style={{ color: '#F08568  ' }}>Thirst </span> For Travel</h1>

            <h4>Tourists needs of Cuyahoga with <br />our  County for more than 110 years</h4><br /><br />
            <p className='text-white '>We are a fully accredited for the tourists by The Joint Commission, with a certified Level II Trauma Center. Cleveland Clinic Cancer Center at Fairview Hospital Moll Pavilion, located directly across the street from our main building…!</p>

         </div>


      </main>
   );
};

export default HeaderMain;