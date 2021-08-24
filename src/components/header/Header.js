import "./header.css";
import { Button, IconButton } from "@material-ui/core";
import { GitHub, LinkedIn } from "@material-ui/icons";
const Header = () => {
  return (
    <>
      <header className="container-fluid main_container" id="header">
        <div className="row">
          <div className="col-10 d-block mx-auto pe-0">
            <div className="row sub_container ">
              <div className="col-md-6 col-12  content_left_container header_left_container">
                <div className="content_left ">
                  <h4>Hello</h4>
                  <h2>
                    I'm <span></span>
                  </h2>
                  <p>
                    A web development enthusiast, having all the key skill that
                    makes me a MERN Stack developer.
                  </p>
                  <div className="connect">
                    <span>
                    <IconButton
                    className="iconButton"
                    aria-label="Githib.com"
                    onClick={()=>window.open("https://github.com/BushraNikhat")}
                    >
                    <GitHub/>
                    </IconButton>
                      
                    </span>
                    <span>
                      <IconButton
                      className="iconButton"
                        aria-label="Linkedin.com"
                        onClick={() => window.open("https://www.Linkedin.com/in/bushra-nikhat-009a35121")}
                      >
                        <LinkedIn/>
                      </IconButton>
                    </span>
                  </div>
                  <Button
                    variant="contained"
                    color="primary"
                    className="align-self-start"
                  >
                    <a href="#contact" className="btn-link">
                      Contact
                    </a>
                  </Button>
                </div>
              </div>
              <div className="col-md-6 col-12  content_right_container header_right_container">
                <div className="content_right">
                  <img
                    src="assests/header-image.png"
                    alt="header"
                    className="header_image"
                  />
                </div>
              </div>
            </div>
          </div>
        </div>
      </header>
    </>
  );
};

export default Header;
