import React, { Component, PropTypes } from 'react';
import { Row } from 'react-materialize';

class App extends Component {
  render() {
    let { children } = this.props;

    return (
      <div className="container">
        <h1>Projects</h1>
        <Row>
          {children}
        </Row>
      </div>
    );
  }
}

App.propTypes = {
  children: PropTypes.element
};

export default App;
