import React from 'react';
import Banner from '../Banner/Banner';
import Services from '../Services/Services';
import '../Home.css'
import Doctors from '../Doctors/Doctors';
import Spacial from '../Spacial/Spacial';

const Home = () => {
  return (
    <div>
      <Banner />
      <Services />
      <Doctors />
      <Spacial />
    </div>
  );
};

export default Home;