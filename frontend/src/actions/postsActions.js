import Axios from 'axios';
import {
  TIMELINE_POSTS_REQUEST,
  TIMELINE_POSTS_SUCCESS,
  TIMELINE_POSTS_FAIL,
  PROFILE_POSTS_REQUEST,
  PROFILE_POSTS_SUCCESS,
  PROFILE_POSTS_FAIL
} from '../constants/postsConstants';

export const getProfilePosts = (username) => async (dispatch) => {
  dispatch({ type: PROFILE_POSTS_REQUEST, payload: {username} });
  try {
    const { data } = await Axios.get("/posts/profile/" + username);
    dispatch({ type: PROFILE_POSTS_SUCCESS, payload: data });
  } catch (error) {
    dispatch({
      type:  PROFILE_POSTS_FAIL,
      payload:
        error.response && error.response.data.message
          ? error.response.data.message
          : error.message,
    });
  }
};

export const getTimelinePosts = (userId) => async (dispatch) => {
    dispatch({ type: TIMELINE_POSTS_REQUEST, payload: {userId} });
    try {
      const { data } = await Axios.get("posts/timeline/" + userId);
      dispatch({ type: TIMELINE_POSTS_SUCCESS, payload: data });
    } catch (error) {
      dispatch({
        type:  TIMELINE_POSTS_FAIL,
        payload:
          error.response && error.response.data.message
            ? error.response.data.message
            : error.message,
      });
    }
  };

