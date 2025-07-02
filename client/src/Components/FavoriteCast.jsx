import React from 'react';
import { dummyCastData } from '../assets/assets';

function FavoriteCast() {
  return (
    <div className='mt-25'>
      <div className='flex items-start justify-between pt-20 pb-10'>
        <p className='text-gray-300 text-lg font-medium '>Favorite Cast</p>
      </div>

      <div className='flex flex-wrap gap-4 '>
        {dummyCastData.map((cast) => (
          <div key={cast.id} className='flex flex-col items-center gap-2 bg-gray-800 hover:-translate-y-1 transition rounded-2xl p-3 w-44'>
            <img src={cast.profile_path} alt={cast.name} className='w-32 h-32 object-cover rounded-full' />
            <p className='text-sm font-semibold text-gray-200'>{cast.name}</p>
          </div>
        ))}
      </div>
    </div>
  )
}

export default FavoriteCast;
