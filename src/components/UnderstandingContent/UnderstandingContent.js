import React, { Component } from 'react';
import { connect } from 'react-redux';
import ReviewFeedback from '../ReviewFeedback/ReviewFeedback';
import { Redirect } from 'react-router';

class UnderstandingContent extends Component {
  state = {
    understanding: 0,
    redirect: false,
  }

  handleClick = (event) => {
    event.preventDefault();
    console.log('button clicked');
    this.setState({
      ...this.state,
      redirect: true,
    })
    this.props.dispatch({ type: 'UPDATE_UNDERSTANDING', payload: this.state.understanding })
  }

  handleChange = (event) => {
    this.setState({
            ...this.props,
            understanding: event.target.value,
    })
}

  render() {

    console.log(this.props);

  if (this.state.redirect) {
    return < Redirect push to = '/support'/>
  }
  
    return (
      <form>
        <div>
          <h1>How well are you understanding the content?</h1>
          Understanding?
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

export default connect(mapReduxStateToProps)(UnderstandingContent);