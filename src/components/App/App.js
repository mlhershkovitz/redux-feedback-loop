import React, { Component } from 'react';
import axios from 'axios';
import './App.css';

import {HashRouter as Router, Route, Link} from 'react-router-dom';
import { connect } from 'react-redux';

//Import Routes
import Feeling from '../Feeling/Feeling';
import UnderstandingContent from '../UnderstandingContent/UnderstandingContent';
import Support from '../Support/Support';
import Comments from '../Comments/Comments';
import SubmitFeedback from '../SubmitFeedback/SubmitFeedback';


class App extends Component {
  state = {
    feeling: 0,
    understanding: 0,
    support: 0,
    comments: '',
  }
  
  render() {
    return (
      <div className="App">
        <header className="App-header">
          <h1 className="App-title">Feedback!</h1>
          <h4><i>Don't forget it!</i></h4>
          <Router>
        <div className="navBar">
          <ul>
           <li><Link to="/">Home</Link></li>
           <li><Link to="/feeling">Feeling</Link></li>
           <li><Link to="/understanding">Understanding</Link></li>
            <li><Link to="/support">Support</Link></li>
            <li><Link to="/comments">Comments</Link></li>
            <li><Link to="/review">Review</Link></li>
          </ul>
          <Route path="/feeling" component={Feeling} />
          <Route path="/understanding" component={UnderstandingContent} />
          <Route path="/support" component={Support} />
          <Route exact path="/comments" component={Comments} />
          <Route exact path="/review" component={SubmitFeedback} />
        </div>
        </Router>
        
        </header>
        <br/>
      </div>
    );
  }
}

const mapReduxStateToProps = (reduxState) => {
  return reduxState;
};

export default connect(mapReduxStateToProps)(App);