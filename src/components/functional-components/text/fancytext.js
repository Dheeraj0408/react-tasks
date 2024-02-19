import "./fancytext.css";
import styles from "./fancytext.module.css";
const FancyText=()=>{
    const objectStyling={
        color:"red",
        backgroundColor:"Black",
    }
    return (
       <div>
         <h5 style={objectStyling}>
            Hello..... I am Dheeraj
        </h5>
        <h5 className="text">EXternal CSS</h5>
        <h5 className="hello">EXternal Module CSS</h5>
        <p>Hi this is extrenal styling in App.css</p>
       </div>
    )
}
export default FancyText;

//Ways to style react application
//1. Inline Styling
//2. External Styling
//3. External Module Styling
//4. Saas styling(bootsrap,tailwind)

// Bootstrap installation
// 1.CDN Links
// 2.Install via npm package

// npm: node package manager --> it is a container for all the open source packages or dependencies