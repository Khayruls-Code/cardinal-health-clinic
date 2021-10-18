import React from 'react';
import { MdDoubleArrow } from 'react-icons/md'
import { Link } from 'react-router-dom';

const Banner = () => {
  return (
    <>
      <div className='hero flex items-center'>
        <div className="container">
          <h1 className='text-4xl md:text-5xl lg:text-7xl font-extrabold uppercase text-white'>Protect Yourself</h1>
          <p className='md:w-1/2 text-md text-text_primary italic my-3'>Health refers to the physical, mental, and social well-being of a person. A person is said to enjoy good health when he is free from any physical ailments, mental stress.Health is the name of a situation when a person is well physically and mentally fit, has the best interpersonal relationships.</p>
          <button className='px-6 py-2 bg-primary border-primary rounded-full text-white font-medium transition-bg duration-500 hover:bg-transparent border-2' to='/login'>+88-01717-171</button>
          <button className='px-6 py-2 bg-secondary border-secondary ml-3 rounded-full text-white font-medium transition-bg duration-500 hover:bg-transparent border-2' to='/singup'>Contact</button>
        </div>

      </div>
      <div className="container">
        <div className="about-appoinment lg:flex justify-around my-8 lg:my-0">
          <div className='relative flex-1 appoinment-container'>
            <div className="appoinment lg:absolute mx-auto">
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
                <p className='text-text_dark text-center mt-2'>If you have no account, please sing Up first <Link className='text-text_primary' to='/singup'>Sing Up</Link></p>
              </form>
            </div>
          </div>

          <div className="about mt-6 flex-1">
            <h2 className='text-xl flex items-center text-text_dark'><MdDoubleArrow />About us</h2>
            <p className='my-3 text-md text-text_gray font-light'>We provide the best service for all particular diseases.We have experienced dostors.For perticuler problem we have persicular doctors.we have a big appertment.The client who treated by us, is so happy, For poor people we demand a les amount.Dolor sit amet consectetur adipisicing elit. Quibusdam amet sunt tempora nostrum obcaecati molestiae dolorum optio doloremque mollitia ducimus</p>
          </div>
        </div>
      </div>
    </>
  );
};

export default Banner;