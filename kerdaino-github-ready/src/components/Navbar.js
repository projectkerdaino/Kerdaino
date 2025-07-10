
import React from 'react';
import { Link } from 'react-router-dom';

export default function Navbar() {
  return (
    <nav className='flex justify-between items-center p-4 bg-black text-white'>
      <h1 className='text-xl font-bold text-yellow-400'>Kerdaino™</h1>
      <ul className='flex space-x-4'>
        <li><Link to='/'>Home</Link></li>
        <li><Link to='/about'>About</Link></li>
        <li><Link to='/system'>Our System</Link></li>
        <li><Link to='/careers'>Careers</Link></li>
        <li><Link to='/contact'>Contact</Link></li>
      </ul>
    </nav>
  );
}
