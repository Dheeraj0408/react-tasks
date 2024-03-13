import axios from "axios"
import { useEffect, useState } from "react"

const useAxios=(url)=>{
    const [data,setData]=useState([])
    useEffect(()=>{
        axios.get(url).then(response=>{
            if(response.status===200){
                setData(response.data);
            }
        }).catch(err=>console.log(err));
    },[])
    return [data]
}
export default useAxios;