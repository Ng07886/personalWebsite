import "bootstrap/dist/css/bootstrap.min.css";
import React from "react";
import LaptopMacIcon from "@mui/icons-material/LaptopMac";

function Header() {
  return (
    <header>
      <section className="navBar">
        <nav className="navbar navbar-expand-md bg-color navbar-dark fixed-top">
          <a className="navbar-brand" href="">
            <LaptopMacIcon fontSize="large" />
          </a>
          <button
            className="navbar-toggler"
            type="button"
            data-toggle="collapse"
            data-target="#collapsibleNavbar"
          >
            <span className="navbar-toggler-icon"></span>
          </button>
          <div className="collapse navbar-collapse" id="collapsibleNavbar">
            <ul className="navbar-nav ml-auto">
              <li className="nav-item list">
                <a className="nav-link" href="#projects">
                  PROJECTS
                </a>
              </li>
              <li className="nav-item list">
                <a className="nav-link" href="#about">
                  ABOUT ME
                </a>
              </li>
              <li className="nav-item list">
                <a className="nav-link" href="#about">
                  CONTACT
                </a>
              </li>
            </ul>
          </div>
        </nav>
      </section>
    </header>
  );
}

export default Header;
