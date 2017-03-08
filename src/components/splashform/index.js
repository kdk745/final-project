import React, { Component, PropTypes } from 'react';
import TextField from 'material-ui/TextField';
import './index.css';
import RaisedButton from 'material-ui/RaisedButton';
import AppBar from 'material-ui/AppBar';

class Splashform extends Component {
  state = {
    value: 1,
    partySelect: [1,2,3,4,5,6,7],
    partySize: 1,
  };


  handleTextChange = (val) => {
    this.setState({value: val});
  };

  handleTblChange = (val) => {
    console.log(this.state.partySize);
    this.setState({partySize: val});
  };

  render() {
    return (
      <div className="splash-container">
        <div className="splash-section">
          <div className="splash-row">
            <AppBar
              className="app-bar"
              title="Welcome"
              showMenuIconButton={false}
            />
            <TextField
              className="splash-text-field"
              floatingLabelText="Search for Restaurants"
              hintText={this.props.hint}
              onChange={(event) => this.handleTextChange(event.target.value)}
            />
          </div>
          <div className="splash-row">
            <span>Party Size</span>
            <select
              onChange={(event) => this.handleTblChange(event.target.value)}
            >
              {this.state.partySelect.map(val => {
                return (
                  <option key={val} value={val}>{val}</option>
                );
              })}
            </select>
          </div>
          <div className="splash-row">
            <RaisedButton label="Submit" />
          </div>
        </div>
      </div>
    );
  }
}

Splashform.propTypes = {
  hint: PropTypes.string
};

export default Splashform;
