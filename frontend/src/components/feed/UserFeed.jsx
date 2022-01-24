import {useEffect} from "react";
import Post from "../post/Post";
import Share from "../share/Share";
import "./feed.css";
import {useSelector,useDispatch} from 'react-redux';
import {getProfilePosts} from '../../actions/postsActions';
import LoadingBox from '../loading/LoadingBox';
import MessageBox from '../message/MessageBox';

export default function UserFeed({ username }) {
  const userSignin = useSelector((state) => state.userSignin);
  const { userInfo } = userSignin;
  
  const dispatch = useDispatch();
  const profilePosts = useSelector(state => state.profilePosts);
  const {loading,error,posts}=profilePosts;

  useEffect(() => {
    dispatch(getProfilePosts(username));
  }, [dispatch,username]);

  return (
    <div className="feed">
      {loading? (
        <LoadingBox></LoadingBox>
      ):error?(
        <MessageBox variant="danger">{error}</MessageBox>
      ):(
      <div className="feedWrapper">
        {username === userInfo.username && <Share />}
        {posts.map((p) => (
          <Post key={p._id} post={p} />
        ))}
      </div>)};
    </div>
  );
}
