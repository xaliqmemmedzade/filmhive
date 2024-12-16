import React, { useState } from 'react'
import Movies from '../../components/movies'



function Home() {
   
  return (
    <div className='container mx-[auto] border-2 border-yellow-500 p-4'>
    
    <Movies />
    </div>
  )
}

export default Home