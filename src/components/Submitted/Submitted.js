import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Redirect } from 'react-router';

class Submitted extends Component {
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
    return < Redirect push to = '/home'/>
  }
  
    return (
        <div>
          <h1>Feedback Submitted!</h1>
          <h4>You have done well, young jedi.</h4>
          <button onClick={this.handleClick}>Start Over</button>
      </div>
    );
  }
}

const mapReduxStateToProps = (reduxState) => {
  return reduxState;
};

export default connect(mapReduxStateToProps)(Submitted);