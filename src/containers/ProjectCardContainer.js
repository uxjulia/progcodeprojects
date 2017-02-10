import React, { Component, PropTypes } from 'react';
import ProjectCard from '../components/ProjectCard';
import listProjects from '../utils';

class ProjectCardContainer extends Component {
  constructor(props){
    super(props);

    this.state = {
      projects : [],
    };

  }

  componentDidMount() {
    listProjects()
    .then( (results)=> {
      this.setState( {
        projects: results
      })
    })
  }

  render() {
    let { projects } = this.state;

    return(
      <div>
        { projects.map( (project, i ) => <ProjectCard data={project.fields} key={i} /> ) }
      </div>
    );
  }
}

ProjectCardContainer.propTypes = {
  children: PropTypes.element
};

export default ProjectCardContainer;
