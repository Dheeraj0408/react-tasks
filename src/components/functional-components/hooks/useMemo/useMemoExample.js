import { useMemo, useState } from "react";

const UseMemoExample = () => {
  const [counter1, setCounter1] = useState(0);
  const [counter2, setCounter2] = useState(0);
  const handleIncrementCounter1 = () => {
    setCounter1(counter1 + 1);
  };
  const handleIncrementCounter2 = () => {
    setCounter2(counter2 + 1);
  };
  const evenChecker=useMemo(()=>{
    console.log("even checker calling")
    for(let i=0;i<1000;i++){
        console.log(i);
    }
    return counter1%2===0?"even":"odd";
  },[counter1]);
  return (
    <>
      <h4>{counter1} Counter1</h4>
      <h4>{counter2} Counter2</h4>
      <button onClick={handleIncrementCounter1}>
        Click to Increment Counter1
      </button>
      <button onClick={handleIncrementCounter2}>
        Click to Increment Counter2
      </button>
      <h2>{evenChecker}</h2>
    </>
  );
};
export default UseMemoExample;
