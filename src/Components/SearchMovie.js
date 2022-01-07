import { useEffect, useState, useMemo } from "react";
import debounce from 'lodash.debounce';

const SearchMovie = ({allMovies}) => {
    const [searchQuery, setSearchQuery] = useState("");
    const [filteredMovies, setFilteredMovies] = useState([]);

    useEffect(()=>{
        // update the filteredMovies whenever searchQuery or movies list changes
        let newFilteredMovies = [];
        for(const movie in allMovies) {
            if(movie.includes(searchQuery)) {
                const {rating, duration: durationInMinutes} = allMovies[movie];
                const hour = Math.floor(durationInMinutes/60);
                const min = Math.floor(durationInMinutes%60);
                const duration = `${hour}h ${min}m`;
                newFilteredMovies.push(
                    <tr key={movie}>
                        <td>
                            {movie}
                        </td>
                        <td>
                            {rating}
                        </td>
                        <td>
                            {duration}
                        </td>
                    </tr>
                )
            }
        }
        setFilteredMovies(newFilteredMovies);

    }, [searchQuery, allMovies]);
    
    // Debouncing code
    const dbouncedsetSearchQueryFun = useMemo(()=>{
        return debounce((e)=>{setSearchQuery(e.target.value)}, 500);
    }, []);

    useEffect(()=> {
        //Debouncing cleanup
        return ()=> {
            if(dbouncedsetSearchQueryFun)
            dbouncedsetSearchQueryFun.cancel();
        }
    });

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
                {filteredMovies.length === 0 ? (
                    <tr>
                        <td colSpan={3}> {Object.keys(allMovies).length === 0 ? `Movie list is empty, please add movie` : `No movies matches your search`} </td>
                    </tr>
                ): filteredMovies} 
                </tbody>
            </table>
        </div>
    )
  };
  export default SearchMovie;
  