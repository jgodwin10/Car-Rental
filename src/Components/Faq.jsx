import React, { useReducer, useState } from 'react'

const reducer = (state, action) => {
  switch (action.type) {
    case "CHANGE1":
      return {
        open1: !state.open1,
        color: state.color,
      }
    case "CHANGE2":
      return {
        open2: !state.open2
      }
    case "CHANGE3":
      return {
        open3: !state.open3
      }
    default:
      return state;
  }
}



const Faq = () => {
  
  const [newFaq, setNewFaq] = useState(true)

  const [state, dispatch] = useReducer(reducer, {open1: true, open2: false, open3: false})


  return (
    <div className="bg-faq bg-auto bg-no-repeat bg-left-bottom bg-neutral-50">
      <div className="grid-cols-1 max-w-[800px] mx-auto px-10 pt-32">
        <div className="text-center">
          <h2 className='text-[24px] font-bold '>FAQ</h2>
          <h1 className='text-[45px] font-bold '>Frequently Asked Questions</h1>
          <p className='text-[17px] text-gray-500 font-medium pt-2'>Frequently Asked Questions About the Car Rental Booking Process on Our Website: Answers to Common Concerns and Inquiries.</p>
        </div>

        <div className='py-16'>
         <div className='bg-white shadow-2xl rounded-md'>
          <div>
            <h2 className={` ${state.open1 ? "bg-[#fe4d30] text-white" : "bg-white"} cursor-pointe shadow-2xl px-12 text-[18px] font-semibold py-6 cursor-pointer`} 
            onClick={() =>{
              dispatch({type: "CHANGE1"})
            } }><span>1.</span> What is special about comparing rental car deals?</h2>
         {state.open1 && <p className='py-6 px-12 transition duration-[1s] text-gray-400 font-medium'>Comparing rental car deals is important as it helps find the best deal that fits your budget and requirements, ensuring you get the most value for your money. By comparing various options, you can find deals that offer lower prices, additional services, or better car models. You can find car rental deals by researching online and comparing prices from different rental companies.</p>}
        </div>

        <div>
          <h2 className={`${state.open2? "bg-[#fe4d30] text-white" : "bg-white"} shadow-2xl text-[18px] font-semibold px-12 py-6 cursor-pointer`} 
          onClick={() => {
            dispatch({type: "CHANGE2"})
          }}><span>2.</span> How do I find the car rental deals?</h2>
          {state.open2 && <p className='py-6 px-12 transition duration-[0.5s] text-gray-400 font-medium'>You can find car rental deals by researching online and comparing prices from different rental companies. Websites such as Expedia, Kayak, and Travelocity allow you to compare prices and view available rental options. It is also recommended to sign up for email newsletters and follow rental car companies on social media to be informed of any special deals or promotions.</p>}
        </div>

        <div>
          <h2 className={`${state.open3 ? "bg-[#fe4d30] text-white" : "bg-white"} shadow-2xl text-[18px] font-semibold px-12 py-4 cursor-pointer`} onClick={() => {
            dispatch({type: "CHANGE3"})
          }}><span>3.</span>  How do I find such low rental car prices?</h2>
          {state.open3 && <p className='py-6 px-12 transition duration-[0.5s] text-gray-400 font-medium'>Book in advance: Booking your rental car ahead of time can often result in lower prices. Compare prices from multiple companies: Use websites like Kayak, Expedia, or Travelocity to compare prices from multiple rental car companies. Look for discount codes and coupons: Search for discount codes and coupons that you can use to lower the rental price. Renting from an off-airport location can sometimes result in lower prices.</p>}
        </div>
       </div>
      </div>

      </div>
    </div>
  )
}

export default Faq
