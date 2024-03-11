import { useState } from "react"
import Child from "./child";

function ParentMemo(){
    const[counter,setCounter]=useState(0);
    return(
        <>
        <h3>Counter</h3>
        <button onClick={()=>setCounter(counter+1)}>Count Increment</button>
        <Child/>
        </>
    )
}
export default ParentMemo;