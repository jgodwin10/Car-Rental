import React from 'react'
import { Link } from 'react-router-dom'


const HeroPages = ({ title }) => {
  return (
    <div className='max-w-[1340px] mx-auto px-8 pt-20 pb-24'>
      <h2 className='text-4xl font-extrabold'>{ title}</h2>
      <p className='text-lg font-bold pt-2'><Link className='hover:text-[#fe4d30]' to="/">Home </Link>/ {title}  </p>
    </div>
  )
}

export default HeroPages
