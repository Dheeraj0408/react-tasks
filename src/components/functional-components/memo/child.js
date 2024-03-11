import React from "react";
function Child(){
    console.log("Child rendering");
    return(
        <>
        <h2>Child</h2>
        </>
    )
}
export default React.memo(Child);  //Adding memo to prevent unnecessary re-renders of the component 