// import { useState } from "react";
import "./about.css"
import { Paper,Button} from "@material-ui/core";
import { GetApp} from "@material-ui/icons";

const About = () => {

  return (
    <>
      <section className="container-fluid main_container about " id="about">
        <div className="row">
          <div className="col-sm-10 col-11 d-block mx-auto pe-0 ">
                <div className="row sub_container ">
                    <div className=" col-12 content_left_container about_container">
                    <div className="about_content_left">
                      <img src="assests/about.jpg" alt="about_img" className="about_img"/>
                    </div>
                    <Paper elevation={3} className="about_me">
                        <h2 className="animate"> ABOUT ME </h2>
                        <p>MERN stack developer passionate about building and maintaining end to end responsive websites, keeping user experience in mind. Proficient in HTML, CSS, JavaScript plus modern libraries and frameworks.</p>
                        <div className="about_info">
                          <p >Name <span>: Bushra Nikhat</span> </p>
                          <p>Phone Number <span>: 8709725708</span> </p>
                          <p>Email <span>: bushranik6@gmail.com</span> </p>
                          <p>Address <span>: Ranchi, Jharkhand</span> </p>
                        </div>
                        <Button variant="contained" color="primary" className="btn_about align-self-start">
                              <a href="https://drive.google.com/uc?export=download&id=1YZW7rSjMLzsL4R_xRtqrw-_NueRqR6YG" className="btn-link">Download CV <GetApp/> </a>
                        </Button>
                    </Paper>

                    </div>
                    </div>
                        
                        </div>
                    </div>
          </section>
    </>
  );
};

export default About;
