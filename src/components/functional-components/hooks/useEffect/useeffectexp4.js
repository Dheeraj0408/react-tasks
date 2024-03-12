import { useEffect } from "react";

const UseEffectExample4=()=>{
    useEffect(()=>{
        window.addEventListener("mousemove",callBackFunction)
    },[])
    const callBackFunction=(event)=>{
        console.log(event.clientX);
        console.log(event.clientY);

    }
    return(
        <>
        <h2>Hello</h2>
        </>
    )
}
export default UseEffectExample4;

    
// Task: based on the count value show the corresponding product in the UI
//