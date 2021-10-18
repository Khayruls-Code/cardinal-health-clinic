import React from 'react';
import logo from '../../../images/logo2.png'
import { BiPaperPlane } from 'react-icons/bi'
import { FiFacebook, FiTwitter, FiInstagram, FiLinkedin, FiYoutube } from 'react-icons/fi'
import { FaGooglePlusG, FaWhatsapp } from 'react-icons/fa'

const Footer = () => {
  return (
    <div className='footer relative'>
      <div className="container">
        <div className="absolute subscribe-box bg-white text-center py-4 rounded-md">
          <h1 className='text-text-dark text-2xl font-semibold'>Subscribe to our Newsletter</h1>
          <div className="flex subscribe-field items-center mx-auto input-box w-3/4 bg-white h-12 border-text_primary mt-2">
            <input className='px-4 border-none outline-none h-full w-full' type="text" placeholder='Enter Your Email' />
            <button className="h-full w-24 bg-text_primary flex items-center justify-center text-3xl text-white"><BiPaperPlane /></button>
          </div>
        </div>
        <div className='grid md:grid-cols-3 gap-8'>
          <div className="col">
            <div className="logo">
              <img className='w-52' src={logo} alt="" />
            </div>
            <p className='text-white mt-5 text-sm'>Health refers to the physical, mental, and social well-being of a person. A person is said to enjoy good health when he is free from any physical ailments, mental stress.Health is the name of a situation when a person is well physically and mentally fit, has the best interpersonal relationships.</p>
          </div>
          <div className="col">
            <ul className='text-white flex flex-wrap gap-6'>
              <li><a href="/">Home</a></li>
              <li><a href="/">Service</a></li>
              <li><a href="/">Doctors</a></li>
              <li><a href="/">Review</a></li>
              <li><a href="/">Contact</a></li>
            </ul>
            <h1 className='text-2xl text-white mt-4'>Importtant links</h1>
            <ul className='text-white flex flex-wrap gap-6 mt-2'>
              <li><a href="/">Term and Service</a></li>
              <li><a href="/">Privecy</a></li>
              <li><a href="/">Policy</a></li>
              <li><a href="/">Security Terms</a></li>
            </ul>
          </div>
          <div className="col">
            <iframe className='w-full h-60 border-none rounded-md' title='mini-map' src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d57498.000184901226!2d89.22702583514894!3d25.74991157146866!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x39e32de6fca6019b%3A0x9fa496e687f818c8!2sRangpur!5e0!3m2!1sen!2sbd!4v1634569481569!5m2!1sen!2sbd" loading="lazy"></iframe>
          </div>
        </div>
      </div>
      <div className='bg-text_dark py-6 mt-12'>
        <div className="container md:flex items-center justify-between ">
          <p className='text-white md:text-left text-center'>&copy;Copyright in 2021 by Colourless Khayrul</p>
          <div className="socila flex items-center justify-center gap-5 text-text_primary mt-2">
            <a className='hover:text-secondary text-2xl' href="/"><FiFacebook /></a>
            <a className='hover:text-secondary text-2xl' href="/"><FiTwitter /></a>
            <a className='hover:text-secondary text-2xl' href="/"><FiInstagram /></a>
            <a className='hover:text-secondary text-2xl' href="/"><FiLinkedin /></a>
            <a className='hover:text-secondary text-2xl' href="/"><FaGooglePlusG /></a>
            <a className='hover:text-secondary text-2xl' href="/"><FiYoutube /></a>
            <a className='hover:text-secondary text-2xl' href="/"><FaWhatsapp /></a>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Footer;