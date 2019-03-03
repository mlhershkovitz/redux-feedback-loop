import React, { Component } from 'react';
import axios from 'axios';
import { connect } from 'react-redux';

class Support extends Component {
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

export default connect(mapReduxStateToProps)(Support);