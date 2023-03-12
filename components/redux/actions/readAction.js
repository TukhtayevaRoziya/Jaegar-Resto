import api from "./api";
import {
  GET_NEWS,
} from "./types";

export const getAction = (path, actionType) => async (dispatch) => {
  try {
    const res = await api.get(path);
    dispatch({
      type: actionType,
      payload: res.data,
    });
  } catch (err) {
    console.log(err);
  }
};