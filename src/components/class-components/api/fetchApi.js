import { Component } from "react";
import axios from "axios";

class FetchApiData extends Component {
  constructor() {
    super();
    this.state = {
      productData: [],
    };
  }
  getData = () => {
    //hit the server
    let result = axios
      .get("https://fakestoreapi.com/products")
      .then((res) => console.log(res.data))
      .catch((err) => console.log(err));
    this.setState({ productData: result }, () => {
      console.log(result);
    });
    // return result;
  };
  render() {
    return (
      <>
        <button onClick={this.getData}>Fetch Data</button>
        <div className="container">
          <table className="table">
            <thead>
              <tr>
                <th scope="col">#</th>
                <th scope="col">First Name</th>
                <th scope="col">Last Name</th>
                <th scope="col">Username</th>
              </tr>
            </thead>
            <tbody>
              {this.state.productData.map((eachObject) => {
                return (
                  <tr key={eachObject.id}>
                    <th scope="row">{eachObject.id}</th>
                    <td>{eachObject.title}</td>
                    <td>{eachObject.price}</td>
                    <td>{eachObject.rating.count}</td>
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
