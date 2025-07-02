import React from 'react'
import { dummyShowsData } from '../assets/assets'
import{MovieCard} from '../Components'

function Movies() {
  return dummyShowsData.length > 0 ? (
    <div className="px-6 md:px-16 lg:px-24 xl:px-44">
      
      <div className='relative flex items-start justify-between pt-20 pb-10 mt-20'>
        <p className='text-gray-300 text-lg font-medium '>Now Showing</p>
       </div>


      <div className='flex justify-center md:justify-between  gap-2 align-top flex-wrap'>
        {dummyShowsData.map((show) => (
          <MovieCard key={show._id} movie={show} />
        ))}
      </div>

    </div>
  ) :
  (
    <div>
      <div className="px-6 md:px-16 lg:px-24 xl:px-44 mt-56">
        <h1 className="text-center text-gray-300 text-4xl ">No Movies Found</h1>
       </div>
    </div>
  )
}

export default Movies