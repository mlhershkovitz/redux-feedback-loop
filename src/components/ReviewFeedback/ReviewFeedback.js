import React, { Component } from 'react';
import axios from 'axios';
import { connect } from 'react-redux';


class ReviewFeedback extends Component {
    handleClick = () => {
        console.log('button clicked');    
    axios({
        method: 'POST',
        url: '/review',
        data: this.props,
      }).then ((response) =>{
          console.log(response);
      }).catch ((error) => {
        console.log('could not add feeling rating', error);
      })
    }
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
          <button onClick="handleClick">Submit</button>
      </div>
    );
  }
}

const mapReduxStateToProps = (reduxState) => {
    return reduxState;
  };
  
  export default connect(mapReduxStateToProps)(ReviewFeedback);