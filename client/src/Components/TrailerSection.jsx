import React, { useState } from 'react'
import { dummyTrailers } from '../assets/assets';
import ReactPlayer from 'react-player' 
import BlurCircle from './BlurCircle';
import { PlayCircle, PlayCircleIcon } from 'lucide-react';

function TrailerSection() {

  const [DummyTrailer, SetDummyTrailer] = useState(dummyTrailers[0]);
  return (
    <div className='px-6 md:px-16 lg:px-24 xl:px-44'>
       <div className='pt-20 pb-10'>
          <p className='text-gray-300 text-lg font-medium '>
            Trailer
          </p>
      </div>

      <div className="w-full md:max-w-full md:max-h-full relative">
        <BlurCircle top="-50" right="-80px" />
         <ReactPlayer url={DummyTrailer.videoUrl} controls={false} width="100%" className="h-[250px] md:h-[500px] xl:h-[420px]:" />
      </div>

      <div className="group grid grid-cols-4 gap-4 md:gap-8 mt-8 max-w-3xl mx-auto">
        {dummyTrailers.map((trailer) => (
          <div
            className="group-hover:opacity-50 hover:!opacity-100
  relative cursor-pointer  hover:-translate-y-1 transition duration-300"
            key={trailer.id}
            onClick={() => SetDummyTrailer(trailer)}
          >
            <img
              src={trailer.image}
              alt={trailer.title}
              className="w-full h-full object-cover rounded-2xl brightness-75"
            />
            <div className="absolute top-0 left-0 w-full h-full flex items-center justify-center opacity-100 hover:opacity-50 transition-opacity duration-300">
              {/* Add overlay content here, e.g. play icon */}
              <PlayCircleIcon strokeWidth={1.6} className='w-10 h-10 text-white '/>
             
            </div>
          </div>
        ))}
      </div>

    </div>
  )
}

export default TrailerSection