import React from 'react'
import MovieCard from './MovieCard'

export const MovieList = ({ title, movies }) => {
    console.log(movies)
    return (
        <div className='px-6'>
            <div className='text-2xl font-bold py-4 text-white'>{title}</div>
            <div className='flex overflow-x-scroll scrollbar-hide'>
                <div className='flex'>
                    {movies?.map(movie => <MovieCard key={movie.id} posterPath={movie.poster_path} />)}
                </div>
            </div>
        </div>
    )
}

export default MovieList