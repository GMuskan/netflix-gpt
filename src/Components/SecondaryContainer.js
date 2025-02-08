import React from 'react'
import MovieList from './MovieList'
import { useSelector } from 'react-redux'

export const SecondaryContainer = () => {
    const movies = useSelector(store => store.movies)
    return (
        <div className="bg-black w-screen">
            <div className='-mt-40 pl-12 relative z-20'>
                <MovieList title={"Now Playing"} movies={movies.nowPlayingMovies} />
                <MovieList title={"Trending"} movies={movies.trendingMovies} />
                <MovieList title={"Popular"} movies={movies.popularMovies} />
                <MovieList title={"Upcoming Movies"} movies={movies.upcomingMovies} />
                <MovieList title={"Horror"} movies={movies.horrorMovies} />
            </div>
        </div>
    )
}

export default SecondaryContainer