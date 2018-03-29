import React, { Component } from 'react';
// import {  } from './components/_components';
import FilteredToDoList from './containers/FilteredToDoList';
import { StyleSheet, css } from 'aphrodite';

const styles = StyleSheet.create({
    app: {
        // textAlign: 'center',
    }
});

class App extends Component {
  render() {
    return (
      <div className={"App " + css(styles.app)}>
        <FilteredToDoList/>
      </div>
    );
  }
}

export default App;
