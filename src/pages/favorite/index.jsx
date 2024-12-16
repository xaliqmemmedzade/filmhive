import React, { useEffect, useRef, useState } from 'react'
import { useSelector } from 'react-redux'
import MovieCard from '../../components/moviecard'
import { saveList } from '../../services/saveservices'

function Favorite() {

   const title = useRef(null)
  //  const [myList, setMyList] = useState([])
  const { favList } = useSelector(state => state)


// useEffect(()=>{
 
// }, [])

  const formOnSubmit = (e)=>{
    e.preventDefault()
    let localData =  JSON.parse( localStorage.getItem("myList"));
    saveList( {title:  title.current.value,
      movies: favList})
      .then(res=> {
       localData? localStorage.setItem("myList", JSON.stringify( [...localData, res])) : localStorage.setItem("myList", JSON.stringify( [ res]))
       alert("Save List")
      })
      .catch(err=>console.log(err)
    ) 
    
   
  }
  return (
    <div className="min-h-screen bg-gray-900 text-white py-8">
      <form className="max-w-lg mx-auto mb-8 flex items-center justify-between space-x-4" onSubmit={formOnSubmit}>
        <input
          type="text"
          placeholder="List Title"
          className="w-full px-4 py-2 rounded-lg bg-gray-800 text-white border-2 border-gray-600 focus:border-yellow-500 focus:outline-none"
          ref={title}
        />
        <button
          type="submit"
          className="px-6 py-2 rounded-lg bg-yellow-500 text-black font-semibold hover:bg-yellow-400 focus:outline-none focus:ring-2 focus:ring-yellow-500 transition-all duration-300"
        >
          Save
        </button>
      </form>

      <div className="container mx-auto px-4">
        <h1 className="text-3xl font-semibold text-center mb-8">Favorite Movies</h1>
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-8">
          {
            favList.length ? favList.map((movie) => (
              <div key={movie.id} className="bg-gray-800 rounded-lg overflow-hidden shadow-lg hover:shadow-2xl transition-all duration-300">
                <MovieCard movie={movie} />
              </div>
            )) : (
              <p className="text-center text-lg text-gray-400">You have no favorite movies yet.</p>
            )
          }
        </div>
      </div>
    </div>
  )
}

export default Favorite

