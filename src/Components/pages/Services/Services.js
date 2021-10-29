import React, { useEffect, useState } from 'react';
import Service from '../Service/Service';
import './Services.css';

const Services = () => {
   const [services, setServices] = useState([])
   useEffect(() => {
      fetch('services.json')
         .then(res => res.json())
         .then(data => setServices(data));
   }, [])

   return (
      <div  >
         <h2 className=" mt-5 d-flex justify-content-center">Our services</h2>
         <hr />


         <img src="img" alt="" />
         <h3>name dynamic</h3>
         <h5 className="text-danger">"description"</h5>


         <div className="service-container">
            {
               services.map(service => <Service
                  key={service.id}
                  service={service}
               ></Service>
               )
            }
         </div>
      </div>
   );
};

export default Services;