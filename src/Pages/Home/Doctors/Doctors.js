import React, { useEffect, useState } from 'react';
import Doctor from '../Doctor/Doctor';

const Doctors = () => {
  const [doctors, setDoctors] = useState([])
  useEffect(() => {
    fetch('/doctorData.json')
      .then(res => res.json())
      .then(data => setDoctors(data))
  }, [])
  return (
    <div className='mb-12'>
      <div className='container'>
        <div className="section-title">
          <h1 className='uppercase text-4xl font-bold text-secondary'><span className='text-text_dark'>Our</span> Doctors</h1>
          <p className='w-2/5 text-text_gray italic'>Our Doctors are well experienced, They always do their job successfully.They are our proud</p>
        </div>
        <div className="grid sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4 mt-8">
          {
            doctors.map(doctor => <Doctor
              key={doctor.id}
              doctor={doctor}
            />)
          }
        </div>
      </div>
    </div>
  );
};

export default Doctors;