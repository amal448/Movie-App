import { useEffect, useState } from "react"
import axios from 'axios'

const useFetchDetails=(endpoint)=>{
    const [data,setData]=useState([])
    const [loading,setLoading]=useState(false)


    const fetchData=async()=>{

    try{
      setLoading(true)
      const res =await axios.get(endpoint)
      console.log("useFetchDetails",res.data);
      setData(res.data)
      setLoading(false)
    }
    catch(error)
    {
      console.log(error);
      
    }
  }

  useEffect(()=>{
    fetchData()
  },[endpoint])
  return {data,loading}
}

export default useFetchDetails
