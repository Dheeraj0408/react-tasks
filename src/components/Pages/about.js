import { useMemo, useState } from "react";
import Header1 from "../Navbar/header1";
import CardFlip from "../functional-components/Animation/cardFlip";
import useAxios from "../functional-components/customHooks/useAxios";
import UseMemoExample1 from "../functional-components/hooks/useMemo/useMemoExp1";
import UseMemoExample2 from "../functional-components/hooks/useMemo/useMemoExp2";
import UseMemoExample3 from "../functional-components/hooks/useMemo/useMemoExp3";
import UseMemoExample4 from "../functional-components/hooks/useMemo/useMemoExp4";

const AboutPage = () => {
  const [data] = useAxios("http://fakestoreapi.com/products/categories");
  console.log(data);

  return (
    <>
      <Header1 />
      <h1>About Page</h1>

      <UseMemoExample1
        list={["Dheeraj", "Sadhiq", "Harini", "Bramha"]}
        filter={"j"}
        utidhe={"k"}
      />
      <UseMemoExample2 list={[345, 30, 7, 234]} />
      <UseMemoExample3 a={20} b={5} />
      <UseMemoExample4 id={4} />
      <CardFlip />
    </>
  );
};
export default AboutPage;
