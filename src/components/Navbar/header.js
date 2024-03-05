import { Link, NavLink } from "react-router-dom";

function Header() {
  return (
    <>
      <nav className="navbar navbar-expand-sm bg-dark navbar-dark">
        <div className="container-fluid">
          <ul className="navbar-nav">
            <li className="nav-item">
              <Link to="/" className="nav-link active">Login</Link>
            </li>
            <li className="nav-item">
              <Link to="/register" className="nav-link">register</Link>
            </li>
            <li className="nav-item">
              <Link to="/forgotpassword" className="nav-link">Forgot Password</Link>
            </li>
          </ul>
        </div>
      </nav>
    </>
  );
}

export default Header;
