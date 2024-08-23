import React, { useEffect, useState } from 'react'
import BannerHome from '../components/BannerHome'
import { useSelector } from 'react-redux'
import HorrizontalScrollData from '../components/HorrizontalScrollData'
import useFetch from '../hooks/useFetch'

const Home = () => {
  const trendingData = useSelector(state => state.movieData.bannerData)
  const {data:nowPlayingData}=useFetch("/movie/now_playing")
  const {data:popular}=useFetch("/movie/popular")
  const {data:toprated}=useFetch("/movie/top_rated")
  const {data:onTheAirShowData}=useFetch("/tv/on_the_air")






useEffect(()=>{
  // fetchNowPlayingData()
  // PopularMovieData()
},[])
  return (
    <>
      <BannerHome />
      <HorrizontalScrollData  data={trendingData} heading={"Trending Now"} trending={true} />
      <HorrizontalScrollData  data={nowPlayingData} heading={"Now Playing"} media_type={"movie"}/>
      <HorrizontalScrollData  data={toprated} heading={"Top Rated"} media_type={"movie"}/>
      <HorrizontalScrollData  data={popular} heading={"Popular TV Show"} media_type={"tv"}/>
      <HorrizontalScrollData  data={onTheAirShowData} heading={"On The Air"} media_type={"tv"}/>
      
    </>
  )
}

export default Home