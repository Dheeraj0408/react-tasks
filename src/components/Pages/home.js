import { useEffect, useState } from "react";
import Header1 from "../Navbar/header1";
import axios from "axios";
import Button from "react-bootstrap/Button";
import Card from "react-bootstrap/Card";
import useAxios from "../functional-components/customHooks/useAxios";
import { BASE_PROD_URL, endPoints } from "../../endpoints/endpoints";
import CustomSpinner from "../functional-components/Spinners/spinner1";
import { Link } from "react-router-dom";

const HomePage = () => {
  const [dayy, setDayy] = useState(null);
  const [data] = useAxios(`${BASE_PROD_URL}${endPoints.products}`);
  useEffect(() => {
    setDayy(getGreeting());
    console.log(new Date().getFullYear())
  }, []);

  function getToday() {
    let day;
    switch (new Date().getDay()) {
      case 0:
        day = "SUNDAY";
        break;
      case 1:
        day = "MONDAY";
        break;
      case 3:
        day = "TUESDAY";
        break;
      case 4:
        day = "WEDNESDAY";
        break;
      case 5:
        day = "THURSDAY";
        break;
      case 6:
        day = "SATURDAY";
        break;
      default:
        day = null;
    }
    console.log(`Today is  ${day}!`);
    return day;
  }

  function getGreeting(){
    const timeInHours=new Date().getHours();
    let greeting;
    if(timeInHours>6&&timeInHours<11){
      greeting='Good  Morning';
    }else if(timeInHours>=11 && timeInHours<=16)
      greeting="Good Afternoon";
    else if(timeInHours>=16&&timeInHours<18){
      greeting='Good Evening';
    }else{
      greeting='Good Night';
    }
    return greeting;
  }

  return (
    <>
      <Header1 />
      <h2>{dayy}</h2>
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
  );
};
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
            <Link
              to={`/${category}/${id}`}
              style={{ textDecoration: "none", color: "black" }}
            >
              See Details
            </Link>
          </button>
        </Card.Body>
      </Card>
    </>
  );
}
