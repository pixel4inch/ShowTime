import React from 'react'
import { dummyCastsData } from '../assets/assets'
function FavoriteCast() {
  return (
    <div>
       <div className="relative flex items-start justify-between pt-20 pb-10"><p class="text-gray-300 text-lg font-medium ">Your Favorite Cast</p></div> 
          <div className="flex flex-wrap gap-4 justify-between items-center">
            {
              dummyCastsData.slice(0,9).map((cast) => (
                <div className="flex flex-col items-center gap-2 border-2 w-20 h-20 rounded-full overflow-hidden border-white hover:border-primary-dull transition hover:-translate-y-1 ">
                  <img className='object-cover object-fit' src={cast.profile_path} alt={cast.name} title={cast.name}/>
               </div>

              ))
            }
          
          </div>
     </div>
    
  )
}

export default FavoriteCast