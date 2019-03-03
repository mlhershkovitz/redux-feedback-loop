import React, { Component } from 'react';
import axios from 'axios';


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

export default ReviewFeedback;
