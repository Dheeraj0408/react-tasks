import { useEffect, useState } from "react";
import Header1 from "../Navbar/header1";
import axios from "axios";
import Button from "react-bootstrap/Button";
import Card from "react-bootstrap/Card";
import CustomSpinner from "../functional-components/Spinners/spinner1";
import { Link } from "react-router-dom";
import "./homescreen.css"

const HomePage = () => {
  const [data, setData] = useState([]);
  useEffect(() => {
    axios
      .get("https://fakestoreapi.com/products")
      .then((response) => {
        if (response.status === 200) {
          console.log(response);
          setData(response.data);
        }
      })
      .catch((err) => console.log(err));
  }, []);
  return (
    <>
      <Header1 />
      <div className="cards-container">
        {data.length > 0 ? (
          data.map((eachProduct) => {
            return (
              <div key={eachProduct.id}>
                <CustomCard product={eachProduct} />
              </div>
            );
          })
        ) : (
          <CustomSpinner />
        )}
      </div>
    </>
  )
}
export default HomePage;

export function CustomCard(props) {
  // const {
  //   product: { title, description, image, price },
  // } = props;
  const { title, id, description, image, price, category } = props.product;
  const handleClick = () => {};
  return (
    <>
      <Card className="custom-cards">
        <Card.Img variant="top" src={image} width={250} height={250} />
        <Card.Body>
          <Card.Title>{title}</Card.Title>
          <Card.Text>{category}</Card.Text>
          <p style={{ color: "red" }}>₹{price}</p>
          {/* <Button variant="primary">View Product</Button> */}
          <button>
            <Link to={`/${category}/${id}`} style={{textDecoration:"none",color:"black"}}>See Details</Link>
          </button>
        </Card.Body>
      </Card>
    </>
  );
}
