import { connect } from 'react-redux';
import Admin from '../components/Admin/index';
import {
  changeWait,
  changeGuestName,
  changeGuestSelect,
  deleteGuest,
  addGuest,
  updateWait
} from '../actions/index';

const mapStateToProps = (state) => {
  return {
    hint: 'add table to list',
    hint2: 'first name and last initial',
    hint3: 'wait time',
    restaurant: state.rests.restaurants.items[0],
    showSplash: state.rests.toggleSplash,
    partySelect: [1,2,3,4,5,6,7],
    guestName: state.rests.changeGuestName,
    guestParty: state.rests.changeGuestSelect,
    waitTime: state.rests.changeWait
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    onTextChange: (val) => {
      dispatch(changeGuestName(val));
    },
    onWaitTextChange: (val) => {
      dispatch(changeWait(val));
    },
    onSelectChange: (val) => {
      dispatch(changeGuestSelect(val));
    },
    delete: (obj) => {
      dispatch(deleteGuest(obj));
    },
    add: (obj) => {
      dispatch(addGuest(obj));
    },
    update: (obj) => {
      dispatch(updateWait(obj));
    }
  };
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Admin);
