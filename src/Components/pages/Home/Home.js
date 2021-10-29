import React from 'react';
import Footer from '../Footer/Footer';
import Header from '../Header/Header';
import HeaderMain from '../HeaderMain/HeaderMain';
import Services from '../Services/Services';

const Home = () => {
   return (
      <div id="home">
         <Header></Header>
         <HeaderMain></HeaderMain>
         <Services></Services>
         <Footer></Footer>
      </div>
   );
};

export default Home;