import axios from "axios";
import {
  POST_LIST_FAIL,
  POST_LIST_REQUEST,
  POST_LIST_SUCCESS,
} from "../_constants/postConstants";

const listPost = () => async (dispatch) => {
  try {
    dispatch({ type: POST_LIST_REQUEST });
    await axios
      .get("http://localhost:8000/posts?format=json")
      .then((response) => {
        dispatch({ type: POST_LIST_SUCCESS, payload: response.data });
      })
      .catch((err) => {
        dispatch({ type: POST_LIST_FAIL, payload: err });
      });
  } catch (error) {
    dispatch({ type: POST_LIST_FAIL, payload: error.message });
  }
};

export { listPost };
