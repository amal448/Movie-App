import React, { useEffect, useState } from 'react'
import { useLocation,useNavigate } from 'react-router-dom'
import axios from 'axios'
import Card from '../components/Card'

const SearchPage = () => {
  const location =useLocation()
  const navigate=useNavigate()
  console.log(location.search.slice(3));

  const [data,setData]=useState([])
  const [pageNo, setPageNo] = useState(1)
  
  const fetchData = async () => {
    try {
      const response = await axios.get(`/search/collection`, {
        params: {
          query:location?.search?.slice(3),
          page: pageNo,
        }
      })
      console.log("explorePage", response.data);
      setData((prev) => {
        return [
          ...prev,
          ...response?.data?.results
        ]
      })


    }
    catch (error) {
      console.log(error);

    }
  }

  useEffect(()=>{
    setPageNo(1)
    setData([])
    fetchData()
  },[location?.search])

  const handleScroll = () => {
    if ((window.innerHeight + window.scrollY) >= document.body.offsetHeight) {
      setPageNo(prev => prev + 1)
    }
  }
  useEffect(() => {
    window.addEventListener("scroll", handleScroll)
  }, [])

  useEffect(() => {
    fetchData()
  }, [pageNo])

  return (
    <div className='py-16'>

      <div className="lg:hidden my-2 mx-1 sticky top-[70px] z-30">
        <input type="text" placeholder='Search Here..' onChange={(e)=>navigate(`/search?q=${e.target.value}`)} 
        className='px-4 py-1 text-lg w-full bg-white rounded-full text-neutral-700'
        />
      </div>


      <div className='container mx-auto'>
      <h3 className='lg:mx-6 capitalize text-lg lg:text-xl font-semibold my-3'>Search Results</h3>

      <div className='lg:mx-6 grid grid-cols-[repeat(auto-fit,230px)] justify-center lg:justify-start gap-4'>
        {
          data?.map((searchdata,index)=>{
            return(
              <Card data={searchdata} key={searchdata.id+"search"+ index} media_type={searchdata.media_type}/>
            )
          })
        }
      </div>
      </div>
    </div>
  )
}

export default SearchPage