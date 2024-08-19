'use client';
import React from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { TypewriterEffect } from "./ui/typewriter-effect";
import { Button } from "./ui/moving-border";

function Homes() {
  const words = [
    { text: "Rao Shahroz", className: "text-4xl sm:text-7xl font-bold text-rose-300" },
    { text: "Ali", className: "text-4xl sm:text-7xl font-bold text-rose-300" },
  ];
  const words2 = [
    { text: "Web", className: "text-4xl sm:text-3xl font-bold text-rose-300 " },
    { text: "Developer", className: "text-4xl sm:text-3xl font-bold text-rose-300" },
  ];

  return (
    <div className='w-full min-h-screen bg-gradient-to-b from-slate-600 to-black text-two shadow pt-0 pb-5'>
      <div className='w-full '></div>

      <div className='grid sm:grid-cols-2 grid-cols-1 w-full min-h-screen '>
        <div className='flex flex-col justify-center items-center sm:items-start sm:pl-24 sm:pt-2 pt-5 pb-5 order-2 sm:order-1'>
        <p className='text-white'>Hi, I&apos;m</p>

          <TypewriterEffect words={words} />
          <TypewriterEffect words={words2} />
          <div className='text-center sm:text-left sm:pl-0 pl-4 pr-4 font-light text-two text-white flex justify-center items-center'>
            A tech enthusiast flourishing expertise in software development & design. I work on multiple technologies including Ruby on Rails, React, Next.Js, Tailwind CSS, Chakra UI. Playing with tech & evolving with time is my motto for technology.
          </div>
          <Link href={"/CV.png"} className='rounded-md'>
            <Button
              borderRadius="2.75rem"
              className="dark:bg-slate-900 bg-gradient-to-b from-rose-500 text-white dark:text-white border-neutral-200 dark:border-slate-800"
            >
              Download CV
            </Button>
          </Link>
        </div>
        <div className='flex justify-center items-center pt-8 order-1 sm:order-2'>
          <Image
            src={"/boy.png"}
            alt='Myself'
            width={475}
            height={475}
            className="object-cover !rounded-full ab"
          />
        </div>
      </div>
    </div>
  );
}

export default Homes;
