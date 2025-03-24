import React from 'react'
import { Link } from 'react-router-dom'

const Sidenav = () => {
  return (
    <div 
      className='w-[20%] h-full border-r-2 border-zinc-500 p-3'>

        <h1 className='text-2xl font-black text-white'> <i className=" text-purple-600 mr-2 ri-tv-fill"></i>
        <span className='text-2xl'>MyFlix</span>
        </h1>


         {/* Navigation */}
         <nav className="flex flex-col text-zinc-400 text-xl gap-1">
                    <h1 className="text-white font-semibold text-lg sm:text-xl ml-3 mt-8  ">New Feeds</h1>

                    <Link to="/trending" className="hover:bg-[#6556CD] hover:text-white rounded-lg duration-300 p-4 flex items-center">
                        <i className="ri-fire-fill mr-3"></i> Trending
                    </Link>
                    <Link to="/popular" className="hover:bg-[#6556CD] hover:text-white rounded-lg duration-300 p-4 flex items-center">
                        <i className="ri-bard-fill mr-3"></i> Popular
                    </Link>
                    <Link to="/movie" className="hover:bg-[#6556CD] hover:text-white rounded-lg duration-300 p-4 flex items-center">
                        <i className="ri-movie-line mr-3"></i> Movies
                    </Link>
                    <Link to="/tv-shows" className="hover:bg-[#6556CD] hover:text-white rounded-lg duration-300 p-4 flex items-center">
                        <i className="ri-tv-line mr-3"></i> TV Shows
                    </Link>
                    <Link to="/people" className="hover:bg-[#6556CD] hover:text-white rounded-lg duration-300 p-4 flex items-center">
                        <i className="ri-user-3-line mr-3"></i> People
                    </Link>
                </nav>


                <hr className="border-none mt-3 w-[90%] h-[1px] bg-zinc-400" />

        {/* Navbar */}
        <nav className="flex flex-col text-zinc-400 text-xl gap-1 mt-5">
                    <h1 className="text-white font-semibold text-lg sm:text-xl ml-3 mb-5">Website Information</h1>

                    <Link className="hover:bg-[#6556CD] hover:text-white rounded-lg duration-300 p-4 flex items-center">
                        <i className="ri-information-fill mr-3"></i> About MyFlix
                    </Link>
                    <Link className="hover:bg-[#6556CD] hover:text-white rounded-lg duration-300 p-4 flex items-center">
                        <i className="ri-phone-fill mr-3"></i> Contact
                    </Link>
                </nav>
    </div>
  )
}

export default Sidenav