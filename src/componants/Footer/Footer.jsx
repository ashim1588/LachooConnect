import React from "react";
import "./footer.css";
import { NavLink } from "react-router-dom";

import classes from "./Footer1.module.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

function Footer(props) {
  return (
    <div>
      <div id="bottom" className="site-bottom">
        <div className="container">
          <div className="footer-widget bottom1">
            <div className={classes.row}>
              <div className="col-md-4 col-md-4">
                <div className="widget">
                  <h3 className="widget-title">About College</h3>
                  <div className="text-widget">
                    <p className="txtjustify">
                      Lachoo Memorial College of Science &amp; Technology, a
                      modest creation of the year 1965, has travelled an
                      incredible journey of more than five decades. For concepts
                      savoured by visionary Shri Mathuradas Mathur, a
                      connoisseur of higher education in science and technology,
                      this institution has come up synonymous with impeccable
                      academic standards preferred for pursuing
                      multi-disciplinary graduate and post-graduate programmes
                      in the field of science, computers, pharmacy,
                      bio-technolgy and management.
                    </p>
                  </div>
                </div>
                {/* .widget */}
              </div>
              <div className="col-md-4 col-md-4">
                <div className="widget" style={{ paddingLeft: "70px" }}>
                  <h3 className="widget-title">Quick links</h3>
                  <ul>
                    <li>
                      <NavLink className="nav-link" to="/home">
                        Home
                      </NavLink>
                    </li>
                    <li>
                      <NavLink className="nav-link" to="/feed">
                        Feed
                      </NavLink>
                    </li>
                    <li>
                      <NavLink className="nav-link" to="/findalumni">
                        Find Alumni
                      </NavLink>
                    </li>
                    {/*<li><a href="chairman-sir-declaration.pdf" target="_blank">Undertaking</a></li>*/}
                    {/*<li><a href="about-us.php">About Us</a></li>*/}
                    <li>
                      <NavLink className="nav-link" to="/profile">
                        Profile
                      </NavLink>
                    </li>
                    <li>
                      <a href="https://www.lachoomemorial.org/contact-us.php">
                        Contact Us
                      </a>
                    </li>
                  </ul>
                </div>
                {/* .widget */}
                <div className="socialicon">
                  {/*Social Media*/}
                  <a
                    href="https://www.facebook.com/Lachoo-Memorial-College-of-Science-Technology-Autonomous-215749789210922/?ref=aymt_homepage_panel&eid=ARBgNjjq1lcdT56JEv6XziiF4bPaTrwIk1n0KtDBOL_WSHCm0-VntymWiV-xboma7qMUEHZ-l1z5cn2p"
                    traget="_blank"
                    className="fa fa-facebook"
                  />
                  <a
                    href="https://twitter.com/lachoocollege"
                    traget="_blank"
                    className="fa fa-twitter"
                  />
                  <a
                    href="https://www.instagram.com/lachoocollege/"
                    traget="_blank"
                    className="fa fa-instagram"
                  />
                </div>
              </div>
              <div className="col-md-4 col-md-4">
                <div className="widget contact-widget">
                  <h3 className="widget-title">Contact Us</h3>
                  <ul>
                    <li className="address">
                      Lachoo Memorial College of Science &amp; Technology.
                      <br />
                      Sector - A , Shastri Nagar <br />
                      Jodhpur -342001, Rajasthan - India.
                    </li>
                    <li className="mobile">
                      +(0291)-2431238{/*,<br>(Mob.)+91-6376916640,6376916641*/}
                    </li>
                    <li className="email">
                      <a href="mailto:office@lachoomemorial.org">
                        office@lachoomemorial.org
                      </a>
                    </li>
                    <li className="email">
                      <a href="mailto:tpo@lachoomemorial.org">
                        tpo@lachoomemorial.org
                      </a>
                    </li>
                    {/* <li class="time-work">Mon - Fri 8.00 - 18.00<br />Sat 9.00 - 16.00</li> */}
                  </ul>
                </div>
                {/* .widget */}
              </div>
              <div className="col-md-4 col-md-4">
                <button
                  onClick={() => {
                    window.scrollTo({ top: 0, left: 0, behavior: "smooth" });
                  }}
                  className="fa fa-arrow-up"
                  style={{
                    marginLeft: "2rem",
                    color: "#999",
                    background: "transparent",
                    fontSize: "2rem",
                    textDecoration: "none",
                  }}
                ></button>
                {/* .widget */}
              </div>
            </div>
          </div>
          {/* .bottom1 */}
          {/* .bottom2 */}
        </div>
        {/* .container */}
      </div>
    </div>
  );
}

export default Footer;
