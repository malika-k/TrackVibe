import React, { Component } from 'react';
import classes from './App.module.css';

import Header from '../components/Header/Header';

class App extends Component {

  state = {
      searchBarInput: '',
      artistDisplay: {
        name: '',
        events: [],
        fb: '',
        imdb: '',
        picture: ''
      },
      loading: false,
      error: false
    }

  render() {
    return (
      <div className={classes.AppWrapper}>
        <main className={classes.AppMain}>
          <Header/>
        </main>
      </div>
    );
  }


}

export default App;