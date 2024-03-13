import { BrowserRouter } from "react-router-dom";
import PreRouting from "./preRoute/preRouting";
import PostRouting from "./postRoute/postRouting";
import { createContext, useState } from "react";

export const AuthContext = createContext();
const NavigationStack = () => {
  const [login, setLogin] = useState(false);
  const changeState = () => {
    setLogin(true);
  };
  const values = { login, changeState };
  return (
    <>
      <BrowserRouter>
        <AuthContext.Provider value={values}>
          {login ? <PostRouting /> : <PreRouting />}
        </AuthContext.Provider>
      </BrowserRouter>
    </>
  );
};
export default NavigationStack;
