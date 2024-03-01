import { useRef } from "react";

const Uncontrolled = () => {
  const usernameRef = useRef(null);
  const passwordRef = useRef(null);
  const handleSubmit = (event) => {
    let username = usernameRef.current.value;
    let password = passwordRef.current.value;
    if (username.length > 0 && password.length > 5) {
      alert("Logged in Successfully");
    }
    event.preventDefault();
    console.log("username", usernameRef.current.value);
    console.log("password", passwordRef.current.value);
  };
  return (
    <>
      <h1>Uncontrolled Component Example</h1>
      <form onSubmit={handleSubmit}>
        <input type="text" name="username" ref={usernameRef} />
        <input type="password" name="password" ref={passwordRef} />
        <input type="submit" />
      </form>
    </>
  );
};
export default Uncontrolled;
//steps for an uncontrolled component
//1. create a from
//2.useRef is used to refer the DOM and also we can persist the values
//3.we have attached our ref to an variable to focus: usernameRef.current.focus() method is used.
//4.ref.current.value to get the values.
