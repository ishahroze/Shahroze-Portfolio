'use client'
import React from 'react';

import { useForm, ValidationError } from '@formspree/react';
import { Menu, XCircle, Instagram, Linkedin, Facebook } from 'lucide-react';
const Contact = () => {
  const [state, handleSubmit] = useForm("xqazevnr");

  if (state.succeeded) {
    return <p>Thanks for contacting us!</p>;
  }

  return (
    <>
    <div className='w-full min-h-screen bg-gradient-to-b from-slate-600 to-black ' id='Contact'>
    <div className='flex justify-center items-center pt-5 pb-16'><p className='text-4xl text-white font-bold inline  border-b-4 border-pink-600 sm:mb-10 mb-1 top'>Get In Touch </p></div>
    <div className='grid sm:grid-cols-2 grid-cols-1  '>
      <div className='col-span-1 order-2 sm:min-h-fit  gap-7'>
    <form onSubmit={handleSubmit} className='gap   border-2 min-h-24 sm:mr-24 sm:pl-6 sm:pr-0  rounded-md sm:pb-14 second pl-8 sm:ml-0 ml-10  mr-10 sm:mb-0 mb-1 pb-5'>
      <div className='mt-5 mb-5 '>
        
        <input
          id="name"
          type="text"
          name="name"
          placeholder='Your/Company Name'
          required
          className=' text-white text-xl bg-transparent border-b-2 '
        />
        <ValidationError 
          prefix="Name" 
          field="name"
          errors={state.errors}
        />
      </div>
      <div>
      <input
          id="Subject"
          type="text"
          name="name"
          placeholder='Subject'
          required
          className=' text-white text-xl bg-transparent border-b-2 mt-10'
        />
      </div>
      <div>
        
        <input
          id="email"
          type="email"
          name="email"
          placeholder='Enter Your Email Adress'
            className=' text-white text-xl bg-transparent border-b-2 mt-14'
          required
        />
        <ValidationError 
          prefix="Email" 
          field="email"
          errors={state.errors}
        />
      </div>
      <div>
        
        <textarea
          id="message"
          name="message"
          placeholder='Write Your Message'
          required
            className=' text-white text-xl pb-0 bg-transparent border-b-2 mt-14 align-baseline'
        />
        <ValidationError 
          prefix="Message" 
          field="message"
          errors={state.errors}
        />
      </div>
      <button type="submit" className='hover:bg-black rounded-full  text-white border-solid  bg-gradient-to-b from-rose-500  to-black border-black text-xl pl-5 pr-5 pb-1 pt-1 font-serif mt-10'  disabled={state.submitting} >
        Send Message
      </button>
    </form></div>
    <div className='col-span-1 order-1 '>
      <div className='flex flex-col ab'><p className='text-3xl sm:pl-16 pl-6 pr-6 font-bold text-white'>Drop your Query let's Work Together!</p>
      <div className='hidden sm:flex ml-8 '>  <img  src={"/greet.png"}
            alt='Myself'
            width={425}
            height={425}
            className=" object-cover pt-9 sm:pl-8 sm:pb-0 pb-6  "
          /></div>
          <div className='sm:hidden flex justify-center justify-items-center'>  <img  src={"/greet.png"}
            alt='Myself'
            width={325}
            height={325}
            className=" object-cover pt-9 sm:pl-8 sm:pb-0 pb-6  "
          /></div>
         
      </div>
     
    </div>
    </div>
    <div className='text-white text-3xl font-thin items-center flex justify-center mt-8 pb-10 flex-row gap-6'><Instagram /> <Linkedin /><Facebook />
 
    </div>
    </div></>
  );
}

export default Contact;
