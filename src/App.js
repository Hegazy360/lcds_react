import React, { Component } from 'react';
import './App.css';
import { withRouter } from 'react-router-dom';
import { connect } from 'react-redux'
import axios from 'axios'

class App extends Component {
  componentDidMount() {
    axios.get('https://react-rails-staging.herokuapp.com/api/v1/customers')
    .then(response => {
      console.log(response.data)
    })
  }

  render() {
    return (
      <div className="App">
        Application Loaded
      </div>
    );
  }
}

export default withRouter(
    connect()(App)
);
