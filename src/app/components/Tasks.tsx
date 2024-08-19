import React from 'react'
import Image from 'next/image'
function Tasks() {
  return (
    <div className='grid  sm:grid-cols-3 grid-cols-1 mt-6 bg-black'>
      <div className=' col-span-1'><div className='relative group experience  border-white rounded-md border-2'  >
    <Image src={"/cart.jpg"} alt='cart' width={300} height={200} className='rounded-md  object-cover '/><div className="absolute inset-0 flex items-center justify-center bg-black bg-opacity-70 text-white opacity-0 group-hover:opacity-100 transition-opacity duration-300">  <div className='h1 flex flex-col text-xl'>Ecommerce Website
<button className='bg-rose-500 text-xs rounded-md p-0 object-fill mt-4'>GitHub Code</button>
<button className='bg-rose-500 text-xs rounded-md p-0 object-fill mt-4'>Visit Website</button>
</div></div></div>
      <div className=' col-span-1'></div>
      <div className=' col-span-1'></div>
    </div></div>
  )
}

export default Tasks