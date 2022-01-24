import {useSelector, useDispatch} from 'react-redux';
import { useState, useEffect } from 'react';
import "./login.css";
import { CircularProgress } from "@material-ui/core";
import { signin } from '../../actions/userActions';

export default function Login(props) {
  // const email = useRef();
  // const password = useRef();
  // const { isFetching, dispatch } = useContext(AuthContext);

  // const handleClick = (e) => {
  //   e.preventDefault();
  //   loginCall(
  //     { email: email.current.value, password: password.current.value },
  //     dispatch
  //   );
  // };

  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const redirect = props.location.search
    ? props.location.search.split('=')[1]
    : '/';

  const userSignin = useSelector((state) => state.userSignin);
  const { userInfo, loading, error } = userSignin;

  const dispatch = useDispatch();
  const submitHandler = (e) => {
    e.preventDefault();
    dispatch(signin(email, password));
  };
  useEffect(() => {
    if (userInfo) {
      props.history.push(redirect);
    }
  }, [props.history, redirect, userInfo]);

  return (
    <div className="login">
      <div className="loginWrapper">
        <div className="loginLeft">
          <h3 className="loginLogo">Alumni Connects</h3>
          <span className="loginDesc">
            Connect with you Alumni friends 
          </span>
        </div>
        <div className="loginRight">
          <form className="loginBox" onSubmit={submitHandler}>
            <input
              placeholder="Email"
              type="email"
              required
              className="loginInput"
              onChange={(e) => setEmail(e.target.value)}
            />
            <input
              placeholder="Password"
              type="password"
              required
              minLength="6"
              className="loginInput"
              onChange={(e) => setPassword(e.target.value)}
            />
            <button className="loginButton" type="submit" disabled={loading}>
              {loading ? (
                <CircularProgress color="white" size="20px" />
              ) : (
                "Log In"
              )}
            </button>
            <span className="loginForgot">Forgot Password?</span>
            <button className="loginRegisterButton">
              {loading ? (
                <CircularProgress color="white" size="20px" />
              ) : (
                "Create a New Account"
              )}
            </button>
          </form>
          {error && <div>{error}</div>}
        </div>
      </div>
    </div>
  );
}
