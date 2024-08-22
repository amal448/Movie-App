import { useEffect, useState } from 'react'
import './App.css'
import { Outlet } from 'react-router-dom'
import Header from './components/Header'
import Footer from './components/Footer'
import MobileNavigation from './components/MobileNavigation'
import axios from 'axios';

function App() {
  const [count, setCount] = useState(0)

  const fetch=async()=>{
    try{
          const res=await axios.get('/trending/all/week')
          console.log(" axios res",res);
          
    }
    catch(error)
    {
      console.log("error",error);

    }
  }
  useEffect(()=>{
    fetch()
  },[])
  return (
    <>
<main className='pb-14 lg:pb-0'>
< Header/>
    <div className='pt-16'>
  <Outlet />
    </div>
  <Footer/>
  <MobileNavigation/>
</main>
    </>
  )
}

export default App
