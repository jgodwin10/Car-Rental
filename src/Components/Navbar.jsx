import React from 'react'
import logo from "../images/logo/logo.png"
import {Link} from "react-router-dom"



const Navbar = () => {
  return (
    <div className="flex items-center justify-between mx-auto max-w-[1340px] px-5 py-6 z-30">
      <img width={145} src={logo} alt="" />
       
       {/* Desktop Navbar */}
       
       <ul className="flex items-center justify-between hidden lg:block gap-[4vw]">
         <li><Link to="/">Home</Link></li>
         <li><Link to="/model">Model</Link></li>
         <li><Link to="/about">About</Link></li>
         <li><Link to="/contact">Contact</Link></li>
       </ul>
       
       {/*Mobile Navbar*/}

       <ul className="flex items-center lg:hidden gap-[4vw]">
         <li><Link className="hover:text-orange-500" to="/">Home</Link></li>
         <li><Link className="hover:text-orange-500" to="/models">Models</Link></li>
         <li><Link className="hover:text-orange-500" to="/about">About</Link></li>
         <li><Link className="hover:text-orange-500" to="/contact">Contact</Link></li>
       </ul>
      
      
    </div>
  )
}

export default Navbar
