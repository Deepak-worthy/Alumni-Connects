import { createStore, compose, applyMiddleware, combineReducers } from 'redux';
import thunk from 'redux-thunk';
import {
  userDetailsReducer,
  userRegisterReducer,
  userSigninReducer
} from './reducers/userReducers';
import {
  profilePostsReducer,
  timelinePostsReducer
} from './reducers/postReducers';

const initialState = {
    userSignin: {
      userInfo: localStorage.getItem('userInfo')
        ? JSON.parse(localStorage.getItem('userInfo'))
        : null,
    }
  };

const reducer = combineReducers({
  userSignin: userSigninReducer,
  userRegister: userRegisterReducer,  
  userDetails: userDetailsReducer,
  profilePosts: profilePostsReducer,
  timelinePosts: timelinePostsReducer,
});
const composeEnhancer = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;
const store = createStore(
    reducer,
    initialState,
    composeEnhancer(applyMiddleware(thunk))
);

export default store;
  