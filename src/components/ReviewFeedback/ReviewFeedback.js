import React, { Component } from 'react';
import { connect } from 'react-redux';


class ReviewFeedback extends Component {
  render() {
    return (
      <div>
          Feelings:
          <br/>
          Understanding:
          <br/>
          Support:
          <br/>
          Comments:
          <br/>
          <button onClick="handleClick">Submit</button>
      </div>
    );
  }
}

const mapReduxStateToProps = (reduxState) => {
    return reduxState;
  };
  
  export default connect(mapReduxStateToProps)(ReviewFeedback);