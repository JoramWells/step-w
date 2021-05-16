import { POST_DETAIL_FAIL, POST_DETAIL_REQUEST, POST_DETAIL_SUCCESS, POST_LIST_FAIL, POST_LIST_REQUEST, POST_LIST_SUCCESS } from "../_constants/postConstants";
  
  function postListReducer(state = { posts: [] }, action) {
    switch (action.type) {
      case POST_LIST_REQUEST:
        return { loading: true };
      case POST_LIST_SUCCESS:
        return { loading: false, posts: action.payload };
      case POST_LIST_FAIL:
        return { loading: false, error: action.payload };
      default:
        return state;
    }
  }

  function postDetailReducer(state = {}, action) {
    switch (action.type) {
      case POST_DETAIL_REQUEST:
        return { loadingDetail: true };
      case POST_DETAIL_SUCCESS:
        return { loadingDetail: false, postDetail: action.payload };
      case POST_DETAIL_FAIL:
        return { loadingDetail: false, errorDetail: action.payload };
      default:
        return state;
    }
  }
  
  
  
  export {
    postListReducer,
    postDetailReducer
  };
  