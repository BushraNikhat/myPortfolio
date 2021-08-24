import "./skills.css";
import SkillContent from "./skillsContent";
import Progress from "./ProgressBar"

const Skills = () => {
  return (
    <>
      <section className="container-fluid main_container skills " id="skills">
        <div className="row">
          <div className="col-sm-10 col-11 d-block mx-auto p-0">
            <div className="row sub_container ">
              <div className="col-md-7 col-12 content_left_container skills_container_left">
                <div className="skills_content_left">
                  <h2>Skills & Interests</h2>
                  <div className="skill_content">
                    {
                                    SkillContent.map((skill)=>{
                                           return ( <div className="have_skills" key={skill.id}>
                                                <img src={skill.image} alt={skill.name} />
                                                <p>{skill.name}</p>
                                            </div>)
                                    }) 
                                }
                   
                  </div>
                  <div className="interest">
                    <h4>Other Interests</h4>
                    <Progress interest="Data Science"/>
                    <Progress interest="Stock Marketing"/>
                    <Progress interest="Teaching"/>
                    
                  </div>
                  <div className="soft_skills_container">
                  <h4>Soft Skills</h4>
                  <div className="soft_skills_content">
                      <div><p>Optimistic</p></div>
                      <div><p>Learner</p></div>
                      <div><p>Goal oriented</p></div>
                    </div>
                  </div>
                </div>
              </div>
              <div className="col-md-5 col-12  content_right_container skills_container_right ">
                        <div className="main">
                          <img src="assests/mern.jpg" alt="" className="center_image"/>
                          <img src="assests/react.png" alt="" className="item" style={{animationDelay:"-1s"}}/>
                          <img src="assests/mongo.png" alt="" className="item" style={{animationDelay:"-2s"}}/>
                          <img src="assests/node.png" alt="" className="item" style={{animationDelay:"-3s"}}/>
                          <img src="assests/express.png" alt="" className="item" style={{animationDelay:"-4s"}}/>
                          <img src="assests/script.png" alt="" className="item" style={{animationDelay:"-5s"}}/>
                          <img src="assests/html.png" alt="" className="item" style={{animationDelay:"-6s"}}/>
                          <img src="assests/css.png" alt="" className="item" style={{animationDelay:"-7s"}}/>
                        </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default Skills;
