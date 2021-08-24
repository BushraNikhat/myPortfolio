import Mail from "./Mail";
import "./contact.css";

const Contact = () => {
  return (
    <>
      <section className="container-fluid main_container contact" id="contact">
        <div className="row">
          <div className="col-10 d-block mx-auto pe-0">
            <div className="row sub_container">
              <div className="col-md-6 col-12  content_left_container contact_left_container">
                <div className="content_left contact_left">
                <img
                    src="assests/contact.png"
                    alt="girl_image"
                    className="contact_image"
                  />
                </div>
              </div>
              <div className="col-md-6 col-12 content_right_container contact_right_container ">
                <div className="content_right contact_right ">
                <Mail />
                  
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default Contact;
