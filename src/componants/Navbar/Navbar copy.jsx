import React from "react";
import { NavLink as Link } from "react-router-dom";
import "./Navbar.css";

const Navbar2 = () => {
  return (
    <>
      <div classNameName="nav-header">
        <div>
          <img 
            classNamename="logocss"
            src=" lachologo1.png"
            alt="logo"  
            hieght="100px"
            width="100px"
          ></img>
        </div>
      </div>
<div>
<nav className="navbar navbar-expand-lg bg-body-tertiary">
  <div className="container-fluid">
    <div className="collapse navbar-collapse" id="navbarSupportedContent">
      <ul className="navbar-nav me-auto mb-2 mb-lg-0">
        <li className="nav-item">
        <Link activeclassNameName="active" to="/" activeStyle>
          Home
        </Link>
        </li>
        <li className="nav-item">
        <Link activeclassNameName="active" to="/feed" activeStyle>
          Feed
        </Link>
        </li>
        <li className="nav-item ">
        <Link activeclassNameName="active" to="/findAlumni" activeStyle>
          FindAlumni
        </Link>
        </li>
        <li className="nav-item">
        <Link activeclassNameName="active" to="/profile" activeStyle>
          Profile
        </Link>
        </li>
      </ul>
      <form className="d-flex" role="search">
        <input className="form-control me-2" type="search" placeholder="Search" aria-label="Search"/>
        <button className="btn btn-outline-success" type="submit">Search</button>
      </form>
    </div>
  </div>
</nav>
</div>      
       

      {/* <div classNameName="navBar" id="nav">
        <Link activeclassNameName="active" to="/" activeStyle>
        Home
        </Link>
        <Link activeclassNameName="active" to="/feed" activeStyle>
          Feed
        </Link>
        <Link activeclassNameName="active" to="/findAlumni" activeStyle>
          Find Alumni
        </Link>
        <Link activeclassNameName="active" to="/profile" activeStyle>
          Profile
        </Link>
        
 
      </div> */}
    </>
  );
};

export default Navbar2;
