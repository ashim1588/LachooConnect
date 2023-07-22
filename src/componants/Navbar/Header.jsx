import React from "react";
import "./header.css";
import "../../assets/images/logo.jpg";

import logo from "../../assets/logo192.png";

function Header(props) {
  return (
    <div>
      <div className="mid-header">
        <div className="container">
          <div className="row">
            <div className="col-md-2 col-sm-2">
              <div className="site-brand">
                <a className="logo">
                  <img src={logo} alt="Lachoo Memorial College" />
                </a>
              </div>
            </div>
            <div className="col-md-10 col-sm-10">
              <h2
                className="h2 txtcenter lg-yellow paddb10 f26"
                style={{ paddingBottom: "0px !important" }}
              >
                Lachoo Memorial College of Science &amp; Technology
                (AUTONOMOUS), Jodhpur
              </h2>
              <h4
                className="h5 txtcenter grey paddtb3"
                style={{ padding: "0px !important", lineHeight: "20px" }}
              >
                Affiliated to Jai Narain Vyas University, Jodhpur
                <br />
                <span className="lg-yellow">
                  NAAC accredited A Grade (consecutive three cycles)
                  <br />
                  UGC " College with Potential for Excellence" from October 2013
                </span>
              </h4>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Header;
