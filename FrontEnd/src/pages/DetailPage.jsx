import React from 'react'
import { useParams } from 'react-router-dom'
import useFetch from '../hooks/useFetch'
import useFetchDetails from '../hooks/useFetchDetails'
import { useSelector } from 'react-redux'
import moment from 'moment'
import Divider from '../components/Divider'
import HorrizontalScrollData from '../components/HorrizontalScrollData'
const DetailPage = () => {

  const params = useParams()
  const ImageUrl = useSelector(state => state.movieData.imageURL)

  console.log("params", params);

  const { data } = useFetchDetails(`/${params?.explore}/${params?.id}`)
  const { data: castData } = useFetchDetails(`/${params?.explore}/${params?.id}/credits`)
  console.log("data", data);
  console.log("castData", castData);

  const {data:similarData} =useFetch(`/${params?.explore}/${params?.id}/similar`)
  const {data:recommendationData} =useFetch(`/${params?.explore}/${params?.id}/recommendations`)



  const duration = (Number(data.runtime) / 60).toFixed(1).split('.')
  const writer = castData?.crew?.filter(el => el?.job === "Writer")?.map(el => el?.name)?.join(", ")
  return (
    <div>

      <div className='w-full h-[350px] relative hidden lg:block'>

        <div className='w-full h-full'>
          <img src={ImageUrl + data.backdrop_path} alt="" className='h-full object-cover w-full' />
        </div>
        <div className='absolute w-full h-full top-0 bg-gradient-to-t from-neutral-900/90 to-transparent'>
        </div>
      </div>

      <div className='container px-4 py-16 lg:py-0 flex  flex-col  lg:flex-row gap-5 '>

        <div className='lg:-mt-28 mx-7 relative w-fit min-w-60'>
          <img src={ImageUrl + data.poster_path} alt="" className='h-80 object-cover rounded w-60' />
        </div>

        <div>
          <h2 className='text-2xl lg:text-4xl font-bold text-white'>{data.title || data.name}</h2>
          <p className='text-neutral-400'>{data.tagline}</p>
          <Divider />
          <div className='flex item-center  gap-3'>
            <p>
              Rating : {Number(data.vote_average).toFixed(1)}
            </p>
            <span>|</span>
            <p>
              View : {Number(data.vote_count)}
            </p>
            <p>Duration: {duration[0]}h {duration[1]}m </p>

          </div>
          <Divider />

          <div>
            <h3 className='text-xl font-bold text-white mb-1'>Overview </h3>
            <p>{data.overview}</p>
            <Divider />

            <div className='flex items-center gap-2 my-3 text-center'>
              <p>Status: {data?.status}</p>
              <span>|</span>
              <p>
                Release Date: {moment(data?.release_date).format("MMMM Do YYYY")}
              </p>
              <span>|</span>
              <p>
                Revenue: {Number(data?.revenue)}
              </p>
            </div>
            <Divider />
          </div>

          <div>
            <p>
              <span className='text-white'>Director</span> : {castData?.crew?.length > 0 ? castData.crew[0]?.name : 'N/A'}
            </p>

            <p><span className='text-white'>Writer</span> : {writer}</p>

          </div>

          <Divider />
          <h2 className='font-bold text-lg'>Cast :</h2>
              <div className='grid grid-cols-[repeat(auto-fit,96px)] gap-5'>
                {
                  castData?.cast?.filter(el=>el?.profile_path).map((cast,index)=>{
                    return(
                      <div className=''>
                            <div className=''>
                              <img src={ImageUrl + cast?.profile_path}
                              className='w-24 h-24 object-cover rounded-full'
                              alt="" />
                            </div>
                            <p className='font-bold text-center text-sm text-neutral-400'>{cast?.name}</p>
                      </div>
                    )
                  }) 
                }
              </div>
        </div>
      </div>

                <div>
                  <HorrizontalScrollData  data={similarData} heading={"Similar "+ params?.explore + " shows"} media_type={params?.explore}/>
                  <HorrizontalScrollData  data={recommendationData} heading={"Recommendated "+ params?.explore + " shows"} media_type={params?.explore}/>
                </div>

    </div>
  )
}

export default DetailPage