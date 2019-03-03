import React, { Component } from 'react';
import axios from 'axios';
import { connect } from 'react-redux';

class Support extends Component {
  handleClick = () => {
    console.log('button clicked');
    
    axios({
      method: 'POST',
      url: '/support',
      data: this.props,
    }).then ((response) =>{
        console.log(response);
    }).catch ((error) => {
      console.log('could not add support rating', error);
    })
  }

  handleChange = (event) => {
    this.setState({
            ...this.props,
            support: event.target.value,
    })
}

  render() {
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
      </form>
    );
  }
}

const mapReduxStateToProps = (reduxState) => {
  return reduxState;
};

export default connect(mapReduxStateToProps)(Support);