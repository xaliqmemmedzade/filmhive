

import MovieCard from '../moviecard'
import { useSelector } from 'react-redux'

function Movies() {
 

const {movies}= useSelector(state=> state)
    return (
        <div className='grid grid-cols-4 gap-[25px] mt-[40px]'>
           
            {
              movies.length ? movies.map(movie=> <MovieCard movie = {movie} key={movie.imdbID}/> ) : <p className='text-[35px] text-[#3567ac]'>Movie not found...</p>
            }
            
        </div>
    )
}

export default Movies
