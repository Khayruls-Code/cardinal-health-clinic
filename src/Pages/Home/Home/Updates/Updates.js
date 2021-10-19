import React from 'react';

const Updates = () => {
  return (
    <div className="updates mb-28 mt-16">
      <div className='small-container'>
        <h1 className='text-3xl text-text_dark border-b-2 pb-2'>Recent Covid Situation Over the World</h1>
        <p className='text-justify mb-3 mt-5'>The Weekly Epidemiological Update provides an overview of the global, regional and country-level COVID-19 cases and deaths, highlighting key data and trends; as well as other pertinent epidemiological information concerning the COVID-19 pandemic</p>
        <p className='text-justify mb-3'>Refugees of 55 years-old and above received last week the second dose of COVID-19 vaccine in the Rohingya refugee camps in Cox’s Bazar. A total of 33 386 people – 19 919 male and 13 467 female – completed the required doses of vaccination throughout a 6-day vaccine roll-out that, despite initial uncertainty and hesitancy, registered a high uptake among a population with a history of limited health seeking behavior</p>
        <p className='text-justify' mb-3>In the early morning of 23 September, Nur Hossain was the first male refugee to arrive to the Gonoshasthaya Kendra (GK) Primary Health Care facility in camp 4 to receive his second dose of the vaccine. “I came with my wife. We have a long way back home and we wanted to make sure we received the vaccine”, he said. Few meters away, in the female waiting area, Soyoda Khatun was also waiting for her turn accompanied by other early riser women: “I want to get the vaccine so that I don’t get affected by the coronavirus”. In the future, she said, she would also like the younger members of her family to receive it and be protected</p>
        <h1 className='text-3xl text-text_dark border-b-2 pb-2 mt-8'>Available all Vaccine</h1>
        <ul className='my-5'>
          <li className='text-lg font-semibold ml-4 my-3'>Pfizer-BioNTech</li>
          <li className='text-lg font-semibold ml-4 my-3'>Moderna</li>
          <li className='text-lg font-semibold ml-4 my-3'>Johnson & Johnson</li>
          <li className='text-lg font-semibold ml-4 my-3'>Oxford-AstraZeneca</li>
          <li className='text-lg font-semibold ml-4 my-3'>Novavax</li>
        </ul>
        <h1 className='text-3xl text-text_dark border-b-2 pb-2 mt-8 mb-5'>Available all Vaccine</h1>
        <div className="vaccine-regi">
          <form className='p-8'>
            <div className='form-control flex items-center w-full h-12 rounded-md'>
              <input className='h-full px-4 border-none outline-none' type="text" placeholder='Your Name' />
            </div>
            <div className='form-control flex items-center w-full h-12 rounded-md'>
              <input className='h-full px-4 border-none outline-none' type="text" placeholder='National Id No.' />
            </div>
            <div className='form-control flex items-center w-full h-12 rounded-md'>
              <input className='h-full px-4 border-none outline-none' type="text" placeholder='Present Address' />
            </div>
            <div className='form-control flex items-center w-full h-12 rounded-md'>
              <input className='h-full px-4 border-none outline-none' type="text" placeholder='Parmanent Address' />
            </div>
            <div className='form-control flex items-center w-full h-12 rounded-md'>
              <input className='h-full px-4 border-none outline-none' type="text" placeholder='Age' />
            </div>
            <div className='form-control flex items-center w-full h-12 rounded-md'>
              <input className='h-full px-4 border-none outline-none' type="text" placeholder='Phone Number' />
            </div>
            <div className='form-control flex items-center w-full h-12 rounded-md'>
              <input className='h-full px-4 border-none outline-none' type="text" placeholder='Select Your Center' />
            </div>
            <div className='form-control flex items-center w-full h-12 rounded-md'>
              <input className='h-full px-4 border-none outline-none' type="text" placeholder='Select Your Categorie' />
            </div>
            <p className='text-primary text-center my-2'></p>
            <input className='py-2.5 border-none outline-none rounded bg-secondary text-md tracking-wide text-white w-1/3 cursor-pointer' type="submit" value='Registration' />
          </form>
        </div>
      </div>
    </div>
  );
};

export default Updates;