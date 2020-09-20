import { GET_LOGS, SET_LOADING, LOGS_ERROR } from './types';

// Before refactor
// export const getLogs = () => {
//   return async dispatch => {
//     setLoading();

//     const res = await fetch('/logs');
//     const data = await res.json;

//     dispatch({ type: GET_LOGS, payload: data });
//   };
// };

// Get Logs from server
export const getLogs = () => async dispatch => {
  try {
    setLoading();

    const res = await fetch('/logs');
    const data = await res.json();
    dispatch({ type: GET_LOGS, payload: data });
  } catch (error) {
    dispatch({ type: LOGS_ERROR, payload: error.response.data });
  }
};

// Set Loading to TRUE
export const setLoading = () => {
  return {
    type: SET_LOADING
  };
};
