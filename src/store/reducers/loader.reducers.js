import { SHOW_LOADER, HIDE_LOADER } from '../actions/loader.actions';

const initialState = {
  active: false,
};

function loaderReducer(state = initialState, action) {
  switch (action.type) {
    case SHOW_LOADER:
      return { ...state, active: true };
    case HIDE_LOADER:
      return { ...state, active: false };
    default:
      return state;
  }
}

export default loaderReducer;
