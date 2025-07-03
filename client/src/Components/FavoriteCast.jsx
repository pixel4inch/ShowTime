import React from 'react'
import { dummyCastsData } from '../assets/assets'
function FavoriteCast() {
  return (
    <div>
       <div className="relative flex items-start justify-between pt-20 pb-10"><p class="text-gray-300 text-lg font-medium ">Your Favorite Cast</p></div> 
          <div className="flex flex-wrap gap-4 justify-between items-center">
            {
              dummyCastsData.slice(0,8).map((cast) => (
                
                  <div className='flex flex-col items-center gap-1 '>
                     <img className='border-2 rounded-full h-20 md:h-20 aspect-square object-cover' src={cast.profile_path} alt={cast.name} title={cast.name}/>
                     <p className='text-sm text-gray-300'>{cast.name}</p>
                  </div>
              
              ))
            }
          
          </div>
     </div>
    
  )
}

export default FavoriteCast