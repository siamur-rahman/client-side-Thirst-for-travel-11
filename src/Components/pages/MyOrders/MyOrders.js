import React from 'react';
import Header from '../Header/Header';
import Footer from '../Footer/Footer';
import './MyOrders.css';

import Order from '../Orders/Order';


const experts = [
   {
      // img: doc1,
      name: 'Dr.Amena',
      expertize: 'Special Cardiologists'
   },
   {
      // img: doc2,
      name: 'Dr.ROHIMA',
      expertize: 'Neurologists'
   },
   {
      // img: doc3,
      name: 'Dr.Zakaria Smith',
      expertize: 'Dermatology'
   },
   {
      // img: doc4,
      name: 'Dr. Sakib Anderson',
      expertize: 'Orthopaedics'
   },
]

const MyOrders = () => {
   return (
      <div id="myOrder" className="Order">
         <Header></Header>
         <div className="container mb-5">
            <h2 className="text-primary m-3">My Orders</h2>
            <div className="row">
               {
                  experts.map(expert => <Order
                     key={expert.name}
                     expert={expert}
                  >

                  </Order>)
               }
            </div>
         </div>
         <Footer></Footer>
      </div>
   );
};

export default MyOrders;
