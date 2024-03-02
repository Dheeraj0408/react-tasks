import { useEffect, useState } from "react";

const UseEffectExample = () => {
    const[counter,setCounter]=useState(0);
    useEffect(()=>{
        console.log("useEffect Called ")
    },[counter])

    const handleIncrement=()=>{
        setCounter(counter+1)
    }
  return (
    <>
      <div>
    <h1>Counter {counter}</h1>
    <button onClick={handleIncrement}>Increment</button>
      </div>
    </>
  );
};

export default UseEffectExample;
