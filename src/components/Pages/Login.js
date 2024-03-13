<<<<<<< HEAD
import { useContext, useEffect, useState } from "react";
=======
import { useState } from "react";
>>>>>>> 255d786cad62e7a610654cfe00265a51a1d0e15e
import Header from "../Navbar/header";
import axios from "axios";
import { AuthContext } from "../Routing/Navigation";

const LoginPage = () => {
<<<<<<< HEAD
  const value=useContext(AuthContext);
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const handleUsername = (event) => {
    setUsername(event.target.value);
  };
  const handlePassword = (event) => {
    setPassword(event.target.value);
  };
  const handleSubmit = (event) => {
    event.preventDefault();
    console.log(username);
    console.log(password);
    /* username: 'kminchelle',
        password: '0lelplR',*/
    postData({
      username: username,
      password: password,
    });
    // setUsername('');
    // setPassword('');
  };
  const postData = (data) => {
    axios
      .post("https://dummyjson.com/auth/login", data, {
        headers: { "Content-Type": "application/json" },
      })
      .then((res) => {
        // console.log(res);
        if(res.status===200){
          value.changeState();
        }
      })
      .catch((err) => console.log(err));
  };
  return (
    <>
      <Header />
      <h1>Login Page</h1>
      <form onSubmit={handleSubmit}>
        <div className="mb-3">
          <label className="form-label">Username</label>
          <input
            type="text"
            className="form-control"
            onChange={handleUsername}
            value={username}
          />
        </div>
        <div className="mb-3">
          <label className="form-label">Password</label>
          <input
            type="password"
            className="form-control"
            onChange={handlePassword}
            value={password}
          />
        </div>
        <button type="submit" className="btn btn-primary">
          Submit
        </button>
      </form>
=======
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
>>>>>>> 255d786cad62e7a610654cfe00265a51a1d0e15e
    </>
  );
};
export default LoginPage;
