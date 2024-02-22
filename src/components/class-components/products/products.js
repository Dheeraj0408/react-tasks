import { Component} from "react";
class Products extends Component{
    constructor(){
        super();
        this.state={
            products:[
                {laptop:"mac",price:10},
                {laptop:"dell",price:7}
            ]
        }
    }
    sortFunction=()=>{
        let result=this.state.products.sort((a,b)=>a["price"]-b["price"]);
        console.log(result);
        this.setState({
            products:result
        })
    }
    render(){
      return (<div>
        <button onClick={this.sortFunction}>Sort by price</button>
        {
            this.state.products.map((eachobject)=>{
                return (<div>
                    <h3>{eachobject.laptop}</h3>
                    <h3>{eachobject.price}</h3>
                </div>)
            })
        }
      </div>)
    }
}
export default Products;