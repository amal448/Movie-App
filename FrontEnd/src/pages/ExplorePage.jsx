import React, { useEffect, useState } from 'react'
import axios from 'axios'
import { useParams } from 'react-router-dom'
import Card from '../components/Card'

const ExplorePage = () => {
  const [pageNo, setPageNo] = useState(1)
  const [data, setData] = useState([])
  const [totalPageNo, setTotalPageNo] = useState(0)

  const params = useParams()

  const fetchData = async () => {
    try {
      const response = await axios.get(`/discover/${params.explore}`, {
        params: {
          page: pageNo
        }
      })
      console.log("explorePage", response.data);
      setTotalPageNo(response.data.total_pages)
      setData((prev) => {
        return [
          ...prev,
          ...response.data.results
        ]
      })


    }
    catch (error) {
      console.log(error);

    }
  }

  const handleScroll = () => {
    if ((window.innerHeight + window.scrollY) >= document.body.offsetHeight) {
      setPageNo(prev => prev + 1)
    }
  }
  useEffect(() => {
    fetchData()
  }, [pageNo])

  useEffect(()=>{
    setPageNo(1)
    setData([])
    fetchData()
  },[params.explore])

  useEffect(() => {
    window.addEventListener("scroll", handleScroll)
  }, [])
  return (
    <div className='py-16'>
      <div className="container mx-auto">
        <h3 className='lg:mx-6 capitalize text-lg lg:text-xl font-semibold my-3'>Popular {params.explore} Show </h3>
     
      <div className='lg:mx-6 grid grid-cols-[repeat(auto-fit,230px)] justify-center lg:justify-start  gap-4'>
        {
          data.map((exploreData,index)=>{
            return(
              <Card data={exploreData} key={exploreData.id+"exploreSection"} media_type={params.explore}/>
            )
          })
        }
      </div>
     
     
      </div>
    </div>
  )
}

export default ExplorePage