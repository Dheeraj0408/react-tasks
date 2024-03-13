import { Link, NavLink } from "react-router-dom";

function Header1() {
  return (
    <>
      <nav class="navbar navbar-expand-sm bg-dark navbar-dark">
        <div class="container-fluid">
          <ul class="navbar-nav">
          <li class="nav-item">
              <Link to="/" className="nav-link active">
                Home
              </Link>
            </li>
            <li class="nav-item">
              <Link to="/setting" className="nav-link">
                Setting
              </Link>
            </li>
            <li class="nav-item">
              <Link to="/profile" className="nav-link">Profile</Link>
            </li>
            <li class="nav-item">
              <Link to="/about" className="nav-link">About</Link>
            </li>
          </ul>
        </div>
      </nav>
    </>
  );
}

export default Header1;
