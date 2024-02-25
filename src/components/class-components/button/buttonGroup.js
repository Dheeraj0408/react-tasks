import { Component } from "react";

class ButtonGroup extends Component{
    render(){
        return(
            <div className="btn-group">
                <button type="button" className="btn btn-success">{this.props.btn1}</button>
                <button type="button" className="btn btn-danger">{this.props.btn2}</button>
                <button type="button" className="btn btn-warning">{this.props.btn3}</button>
                <button type="button" className="btn btn-secondary">{this.props.btn4}</button>
            </div>
        )
    }
}
export default ButtonGroup;