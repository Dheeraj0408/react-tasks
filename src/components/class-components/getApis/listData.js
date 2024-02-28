import { Component } from "react";
import "./listData.module.css";

class ListData extends Component {
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
      <>
        <div className="container">
          {this.state.data.map((eachObject) => {
            return (
              <>
                <ol key={eachObject.id}>
                  <li>{eachObject.id}</li>
                  <li>{eachObject.brand}</li>
                  <li>{eachObject.category}</li>
                  <li>{eachObject.title}</li>
                </ol>
              </>
            );
          })}
        </div>
      </>
    );
  }
}
export default ListData;
