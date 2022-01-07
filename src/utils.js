export const returnNewMovieObj = ({
    prevAllMoviesObj,
    movie,
    rating,
    duration
  }) => {
    if (movie in prevAllMoviesObj) {
      // iterate the prevAllMoviesObj obj to update the target key value pair
        const newAllMoviesObj = {};  
        for (const movieName in prevAllMoviesObj) {
            if (movieName === movie) {
            // update the target key value pair
            newAllMoviesObj[movieName] = { rating, duration };
            } else {
            // no need to update just use old values
            newAllMoviesObj[movieName] = prevAllMoviesObj[movieName];
            }
        }
        return newAllMoviesObj;
    } else {
      // in this case append the target key value pair
      return {
        ...prevAllMoviesObj,
        [movie]: {
          rating,
          duration
        }
      };
    }
  };
  