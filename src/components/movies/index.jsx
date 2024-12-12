import React, { useEffect, useState } from 'react'
import { getMoviesSearch } from '../../services/moviesservices'
import MovieCard from '../moviecard'

function Movies() {
  const [movies, setMovies] = useState([])
    useEffect(() => {
        getMoviesSearch()
            .then(data => {

              console.log(data);
              
              setMovies(data.Search)}
            )
            .catch(err => console.log("Movies Comp", err))
    }, [])

    return (
        <div className='grid grid-cols-4 gap-[25px] mt-[40px]'>
           
            {
              movies.length ? movies.map(movie=> <MovieCard movie = {movie} key={imdbID}/> ) : <p className='text-[35px] text-[#3567ac]'>Loading...</p>
            }
            
        </div>
    )
}

export default Movies
