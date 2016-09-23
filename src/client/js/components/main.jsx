import React from 'react';
import Nav from './nav';

class Main extends React.Component {

  render() {
    return (
      <div className="main">
        <Nav />
        <div className="container">
          <div className="row">
            { this.props.children }
          </div>
        </div>
      </div>
    );
  }
}

export default Main;
