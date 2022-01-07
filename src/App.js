import { useEffect, useState } from "react";
import "./styles.css";
import RateMovie from "./Components/RateMovie";
import SearchMovie from "./Components/SearchMovie";
import { returnNewMovieObj } from "./utils";
export default function App() {
  const [allMovies, setAllMovies] = useState({});

  const handleRateMovie = ({ movie, rating, duration }) => {
    setAllMovies((prevAllMoviesObj) => {
      const newObj = returnNewMovieObj({
        prevAllMoviesObj,
        movie,
        rating,
        duration
      });
      console.log("newObj ", newObj);
      return newObj;
    });
  };

  // useEffect(()=> {
  //   console.log("all movies ", allMovies);
  // })

  return (
    <div className="App">
      <h1>Rate your favorite movies</h1>
      <RateMovie handleRateMovie={handleRateMovie} />
      <SearchMovie allMovies={allMovies} />
    </div>
  );
}
