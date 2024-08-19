'use client'
import React from 'react'
import Image from 'next/image'
import Link from 'next/link'
function Work() {
  return (
 <div>
    <div className='w-full h-screen bg-slate-800 border border-t-2 border-white  text-white relative' id='Work'>
<div className='flex justify-center items-center mt-5'><p className='text-4xl font-bold inline  border-b-4 border-pink-600'>What I've Built</p></div>
<div className='grid grid-cols-3 mt-6 place-items-center'>
<div className='relative group  border-white rounded-md border-2'  >
    <Image src={"/cart.jpg"} alt='cart' width={300} height={200} className='rounded-md  object-cover '/><div className="absolute inset-0 flex items-center justify-center bg-black bg-opacity-70 text-white opacity-0 group-hover:opacity-100 transition-opacity duration-300">  <div className='h1 flex flex-col text-3xl'>Todo List
<button className='bg-rose-500 text-xs rounded-md p-0 object-fill mt-4'>GitHub Code</button>
<button className='bg-rose-500 text-xs rounded-md p-0 object-fill mt-4'>Visit Website</button>
</div></div>
</div>
<div className='relative group  border-white rounded-md border-2'  ><Image src={"/weather.jpg"} alt='cart' width={300} height={200} className='rounded-md  object-cover '/><div className="absolute inset-0 flex items-center justify-center bg-black bg-opacity-70 text-white opacity-0 group-hover:opacity-100 transition-opacity duration-300">  <div className='h1 flex flex-col text-3xl'>Todo List
<button className='bg-rose-500 text-xs rounded-md p-0 object-fill mt-4'>GitHub Code</button>
<button className='bg-rose-500 text-xs rounded-md p-0 object-fill mt-4'>Visit Website</button>
</div></div></div>
<div><div className='relative group  border-white rounded-md border-2' 
 
><Image src={"/todo.jpg"} alt='cart' width={300} height={200} className='rounded-md  ' /><div className="absolute inset-0 flex items-center justify-center bg-black bg-opacity-70 text-white opacity-0 group-hover:opacity-100 transition-opacity duration-300">  <div className='h1 flex flex-col text-3xl'>Todo List
  <button className='bg-rose-500 text-xs rounded-md p-0 object-fill mt-4'>GitHub Code</button>
  <button className='bg-rose-500 text-xs rounded-md p-0 object-fill mt-4'>Visit Website</button>
  </div></div></div></div>
</div>
    </div></div>
  )
}

export default Work