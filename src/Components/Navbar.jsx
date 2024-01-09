import React from 'react'
import logo from "../images/logo/logo.png"
import {Link} from "react-router-dom"
import {IoIosMenu, IoMdClose} from "react-icons/io"
import {useRef} from "react"
import "../index.css"
import {motion} from "framer-motion"


const Navbar = () => {
    
  const navRef = useRef();

  const showBar = () => {
    navRef.current.classList.toggle("show-nav")
  }


  return (
    <div 

    className="flex items-center justify-between mx-auto max-w-[1340px] px-5 py-6 z-[999]">
      <img width={145} src={logo} alt="" />
       
       {/* Desktop Navbar */}
       
       <ul className="lg:flex items-center justify-between hidden gap-[3vw] text-[16px] font-semibold">
         <li><Link className="hover:text-[#fe4d30]" to="/">Home</Link></li>
         <li><Link className="hover:text-[#fe4d30]" to="/models">Models</Link></li>
         <li><Link className="hover:text-[#fe4d30]" to="/testimonials">Testimonials</Link></li>
         <li><Link className="hover:text-[#fe4d30]" to="/about">About</Link></li>
         <li><Link className="hover:text-[#fe4d30]" to="/contact">Contact</Link></li>
       </ul>
       
       {/*Mobile Navbar*/}

       <ul ref={navRef} className="flex flex-col absolute top-0 left-0 w-[100%] items-center justify-center text-[25px] h-[100vh] lg:hidden gap-[5vw] font-semibold bg-slate-50 translate-y-[-100vh] transition duration-[1s] z-[999]">
         <li onClick={showBar}><Link className="hover:text-[#fe4d30]" to="/">Home</Link></li>
         <li onClick={showBar}><Link className="hover:text-[#fe4d30]" to="/models">Models</Link></li>
         <li onClick={showBar}><Link className="hover:text-[#fe4d30]" to="/testimonials">Testimonials</Link></li>
         <li onClick={showBar}><Link className="hover:text-[#fe4d30]" to="/about">About</Link></li>
         <li onClick={showBar}><Link className="hover:text-[#fe4d30]" to="/contact">Contact</Link></li>

         <IoMdClose onClick={showBar} className="absolute top-10 right-9 text-4xl"/>
       </ul>

       <IoIosMenu onClick={showBar} className="text-4xl lg:hidden"/>
 



      
      <div className="lg:flex text-[18px] font-semibold hidden xl:block">
        <button className="px-8 hover:text-[#fe4d30]">Sign In</button>
        <button className="bg-[#fe4d30] py-[10px] px-6 rounded-[5px] text-white" >Register</button>
      </div>
      
    </div>
  )
}

export default Navbar
