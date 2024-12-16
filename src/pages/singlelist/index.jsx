import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router'
import { getSingleList } from '../../services/saveservices'
import MovieCard from '../../components/moviecard'

function SingleList() {
  const [list, setList] = useState(null)
  const { id } = useParams()

  useEffect(() => {
    const fetchData = async () => {
      try {
        const data = await getSingleList(id)
        setList(data)
      } catch (err) {
        console.log(err)
      }
    }
    fetchData()
  }, [id])

  if (!list) return <p>Loading...</p>

  return (
    <div>
      <div className='flex justify-between items-start'><h1 className='text-[1.875rem] text-white'>{list.title}</h1>
        <a href={`http://api.whatsapp.com/send?text=${location.href}`} target="_blank" rel="noopener noreferrer">
        <img src="https://cdn-icons-png.freepik.com/256/2496/2496112.png?semt=ais_hybrid" className='w-[3.125rem] rounded-full' /></a></div>
      <div className='grid grid-cols-4 gap-[1.5625rem] mt-[2.5rem]'>
        {list.movies?.map(movie => (
          <MovieCard movie={movie} key={movie.imdbID} />
        ))}
      </div>
    </div>
  )
}

export default SingleList
