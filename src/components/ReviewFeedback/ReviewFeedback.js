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
          Feelings: {this.props.feeling}
          <br/>
          Understanding: {this.props.understanding}
          <br/>
          Support: {this.props.support}
          <br/>
          Comments: {this.props.comments}
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