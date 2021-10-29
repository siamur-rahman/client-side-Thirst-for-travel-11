import React from 'react';
import Footer from '../Footer/Footer';
import Header from '../Header/Header';
import './Login.css';
import Register from '../ReGister/Register';

const Login = () => {
   return (
      <div id="login" >
         <Header></Header>
         <div className="d-flex justify-content-center login">
            <div>
               <Register></Register>
            </div>
         </div>
         <Footer></Footer>
      </div>
   );
};
export default Login;