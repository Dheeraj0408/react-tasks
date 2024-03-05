import { useNavigate } from "react-router-dom";

const Error404=()=>{
    const  navigate = useNavigate();//used for login and registration
    const handleRoute=()=>{
        navigate("/");
    }
    return(
        <>
         <h2>Error 404</h2>
         <button onClick={handleRoute}>Go to Home</button>
        </>
    )
}
export default Error404;