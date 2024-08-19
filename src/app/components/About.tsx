import React from 'react'
import Image from 'next/image'
import Link from 'next/link'
import { AlertTriangle } from 'lucide-react'
import { BackgroundGradient } from "./ui/background-gradient";
import { IconAppWindow } from "@tabler/icons-react";
import {Card, CardHeader, CardBody} from "@nextui-org/card";
import { cn } from "@/lib/utils";
import { Spotlight } from './ui/Spotlight';
function About() {
  return (
    <>
      <div className='w-full min-h-screen bg-gradient-to-b to-slate-600 from-black   text-white pb-5' id='About'>
        {/* <div
          className='absolute inset-0 w-full h-full bg-cover bg-center'
          style={{
            backgroundImage: "url('/about.jpg')",
            marginRight: '0px',
            borderTopRightRadius: '0%',
            borderBottomRightRadius: '0',
          }}
        ></div> */}
        {/* <div className='flex flex-col w-full h-full justify-center items-center relative'>
          <div className='max-w-[1000px] w-full px-4 grid grid-cols-2 gap-28'>
            <div>
              <p className='text-4xl font-bold inline border-b-4 border-pink-600'>About </p>
            </div>
            <div>
              <p className='text-white'></p>
            </div>
          </div>
          <div className='h1'>Who I am</div>
          <div className='max-w-[1000px] w-full px-4 grid grid-cols-2 gap-3'>
            <div className='max-w-96 sm:pt-6 pt-4'>
              I'm a passionate frontend web developer with a keen eye for design and a drive for creating engaging user experiences. My journey into web development began with a fascination for how websites are built and has since evolved into a deep-seated passion for crafting clean, efficient code that brings ideas to life on the web.
              I thrive in collaborative environments where I can work alongside talented individuals to create meaningful and impactful web solutions. I'm constantly exploring new technologies and techniques to stay at the forefront of frontend development trends.
            </div>
            <div>
              <p className='text-white'>I'm a passionate web developer, you can look around for more information</p>
            </div>
          </div>
        </div> */}
            <div className='top flex justify-center items-center pt-5'><p className='text-4xl font-bold inline border-b-4 border-pink-600'>About me</p></div>
    <div className='grid sm:grid-cols-2 grid-cols-1'>
  <div className='col-span-1'>

    <div className='flex flex-col justify-center items-center px-6 py-4'>
      
      <p className='ab'>
      <h1 className=' flex justify-start items-start text-2xl text-rose-500 font-bold '>Here it is</h1>
        I&apos;m a passionate frontend web developer with a keen eye for design and a drive for creating engaging user experiences. My journey into web development began with a fascination for how websites are built and has since evolved into a deep-seated passion for crafting clean, efficient code that brings ideas to life on the web.
        I thrive in collaborative environments where I can work alongside talented individuals to create meaningful and impactful web solutions. I&apos;m constantly exploring new technologies and techniques to stay at the forefront of frontend development trends.
      </p>
      <div className='flex sm:flex-row flex-col gap-8 mt-6 boxes'>
      <div className='w w-40 h-40 rounded-md flex flex-col bg-slate-600 justify-center items-center gap-3 hover:scale-110 duration-500 hover:bg-black'
       style={{boxShadow: '6px 4px 6px rgba(255, 255, 255, 0.5)' }}
      ><div className='pt-0 text-2xl text-rose-500'>2</div>
      <div>years </div>
      <div className='t text-yellow-600'>Experience</div></div>
      <div className='w w-40 h-40 rounded-md flex flex-col bg-slate-600 justify-center items-center gap-3 hover:scale-110 duration-500 hover:bg-black'  style={{boxShadow: '6px 4px 6px rgba(255, 255, 255, 0.5)' }}><div className='pt-0 text-2xl text-rose-500'>5</div>
      <div>completed </div>
      <div className='t text-yellow-600'>Projects</div></div>
      <div className='w w-40 h-40 rounded-md flex flex-col bg-slate-600 justify-center items-center gap-3 hover:scale-110 duration-500 hover:bg-black'  style={{boxShadow: '6px 4px 6px rgba(255, 255, 255, 0.5)' }}><div className='pt-0 text-2xl text-rose-500'>1</div>
      <div>working </div>
      <div className='t text-yellow-600'>Client/Company</div></div>
</div>
    </div>
    <div></div>
  </div>
  <div className=" col-span-1 pl-7 pt-8" >
    {/* You can add more content here for the second column if needed */}
    <div className='flex flex-row first '>  <Image src={"/laptop.png"} alt='laptop' width={130} height={130}/>
    <div className='flex flex-col'><p  className='text-2xl text-rose-500 pt-3 '>FrontEnd Dovelpment</p>
    < p className='text-white justify-center items-center pr-8 pl-3'>With expertise in ReactJs, Redux Toolkit, NextJs and Headless CMS I&apos;m striving to create intuitive, interactive interfaces crafting engaging user experiences through clean and efficient code</p>
    </div>
    </div>
    <div className='flex flex-row pt-24 second'>  <Image src={"/laptop2.png"} alt='laptop' width={130} height={130}/>
    <div className='flex flex-col'><p  className='text-2xl text-rose-500 pt-3 '>Backend Dovelpment</p>
    < p className='text-white justify-center items-center pr-8 pl-3'>With a robust grasp of databases, logical and analytical thinking, and API development, I am dedicated to crafting efficient, scalable, and secure solutions. My goal is to ensure seamless functionality, optimal performance, and data integrity (learning)</p>
    </div>
    </div>
  </div>
  
</div>


      </div>
    </>
  )
}

export default About
