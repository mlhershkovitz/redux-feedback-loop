import React, { Component } from 'react';
import axios from 'axios';
import { connect } from 'react-redux';

class Feeling extends Component {

  handleClick = () => {
    console.log('button clicked');
    
    axios({
      method: 'POST',
      url: '/feeling',
      data: this.state,
    }).then ((response) =>{
        console.log(response);
    }).catch ((error) => {
      console.log('could not add feeling rating', error);
    })
  }

  handleChange = (event) => {
    this.setState({
            ...this.props,
            feeling: event.target.value,
    })
}

render() {
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
      </form>
    );
  }
}

const mapReduxStateToProps = (reduxState) => {
  return reduxState;
};

export default connect(mapReduxStateToProps)(Feeling);