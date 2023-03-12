import api from "./api";

export const createAction =
  (path, actionType, data) => async (dispatch) => {
    try {
      console.log(data)
      const res = await api.post(path, data);
      
      dispatch({
        type: actionType,
        payload: res.data,
      });
    } catch (err) {
      console.log(err);
    }
  };
