import React, { Component, PropTypes } from 'react';
import TextField from 'material-ui/TextField';
import './index.css';
import RaisedButton from 'material-ui/RaisedButton';
class Splashform extends Component {
  constructor(props) {
    super(props);
  }
  handleTextChange = (event) => {
    if (this.props.onChange) {
      this.props.onChange(event.target.value);
    }
  };

  handleNameChange = (event) => {
    if (this.props.onChange) {
      this.props.onNameChange(event.target.value);
    }
  };

  handleTblChange = (event) => {
    if (this.props.onSelectChange) {
      this.props.onSelectChange(event.target.value);
    }
  };

  submit = (event) => {
    if (this.props.onSubmit) {
      this.props.onSubmit(event);
    }
  }
  render() {
    return (
      <div className="splash-container">
        <div className="splash-section">
          <div className="splash-row">
            <p className="heading">Welcome</p>
            <div className="splash-text-field">
              <TextField
                floatingLabelText="Search for Restaurants"
                hintText={this.props.hint}
                onChange={(event) => this.handleTextChange(event)}
              />
            </div>
          </div>
          <div className="splash-row">
            <TextField
              floatingLabelText="name"
              hintText={this.props.hint2}
              onChange={(event) => this.handleNameChange(event)}
            />
            <span>Party Size</span>
            <select
              onChange={(event) => this.handleTblChange(event)}
            >
              {this.props.partySelect.map(val => {
                return (
                  <option key={val} value={val}>{val}</option>
                );
              })}
            </select>
          </div>
          <div className="splash-row">
            <RaisedButton
              label="Submit"
              onClick={
                () => this.submit(this.props.searchText)
              }
            />
          </div>
        </div>
      </div>
    );
  }
}

Splashform.propTypes = {
  hint: PropTypes.string,
  onChange: PropTypes.func,
  onSelectChange: PropTypes.func,
  partySelect: PropTypes.array,
  onSubmit: PropTypes.func,
  searchText: PropTypes.string,
  hint2: PropTypes.string,
  onNameChange: PropTypes.func
};

export default Splashform;
