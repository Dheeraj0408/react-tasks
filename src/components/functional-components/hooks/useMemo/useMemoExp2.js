import { useMemo } from "react";

const UseMemoExample2=({list})=>{
    const sortedList=useMemo(()=>{
       return [...list].sort((a,b)=>a-b)
    },[list])
    return(
        <>
         <ol>
            {
                sortedList.map((item,index)=><li key={index}>{item}</li>)
            }
         </ol>
        </>
    )
}
export default UseMemoExample2;