import "bootstrap/dist/css/bootstrap.min.css";
import React, { DetailedHTMLProps, AnchorHTMLAttributes } from "react";

interface Projects {
  url: String;
  image: String;
  content: String;
}

function ProjectLayout(props: Projects) {
  return (
    <div className="col-md-4 project-card">
      <div className="card md-4 box-shadow">
        <a href={`${props.url}`}>
          <img
            className="card-img-top"
            alt="Thumbnail [100%x225]"
            src={"../images/" + props.image}
            data-holder-rendered="true"
          ></img>
        </a>
        <div className="card-body">
          <p className="card-text">{props.content}</p>
        </div>
      </div>
    </div>
  );
}

export default ProjectLayout;
