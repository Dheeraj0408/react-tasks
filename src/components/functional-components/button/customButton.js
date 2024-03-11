import React from "react";
const CustomButton=({children,onClick})=>{
    console.log(children);
    return(
        <>
        <button onClick={onClick}>{children}</button>
        </>
    )
}
export default React.memo(CustomButton);