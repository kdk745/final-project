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

  doTriggerMap(items) {
    const address = items.value.replace(' ','+');
    // const party = items.partySize;
    axios.get(`https://maps.googleapis.com/maps/api/geocode/json?address=${address}&key=AIzaSyB3xtO0L1CN2laHV-NcVNpj6tGQ8yCjXIM`)
      .then(resp => {
        this.setState({
          lat: resp.data.results[0].geometry.location.lat,
          lon: resp.data.results[0].geometry.location.lng
        });
      });
  }
  onMapCenter(coords) {
    this.setState({
      lat: coords.lat,
      lon: coords.lng
    });
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
