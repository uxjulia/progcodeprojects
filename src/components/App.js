import React, { Component, PropTypes } from 'react';

class App extends Component {
  render() {
    let { children } = this.props;

    return (
      <div className="container">
        <h1>Projects</h1>
        <div className="row">
          {children}
        </div>
      </div>
    );
  }
}

App.propTypes = {
  children: PropTypes.element
};

export default App;
