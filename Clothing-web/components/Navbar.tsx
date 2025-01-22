import React from "react"
import { ImCross } from "react-icons/im";
import { RiArrowDropDownLine } from "react-icons/ri";
import Link from "next/link";


export default function Navbar(){
    return(
        <div>
            <div className=" h-[48px] bg-black">
        <div className="w-[351px] h-[19px]  ml-[544px] ">
            <p className="leading-[24px] w-[400px] font-Satoshi  ">Sign up and get 20% off to your first order.</p>
            <p className=" font-Satoshi leading-[24px] flex">Sign up Now</p>
            
            </div>
            <div className="ml-[1700px] w-[20px] mt-[1px] h-[20px] flex">
                
                <ImCross />
                
            </div>
            <div className="w-[1170px] h-[38px] mt-10 relative left-[135px] flex">
        <div className="w-[674px] h-[24px] gap-[190px] flex ">
          <p className="w-[118px] h-[24px] font-bold text-[24px] leading-[24px] flex text-2xl-font-bold text-black">
            SHOP.CO
          </p>
          <div className="w-[596pxpx] h-[24px] gap-[32px] justify-between items-center flex  ml-[100px]">
          <Link className="relative left-[45px] ml-[45px] text-black"  href="/ProductDetail">Shop</Link>
            <RiArrowDropDownLine className="text-black font-bold ml-[15px]" /> 

            <Link className="relative left-[45px] ml-[45px] text-black " href="/Onsale">OnSale</Link>
            <Link className="relative left-[45px] ml-[45px] text-black  " href="/NewArrivals">NewArrivals</Link>
            <Link className="relative left-[45px] ml-[45px] text-black  " href="/Brands">Brands</Link>

            <form className="flex items-center max-w-sm mx-auto">   
    <label htmlFor="simple-search" className="sr-only">Search</label>
    <div className="relative w-full">
        <div className="absolute inset-y-0 start-0 flex items-center ps-3 pointer-events-none">
            <svg className="w-4 h-4 text-gray-500 dark:text-gray-400" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 18 20">
                <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M3 5v10M3 5a2 2 0 1 0 0-4 2 2 0 0 0 0 4Zm0 10a2 2 0 1 0 0 4 2 2 0 0 0 0-4Zm12 0a2 2 0 1 0 0 4 2 2 0 0 0 0-4Zm0 0V6a3 3 0 0 0-3-3H9m1.5-2-2 2 2 2"/>
            </svg>
        </div>
        <input type="text" id="simple-search" className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full ps-10 p-2.5  dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" placeholder="Search branch name..." required />
    </div>
    <button type="submit" className="p-2.5 ms-2 text-sm font-medium text-white bg-blue-700 rounded-lg border border-grey-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800">
        <svg className="w-4 h-4" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 20 20">
            <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="m19 19-4-4m0-7A7 7 0 1 1 1 8a7 7 0 0 1 14 0Z"/>
        </svg>
        <span className="sr-only">Search</span>
    </button>
    </form>
    </div>
    </div>

   


          </div>
        </div>
      </div>  


  

    )
}