import { Component } from "react";
class ImageComponent extends Component {
  constructor() {
    super();
    this.state = {
      name: "Dheeraj",
      salary: 100000,
    };
  }
  salaryIncrement=()=>{
     this.setState({salary:this.state.salary+1000},()=>{
        console.log(this.state.salary)
     });
     console.log(this.state.salary,"Outside");
  }
  render() {
    return (
      <div>
        <p>{this.props.name}</p>
        <h3>
          Hello World {this.state.name} {this.state.salary}
        </h3>
        <button onClick={this.salaryIncrement}>Update salary by 1000</button>
      </div>
    );
  }
}
export default ImageComponent;
