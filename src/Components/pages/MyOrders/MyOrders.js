import React from 'react';
import Header from '../Header/Header';
import Footer from '../Footer/Footer';
import './MyOrders.css';

// import Order from '../Orders/Order';


const MyOrders = () => {
   return (
      <div id="myOrder" className="Order">
         <Header></Header>
         <div className="container mb-5">
            <h2 className="text-primary m-3">My Orders</h2>
            <div className="row">

            </div>
         </div>
         <Footer></Footer>
      </div>
   );
};

export default MyOrders;
