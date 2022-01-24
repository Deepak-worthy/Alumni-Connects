import {
  TIMELINE_POSTS_REQUEST,
  TIMELINE_POSTS_SUCCESS,
  TIMELINE_POSTS_FAIL,
  PROFILE_POSTS_REQUEST,
  PROFILE_POSTS_SUCCESS,
  PROFILE_POSTS_FAIL
} from '../constants/postsConstants';
  
  export const profilePostsReducer = (state = { loading: true, posts: [] }, action) => {
    switch (action.type) {
      case PROFILE_POSTS_REQUEST:
        return { loading: true };
      case PROFILE_POSTS_SUCCESS:
        return { loading: false, posts: action.payload };
      case PROFILE_POSTS_FAIL:
        return { loading: false, error: action.payload };
      default:
        return state;
    }
  };
  
  export const timelinePostsReducer = (state = { loading: true, posts: [] }, action) => {
    switch (action.type) {
      case TIMELINE_POSTS_REQUEST:
        return { loading: true };
      case TIMELINE_POSTS_SUCCESS:
        return { loading: false, posts: action.payload };
      case TIMELINE_POSTS_FAIL:
        return { loading: false, error: action.payload };
      default:
        return state;
    }
  };