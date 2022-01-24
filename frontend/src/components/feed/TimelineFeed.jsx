import {useEffect} from "react";
import Post from "../post/Post";
import Share from "../share/Share";
import "./feed.css";
import {useSelector,useDispatch} from 'react-redux';
import {getTimelinePosts} from '../../actions/postsActions';
import LoadingBox from '../loading/LoadingBox';
import MessageBox from '../message/MessageBox';

export default function TimelineFeed() {
  const userSignin = useSelector((state) => state.userSignin);
  const { userInfo } = userSignin;

  const dispatch = useDispatch();
  const timelinePosts = useSelector(state => state.timelinePosts);
  const {loading,error,posts}=timelinePosts;

  useEffect(() => {
    dispatch(getTimelinePosts(userInfo._id));
  }, [dispatch,userInfo._id]);

  return (
    <div className="feed">
      {loading? (
        <LoadingBox></LoadingBox>
      ):error?(
        <MessageBox variant="danger">{error}</MessageBox>
      ):(
      <div className="feedWrapper">
        <Share/>
        {posts.map((p) => (
          <Post key={p._id} post={p} />
        ))}
      </div>)}
    </div>
  );
}
