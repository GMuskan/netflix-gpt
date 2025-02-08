import React from 'react'
import { IMG_CDN_URL } from '../utils/constants'

export const MovieCard = ({posterPath}) => {
  return (
      <div className='w-[150px] h-[200px] rounded-xl pr-4'>
          <img alt="movie card" src={IMG_CDN_URL + posterPath}/>
    </div>
  )
}

export default MovieCard