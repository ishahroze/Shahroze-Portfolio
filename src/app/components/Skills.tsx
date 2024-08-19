'use client'
import React from 'react'
import Image from 'next/image'
import Link from 'next/link'
function Skills() {
  return (<>
    <div className='w-full min-h-screen   bg-gradient-to-b from-slate-600 to-black text-white' id='Skills'>
<div  className='hidden sm:flex flex-col  w-full h-full justify-center items-center  '>
      <div  className='pt-4'>
        <p className='top text-5xl sm:text-6xl font-bold inline border-b-4 border-pink-600 sm:mb-8 '>Skills </p>
        </div>
        <div className='grid grid-cols-1 sm:grid-cols-3 gap-4 sm:gap-24 sm:py-8 skills'>
            <div className='shadow-md shadow-slate-900 hover:scale-110 duration-500 pt-4'>
                <Image
                src={"/skill2.png"}
                alt='skill1'
                width={200}
                height={200}
                />
                <p className='my-4 text-center'>HTML</p>
            </div>
            <div className='shadow-md shadow-slate-900 hover:scale-110 duration-500 pt-4'><Image
                src={"/skill1.png"}
                alt='skill1'
                width={200}
                height={200}
                />
                <p className='my-4 text-center '>CSS</p></div>
            <div className='shadow-md shadow-slate-900 hover:scale-110 duration-500 pt-4'><Image
                src={"/skill3.png"}
                alt='skill1'
                width={200}
                height={200}
                />
                <p className='my-4 text-center'>Java Script</p></div>
            <div className='shadow-md shadow-slate-900 hover:scale-110 duration-500 pt-4'><Image
                src={"/skill6.png"}
                alt='skill1'
                width={200}
                height={200}
                />
                <p className='my-4 text-center'>Tailwind</p></div>
            <div className='shadow-md shadow-slate-900 hover:scale-110 duration-500 pt-4'><Image
                src={"/skill5.png"}
                alt='skill1'
                width={200}
                height={200}
                
                />
                <p className='my-4 text-center'>Node Js</p></div>
            <div className='shadow-md shadow-slate-900 hover:scale-110 duration-500 pt-4'><Image
                src={"/skill4.png"}
                alt='skill1'
                width={200}
                height={200}
                />
                <p className='my-4 text-center'>REACT</p></div>

        </div>
    </div>
{/* for mobile */}
<div  className='sm:hidden flex flex-col  w-full h-full justify-center items-center  '>
      <div  className='pt-4'>
        <p className='top text-5xl sm:text-6xl font-bold inline border-b-4 border-pink-600 sm:mb-8 '>Skills </p>
        </div>
        <div className='grid grid-cols-1 sm:grid-cols-3 gap-y-8 sm:gap-24 sm:py-8 mt-12'>
            <div className='shadow-md shadow-slate-900 hover:scale-110 duration-500 pt-4'>
                <Image
                src={"/skill2.png"}
                alt='skill1'
                width={200}
                height={200}
                />
                <p className='my-4 text-center'>HTML</p>
            </div>
            <div className='shadow-md shadow-slate-900 hover:scale-110 duration-500 pt-4'><Image
                src={"/skill1.png"}
                alt='skill1'
                width={200}
                height={200}
                />
                <p className='my-4 text-center '>CSS</p></div>
            <div className='shadow-md shadow-slate-900 hover:scale-110 duration-500 pt-4'><Image
                src={"/skill3.png"}
                alt='skill1'
                width={200}
                height={200}
                />
                <p className='my-4 text-center'>Java Script</p></div>
            <div className='shadow-md shadow-slate-900 hover:scale-110 duration-500 pt-4'><Image
                src={"/skill6.png"}
                alt='skill1'
                width={200}
                height={200}
                />
                <p className='my-4 text-center'>Tailwind</p></div>
            <div className='shadow-md shadow-slate-900 hover:scale-110 duration-500 pt-4'><Image
                src={"/skill5.png"}
                alt='skill1'
                width={200}
                height={200}
                
                />
                <p className='my-4 text-center'>Next Js</p></div>
            <div className='shadow-md shadow-slate-900 hover:scale-110 duration-500 pt-4'><Image
                src={"/skill4.png"}
                alt='skill1'
                width={200}
                height={200}
                />
                <p className='my-4 text-center'>REACT</p></div>

        </div>
    </div>

    </div></>
  )
}

export default Skills