import * as types from "../actions/actionTypes";
import initialState from "./initialState";

export default function clubsReducer(state = initialState.clubs, action) {
  switch (action.type) {
    case types.LOAD_CLUBS_SUCCESS:
      return action.clubs;
    default:
      return state;
  }
}
