import { Route, Routes } from "react-router-dom";
import LoginPage from "../../Pages/Login";
import RegistrationPage from "../../Pages/register";
import Error404 from "../../Pages/errorpage";
import ForgotPassword from "../../Pages/forgotPassword";

const PreRouting = () => {
  return (
    <>
    <Routes>
      <Route path="/" Component={LoginPage} />
      <Route path="/register" Component={RegistrationPage} />
      <Route path="/forgotpassword" Component={ForgotPassword}/>
      <Route path="*" Component={Error404} />
    </Routes>
    </>
  );
};
export default PreRouting;
