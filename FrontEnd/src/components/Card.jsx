import React from 'react'
import { useSelector } from 'react-redux'
import moment from 'moment'
import { Link } from 'react-router-dom'
const Card = ({ data, trending, index }) => {
    const ImageUrl = useSelector(state => state.movieData.imageURL)

    return (
        <Link to={'/' +data.media_type+"/"+data.id} className='w-full min-w-[230px] max-w-[230px] rounded h-80 overflow-hidden relative'>
            <img src={ImageUrl + data.poster_path} alt="" />

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