import { useEffect, useState } from "react";
import Header1 from "../Navbar/header1";
import axios from "axios";
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';


const HomePage = () => {
  const[data,setData]=useState([]);
  useEffect(() => {
    axios.get("https://fakestoreapi.com/products").then((response) => {
      if (response.status === 200) {
        setData(response.data);
      }
    }).catch(err=>console.log(err));
  }, []);
  return (
    <>
      <Header1 />
      {
        data.length>0&&data.map((eachProduct)=>{
          return(
          <CustomCard product={eachProduct} key={eachProduct.id}/>
          )
        })}  
    </>
  )
}
export default HomePage;

function CustomCard({product}) {
  const {id,title,description,image,price}=product;
  return (
    <>
    <Card style={{ width: '18rem' }}>
      <Card.Img variant="top" src={image} />
      <Card.Body>
        <Card.Title>{title}</Card.Title>
        <Card.Text>
         {description}
        </Card.Text>
        <Button variant="primary">View Product</Button>
      </Card.Body>
    </Card>
    </>
  );
}


