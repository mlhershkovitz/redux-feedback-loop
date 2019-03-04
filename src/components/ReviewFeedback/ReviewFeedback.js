import React, { Component } from 'react';
import { connect } from 'react-redux';


class ReviewFeedback extends Component {
    
    render() {
    return (
      <div>
          Feeling: {this.props.mainReducer.feeling}
          <br/>
          Understanding: {this.props.mainReducer.understanding}
          <br/>
          Support: {this.props.mainReducer.support}
          <br/>
          Comments: {this.props.mainReducer.comments}
          <br/>
      </div>
    );
  }
}

const mapReduxStateToProps = (reduxState) => {
    return reduxState;
  };
  
  export default connect(mapReduxStateToProps)(ReviewFeedback);