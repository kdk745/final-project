import React, { Component } from 'react';
import './App.css';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import Splashform from './components/Splashform';

class App extends Component {
  render() {
    return (
      <div className="App">
        <MuiThemeProvider>
          <Splashform
            hint="search by zip code or city"
          />
        </MuiThemeProvider>
      </div>
    );
  }
}

export default App;
