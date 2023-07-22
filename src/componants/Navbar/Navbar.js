import Container from "react-bootstrap/Container";
// import "/Navbar.css";
import "bootstrap/dist/css/bootstrap.min.css";
import Header from "./Header";
import { NavLink, useNavigate } from "react-router-dom";
import { AuthContext } from "../../context/UserContext";
import { useContext } from "react";

const Navbarmenu = () => {
  // const authContext = useContext(AuthContext);
  // const { user, logOut } = useContext(AuthContext);
  // const navigate = useNavigate();

  // const logoutHandler = () => {
  // authContext.logout();
  // navigate("/login");
  // };

  return (
    <div>
      <Header />
      <Container fluid>
        {/* <img 
            classNamename="logocss"
            src=" lachologo1.png"
            alt="logo"  
            hieght="100px"
            width="100px"
            /> */}
      </Container>

      <nav className="navbar navbar-expand-lg navbar-light bg-light navv">
        <div className="container-fluid">
          <button
            className="navbar-toggler"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#navbarNav"
            aria-controls="navbarNav"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span className="navbar-toggler-icon"></span>
          </button>
          <div className="collapse navbar-collapse" id="navbarNav">
            <ul className="navbar-nav">
              <li className="nav-item">
                <NavLink className="nav-link" to="/home">
                  Home
                </NavLink>
              </li>
              <li className="nav-item">
                <NavLink className="nav-link" to="/feed">
                  Feed
                </NavLink>
              </li>
              <li className="nav-item">
                <NavLink className="nav-link" to="/findalumni">
                  Find Alumni
                </NavLink>
              </li>
              <li className="nav-item">
                <NavLink className="nav-link" to="/profile">
                  Profile
                </NavLink>
              </li>
            </ul>
          </div>
          <form className="d-flex">
            {/* <NavLink
              onClick={logoutHandler}
              className="btn btn-outline-success"
              role="button"
            >
              Log Out
            </NavLink> */}
          </form>
        </div>
      </nav>
    </div>
  );
};

export default Navbarmenu;
