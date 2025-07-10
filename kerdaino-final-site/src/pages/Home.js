
import React from 'react';
import { Link } from 'react-router-dom';

export default function Home() {
  return (
    <div className='p-10 text-center bg-black text-white'>
      <h1 className='text-5xl font-bold mb-6 text-gold-500'>Welcome to Kerdaino™</h1>
      <p className='text-lg max-w-3xl mx-auto mb-6'>
        A revolutionary, AI-powered sports betting hedge fund designed for high-net-worth individuals and professional investors.
        Our proprietary system delivers unmatched performance and consistent alpha returns.
      </p>
      <Link to='/system' className='bg-gold-500 text-black px-6 py-3 rounded hover:bg-yellow-400 font-semibold'>
        Learn How It Works
      </Link>
    </div>
  );
}
