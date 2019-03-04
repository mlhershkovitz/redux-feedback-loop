import React, { Component } from 'react';
import axios from 'axios';
import ReviewFeedback from '../ReviewFeedback/ReviewFeedback';
import { connect } from 'react-redux';


class SubmitFeedback extends Component {

  handleClick = (event) => {
    console.log('button clicked',this.props.mainReducer); 
    event.preventDefault(); 
    this.setState({
      ...this.state,
    })
   
  axios({
    method: 'POST',
    url: '/review',
    data: this.props.mainReducer,
  }).then ((response) =>{
      console.log('im back', response);
      this.props.history.push('/submitted');
  }).catch ((error) => {
    console.log('could not add to db', error);
  })
}

  render() {
    return (
      <div>
        < ReviewFeedback />
        <button onClick={this.handleClick}>Submit</button>
      </div>
    );
  }
}

const mapReduxStateToProps = (reduxState) => {
  return reduxState;
};

export default connect(mapReduxStateToProps)(SubmitFeedback);