import axios from "axios";
import { useEffect, useMemo, useState } from "react";

const UseMemoExample4=({id})=>{
    const[data,setData]=useState(null);
    useEffect(()=>{
        axios.get(`https://fakestoreapi.com/products/${id}`).then(res=>setData(res.data.title)).catch(err=>console.log(err));
    },[id]);
    const processedData=useMemo(()=>{
        return data?data.toUpperCase():null;
    })
    return(
        <>
         <h3>{processedData}</h3>
        </>
    )
}
export default UseMemoExample4;