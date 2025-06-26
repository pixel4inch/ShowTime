import React from 'react';
import { useNavigate } from 'react-router-dom';

function MovieCard({ movie }) {
  const navigate = useNavigate();

  if (!movie) return null; // Defensive: avoid rendering if movie is undefined

  return (
    <div className="flex flex-col justify-between gap-2 p-3 bg-gray-800 hover:-translate-y-1 rounded-2xl w-66 transition">
      <img
        onClick={() => navigate(`/movie/${movie.id}`)}
        src={movie.backdrop_path}
        alt={movie.title || 'Movie'}
        className='w-full object-cover object-right-bottom cursor-pointer h-52 rounded-2xl'
      />

      <p className='font-semibold text-md l'>{movie.title}</p>

      
    </div>
  );
}

export default MovieCard;
