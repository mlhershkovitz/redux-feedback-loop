import React, { Component } from 'react';
// import axios from 'axios';
import { connect } from 'react-redux';
import { Redirect } from 'react-router';
import ReviewFeedback from '../ReviewFeedback/ReviewFeedback';

class Support extends Component {
  state = {
    support: 0,
    redirect: false,
  }

  handleClick = (event) => {
    event.preventDefault();
    console.log('button clicked');
    this.setState({
      ...this.state,
      redirect: true,
    })
    this.props.dispatch({ type: 'UPDATE_SUPPORT', payload: this.state.support })
  }

  handleChange = (event) => {
    this.setState({
            ...this.props,
            support: event.target.value,
    })
}

  render() {

    console.log(this.props);

  if (this.state.redirect) {
    return < Redirect push to = '/comments'/>
  }
  
    return (
      <form>
        <div>
          <h1>How well are you being supported?</h1>
          Support?
          <input 
          placeholder="1 - 5"
          value={this.data}
          type="number"
          onChange = {this.handleChange}/>
          <button onClick={this.handleClick}>Next</button>
      </div>
      < ReviewFeedback />
      </form>
    );
  }
}

const mapReduxStateToProps = (reduxState) => {
  return reduxState;
};

export default connect(mapReduxStateToProps)(Support);