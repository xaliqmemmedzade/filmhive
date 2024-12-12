import React from 'react'

function MovieCard({movie}) {
    const {Year, Poster, Title} = movie
  return (
    <div className='p-[20px] rounded-sm borde--[2px] shadow  '>
        <img src={Poster} alt="" />
        <h2 className='text-[20px] text-[#3467ac]'>{Title}</h2>
        <div className='flex justify-between items-center'>
            <p>{Year}</p>
            <button>
            
            </button>
        </div>
    </div>
  )
}

export default MovieCard