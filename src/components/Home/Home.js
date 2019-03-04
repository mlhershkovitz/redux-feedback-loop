import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Redirect } from 'react-router';

class Home extends Component {
  state = {
    redirect: false,
  }

  handleClick = () => {
    console.log('button clicked');
    this.setState({
      ...this.state,
      redirect: true,
    })
  }

render() {

  if (this.state.redirect) {
    return < Redirect push to = '/feeling'/>
  }
  
    return (
        <div>
          <h1>Daily Feedback</h1>
          <h3>Get it done,</h3>
          <h3>and have fun!</h3>

          <button onClick={this.handleClick}>Next</button>
      </div>
    );
  }
}

const mapReduxStateToProps = (reduxState) => {
  return reduxState;
};

export default connect(mapReduxStateToProps)(Home);