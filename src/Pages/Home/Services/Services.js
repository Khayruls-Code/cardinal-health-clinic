import React, { useEffect, useState } from 'react';
import Service from '../Service/Service';

const Services = () => {
  const [services, setServices] = useState([])
  useEffect(() => {
    fetch('/servicesData.json')
      .then(res => res.json())
      .then(data => setServices(data))
  }, [])
  return (
    <div className="services my-16">
      <div className='container'>
        <div className="section-title">
          <h1 className='uppercase text-6xl text-center font-bold text-primary'><span className='text-text_dark'>Our</span> Services</h1>
        </div>
        <div className="grid md:grid-cols-2 lg:grid-cols-3 mt-12 gap-5">
          {
            services.map(service => <Service
              key={service.id}
              service={service}
            />)
          }
        </div>
      </div>
    </div>
  );
};

// https: //i.ibb.co/xDhrHWK/service7.jpg
//https: //i.ibb.co/8Bwtfz5/service8.jpg}

export default Services;