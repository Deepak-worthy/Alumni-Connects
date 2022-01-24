import {useState, useEffect} from 'react';
import {useSelector,useDispatch} from 'react-redux';
import "./register.css";
import React from "react";
import { register } from '../../actions/userActions';

export default function Register(props) {
  // const username = useRef();
  // const email = useRef();
  // const password = useRef();
  // const passwordAgain = useRef();
  // const history = useHistory();

  // const handleClick = async (e) => {
  //   e.preventDefault();
  //   if (passwordAgain.current.value !== password.current.value) {
  //     passwordAgain.current.setCustomValidity("Passwords don't match!");
  //   } else {
  //     const user = {
  //       username: username.current.value,
  //       email: email.current.value,
  //       password: password.current.value,
  //     };
  //     try {
  //       await axios.post("/auth/register", user);
  //       history.push("/login");
  //     } catch (err) {
  //       console.log(err);
  //     }
  //   }
  // };

  const [username, setUsername] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [confirmPassword, setConfirmPassword] = useState('');

  const redirect = props.location.search
    ? props.location.search.split('=')[1]
    : '/';

  const userRegister = useSelector((state) => state.userRegister);
  const { userInfo, loading, error } = userRegister;

  const dispatch = useDispatch();
  const submitHandler = (e) => {
    e.preventDefault();
    if (password !== confirmPassword) {
      alert('Password and confirm password are not match');
    } else {
      dispatch(register(username, email, password));
    }
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
            Connect with your Alumni friends
          </span>
        </div>
        <div className="loginRight">
          <form className="loginBox" onSubmit={submitHandler}>
            <input
              placeholder="Username"
              required
              onChange={(e) => setUsername(e.target.value)}
              className="loginInput"
            />
            <input
              placeholder="Email"
              required
              onChange={(e) => setEmail(e.target.value)}
              className="loginInput"
              type="email"
            />
            <input
              placeholder="Password"
              required
              onChange={(e) => setPassword(e.target.value)}
              className="loginInput"
              type="password"
              minLength="6"
            />
            <input
              placeholder="Password Again"
              required
              onChange={(e) => setConfirmPassword(e.target.value)}
              className="loginInput"
              type="password"
            />
            <button className="loginButton" type="submit">
              Sign Up
            </button>
            <button className="loginRegisterButton">Log into Account</button>
          </form>
        </div>
      </div>
    </div>
  );
}
