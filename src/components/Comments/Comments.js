import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Redirect } from 'react-router';
import ReviewFeedback from '../ReviewFeedback/ReviewFeedback';

class Comments extends Component {
  
  state = {
    comments: 0,
    redirect: false,
  }

  handleClick = (event) => {
    event.preventDefault();
    console.log('button clicked');
    this.setState({
      ...this.state,
      redirect: true,
    })
    this.props.dispatch({ type: 'UPDATE_COMMENTS', payload: this.state.comments })
  }

  handleChange = (event) => {
    this.setState({
            ...this.props,
            comments: event.target.value,
    })
}

  render() {

    console.log(this.props);

  if (this.state.redirect) {
    return < Redirect push to = '/review'/>
  }

    return (
      <form>
        <div>
          <h1>Any comments you want to leave?</h1>
          Comments?
          <input 
          type="text"
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

export default connect(mapReduxStateToProps)(Comments);