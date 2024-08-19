import Image from "next/image";

import Navbar from "./components/Navbar";
import Homes from "./components/Homes";
import About from "./components/About";
import Skills from "./components/Skills";
import Work from "./components/Work";
import Experience from "./components/Experience";
import Contact from "./components/Contact";
import MobileNav from "./components/MobileNav";
export default function Home() {
  return (
   <div className=" min-h-screen w-full  ">
 <MobileNav/>   
<Navbar/>
<Homes/>
<About/>
<Skills/>
<Experience/>

<Contact/>
   </div>
  );
}
