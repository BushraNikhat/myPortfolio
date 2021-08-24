import { Button } from "@material-ui/core";

const SelfProj = ({name,image,linkName}) => {

  // view button open link
  const openLink=()=>{
    window.open(linkName)
  }

  return (
    <>
      <div className="col-lg-4 col-md-6 col-sm-8 col-12 image_container ">
      <div className="image_sub_container ">
        <img src={image} alt="" className="image" />
        <div className="overlay">
          <div className="overlay_content">
            <h4>{name}</h4>
            <Button className="project_btn bg-secondary m-2" onClick={openLink}>View</Button>
          </div>
        </div>
      </div>
      </div>
    </>
  );
};

export default SelfProj;
