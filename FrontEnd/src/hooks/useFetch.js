import { useEffect, useState } from "react"
import axios from 'axios'

const useFetch=(endpoint)=>{
    const [data,setData]=useState([])
    const [loading,setLoading]=useState(false)


    const fetchData=async()=>{

    try{
      setLoading(true)
      const res =await axios.get(endpoint)
      console.log("Home",res.data.results);
      setData(res.data.results)
      setLoading(false)
    }
    catch(error)
    {
      console.log(error);
      
    }
  }

  useEffect(()=>{
    fetchData()
  },[])
  return {data,loading}
}

export default useFetch
