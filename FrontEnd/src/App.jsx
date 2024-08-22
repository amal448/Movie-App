import { useEffect, useState } from 'react'
import './App.css'
import { Outlet } from 'react-router-dom'
import Header from './components/Header'
import Footer from './components/Footer'
import MobileNavigation from './components/MobileNavigation'
import axios from 'axios';
import { useDispatch } from 'react-redux'
import { setBannerData,setImageURL } from './store/movieSlice'

function App() {
  const [count, setCount] = useState(0)
  const dispatch=useDispatch()

  const fetchTrendingdData=async()=>{
    try{
          const res=await axios.get('/trending/all/week')
          console.log(" axios res",res.data.results);
          dispatch(setBannerData(res.data.results))
          
    }
    catch(error)
    {
      console.log("error",error);

    }
  }
  const fetchConfiguration=async()=>{
    try{
      const res= await axios.get('/configuration')
      dispatch(setImageURL(res.data.images.secure_base_url+"original"))
      console.log("configuration",res.data);
      
    }
    catch(error)
    {
      console.log(error);
      
    }
  }
  useEffect(()=>{
    fetchTrendingdData()
    fetchConfiguration()
  },[])
  return (
    <>
<main className='pb-14 lg:pb-0'>
< Header/>
    <div className=''>
  <Outlet />
    </div>
  <Footer/>
  <MobileNavigation/>
</main>
    </>
  )
}

export default App
