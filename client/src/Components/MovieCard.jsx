import { DotIcon, StarIcon } from 'lucide-react';
import React from 'react';
import { useNavigate } from 'react-router-dom';
import timeFormat from '../Libs/timeFormat';

function MovieCard({ movie }) {
  const navigate = useNavigate();

  if (!movie) return null; // Defensive: avoid rendering if movie is undefined

  return (
    <div className="flex flex-col justify-between gap-1 p-3  bg-gray-800 hover:-translate-y-1 rounded-2xl w-66 transition">
      <img
        onClick={() => navigate(`/movies/${movie._id}`)}
        src={movie.backdrop_path}
        alt={movie.title || 'Movie'}
        className='w-full object-cover object-right-bottom cursor-pointer h-52 rounded-2xl'
      />

      <p className='font-semibold text-md truncate mt-2'>{movie.title}</p>

      <div className='flex justify-between items-center gap-0 '>
        <p className='text-sm text-gray-300'>{ new Date(movie.release_date).getFullYear()} - {movie.genres.slice(0,2).map((genres) => genres.name).join(' | ')} - {timeFormat(movie.runtime)}</p>
        </div>

        <div className='flex justify-between items-center gap-2 '>
             <button 
              onClick={() => {navigate(`/movies/${movie._id}`); scrollTo(0,0)}}
              className='text-sm rounded-full cursor-pointer bg-primary hover:bg-primary-dull  transition px-3 py-2'>Buy Ticket</button>
              <p className='text-sm text-gray-300 flex justify-start items-center gap-1'> <StarIcon className='w-3.5 h-3.5 text-primary fill-primary'/> {(movie.vote_average).toFixed(1) }</p>
        </div>
    </div>
  );
}

export default MovieCard;
