import React, { Component } from 'react';
import { connect } from 'react-redux';


class ReviewFeedback extends Component {
    
    render() {
    return (
      <div>
          Feelings: {this.props.feelingReducer}
          <br/>
          Understanding: {this.props.understandingReducer}
          <br/>
          Support: {this.props.supportReducer}
          <br/>
          Comments: {this.props.commentsReducer}
          <br/>
      </div>
    );
  }
}

const mapReduxStateToProps = (reduxState) => {
    return reduxState;
  };
  
  export default connect(mapReduxStateToProps)(ReviewFeedback);