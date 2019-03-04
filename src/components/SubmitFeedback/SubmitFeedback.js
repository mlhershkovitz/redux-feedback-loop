import React, { Component } from 'react';
import axios from 'axios';
import ReviewFeedback from '../ReviewFeedback/ReviewFeedback';
import { connect } from 'react-redux';


class SubmitFeedback extends Component {
  state = {
    action: {
      feeling: 0,
      understanding: 0,
      support: 0,
      comments: '',
    }
  }

  handleClick = (event) => {
    console.log('button clicked',this.props.mainReducer); 
    event.preventDefault();  
  axios({
    method: 'POST',
    url: '/review',
    data: this.props.mainReducer,
  }).then ((response) =>{
      console.log('im back', response);
      this.setState({
        ...this.state,
      })
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