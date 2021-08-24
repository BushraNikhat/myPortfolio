import { Button} from "@material-ui/core";
import emailjs from "emailjs-com"

const Mail = () => {

    // sid=service_n9pi7li
    const submitEmail=async(e)=>{
            e.preventDefault()
            try {
                const sent=await emailjs.sendForm('service_n9pi7li','template_t8p7nna',e.target,'user_BvjNXGcSWUvTufXMWFd4p')
            if (sent){
                alert("Message is sent")
                e.target.reset()
            }else{
                alert("Unable to send the message");
            }
            } catch (error) {
               alert("Some server error");
            }
            

    }
  return (
    <>
      <form className="form" onSubmit={submitEmail}>
      <div className="mb-3">
        
          <input
            type="text"
            className="form-control"
            
            placeholder="Name"
            autoComplete="bushra"
            name="name"
          />
        </div>
        <div className="mb-3">
        
          <input
            type="email"
            className="form-control"
            placeholder="Email"
            autoComplete="bushra"
            name="email"
          />
        </div>
        <div className="mb-3">
          
          <textarea
            className="form-control"
            placeholder="Message"
            rows="4"
            name="message"
          ></textarea>
        </div>
        <div className="mt-3 text-center">
          
          <Button type="submit" variant="contained" color="primary">Send</Button>
        </div>
      </form>
    </>
  );
};

export default Mail;
