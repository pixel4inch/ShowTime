import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import { dummyShowsData, dummyDateTimeData } from '../assets/assets';
import { PlayCircleIcon, StarIcon, TicketCheckIcon, HeartIcon } from 'lucide-react';
import timeFormat from '../Libs/timeFormat';
import {BlurCircle } from '../Components';



function MovieDetails() {

  const {id} = useParams()
  const [show, setShow] = useState(null)
  const[favorite, setFavorite] = useState(false)
  

  const toggleFavorite = () => {

    setFavorite(!favorite);
    
  }
  const getShow = async () => {
    const findshow = dummyShowsData.find(show => show._id === id)
      if (!findshow) {
      console.error('Show not found')
      return
    }
    setShow({
      movie:findshow,
      dateTime:dummyDateTimeData
    })
  };

  useEffect(() => {
    getShow()
  }, [id])
  

  return show ? (

    <div className='px-6 md:px-16 lg:px-24 xl:px-44 mt-50'>
      <div className='flex flex-col md:flex-row gap-8  relative'>
          <BlurCircle top="-100px" left="150px" />
         <img src={show.movie.backdrop_path} alt={show.movie.title} className='max-md:mx-auto rounded-xl h-104 max-w-70 object-cover' />
          
         <div className='flex flex-col gap-4 max-w-md'>
           <p className='text-xl text-primary'>English</p>
          <h1 className='text-4xl font-semibold max-w-96 text-balance'>{show.movie.title}</h1>
          <div className='flex items-center gap-2'>
            <StarIcon className='w-5 h-5 text-primary fill-primary' />
            <p className=' text-gray-300'>{show.movie.vote_average.toFixed(1)} User Ratings</p>
            </div>
            <p className='text-gray-400'>{show.movie.overview}</p>
            <p>
              {new Date(show.movie.release_date).getFullYear()} - {show.movie.genres.slice(0,2).map((genres) => genres.name).join(' | ')} - {timeFormat (show.movie.runtime)}
            </p>

            <div className='flex justify-start items-center gap-4'>
                <button className='flex gap-2 py-3 justify-center items-center bg-gray-800 hover:bg-gray-900 transition rounded-sm px-6 py-2 cursor-pointer text-sm'><PlayCircleIcon className='w-5 h-5'/> Watch Trailer</button>  
                 <a href='#dateSelect' className='flex gap-2 py-3 justify-center items-center bg-primary hover:bg-primary-dull transition rounded-sm px-6 py-2 cursor-pointer text-sm'><TicketCheckIcon className='w-5 h-5'/> Buy Tickets</a>   
                 <button className='flex gap-2 py-3 justify-center items-center bg-gray-800 hover:bg-gray-900 transition p-2.5 cursor-pointer text-sm rounded-4xl active:scale-90' onClick={toggleFavorite}><HeartIcon className={favorite ? 'w-5 h-5 text-primary fill-primary' : 'w-5 h-5'}/> </button>           
           </div>

          </div> 
    
      </div>
        
      </div>

     

  ):
  (
    <div>
       loading...
    </div>
  )
}

export default MovieDetails