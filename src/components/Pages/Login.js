import { useContext, useState } from "react";
import Header from "../Navbar/header";
import axios from "axios";
import { AuthContext } from "../Routing/Navigation";

const LoginPage = () => {
  const value = useContext(AuthContext);
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");

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
    postData({
      username: username,
      password: password,
    });
  };

  const postData = (data) => {
    axios
      .post("https://dummyjson.com/auth/login", data, {
        headers: { "Content-Type": "application/json" },
      })
      .then((res) => {
        // Assuming response structure contains status and error message
        if (res.status === 200) {
          value.changeState();
        } else {
          setError(res.data.error); // Set error message received from server
        }
      })
      .catch((err) => {
        setError("An error occurred. Please try again."); // Set generic error message for network errors
        console.log(err);
      });
  };

  return (
    <>
      <Header />
      <h1>Login Page</h1>
      {error && <div className="alert alert-danger">{error}</div>}
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
    </>
  );
};

export default LoginPage;
/*  username: 'kminchelle',
    password: '0lelplR',*/