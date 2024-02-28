import { Component } from "react";

class TailwindTable extends Component {
  constructor() {
    super();
    this.state = {
      data: [],
    };
  }
  getData = () => {
    fetch("https://fakestoreapi.com/products")
      .then((res) => res.json())
      .then((json) => this.setState({ data: json }));
  };

  render() {
    return (
      <>
        <button onClick={this.getData} className="bg-green-500 p-2 m-2 border-2 border-green-400 rounded text-white">Click Me</button>
        <div>
          <table className="table-auto w-100 border-2">
          {
            this.state.data.length>0?  <thead>
            <tr>
                <th>ID</th>
                <th>title</th>
                <th>Image</th>
                <th>Price</th>
            </tr>
        </thead>:null
          }
            {this.state.data.map((eachProduct) => {
              return (
                <tr key={eachProduct.id} className="border-2 border-black-500">
                  <th scope="row" className="border-2 border-black-500">{eachProduct.id}</th>
                  <td className="border-2 border-black-500">{eachProduct.title}</td>
                  <td className="border-2 border-black-500">
                    <img
                      src={eachProduct.image}
                      style={{ width: "100px", height: "100px" }}
                      alt="Product"
                    />
                  </td>
                  <td>{eachProduct.price}</td>
                </tr>
              );
            })}
          </table>
        </div>
      </>
    );
  }
}
export default TailwindTable;
