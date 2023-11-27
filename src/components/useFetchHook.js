/* eslint-disable no-unused-vars */
import { useEffect } from "react";
import { useState } from "react";

export default function useFetchHook(url) {
  const [fetchdata, setFetchdata] = useState([]);
  const [error,setError] = useState([])
  
  useEffect(() => { 
    const fetchDatas = async (url)=>{
        try{
          const res = await fetch(url);
          if(!res.ok)throw new Error("field to fetch data")
          const data = await res.json();
          setFetchdata(data);
        }catch(err){
          setError(err.message)
        }
    }
    fetchDatas(url)
  }, [url]);

  return {fetchdata,error};
}
