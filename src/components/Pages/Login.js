import { useState } from "react";
import Header from "../Navbar/header";

const LoginPage = () => {
    const[username,setUsername]=useState('');
    const[usernameError,setUsernameError]=useState(null);
    const[password,setPassword]=useState('');
    const[passwordError,setPasswordError]=useState('');
    const handleUsername=(event)=>{
        let uname=event.target.value;
        setUsername(event.target.value);
        if(uname.length>7){
            setUsernameError('The username should be less than 7 characters');
        }
        else{
            setUsernameError(null);
        }

    }
    const handlePassword=(event)=>{
        setPassword(event.target.value);
        if(password.length<10){
            setPasswordError('The password must contains atleast 10 characters')
        }
        else{
            setPasswordError(null);
        }
    }

    const handleSubmit=()=>{

    }
  return (
    <>
      <Header />
      <div style={{margin:"auto",border:"1px solid black", width:"fit-content",padding:"20px"}}>
        <h1 style={{marginBottom:"30px"}}>Login Page</h1>
        <form onSubmit={handleSubmit} style={{display:"flex",marginBottom:"30px",flexDirection:"column",rowGap:"10px"}}>
          <div>
          <input type="text" placeholder="Enter your username" onChange={(event)=>handleUsername(event)}/>
            {usernameError?<p style={{color:"red"}}>{usernameError}</p>:null}
          </div>
           <div>
           <input type="password" placeholder="Enter your password" onChange={(event)=>handlePassword(event)}/>
            {passwordError?<p style={{color:'red'}}>{passwordError}</p>:null}
           </div>
            <button type="submit">Login</button>
        </form>
      </div>
    </>
  );
};
export default LoginPage;
