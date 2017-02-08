import React from 'react';
import StackIcons from './StackIcons';


const Card = (props) => {
  let { image, stack, github, website, description, needs, status, project } = props.data;
  return (
    <div className="col m4">
      <div className="card hoverable">
        <div className="card-image waves-effect waves-block waves-light">
          <img style={{maxWidth: "400px"}} className="activator" src={image}/>
        </div>
        <div className="card-content">
          <div>
            <StackIcons data={stack}/>
          </div>
          <span className="card-title activator grey-text text-darken-4">
            {project}
            <i className="material-icons right">more_vert</i>
          </span>
          <div>
            <span><a href={website}>Website</a></span>
            <span><a className="github" href={github}>Github</a></span>
          </div>
        </div>
        <div className="card-reveal">
          <span className="card-title grey-text text-darken-4">{project}<i className="material-icons right">close</i></span>
          <div><span className="status">{status}</span></div>
          <p>{description}</p>
          <p><strong>Need:</strong></p>
          <p>{needs}</p>
        </div>
      </div>
    </div>
  );
};

export default Card;
