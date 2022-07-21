import { Switch, Route } from "react-router-dom";

import Home from "./Home";
import Profile from "./menuComponents/Profile";
import ChatComponent from "./headerComponents/chatComponents/ChatRoom";
import ExploreComponent from "./headerComponents/exploreComponents/ExploreComponent";
import SettingsComponent from "./menuComponents/settingsComponents/SettingsComponent";
import Login from "./auth/Login";
import Signup from "./auth/Signup";
import Logout from "./auth/Logout";
import Error from "./utilities/Error";

import AuthVerified from "./auth/AuthVerified";

import "./App.scss";

let App = () => {
  let authRoutes;

  let authVal = AuthVerified();

  if (authVal) {
    authRoutes = (
      <Switch>
        <Route exact path="/">
          <Home />
        </Route>
        <Route exact path="/user/profile">
          <Profile />
        </Route>
        <Route exact path="/chat">
          <ChatComponent />
        </Route>
        <Route exact path="/explore">
          <ExploreComponent />
        </Route>
        <Route exact path="/user/settings">
          <SettingsComponent />
        </Route>
        <Route exact path="/auth/logout">
          <Logout />
        </Route>
        <Route>
          <Error />
        </Route>
      </Switch>
    );
  } else {
    authRoutes = (
      <Switch>
        <Route exact path="/">
          <Home />
        </Route>
        <Route exact path="/auth/login">
          <Login />
        </Route>
        <Route exact path="/auth/signup">
          <Signup />
        </Route>
        <Route>
          <Login />
        </Route>
      </Switch>
    );
  }

  return <div>{authRoutes}</div>;
};

export default App;
