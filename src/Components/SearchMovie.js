import { useEffect, useState, useMemo } from "react";
import debounce from 'lodash.debounce';

const SearchMovie = ({allMovies}) => {
    const [searchQuery, setSearchQuery] = useState("");
    const [filteredMovies, setFilteredMovies] = useState([]);
    // let filteredMovies = [];
    useEffect(()=>{
        let newFilteredMovies = [];
        for(const movie in allMovies) {
            if(movie.includes(searchQuery)) {
                const rating = allMovies[movie]['rating'];
                const durationInMinutes = allMovies[movie]['duration'];
                const hour = Math.floor(durationInMinutes/60);
                const min = Math.floor(durationInMinutes%60);
                newFilteredMovies.push({
                    movieDetails: {
                        movieName: movie,
                        rating,
                        duration: `${hour}h ${min}m`
                    }
                });
            }
        }
        setFilteredMovies(newFilteredMovies);

    }, [searchQuery, allMovies]);
    
    const dbouncedsetSearchQueryFun = useMemo(()=>{

        return debounce((e)=>{console.log("Hii Himanshu");setSearchQuery(e.target.value)}, 500);
    }, []);

    useEffect(()=> {
        console.log("all movies ", allMovies);
        console.log("searchQuery ", searchQuery);
        console.log("filteredMovies1 ", filteredMovies);
    })
    useEffect(()=> {
        return ()=> {
            if(dbouncedsetSearchQueryFun)
            dbouncedsetSearchQueryFun.cancel();
        }
    }, []);
    // const getMovie = () => {
        
    // }

    return (
        <div>
            <div className="mb-3">
                <label htmlFor="search" className="form-label">Email address</label>
                <input type="text" className="form-control" placeholder="Search Movie ..." onChange={dbouncedsetSearchQueryFun}></input>
            </div>
            <table className="table">
                <thead>
                    <tr>
                    <th scope="col">Movie</th>
                    <th scope="col">Rating</th>
                    <th scope="col">Duration</th>
                    </tr>
                </thead>
                <tbody>
                {filteredMovies.map.length === 0 && (
                    <tr>
                        <td colSpan={3}> No movies matches your search</td>
                    </tr>
                )} 
                {filteredMovies.map((currMovie) => {
                    console.log("movieName ", currMovie, ' fil ', filteredMovies);
                    const {movieName, rating, duration} = currMovie['movieDetails'];
                    if(movieName.includes(searchQuery)) {
                        return (
                            <tr key={movieName}>
                                <td>
                                    {movieName}
                                </td>
                                <td>
                                    {rating}
                                </td>
                                <td>
                                    {duration}
                                </td>
                            </tr>
                        )
                    } else return <></>;
                })}
                </tbody>
            </table>
        </div>
    )
  };
  export default SearchMovie;
  