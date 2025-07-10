
import React from 'react';

export default function Contact() {
  return (
    <div className='p-10 bg-black text-white'>
      <h2 className='text-4xl font-bold mb-6 text-gold-500'>Get In Touch</h2>
      <form action='https://formspree.io/f/moqzvlwk' method='POST' className='grid gap-4 max-w-xl'>
        <input type='text' name='name' placeholder='Your Name' required className='p-3 rounded bg-gray-800 text-white' />
        <input type='email' name='email' placeholder='Your Email' required className='p-3 rounded bg-gray-800 text-white' />
        <textarea name='message' rows='4' placeholder='Your Message' required className='p-3 rounded bg-gray-800 text-white'></textarea>
        <button type='submit' className='bg-gold-500 text-black py-2 px-4 rounded hover:bg-yellow-400 font-semibold'>Send</button>
      </form>
    </div>
  );
}
