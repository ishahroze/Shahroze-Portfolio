import React from 'react'
import Image from 'next/image'
import Link from 'next/link'

function Experience() {
  return (
    <div className='w-full min-h-screen bg-gradient-to-b to-slate-600 from-black pb-5   text-white relative' id='Experience'>
<div className='flex justify-center items-center pt-8'><p className='text-4xl font-bold inline  border-b-4 border-pink-600 top'>What I&apos;ve Built</p></div>
<div className='grid sm:grid-cols-3 grid-cols-1 gap-y-5 mt-6 place-items-center'>
<div className='relative group experience  border-white rounded-md border-2'  >
    <Image src={"/cart.jpg"} alt='cart' width={300} height={200} className='rounded-md  object-cover '/><div className="absolute inset-0 flex items-center justify-center bg-black bg-opacity-70 text-white opacity-0 group-hover:opacity-100 transition-opacity duration-300">  <div className='h1 flex flex-col text-xl'>Ecommerce Website
<button className='bg-rose-500 text-xs rounded-md p-0 object-fill mt-4'>GitHub Code</button>
<button className='bg-rose-500 text-xs rounded-md p-0 object-fill mt-4'>Visit Website</button>
</div></div>
</div>
<div className='relative group experience border-white  rounded-md border-2'  ><Image src={"/weather.jpg"} alt='cart' width={300} height={200} className='rounded-md   object-cover transition-transform duration-500 group-hover:scale-100 '/><div className="absolute inset-0 flex items-center justify-center bg-black bg-opacity-70 text-white opacity-0 group-hover:opacity-100 transition-opacity  duration-300">  <div className='h1 flex flex-col text-xl '>Weather API App
<button className='bg-rose-500 text-xs rounded-md p-0 object-fill mt-4'>GitHub Code</button>
<button className='bg-rose-500 text-xs rounded-md p-0 object-fill mt-4'>Visit Website</button>
</div></div></div>
<div><div className='relative group experience border-white rounded-md border-2' 
 
><Image src={"/todo.jpg"} alt='cart' width={300} height={200} className='rounded-md  ' /><div className="absolute inset-0 flex items-center justify-center bg-black bg-opacity-70 text-white opacity-0 group-hover:opacity-100 transition-opacity duration-300">  <div className='h1 flex flex-col text-3xl'>Todo List
  <button className='bg-rose-500 text-xs rounded-md p-0 object-fill mt-4'>GitHub Code</button>
  <button className='bg-rose-500 text-xs rounded-md p-0 object-fill mt-4'>Visit Website</button>
  </div></div></div></div>
</div>
<div className="flex justify-items-center justify-center items-center"><Link href="/Tasks"></Link></div>

    </div>
  )
}

export default Experience