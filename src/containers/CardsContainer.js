import React, { Component, PropTypes } from 'react';
import Card from '../components/Card';
import data from '../data/projects'; //Dummy project data to be replaced with API response

class CardsContainer extends Component {
  constructor(props){
    super(props);

    this.state = {
      projects : data,
    };

  }

  /* ToDo: Hook up lifecycle with Airtable API and retrieve projects */
  componentDidMount() {
  }

  render() {
    let { projects } = this.state;

    return(
      <div> { projects.map( (project, i ) => <Card data={project} key={i} /> ) } </div>
    );
  }
}

CardsContainer.propTypes = {
  children: PropTypes.element
};

export default CardsContainer;
