import { useState } from 'react'

import './App.css'
import { RouterProvider } from 'react-router'
import { routers } from './routes'

function App() {
  const [count, setCount] = useState(0)

  return (
    <RouterProvider router={routers}/>
  )
}

export default App
