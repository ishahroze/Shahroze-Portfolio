'use client';
import React, { useState,useEffect } from 'react';
import Image from 'next/image';
import { Menu, XCircle, Instagram, Linkedin, Facebook } from 'lucide-react';
import { Link, Button, Element, Events, animateScroll as scroll, scrollSpy } from 'react-scroll';
function Navbar() {
  
    const [isMenuOpen, setIsMenuOpen] = useState(false);

    const toggleMenu = () => {
      setIsMenuOpen(!isMenuOpen);
    };
    const [nav, setnav] = useState(false);
    const handleclick = () => setnav(!nav);
    const handleSetActive = (to:any) => {
        console.log(to);
      };

    useEffect(() => {
        Events.scrollEvent.register('begin', function (to, element) {
            console.log('begin', arguments);
        });

        Events.scrollEvent.register('end', function (to, element) {
            console.log('end', arguments);
        });

        scrollSpy.update();

        return () => {
            Events.scrollEvent.remove('begin');
            Events.scrollEvent.remove('end');
        };
    }, []);
    

    return (
        <div className={'hidden sm:flex h-12 w-full   text-white border-none  justify-between  px-4 bg-slate-600 '}>
            <div className='pt-2'>
                {/* <Image src={"/logo.png"} alt='logo' width={50} height={50} /> */}
                <div className='font text-3xl font-bold  text-rose-300'>Shahroz Portfolio</div>
            </div>
            <div className='hidden sm:flex justify-center items-center text-white text-xl font-serif space-x-8'>
  
  <button className='hover:border-b-2 border-rose-500'>
    <Link 
      activeClass="active" 
      to="Home" 
      spy={true} 
      smooth={true} 
      offset={50} 
      duration={500} 
      onSetActive={handleSetActive}
    >
      Home
    </Link>
  </button>

  <button className='hover:border-b-2 border-rose-500'>
    <Link 
      activeClass="active" 
      to="About" 
      spy={true} 
      smooth={true} 
      offset={-100} 
      duration={500} 
      onSetActive={handleSetActive}
    >
      About
    </Link>
  </button>

  <button className='hover:border-b-2 border-rose-500'>
    <Link 
      activeClass="active" 
      to="Skills" 
      spy={true} 
      smooth={true} 
      offset={-100} 
      duration={500} 
      onSetActive={handleSetActive}
    >
      Skills
    </Link>
  </button>

  <button className='hover:border-b-2 border-rose-500'>
    <Link 
      activeClass="active" 
      to="Experience" 
      spy={true} 
      smooth={true} 
      offset={-100} 
      duration={500} 
      onSetActive={handleSetActive}
    >
      Work
    </Link>
  </button>

  <button className='hover:border-b-2 border-rose-500'>
    <Link 
      activeClass="active" 
      to="Contact" 
      spy={true} 
      smooth={true} 
      offset={-100} 
      duration={500} 
      onSetActive={handleSetActive}
    >
      Contact
    </Link>
  </button>

</div>

            {/* <div onClick={handleclick} className='md:hidden z-10'>
                {!nav ? <Menu /> : <XCircle/>}
            </div>
            <div>
                <ul className={!nav ? 'hidden' : 'absolute top-0 left-0 w-full min-h-screen bg-white text-rose-300 bg- md:hidden flex flex-col justify-center items-center'}>
                    <li className='py-6 text-4xl'>Home</li>
                    <li className='py-6 text-4xl'>Skills</li>
                    <li className='py-6 text-4xl'>About</li>
                    <li className='py-6 text-4xl'>Work</li>
                    <li className='py-6 text-4xl'>Contact</li>
                </ul>
            </div> */}
            {/* Uncomment if you want social icons */}
            {/* <div className='flex flex-col md:hidden top-[50%] left-0 text-white'>
                <ul>
                    <li><Instagram /></li>
                    <li><Linkedin /></li>
                    <li><Facebook /></li>
                </ul>
            </div> */}
            {/* For mobile */}
    
        </div>
    );
}

export default Navbar;