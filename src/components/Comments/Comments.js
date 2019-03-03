import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Redirect } from 'react-router';

class Comments extends Component {
  
  state = {
    comments: 0,
    redirect: false,
  }

  handleClick = () => {
    console.log('button clicked');
    this.setState({
      ...this.state,
      redirect: true,
    })
    
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
    return < Redirect push to = '/submit'/>
  }

    return (
      <form>
        <div>
          <h1>Any comments you want to leave?</h1>
          Comments?
          <input 
          placeholder="1 - 5"
          value={this.data}
          type="number"
          onChange = {this.handleChange}/>
          <button onClick={this.handleClick}>Next</button>
      </div>
      </form>
    );
  }
}

const mapReduxStateToProps = (reduxState) => {
  return reduxState;
};

export default connect(mapReduxStateToProps)(Comments);