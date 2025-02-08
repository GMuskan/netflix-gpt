import { useDispatch } from "react-redux";
import { API_OPTIONS } from "../utils/constants";
import { addTrailerVideo } from "../Slices/MoviesSlice";
import { useEffect } from "react";

export const useMovieTrailer = (movieId) => {
    const dispatch = useDispatch();

    const getMovieVideos = async () => {
        const data = await fetch(
            `https://api.themoviedb.org/3/movie/${movieId}/videos`,
            API_OPTIONS
        );
        const json = await data?.json();
        const trailer =
            json?.results?.filter(
                (video) => video.type === "Trailer" && video.name === "Official Trailer"
            )?.[0] || json?.results[0];
        dispatch(addTrailerVideo(trailer))
    };

    useEffect(() => {
        getMovieVideos();
    }, []);
}