import ReactCardFlip from "react-card-flip";
import "./cardFlip.css";
import { useState } from "react";
const CardFlip = () => {
  const[isFlipped,setIsFlipped]=useState(false);
  function flipCard(){
    setIsFlipped(!isFlipped);
  }
  return (
    <>
      <ReactCardFlip flipDirection="horizontal" isFlipped={isFlipped}>
        <div className="card card-front" onClick={flipCard} >
          <h4>Front</h4>
        </div>
        <div className="card card-back" onClick={flipCard}>
          <h4>Back</h4>
        </div>
      </ReactCardFlip>
    </>
  );
};
export default CardFlip;

// const card={
  // margin:"auto",
  // width:"250px",
  // height:"300px",
  // border:"1px solid black",
  // borderRadius:"10px",
  // display:"flex",
  // justifyContent:"center",
  // alignItems:"center"
// }
