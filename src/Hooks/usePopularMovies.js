import { useDispatch } from "react-redux";
import { API_OPTIONS } from "../utils/constants";
import { addPopularMovies } from "../Slices/MoviesSlice";
import { useEffect } from "react";

export const usePopularMovies = () => {
    const dispatch = useDispatch();

    const getPopularMovies = async () => {
        const data = await fetch('https://api.themoviedb.org/3/movie/popular?page=1', API_OPTIONS);
        const json = await data.json();
        dispatch(addPopularMovies(json?.results))
    }

    useEffect(() => {
        getPopularMovies();
    }, [])
}