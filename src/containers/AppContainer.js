import { connect } from 'react-redux';
import App from '../App';
import { restaurantsLoading, toggleSplash } from '../actions/index';

const mapStateToProps = (state) => {
  return {
    scrollItems: state.rests.restaurants.items,
    showSplash: state.rests.toggleSplash
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    onComponentMount: () => {
      dispatch(restaurantsLoading());
    },
    onSplash: (bool) => {
      dispatch(toggleSplash(bool));
    }
  };
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(App);
