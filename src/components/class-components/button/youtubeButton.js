import { Component } from "react";

class YoutubeButton extends Component{
    constructor(){
        super();
        this.state={
            isSubscribe:false
        }
    }
    handleSubscribe=()=>{
        this.setState({
            isSubscribe:!this.state.isSubscribe
        })
    }
    render(){
        return(
            <div>
                <button onClick={this.handleSubscribe}>{this.state.isSubscribe?"unsubscribe":"please Subscribe"}</button>
                {
                    this.state.isSubscribe?<h2>you are a subscriber</h2>:null
                }
            </div>
        )
    }
}
export default YoutubeButton;