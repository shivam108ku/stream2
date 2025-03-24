import React, { useState } from 'react'
import { Link } from 'react-router-dom'

const Topnav = () => {

    const [query , setQuery] = useState("");


  return (
    <div className="w-full h-[10vh] z-10 relative flex items-center px-4 sm:px-8 bg-black">
         {/* Search Icon */}
         <i className="text-xl sm:text-2xl text-zinc-400 ri-search-line"></i>

         <input 
                value={query}
                onChange={(e)=> setQuery(e.target.value)}      
                className="w-[60%] sm:w-[50%] md:w-[40%] lg:w-[35%] mx-3 sm:mx-6 px-4 py-2 text-lg sm:text-xl rounded-lg outline-none border-none bg-zinc-900 text-zinc-400 placeholder-gray-500"
                type="text" 
                placeholder="Search here..." 
            />

             {/* Clear Icon */}
              
                <i
                    className="text-2xl text-zinc-400 ri-close-line cursor-pointer hover:text-red-500 transition"
                ></i>
            
            {/* Search Inputs */}
            <div className="absolute left-0 sm:left-[5%] top-[100%] w-full sm:w-[50%] max-h-[50vh] bg-zinc-800 overflow-auto rounded-xl shadow-lg z-50">
                     
                        <Link
                            className="flex items-center
                             p-3 border-b border-zinc-700
                            hover:bg-zinc-700 transition duration-300">
                        
                            {/* Thumbnail */}
                            <img 
                                className="h-12 w-12 rounded-full object-cover mr-4"                                 
                            />
                            {/* Movie/TV Title */}
                            <span className="text-white text-sm sm:text-base">
                                 sdsd
                            </span>
                        </Link>

                        
                   
                </div>
   
    </div>
  )
}

export default Topnav