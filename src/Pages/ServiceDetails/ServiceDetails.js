import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router';
import { Link } from 'react-router-dom';
import './ServiceDetails.css'

const ServiceDetails = () => {
  const { serviceId } = useParams()
  const [services, setServices] = useState([])
  const [service, setService] = useState({})

  //service data loading
  useEffect(() => {
    fetch('/servicesData.json')
      .then(res => res.json())
      .then(data => setServices(data))
  }, [])

  //getting perticuler data
  useEffect(() => {
    if (services.length) {
      const matched = services.find(service => parseInt(service.id) === parseInt(serviceId))
      setService(matched)
    }
  }, [services])

  const { name, img, desc } = service

  return (
    <div className="service-details mt-12 mb-36">
      <div className='container md:flex justify-between gap-12'>
        <div className="left mb-12 md:mb-0">
          <img className='w-full' src={img} alt="" />
          <h1 className='text-3xl font-semibold my-4 uppercase text-text_dark'>{name}</h1>
          <p className='text-text_gray italic text-lg'>{desc}</p>
          <div className="appoinment w-100 mt-8">
            <h1 className='text-2xl border-b-2 pb-2 text-text_primary mb-3'>Appoinment Form</h1>
            <form>
              <div>
                <input className='px-2 w-full my-2 py-2 text-md outline-none rounded' type="text" placeholder='Your Name' />
              </div>
              <div>
                <input className='px-2 w-full my-2 py-2 text-md outline-none rounded' type="text" placeholder="Doctor's Name" />
              </div>
              <div>
                <input className='px-2 w-full my-2 py-2 text-md outline-none rounded' type="Number" placeholder="Phone Number" />
              </div>
              <div>
                <input className='px-2 w-full my-2 py-2 text-md outline-none rounded' type="text" placeholder="Service Type" />
              </div>
              <input className='w-full py-2 bg-secondary border-secondary rounded-md mt-2 text-white font-medium transition-bg duration-500 border-2' type="submit" value='Book An Appoinment' />
            </form>
          </div>
        </div>
        <div className="right">
          <Link to='/' className='transition-tracking transition-color duration-500 text-center pl-3 text-text_dark py-3 flex items-center gap-2'>FAMILY PHYSICIAN</Link>
          <Link to='/' className='transition-tracking transition-color duration-500 text-center pl-3 text-text_dark py-3 flex items-center gap-2'>EMERGENCY TEAM</Link>
          <Link to='/' className='transition-tracking transition-color duration-500 text-center pl-3 text-text_dark py-3 flex items-center gap-2'>CARDIOLOGY</Link>
          <Link to='/' className='transition-tracking transition-color duration-500 text-center pl-3 text-text_dark py-3 flex items-center gap-2'>COVID-19 SERVICE</Link>
          <Link to='/' className='transition-tracking transition-color duration-500 text-center pl-3 text-text_dark py-3 flex items-center gap-2'>PEIDATRY</Link>
          <Link to='/' className='transition-tracking transition-color duration-500 text-center pl-3 text-text_dark py-3 flex items-center gap-2'>SURGERY</Link>
        </div>
      </div>
    </div>
  );
};

export default ServiceDetails;