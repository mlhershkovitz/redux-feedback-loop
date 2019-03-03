import React, { Component } from 'react';
import axios from 'axios';
import { connect } from 'react-redux';

class UnderstandingContent extends Component {
  handleClick = () => {
    console.log('button clicked');
    
    axios({
      method: 'POST',
      url: '/understanding',
      data: this.props,
    }).then ((response) =>{
        console.log(response);
    }).catch ((error) => {
      console.log('could not add understanding rating', error);
    })
  }

  handleChange = (event) => {
    this.setState({
            ...this.props,
            understanding: event.target.value,
    })
}

  render() {
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
      </form>
    );
  }
}

const mapReduxStateToProps = (reduxState) => {
  return reduxState;
};

export default connect(mapReduxStateToProps)(UnderstandingContent);