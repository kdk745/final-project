import React, { Component, PropTypes } from 'react';
import './App.css';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import axios from 'axios';
import SplashFormContainer from './containers/SplashFormContainer';
import GoogleMapViewContainer from './containers/GoogleMapViewContainer';
import AdminContainer from './containers/AdminContainer';
// import GoogleMapView from './components/GoogleMapView';

class App extends Component {

  constructor(props) {
    super(props);

    this.state = {
      lat: '',
      lon: '',
      scrollItems: [

      ]
    };
  }

  componentDidMount() {
    this.props.onComponentMount();
  }

  splash() {
    if (this.props.onSplash) {
      this.props.onSplash(this.props.showSplash);
    }
  }


  render() {
    if (this.props.showSplash === true) {
      return (
        <div className="App">
          <button onClick={() => this.splash()}>Toggle Admin Screen</button>
          <div className="main-app">
            <MuiThemeProvider>
              <SplashFormContainer />
            </MuiThemeProvider>
            <MuiThemeProvider>
              <GoogleMapViewContainer />
            </MuiThemeProvider>
          </div>
        </div>
      );
    }
    return (
      <div className="App">
        <button onClick={() => this.splash()}>Toggle Admin Screen</button>
        <div className="admin">
          <MuiThemeProvider>
            <AdminContainer />
          </MuiThemeProvider>
        </div>
      </div>
    );

  }
}

export default App;

App.propTypes = {
  onComponentMount: PropTypes.func.isRequired,
  showSplash: PropTypes.bool,
  onSplash: PropTypes.func
};
