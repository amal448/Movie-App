import React from 'react'
import { useSelector } from 'react-redux'
import moment from 'moment'
import { Link } from 'react-router-dom'

const Card = ({ data, trending, index,media_type }) => {

    const ImageUrl = useSelector(state => state.movieData.imageURL)
    const mediaType=data.media_type ?? media_type

    return (
        <Link to={'/' + mediaType+"/"+data?.id} className='w-full min-w-[230px] max-w-[230px] block rounded h-80 overflow-hidden relative hover:scale-105'>
          
          {
            data?.poster_path ?(
                <div>
            <img src={ImageUrl + data?.poster_path} alt="" />
                </div>
            ):(
                <div className='bg-neutral-800 flex justify-center items-center h-full w-full'>
                    No Image found
                </div>
            )
          }
          
            <div className='absolute top-4 '>
                {
                    trending && (
                        <div className='px-4 py-1 bg-black/60 backdrop-blur-3xl rounded-r-full overflow-hidden'>
                            #{index} Trending
                        </div>
                    )
                }
            </div>

            <div className='absolute bottom-0 h-16 backdrop-blur-3xl w-full bg-black/60 p-2'>
                <h2 className='text-ellipsis line-clamp-1 text-lg font-semibold'>{data?.title || data?.name}</h2>
               
                 <div className='flex justify-between'>

                    <p className='text-sm text-neutral-400'>{moment(data?.release_date).format('MMM Do YY')}</p>
                    <p className='bg-black px-1 rounded-full text-xs text-white'>Rating: {Number(data.vote_average).toFixed(1)}</p>

                </div>

            </div>

        </Link>
    )
}

export default Card