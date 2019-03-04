import React, { Component } from 'react';
import { connect } from 'react-redux';
import ReviewFeedback from '../ReviewFeedback/ReviewFeedback';
import { Redirect } from 'react-router';

class Feeling extends Component {
  state = {
    feeling: 0,
    redirect: false,
  }

  handleClick = (event) => {
    event.preventDefault();
    console.log('button clicked');
    this.setState({
      ...this.state,
      redirect: true,
    })
    this.props.dispatch({ type: 'UPDATE_FEELING', payload: this.state.feeling })
  }

  handleChange = (event) => {
    this.setState({
            ...this.state,
            feeling: event.target.value,
    })
}

render() {

  console.log(this.props);
  console.log(this.props.feelingReducer);
  

  if (this.state.redirect) {
    return < Redirect push to = '/understanding'/>
  }
  
    return (
      <form>
        <div>
          <h1>How are you feeling today?</h1>
          Feeling?
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

export default connect(mapReduxStateToProps)(Feeling);