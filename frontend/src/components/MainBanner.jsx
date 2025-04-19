import React from 'react'
import { assets } from '../assets/assets'
import { Link } from 'react-router-dom'

const MainBanner = () => {
  return (
    <div className='relative'>

      <img src={assets.main_banner_bg} className='w-full hidden md:block' alt='banner' />

      <img src={assets.main_banner_bg_sm} className='w-full md:hidden ' alt='banner' />

      <div className="absolute inset-0 flex flex-col text-slate-900 items-center md:items-start justify-end md:justify-center pb-24 md:pb-0 px-4 md:pl-18 lg:pl-24">

        <h1 className='text-3xl md:text-4xl lg:text-5xl font-bold text-center md:text-left max-w-72 md:max-w-80 lg:max-w-105 leading-tight lg:leading-15'>Freshness You can Trust , Savings You will Love !</h1>


      <div className=" flex mt-6 font-medium  items-center">

        <Link to={"/products"} className='group flex items-center gap-2 px-7 md:px-9 py-3 bg-slate-800 hover:bg-slate-600 transition rounded text-white cursor-pointer'>Shop now</Link>
        <img src={assets.white_arrow_icon} alt="arrow" className=' hidden  transition group-focus:translate-x-1' />

        <Link to={"/products"} className='group md:flex hidden  items-center px-9  py-3  transition rounded cursor-pointer'>Explore deals</Link>
        <img src={assets.black_arrow_icon} alt="arrow" className=' transition md:block hidden group-hover:translate-x-1' />

      </div>
      </div>

      

      

    </div>
  )
}

export default MainBanner
