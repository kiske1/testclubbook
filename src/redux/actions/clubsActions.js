import * as types from "./actionTypes";
import * as clubsApi from "../../api/clubsApi";
import { beginApiCall, apiCallError } from "./apiStatusActions";

//ACTION CREATOR
export function loadClubsSuccess(clubs) {
  return { type: types.LOAD_CLUBS_SUCCESS, clubs };
}

//THUNK
export function loadClubs() {
  return function(dispatch) {
    dispatch(beginApiCall());
    //debugger;
    return clubsApi
      .getClubs()
      .then(clubs => {
        //debugger;
        dispatch(loadClubsSuccess(clubs));
      })
      .catch(error => {
        dispatch(apiCallError(error));
        throw error;
      });
  };
}
