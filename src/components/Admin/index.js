import React, { Component, PropTypes } from 'react';
import './index.css';
import RaisedButton from 'material-ui/RaisedButton';
import TextField from 'material-ui/TextField';
class Admin extends Component {

  params = {v: '3.exp', key: 'AIzaSyB3xtO0L1CN2laHV-NcVNpj6tGQ8yCjXIM'};

  onMapCreated(map) {
    map.setOptions({
      disableDefaultUI: true
    });
  }

  componentDidMount() {
    console.log(this.props.restaurant);
  }

  handleTextChange(event) {
    if (this.props.onTextChange) {
      this.props.onTextChange(event.target.value);
    }
  }

  handleWaitTextChange(event) {
    if (this.props.onWaitTextChange) {
      this.props.onWaitTextChange(event.target.value);
    }
  }

  handleTblChange(event) {
    if (this.props.onSelectChange) {
      this.props.onSelectChange(event.target.value);
    }
  }

  delete(name) {
    const id = this.props.restaurant._id;
    const book = this.props.restaurant.booked.filter(booking => booking.booker !== name );
    const creds = this.props.restaurant.credentials;
    const infoObj = this.props.restaurant.info;
    const parms = {
      credentials: creds,
      info: infoObj,
      booked: book
    };
    if (this.props.delete) {
      this.props.delete({_id: id, obj: parms});
    }
  }

  add() {
    const id = this.props.restaurant._id;
    const book = this.props.restaurant.booked;
    const creds = this.props.restaurant.credentials;
    const infoObj = this.props.restaurant.info;
    book.push({
      booker: this.props.guestName,
      party: this.props.guestParty
    });
    const parms = {
      credentials: creds,
      info: infoObj,
      booked: book
    };
    if (this.props.add) {
      this.props.add({_id: id, obj: parms});
    }
  }

  updateWaitTime() {
    const id = this.props.restaurant._id;
    const book = this.props.restaurant.booked;
    const creds = this.props.restaurant.credentials;
    const infoObj = this.props.restaurant.info;
    infoObj.wait = this.props.waitTime;
    const parms = {
      credentials: creds,
      info: infoObj,
      booked: book
    };
    if (this.props.update) {
      this.props.update({_id: id, obj: parms});
    }

  }

  render() {
    return (
      <div className="admin-container">
        <div className="add-container">
          <div className="row">
            <TextField
              floatingLabelText={this.props.hint}
              hintText={this.props.hint2}
              onChange={(event) => this.handleTextChange(event)}
            />
            <span>Party Size</span>
            <select
              onChange={(event) => this.handleTblChange(event)}
            >
              {this.props.partySelect.map(val => {
                return (
                  <option key={val + 10} value={val}>{val}</option>
                );
              })}
            </select>
          </div>
          <div className="row">
            <RaisedButton
              label="Add"
              onClick={
                () => this.add()
              }
            />
          </div>
        </div>
        <div className="add-container">
          <div className="row">
            <TextField
              floatingLabelText={this.props.hint3}
              hintText={this.props.restaurant.info.wait}
              onChange={(event) => this.handleWaitTextChange(event)}
            />
          </div>
          <div className="row">
            <RaisedButton
              label="Update"
              onClick={
                () => this.updateWaitTime()
              }
            />
          </div>
        </div>
        <div className="book-container">
          {this.props.restaurant.booked.map(book => {
            return (
              <div className="book-item" key={book.booker}>
                <p>
                  Table for: {book.booker}
                </p>
                <p>
                  Party: {book.party}
                </p>
                <RaisedButton
                  label="Remove"
                  onClick={
                    () => this.delete(book.booker)
                  }
                />
              </div>
            );
          })}
        </div>
      </div>
    );
  }
}

export default Admin;

Admin.propTypes = {
  restaurant: PropTypes.obj,
  onDelete: PropTypes.func,
  onCreate: PropTypes.func,
  hint: PropTypes.string,
  hint2: PropTypes.string,
  onTextChange: PropTypes.func,
  partySelect: PropTypes.array,
  onSelectChange: PropTypes.func,
  delete: PropTypes.func,
  guestName: PropTypes.string,
  guestParty: PropTypes.int,
  add: PropTypes.func,
  hint3: PropTypes.string,
  onWaitTextChange: PropTypes.func,
  waitTime: PropTypes.func,
  update: PropTypes.func
};
