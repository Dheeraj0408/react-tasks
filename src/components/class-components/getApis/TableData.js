import { Component } from "react";
import "./listData.module.css";

class TableData extends Component {
  constructor() {
    super();
    this.state = {
      data: [],
    };
  }
  componentDidMount() {
    fetch("https://dummyjson.com/products")
      .then((res) => res.json())
      .then((json) => {
        this.setState({ data: json.products });
      });
  }
  render() {
    return (
      <table>
        {this.state.data.length > 0 ? (
          <thead>
            <tr>
              <th>ID</th>
              <th>title</th>
              <th>Image</th>
              <th>Price</th>
            </tr>
          </thead>
        ) : null}
        <tbody>
          {this.state.data.map((eachProduct) => {
            return (
              <tr key={eachProduct.id}>
                <td className="table-data">{eachProduct.id}</td>
                <td className="table-data">{eachProduct.title}</td>
                <td className="table-data">{eachProduct.brand}</td>
                <td className="table-data">{eachProduct.price}</td>
              </tr>
            );
          })}
        </tbody>
      </table>
    );
  }
}
export default TableData;
