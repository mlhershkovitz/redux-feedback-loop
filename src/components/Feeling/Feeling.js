import React, { Component } from 'react';
import axios from 'axios';
import { connect } from 'react-redux';

class Feeling extends Component {
  render() {
    return (
      <div>

      </div>
    );
  }
}

const mapReduxStateToProps = (reduxState) => {
  return reduxState;
};

export default connect(mapReduxStateToProps)(Feeling);