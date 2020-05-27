
import axios from 'axios';

export const FETCHING_ACTIVITY_START = 'FETCHING_ACTIVITY_START';
export const FETCHING_ACTIVITY_SUCCESS = 'FETCHING_ACTIVITY_SUCCESS';
export const FETCHING_ACTIVITY_FAILURE = 'FETCHING_ACTIVITY_FAILURE';
export const fetchActivity = () => dispatch => {
  dispatch({ type: FETCHING_ACTIVITY_START });
  axios
    // .get('https://api.spacexdata.com/v3/launches/latest')
    .get('https://official-joke-api.appspot.com/jokes/programming/ten')
    .then(res => {
        console.log("res data",res.data)
      dispatch({ type: FETCHING_ACTIVITY_SUCCESS, payload: res.data });
    })
    .catch(err => {
      dispatch({ type: FETCHING_ACTIVITY_FAILURE, payload: err.res });
    });
};