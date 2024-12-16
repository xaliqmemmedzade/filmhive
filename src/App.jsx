import { useEffect, useState } from 'react'

import './App.css'
import { RouterProvider } from 'react-router'
import { routers } from './routes'


import { getMoviesSearch } from './services/moviesservices'
import { moviesAction } from './store/actions/movies.action'
import { useDispatch } from 'react-redux'

function App() {
  const dis = useDispatch()
  useEffect(() => {
    getMoviesSearch()
      .then(data => {dis(moviesAction(data.Search))}
      )
      .catch(err => console.log("Movies Comp", err))
  }, [])

  return (
   
      <RouterProvider router={routers} />
    
  )
}

export default App
