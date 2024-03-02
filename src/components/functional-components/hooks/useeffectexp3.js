import { useEffect, useState } from "react";

const UseEffectExample3=()=>{
    const [count, setCount] = useState(0);
    
    useEffect(()=>{ 
        domManipualtion();
        console.log("UseEffect")
    },[null])
    const domManipualtion=()=>{
        document.title=`Current Count ${count}`
    }
    return(
        <>
        <h3>Use Effects</h3>
        <h3>Current Count : {count}</h3>
        <button onClick={()=>setCount(count+1)}>Increment</button>
        </>
    )
}
export default UseEffectExample3;