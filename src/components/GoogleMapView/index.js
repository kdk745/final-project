import React, { Component, PropTypes } from 'react';
import {Gmaps, Marker, InfoWindow} from 'react-gmaps';
import './index.css';
import Scrollitem from '../Scrollitem';
require('dotenv').config();

class GoogleMapView extends Component {

  params = {v: '3.exp', key: process.env.SECRET};

  onMapCreated(map) {
    map.setOptions({
      disableDefaultUI: true
    });
  }

  onItmClick(id) {
    const value = this.props.scrollItems.filter(item => item._id === id);
    const passObj = {
      bookInfo: {
        booker: this.props.name,
        party: this.props.partySize
      },
      item: value[0]
    };
    if (this.props.book) {
      this.props.book(passObj);
    }
  }

  onMarkerClick() {
    console.log('marker click evt');
  }

  componentDidMount() {
    console.log(this.props.scrollItems);
  }

  onDragEnd(e) {
    console.log('onDragEnd', e);
  }

  onCloseClick() {
    console.log('onCloseClick');
  }

  render() {
    if (this.props.display === 'none') {
      return null;
    }
    return (
      <div className="map-container">
        <div className="map-view">
          <Gmaps
            width={'100%'}
            height={'300px'}
            lat={this.props.lat}
            lng={this.props.lng}
            zoom={13}
            loadingMessage={'Map Loading'}
            params={this.params}
            onMapCreated={this.onMapCreated}>
            <InfoWindow
              lat={this.props.lat}
              lng={this.props.lng}
              content={'Start'}
              onCloseClick={this.onCloseClick}
            />
            {this.props.scrollItems.map(scrollItem => {
              return (
                <Marker
                  key={scrollItem.info.lat}
                  lat={scrollItem.info.lat}
                  lng={scrollItem.info.lng}
                  draggable={false}
                  onDragEnd={this.onDragEnd}
                  onClick={() => this.onMarkerClick()}
                />
              );
            })}
          </Gmaps>
        </div>
        <div className="scroll-tbl">
          {this.props.scrollItems.map(scrollItem => {
            const Itm = (
              <Scrollitem
                key={scrollItem._id}
                name={scrollItem.info.name}
                address={scrollItem.info.address}
                bookTbl={() => this.onItmClick(scrollItem._id)}
                waitTime={scrollItem.info.wait}
              />
            );
            return (Itm);
          })}
        </div>
      </div>
    );
  }
}

export default GoogleMapView;

GoogleMapView.propTypes = {
  lat: PropTypes.number,
  lng: PropTypes.number,
  scrollItems: PropTypes.array,
  coords: PropTypes.array,
  onClick: PropTypes.func,
  onItmClick: PropTypes.func,
  display: PropTypes.string,
  book: PropTypes.func,
  nameText: PropTypes.string,
  name: PropTypes.string,
  partySize: PropTypes.int
};
