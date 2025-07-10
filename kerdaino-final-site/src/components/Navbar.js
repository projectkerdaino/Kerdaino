
import React from 'react';
import { Link } from 'react-router-dom';
import logo from '../assets/logo.png';

export default function Navbar() {
  return (
    <nav className='flex justify-between items-center p-4 bg-black text-white shadow-md'>
      <div className='flex items-center space-x-2'>
        <img src={logo} alt='Kerdaino Logo' className='w-10 h-10 rounded-full' />
        <span className='text-xl font-bold text-gold-500'>Kerdaino™</span>
      </div>
      <ul className='flex space-x-4 text-sm md:text-base'>
        <li><Link to='/'>Home</Link></li>
        <li><Link to='/about'>About</Link></li>
        <li><Link to='/system'>Our System</Link></li>
        <li><Link to='/careers'>Careers</Link></li>
        <li><Link to='/contact'>Contact</Link></li>
      </ul>
    </nav>
  );
}
