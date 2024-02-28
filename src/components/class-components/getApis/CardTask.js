import { Component } from "react";

class CardTask extends Component {
  state = { cards: [] };
  componentDidMount() {
    fetch("https://fakestoreapi.com/products")
      .then((res) => res.json())
      .then((res) => {
        this.setState({ cards: res });
        console.log(res);
      });
  }
  render() {
    const main = { border: "transparent",backgroungColor:"lightgrey", width: "90%", height: "auto",display:"flex",flexWrap:"wrap",gap:"25px",padding:"20px",margin:"10px auto"};
    const card = { border: "0px solid white",backgroundColor:"whitegrey",boxShadow:"1px 1px 14px 1px grey",width: "300px", height: "auto",padding:"20px",borderRadius:"7px",flexGrow:"1"};
    return (
      <>
        <div style={main}>
          {this.state.cards.map((eachObject) => {
           return(
            <>
             <div style={card} key={eachObject.id}>
                  <img src={eachObject.image} width={200} height={200} style={{display:"block",margin:"0px auto 10px"}}/>
                  <h5 style={{textAlign:"center"}}>{eachObject.title}</h5>
                  <p style={{textAlign:"center"}}>{eachObject.price}</p>
                  <p style={{textAlign:"center",marginBottom:"2px"}}><span style={{fontSize:"15px",fontWeight:"bolder"}}>Rating : </span>{eachObject.rating.rate}</p>
            </div>
            </>
           )
          })}
        </div>
      </>
    );
  }
}
export default CardTask;
