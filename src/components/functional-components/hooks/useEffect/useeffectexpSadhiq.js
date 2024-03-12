import axios from "axios";
import { useEffect, useState } from "react";

const ChangeProducts = () => {
  const [count, setCount] = useState(1);
  const [data, setdata] = useState([]);

  useEffect(() => {
    fecthData();
  }, [count]);

  const handleIncreament = () => {
    setCount(count + 1);
  };

  const fecthData = async () => {
    const result = await axios.get(`https://dummyjson.com/products/${count}`);
    console.log(result.data);
    setdata([result.data]);
  };

  return (
    <>
      <h1>Count {count}</h1>
      <button onClick={handleIncreament}>Increament</button>
      <ul>
        {data.map((items) => {
          return <li>{items.title}</li>;
        })}
      </ul>
    </>
  );
};
export default ChangeProducts;
