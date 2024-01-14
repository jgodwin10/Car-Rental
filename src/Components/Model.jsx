import React from 'react'

const Model = ({model, mark, year, doors, air, transmission, fuel, img, price}) => {


  

  return (
    <div className='flex justify-between lg:justify-around md:flex-row items-center flex-col lg:w-[80%] '>
       
       
        <img className=' text-center  md:max-w-[400px] w-[100%] bg-black ' src={img} alt={model} />
       
      
      
        <table className='border-2 border-black mt-10 md:mt-0 flex flex-col items-center min-w-[00px]'>
          <tr className='text-white'>
          <p className='py-2 text-[20px] bg-[#fe4d30] px-7'><span className='text-[26px] font-extrabold'>${price}</span> {" "} <span className='text-[26px]'>/</span> rent per day</p>
          </tr>
          <tr  className='flex justify-around w-[100%] py-2'>
            <td className='font-extrabold'>Model</td>
            <td>{model}</td>
          </tr>
          <tr className='flex border-y-2  border-black justify-around w-[100%] py-2'>
            <td className='font-extrabold'>mark</td>
            <td> {mark}  </td>
          </tr>
          <tr className='flex border-b-2  border-black  justify-around w-[100%] py-2'>
            <td className='font-extrabold'>Year</td>
            <td> {year} </td>
          </tr>
          <tr className='flex border-b-2  border-black justify-around w-[100%] py-2'>
            <td className='font-extrabold'>Doors</td>
            <td>{doors}</td>
          </tr>
          <tr className='flex border-b-2  border-black justify-around w-[100%] py-2'>
            <td className='font-extrabold'>AC</td>
            <td>Yes</td>
          </tr>
          <tr className='flex border-b-2  border-black justify-around w-[100%] py-2'>
            <td className='font-extrabold'>Transmission</td>
            <td> {transmission} </td>
          </tr>
          <tr className='flex justify-around w-[100%] py-2'>
            <td className='font-extrabold'>Fuel</td>
            <td> {fuel} </td>
          </tr>
        </table>
      </div>
    
  )
}

export default Model
