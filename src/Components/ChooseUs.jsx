import React from 'react'

const ChooseUs = () => {
  return (
    <div className="bg-white bg-choose bg-auto bg-left-bottom bg-no-repeat py-32">
      <div className="max-w-[1150px] mx-auto lg:px-12 grid grid-cols-1 lg:gap-x-32 gap-x-0 gap-y-12 lg:grid-cols-2">
        <img className="mx-auto col-span-2" src="src/images/chooseUs/main.png" alt="" />

        <div>
           <div className="text-center lg:text-left lg:w-auto w-[70%] mx-auto">
            <h2 className="font-bold text-[23px]">Why Choose Us</h2>
            <h1 className="font-bold text-[43px] py-4 ">Best valued deals you will ever find</h1>
            <p className="text-gray-400 font-medium">Discover the best deals you'll ever find with our unbeatable offers. we're dedicated to providing you with the best value for your money, so you can enjoy top-quality services and products without breaking the bank. Our deals are designed to give you the ultimate renting experience, so don't miss out on your chance to save big.</p>
            <button className="bg-[#fe4d30] h-[60px] font-bold text-white text-lg w-[170px] mt-8 rounded-[3px] hover:text-[#fe4d30] transition duration-[0.5s] hover:bg-white hover:border hover:border-[#fe4d30] ">Find Details</button>
           </div>
          </div>

           <div className="col-span-2 lg:col-span-1 lg:w-auto w-[100%] sm:w-[60%] mx-auto">

            <div className="flex items-center lg:justify-between justify-center lg:flex-row sm:flex-row sm:text-left flex-col text-center ">
              <img src="src/images/chooseUs/icon1.png" alt="" />
              <div className="px-4">
                <h2 className="text-[25px] font-extrabold py-4">Cross Country Drive</h2>
                <p className="text-gray-400 font-medium">Take your driving experience to the next level with our top-notch vehicles for your cross-country adventures.</p>
              </div>
            </div>

            <div className="flex items-center lg:justify-between justify-center lg:flex-row sm:flex-row sm:text-left flex-col text-center py-10 ">
              <img src="src/images/chooseUs/icon2.png" alt="" />
              <div className="px-4">
                <h2 className="text-[25px] font-extrabold py-4">All Inclusive Pricing</h2>
                <p className="text-gray-400 font-medium">Get everything you need in one convenient, transparent price with our all-inclusive pricing policy.</p>
              </div>
            </div>

            <div className="flex items-center lg:justify-between justify-center lg:flex-row sm:flex-row sm:text-left flex-col text-center ">
              <img src="src/images/chooseUs/icon3.png" alt="" />
              <div className="px-4">
                <h2 className="text-[25px] font-extrabold py-4">No Hidden Charges</h2>
                <p className="text-gray-400 font-medium">Enjoy peace of mind with our no hidden charges policy. We believe in transparent and honest pricing.</p>
              </div>
            </div>

    


        </div>
      </div>
    </div>
  )
}

export default ChooseUs
