import React from 'react'
import BannerHome from '../components/BannerHome'
import Card from '../components/Card'
import { useSelector } from 'react-redux'

const Home = () => {
  const trendingData = useSelector(state => state.movieData.bannerData)

  return (
    <>
      <BannerHome />
      <div className='container mx-auto px-3 my-10'>
        <h2 className='text-xl lg:text-2xl font-bold mb-2'>Trending Now</h2>
        <div>
          {
            trendingData.map((data) => {
              return (
                <Card key={data.id} data={data} />
              )
            })
          }
        </div>
      </div>
    </>
  )
}

export default Home