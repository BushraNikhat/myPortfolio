import { useState } from "react";
import "./navbar.css";
import { Button } from "@material-ui/core";
import { ClearAll } from "@material-ui/icons";

const Navbar = () => {
  const [color, setColor] = useState(false);


  const changeColor = () => {
    if (window.scrollY >= 80) {
      setColor(true);
    } else {
      setColor(false);
    }
  };
  window.addEventListener("scroll", changeColor);


  return (
    <>
      <div className={color?` container-fluid nav-white nav`:"container-fluid nav nav-transparent"}>
        <div className="row flex-grow-1">
          <div className="col-10  mx-auto">
            <nav className={color?"navbar navbar-expand-lg navbar-light":"navbar navbar-expand-lg navbar-dark"}>
                <a className="navbar-brand" href="#header">
                  Bushra
                </a>
                <Button
                  className="navbar-toggler "
                  type="button"
                  data-bs-toggle="collapse"
                  data-bs-target="#navbarSupportedContent"
                  aria-controls="navbarSupportedContent"
                  aria-expanded="false"
                  aria-label="Toggle navigation"
                >
                  <ClearAll/>
                </Button>
                <div
                  className="collapse navbar-collapse"
                  id="navbarSupportedContent"
                >
                  <ul className="navbar-nav ms-auto mb-2 mb-lg-0 text-center">
                    <li className="nav-item">
                      <a className="nav-link"  href="#header" >
                        Home
                      </a>
                    </li>
                    <li className="nav-item">
                      <a  className="nav-link"  href="#about" >
                        About
                      </a>
                    </li>
                    <li className="nav-item">
                      <a  className="nav-link" href="#skills" >
                        Skills
                      </a>
                    </li>
                    <li className="nav-item">
                      <a  className="nav-link"  href="#portfolio" >
                        Portfolio
                      </a>
                    </li>
                    <li className="nav-item">
                      <a  className="nav-link"  href="#contact" >
                        Contact
                      </a>
                    </li>
                  </ul>
                </div>
            </nav>
          </div>
        </div>
      </div>
    </>
  );
};

export default Navbar;
