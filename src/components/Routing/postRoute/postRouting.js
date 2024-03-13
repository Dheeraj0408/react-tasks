import { Route, Routes } from "react-router-dom";
import SettingPage from "../../Pages/setting";
import ProfilePage from "../../Pages/profile";
import AboutPage from "../../Pages/about";
import HomePage from "../../Pages/home";
import Error404 from "../../Pages/errorpage";
import ProductDetail from "../../Pages/productdetail";

const PostRouting = () => {
    return (
        <Routes> 
            <Route path="/" Component={HomePage} />
            <Route path="/profile" Component={ProfilePage } />
            <Route path="/setting" Component={SettingPage} />
            <Route path="/about" Component={AboutPage} />


            //Dynamic Routing
            <Route path="/:category/:id" Component={ProductDetail}/>
        </Routes>
    );
}

export default PostRouting;
