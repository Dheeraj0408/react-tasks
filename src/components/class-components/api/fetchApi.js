import { Component } from "react";
import axios from "axios";

class FetchApiData extends Component {
  constructor() {
    super();
    this.state = {
      productData: [],
       rawdata:[]
    };
  }
  getData = async () => {
    let result = await axios("https://fakestoreapi.com/products");
    this.setState({ productData: result.data ,rawdata:result.data});

  };
  increment = (data) => {
    console.log(data, this.state.productData);
    let result = this.state.productData.map((product) => {
      if (product.id === data.id) {
        let newProduct = {
          ...product,
          rating: {
            ...product.rating,
            count: product.rating.count + 1,
          },
        };
        return newProduct;
      } else {
        return product;
      }
    });
    console.log(result);
    this.setState({ productData: result });
  };

  decrement = (data) => {
    let result = this.state.productData.map((product) => {
      if (product.id === data.id && data.rating.count > 0) {
        let newProduct = {
          ...product,
          rating: { ...product.rating, count: product.rating.count - 1 },
        };
        return newProduct;
      } else {
        return product;
      }
    });
    this.setState({ productData: result });
  };
  deleteProduct = (id) => {
    let result = this.state.productData.filter((product) => {
      if (product.id !== id) {
        return product;
      }
    });
    this.setState({ productData: result });
  };
  resetData=()=>{
    this.setState({productData:this.state.rawdata})
  };
  totalCost=(data)=>{
    return data.price * data.rating.count;
  }
  render() {
    const borderStyle = {
      border: "2px solid black",
      borderCollapse: "Collapse",
    };
    const columStyle = {
      width: "150px",
      textAlign: "center",
      margin: "auto",
    };
    return (
      <>
        <div className="btn-group">
        <button onClick={this.getData} className="btn btn-success">Fetch Data</button>
        <button onClick={this.resetData} className="btn btn-warning">Reset</button>
        </div>
        <div className="container">
          <table className="table table-bordered" style={borderStyle}>
            <thead>
              <tr>
                <th scope="col" style={{ width: "40px" }}>
                  S.No
                </th>
                <th scope="col" style={columStyle}>
                  Image
                </th>
                <th scope="col" style={columStyle}>
                  Title
                </th>
                <th scope="col" style={columStyle}>
                  price
                </th>
                <th scope="col" style={columStyle}>
                  count
                </th>
                <th scope="col" style={columStyle}>
                  Total 
                </th>
                <th scope="col" style={columStyle}>
                  delete
                </th>
              </tr>
            </thead>
            <tbody>
              {this.state.productData.map((eachObject) => {
                return (
                  <tr key={eachObject.id} style={borderStyle}>
                    <th scope="row" style={{ width: "40px" }}>
                      {eachObject.id}
                    </th>
                    <td style={columStyle}>
                      <img
                        src={eachObject.image}
                        alt="Product"
                        width={"150px"}
                        height={"150px"}
                      />
                    </td>
                    <td style={columStyle}>{eachObject.title}</td>
                    <td style={columStyle}>{eachObject.price}</td>
                    <td style={columStyle}>
                      <button onClick={() => this.increment(eachObject)}>
                        +
                      </button>
                      {eachObject.rating.count}
                      <button onClick={() => this.decrement(eachObject)}>
                        -
                      </button>
                    </td>
                    <td style={columStyle}>{this.totalCost(eachObject)}</td>
                    <td>
                      <button
                        onClick={() => this.deleteProduct(eachObject.id)}
                        className="btn btn-danger"
                      >
                        Delete
                      </button>
                    </td>
                  </tr>
                );
              })}
            </tbody>
          </table>
        </div>
      </>
    );
  }
}
export default FetchApiData;
