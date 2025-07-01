import { ArrowRight } from 'lucide-react'
import React from 'react'
import { useNavigate } from 'react-router-dom'
import BlurCircle  from "./BlurCircle"
import MovieCard from './MovieCard'
import { dummyShowsData } from '../assets/assets'

function FeaturedSection() {
    const navgation = useNavigate()
   

  return (
    <>
    
    <div className="px-6 md:px-16 lg:px-24 xl:px-44">
    <div className='relative flex items-start justify-between pt-20 pb-10'>
        <p className='text-gray-300 text-lg font-medium '>Now Showing</p>
         <BlurCircle top="0" right="-80px" />
         
          <button  onClick={() => navgation('/movies')}  className='cursor-pointer group flex items-center gap-2 text-sm text-gray-300'>
             View All 
             <ArrowRight className='w-4.5 h-4.5 group-hover:translate-x-0.5 transition '/>
           </button>
                
      
    </div>
    <div className='flex justify-center md:justify-between  gap-2 align-top flex-wrap'>
      {dummyShowsData.slice(0,6).map((show) => 
        (
          <MovieCard key={show._id} movie={show} />
        ))}

    

    </div>

    <div className='flex align-center justify-center w-full mt-20'>

        <button onClick={() => navgation('/movies')} className='bg-primary hover:bg-primary-dull transition rounded-sm px-6 py-2 cursor-pointer text-sm'>
            Show More
        </button>

    </div>


    </div>
    
    </>
  )
}

export default FeaturedSection