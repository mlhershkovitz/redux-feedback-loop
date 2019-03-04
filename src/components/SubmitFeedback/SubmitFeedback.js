import React, { Component } from 'react';
import axios from 'axios';
import ReviewFeedback from '../ReviewFeedback/ReviewFeedback';


class SubmitFeedback extends Component {
  handleClick = () => {
    console.log('button clicked');    
axios({
    method: 'POST',
    url: '/review',
    data: this.props,
  }).then ((response) =>{
      console.log(response);
  }).catch ((error) => {
    console.log('could not add to db', error);
  })
}

  render() {
    return (
      <div>
        < ReviewFeedback />
        <button onClick="handleClick">Submit</button>
      </div>
    );
  }
}

export default SubmitFeedback;
