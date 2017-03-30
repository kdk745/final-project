import { connect } from 'react-redux';
import GoogleMapView from '../components/GoogleMapView/index';
import { mapLoad, bookTbl } from '../actions/index';

const mapStateToProps = (state) => {
  return {
    scrollItems: state.rests.restaurants.items,
    lat: state.rests.map.triggerMap.coord.lat,
    lng: state.rests.map.triggerMap.coord.lng,
    display: state.rests.map.mapDisplay,
    name: state.rests.nameText,
    partySize: state.rests.selectVal
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    onChange: value => {
      dispatch(mapLoad(value));
    },
    book: value => {
      dispatch(bookTbl(value));
    }
  };
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(GoogleMapView);
