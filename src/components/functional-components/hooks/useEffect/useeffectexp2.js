import axios from "axios";
import { useEffect,useState } from "react";
import { Spinner } from "react-bootstrap";

const UseEffectExample2 = () => {
    const [count,setCount]=useState(0);
    const[data,setData]=useState([]);
  useEffect(() => {
    fetchData();
  }, []);
  const fetchData = async () => {
    const result = await axios.get("https://dummyjson.com/products");
    console.log(result);
    setData(result.data.products);
  };
  return (<>
  <h1>UseEffect</h1>
  <p>{count}</p>
  <button onClick={()=> setCount(count+1)}>Count Changes</button>
  {
    data.length>0?data.map(item=><h4>{item.title}</h4>):<Spinner/>
  }
  </>)
}
export default UseEffectExample2;
