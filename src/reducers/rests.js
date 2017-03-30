import {combineReducers} from 'redux';
import {
  CHANGE_SEARCH_TEXT,
  RESTS_LOADING,
  RESTS_LOAD_SUCCESS,
  RESTS_LOAD_ERROR,
  CHANGE_SELECT_VAL,
  TRIGGER_MAP_SUCCESS,
  TRIGGER_MAP,
  TRIGGER_MAP_FAIL,
  CHANGE_NAME_TEXT,
  BOOK_TABLE,
  BOOK_TABLE_FAIL,
  TOGGLE_SPLASH,
  CHANGE_GUEST_NAME,
  CHANGE_GUEST_SELECT,
  ADD_GUEST,
  DELETE_GUEST,
  CHANGE_WAIT,
  UPDATE_WAIT
} from '../actions';

function isLoading(state = false, action) {
  switch (action.type) {
    case RESTS_LOADING:
      return true;
    case RESTS_LOAD_SUCCESS:
      return false;
    case RESTS_LOAD_ERROR:
      return false;
  }
  return state;
}

function error(state = null, action) {
  if (action.type === RESTS_LOAD_ERROR) {
    return action.message;
  }
  return state;
}

function items(state = [], action) {
  switch (action.type) {
    case RESTS_LOADING:
      return [];
    case RESTS_LOAD_ERROR:
      return [];
    case RESTS_LOAD_SUCCESS:
      return action.items;
  }
  return state;
}

const restaurants = combineReducers( {
  isLoading,
  error,
  items
});

function searchText(state = '', action) {
  if (action.type === CHANGE_SEARCH_TEXT) {
    return action.text;
  }
  return state;
}

function nameText(state = '', action) {
  if (action.type === CHANGE_NAME_TEXT) {
    return action.text;
  }
  return state;
}

function bookTbl(state = '', action) {
  if (action.type === BOOK_TABLE) {
    return action.resp;
  } else if (action.type === BOOK_TABLE_FAIL) {
    return action.resp;
  }
  return state;
}

function toggleSplash(state = true, action) {
  if (action.type === TOGGLE_SPLASH) {
    return !action.bool;
  }
  return state;
}

function triggerMap(state = {coord: {lat: 0, lng: 0}}, action) {
  switch (action.type) {
    case TRIGGER_MAP:
      return 'map loading';
    case TRIGGER_MAP_SUCCESS:
      return action;
    case TRIGGER_MAP_FAIL:
      return action.err;
    default:
      return state;
  }
}

function mapDisplay(state = 'none', action) {
  if (action.type === TRIGGER_MAP_SUCCESS) {
    return '';
  }
  return state;
}

const map = combineReducers( {
  triggerMap,
  mapDisplay
});

function selectVal(state = 1, action) {
  if (action.type === CHANGE_SELECT_VAL) {
    return action.val;
  }
  return state;
}

function changeGuestName(state = '', action) {
  if (action.type === CHANGE_GUEST_NAME) {
    return action.text;
  }
  return state;
}

function changeGuestSelect(state = 1, action) {
  if (action.type === CHANGE_GUEST_SELECT) {
    return action.party;
  }
  return state;
}

function addGuest(state = '', action) {
  if (action.type === ADD_GUEST) {
    return action;
  }
  return state;
}

function updateWait(state = '', action) {
  if (action.type === UPDATE_WAIT) {
    return action;
  }
  return state;
}

function deleteGuest(state = '', action) {
  if (action.type === DELETE_GUEST) {
    return action.type;
  }
  return state;
}

function changeWait(state = '', action) {
  if (action.type === CHANGE_WAIT) {
    return action.text;
  }
  return state;
}

export default combineReducers( {
  searchText,
  selectVal,
  restaurants,
  map,
  nameText,
  bookTbl,
  toggleSplash,
  changeGuestName,
  changeGuestSelect,
  addGuest,
  deleteGuest,
  changeWait,
  updateWait
});
