import api from "./api";
import { getAction } from "./readAction";
import { GET_NEWS } from "./types";

export const updateAction =
  (path, actionType, id, data) => async (dispatch) => {
    try {
      const res = await api.patch(`${path}/${id}`, data);

      dispatch({
        type: actionType,
        payload: res.data,
      });
        dispatch(getAction("api/", GET_NEWS));
    } catch (err) {
      console.log(err);
    }
  };
