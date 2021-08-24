import "./portfolio.css";
import SelfProj from "./SelfProj";
import Pdata from "./Pdata";

const Portfolio = () => {
  return (
    <>
      <section className="container-fluid main_container portfolio" id="portfolio">
        <div className="row ">
          <div className="col-10  d-block mx-auto p-0 ">
            <div className="container  p-0">
                  <div className="title">
                    <h2>Portfolio</h2>
                  </div>
                  <div className="row image_row  g-0">
                      {Pdata.map((proj)=>{
                        return <SelfProj key={proj.id}
                                image={proj.image}
                                name={proj.name}
                                linkName={proj.linkName}
                        />
                      })}
                  </div>
            </div>
              </div>
              </div>
              </section>
      
    </>
  );
};

export default Portfolio;
