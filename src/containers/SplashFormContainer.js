import { connect } from 'react-redux';
import Splashform from '../components/Splashform/index';
import {
  changeSearchText,
  changeSelectVal,
  triggerMap,
  changeNameText
} from '../actions/index';


const mapStateToProps = (state) => {
  // hint for text box
  // prop to track text in text box
  // vals for select dropdown
  return {
    hint: 'search by address, city, or zip code',
    hint2: 'first name and last initial',
    searchText: state.rests.searchText,
    partySelect: [1,2,3,4,5,6,7],
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    // set prop call back for typing in text field
    onChange: value => {
      dispatch(changeSearchText(value));
    },
    // set prop call back for select dropdown
    onSelectChange: value => {
      dispatch(changeSelectVal(value));
    },
    // set prop call back for submit btn
    onSubmit: value => {
      dispatch(triggerMap(value));
    },
    // set prop call back for typing in name text field
    onNameChange: value => {
      dispatch(changeNameText(value));
    }
  };
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Splashform);
