import axios from "axios";
import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import CustomSpinner from "../functional-components/Spinners/spinner1";
import "./homescreen.css"

const ProductDetail = () => {
  const routeInformation = useParams();
  const [product, setProduct] = useState({});
  console.log(routeInformation);
  useEffect(() => {
    fetchData();
  }, [routeInformation.id]);
  const fetchData = () => {
    axios
      .get(`https://fakestoreapi.com/products/${routeInformation.id}`)
      .then((response) => {
        if (response.status === 200) {
          setProduct(response.data);
        }
      })
      .catch((err) => console.log(err));
  };
  return (
    <>
      <h1>I am Product Detail Screen</h1>
    <div className="card-details">
    {Object.keys(product).length > 0 ? (
        <>
          <h1>{product.title}</h1>
          <img src={product.image} width={200} height={200}/>
          <h4 style={{color:"red"}}>₹{product.price}</h4>
          <h5>{product.description}</h5>
        </>
      ) : (
        <CustomSpinner />
      )}
    </div>
    </>
  );
};
export default ProductDetail;
