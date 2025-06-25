import { ArrowRight } from 'lucide-react'
import React from 'react'
import { useNavigate } from 'react-router-dom'

function FeaturedSection() {

    const navgation = useNavigate()

  return (
    <>
    
    <div className="px-6 md:px-16 lg:px-24 xl:px-44">
    <div className='relative flex items-center justify-between pt-20 pb-10'>
        <p className='text-gray-300 text-lg font-medium '>Now Showing</p>
        
          <button  onClick={() => navgation('/movies')}  className='cursor-pointer group flex items-center gap-2 text-sm text-gray-300'>
             View All 
             <ArrowRight className='w-4.5 h-4.5 group-hover:translate-x-0.5 transition '/>
           </button>
         
      
    </div>
    <div></div>
    <div></div>


    </div>
    
    </>
  )
}

export default FeaturedSection