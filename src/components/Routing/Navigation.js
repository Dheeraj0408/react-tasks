import { BrowserRouter } from "react-router-dom";
import PreRouting from "./preRoute/preRouting";
import PostRouting from "./postRoute/postRouting";

const NavigationStack=()=>{
    return(
        <>
       <BrowserRouter>
      {
        false?<PostRouting/>:<PreRouting/>
      }
       </BrowserRouter>
        </>
    )
}
export default NavigationStack;