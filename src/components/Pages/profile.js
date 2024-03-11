import Header1 from "../Navbar/header1";
import UseReducerTask from "../functional-components/hooks/useReducer/CRUD-useReducer";
import UseReducerExample from "../functional-components/hooks/useReducer/useReducerExample";

const ProfilePage=()=>{
    return(
        <>
        <Header1/>
        <h1>Profile Page</h1>
        {/* <UseReducerExample/> */}
        <UseReducerTask/>
        </>
    )
}
export default ProfilePage;