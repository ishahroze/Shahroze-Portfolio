import React from 'react'
import Image from 'next/image'
import Link from 'next/link'
function Herosection() {
  return (
    <div className='grid grid-cols-2 bg-bg'>
    <div className='grid grid-cols-2 lg:grid-col-7 mt-8 '>
        <div className='bg-white'>
        <h1 className="text-black mb 4 text-4xl lg:text-6xl font-extrabold">Hello, I'm Shahroze</h1>
        </div>
        <div >
            <div className='pl-8 ' >
           <Image
           src={"/Portfolio2.png"} 
           alt='admin'
           width={200}
           height={400}
           className=' bg-slate-100 w-1/2 h-1/2 rounded-full'
           />
           </div>
        </div>
    </div>
    <div>
      <h1>hello</h1>
    </div>
    </div>
  )
}

export default Herosection