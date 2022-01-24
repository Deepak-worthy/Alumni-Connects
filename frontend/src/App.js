import Home from "./pages/home/Home";
import Login from "./pages/login/Login";
// import Profile from "./pages/profile/Profile";
import Register from "./pages/register/Register";
import {useSelector } from 'react-redux';
import {
  BrowserRouter,
  Route,
} from "react-router-dom";

function App() {
  const userSignin = useSelector((state) => state.userSignin);
  const { userInfo } = userSignin;
  return (
    <BrowserRouter>
        <Route exact path="/"
          component={userInfo ? Home : Register}>
        </Route>
        <Route path="/login" component={userInfo ? Home : Login}></Route>
        <Route path="/register" component={userInfo ? Home : Register}>
        </Route>
        {/* <Route path="/messenger">
          {!userInfo ? <Redirect to="/" /> : <Messenger />}
        </Route>
        <Route path="/profile/:username">
          <Profile />
        </Route> */}
    </BrowserRouter>
  );
}

export default App;
