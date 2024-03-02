import axios from "axios";
import { useEffect, useState } from "react";

const UseEffectTask = () => {
  const [counter, setCounter] = useState(1);
  const [data, setData] = useState([]);
  useEffect(() => {
    getData();
  }, [counter]);
  const handleCounter = () => {
    setCounter(counter + 1);
  };
  const getData = async () => {
    const result = await axios.get(`https://dummyjson.com/products/${counter}`);
    console.log(result.data);
    setData(result.data);
  };
  return (
    <>
      <div>
        <ul>
          {data? (
            <>
              <li>
                <h2>{data.brand}</h2>
              </li>
              <li><img src={data.images[0]} alt="product" width={200} height={150}/></li>
              <li>{data.title}</li>
              <li>{data.price}</li>
              <li>{data.discountPercentage}</li>
            </>
          ) : (
            "Loading..."
          )}
        </ul>

        <button onClick={handleCounter}>
          Increment&nbsp;&nbsp;&nbsp;{counter}
        </button>
      </div>
    </>
  );
};
export default UseEffectTask;
