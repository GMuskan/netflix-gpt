import React from "react";
import Header from "./Header";
import { useNowPlayingMovies } from "../Hooks/useNowPlayingMovies";
import MainContaner from "./MainContaner";
import SecondaryContainer from "./SecondaryContainer";

const Browse = () => {
  useNowPlayingMovies();

  return <div>
    <Header />
    <MainContaner />
    <SecondaryContainer />
  </div>;
};

export default Browse;
