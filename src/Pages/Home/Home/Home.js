import React from 'react';
import Header from '../../Shared/Header';
import Banner from '../Banner/Banner';
import Services from '../Services/Services';
import '../Home.css'
import Doctors from '../Doctors/Doctors';

const Home = () => {
  return (
    <div>
      <Header />
      <Banner />
      <Services />
      <Doctors />
    </div>
  );
};

export default Home;