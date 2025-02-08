import React from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faPlay, faCircleInfo } from '@fortawesome/free-solid-svg-icons'
export const VideoTitle = ({title, overview}) => {
  return (
      <div className="w-screen aspect-video pt-[20%] px-24 absolute text-white bg-gradient-to-r from-black">
          <h1 className='text-5xl font-bold'>{title}</h1>
          <h1 className='py-6 text-lg w-1/4'>{overview}</h1>
          <div>
              <button className='bg-white text-black p-4 px-12 text-xl rounded-lg hover:bg-opacity-80'>
                  <FontAwesomeIcon icon={faPlay} />
                  {" "}Play
              </button>
              <button className='mx-2 bg-gray-400 text-white p-4 px-12 text-xl bg-opacity-50 rounded-lg'>
                  <FontAwesomeIcon icon={faCircleInfo} />
                  {" "}More Info
              </button>
          </div>
    </div>
  )
}

export default VideoTitle