import React from 'react'
import { useSelector } from 'react-redux'
const Card = ({data}) => {
  const ImageUrl = useSelector(state => state.movieData.imageURL)

  return (
    <div className='w-full max-w-[250px] rounded h-80 overflow-hidden'>
        <img src={ImageUrl+ data.poster_path} alt="" />

    </div>
  )
}

export default Card