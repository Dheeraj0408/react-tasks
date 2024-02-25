import "./filterData.module.css";
const { Component } = require("react");

class FilterData extends Component {
  constructor() {
    super();
    this.state = {
      data: [
        { name: "Dheeraj", designation: "React", salary: "30000" },
        { name: "Sadhiq", designation: "Angular", salary: "25000" },
        { name: "Sachin", designation: "Node", salary: "25500" },
        { name: "John", designation: "React", salary: "32000" },
        { name: "Emily", designation: "React", salary: "31000" },
        { name: "Michael", designation: "React", salary: "30000" },
        { name: "David", designation: "React", salary: "30500" },
        { name: "Sarah", designation: "React", salary: "33000" },
        { name: "Daniel", designation: "React", salary: "29500" },
        { name: "Jessica", designation: "Angular", salary: "28000" },
        { name: "Ryan", designation: "Angular", salary: "27000" },
        { name: "Olivia", designation: "Angular", salary: "26500" },
        { name: "William", designation: "Angular", salary: "28500" },
        { name: "Sophia", designation: "Node", salary: "26000" },
        { name: "Ethan", designation: "Node", salary: "25500" },
      ],
      FilteredData:[
        { name: "Dheeraj", designation: "React", salary: "30000" },
        { name: "Sadhiq", designation: "Angular", salary: "25000" },
        { name: "Sachin", designation: "Node", salary: "25500" },
        { name: "John", designation: "React", salary: "32000" },
        { name: "Emily", designation: "React", salary: "31000" },
        { name: "Michael", designation: "React", salary: "30000" },
        { name: "David", designation: "React", salary: "30500" },
        { name: "Sarah", designation: "React", salary: "33000" },
        { name: "Daniel", designation: "React", salary: "29500" },
        { name: "Jessica", designation: "Angular", salary: "28000" },
        { name: "Ryan", designation: "Angular", salary: "27000" },
        { name: "Olivia", designation: "Angular", salary: "26500" },
        { name: "William", designation: "Angular", salary: "28500" },
        { name: "Sophia", designation: "Node", salary: "26000" },
        { name: "Ethan", designation: "Node", salary: "25500" },
      ]
    };
  }
  filterAngular = () => {
    // this.setState({data:this.state.data});
    let result = this.state.FilteredData.filter((eachObject) => {
      return eachObject.designation === "Angular";
    });
    this.setState({ data: result }, () => {
      console.log(result);
    });
  };
  filterReact = () => {
    let result = this.state.FilteredData.filter((eachObject) => {
      return eachObject.designation === "React";
    });
    this.setState({ data: result }, () => {
      console.log(result);
    });
  };
  filterNode = () => {
    let result = this.state.FilteredData.filter((eachObject) => {
      return eachObject.designation === "Node";
    });
    this.setState({ data: result }, () => {
      console.log(result);
    });
  };
  render() {
    return (
      <div>
        <h1 style={{ textAlign: "center" }}>People Data</h1>
        <div
          class="btn-group"
          role="group"
          aria-label="Basic mixed styles example"
        >
          <button
            type="button"
            class="btn btn-danger"
            onClick={this.filterAngular}
          >
            Angular
          </button>
          <button
            type="button"
            class="btn btn-warning"
            onClick={this.filterReact}
          >
            React
          </button>
          <button
            type="button"
            class="btn btn-success"
            onClick={this.filterNode}
          >
            Node
          </button>
        </div>
        <table class="table table-bordered">
          <thead>
            <tr>
              <th scope="col">S.No</th>
              <th scope="col">Name</th>
              <th scope="col">Designation</th>
              <th scope="col">Salary</th>
            </tr>
          </thead>
          <tbody>
            {this.state.data.map((eachObject, ind) => {
              return (
                <tr>
                  <th scope="row">{ind + 1}</th>
                  <td>{eachObject.name}</td>
                  <td>{eachObject.designation}</td>
                  <td>{eachObject.salary}</td>
                </tr>
              );
            })}
          </tbody>
        </table>
      </div>
    );
  }
}
export default FilterData;
