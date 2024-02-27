const { Component } = require("react");

class CircleTask extends Component {
  state = {
    circles: [],
  };
  addCircles = () => {
    this.setState({ circles: [...this.state.circles, false] });
  };
  changeColor = (index) => {
    // console.log(index,this.state.circles);
    let result = this.state.circles.map((element, ind) => {
      if (ind === index) {
        return !element;
      } else {
        return element;
      }
    });
    this.setState({ circles: result });
  };
  render() {
    return (
      <>
        <button onClick={this.addCircles}>Click to add circles</button>
        <h2>Total Circles -------> {this.state.circles.length}</h2>
        <div
          style={{
            width: "79%",
            height: "auto",
            margin: "auto",
            border: "1px solid red",
            display:"flex",
            flexWrap:"wrap"
          }}
        >
          {this.state.circles.map((element, index) => (
            <Circle
              isHighlight={element}
              changeColor={this.changeColor}
              index={index}
              key={index}
            />
          ))}
        </div>
      </>
    );
  }
}
export default CircleTask;
class Circle extends Component {
  render() {
    // console.log(this.props.isHighlight)
    return (
      <div
        style={{
          width: "100px",
          height: "100px",
          borderRadius: "50%",
          border: "2px solid black",
          backgroundColor: this.props.isHighlight ? "black" : null,
        }}
        onClick={() => this.props.changeColor(this.props.index)}
      ></div>
    );
  }
}
