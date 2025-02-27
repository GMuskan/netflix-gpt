import React from "react";
import Header from "./Header";
import { useNowPlayingMovies } from "../Hooks/useNowPlayingMovies";
import MainContaner from "./MainContaner";
import SecondaryContainer from "./SecondaryContainer";
import { usePopularMovies } from "../Hooks/usePopularMovies";
import { useTopRatedMovies } from "../Hooks/useTopRatedMovies";
import { useUpcomingMovies } from "../Hooks/useUpcomingMovies";

const Browse = () => {
  useNowPlayingMovies();
  usePopularMovies();
  useTopRatedMovies();
  useUpcomingMovies()

  return <div>
    <Header />
    <MainContaner />
    <SecondaryContainer />
  </div>;
};

export default Browse;
