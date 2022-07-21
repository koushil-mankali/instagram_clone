import { useState, useRef } from "react";
import { Link } from "react-router-dom";

import authVerification from "./authVerification";
import Notification from "../utilities/Notification";

import logo from "../assets/instagram.png";
import appstore from "../assets/Images/appStore.png";
import playstore from "../assets/Images/playStore.png";

import authCss from "./auth.module.scss";

import FacebookIcon from "@material-ui/icons/Facebook";

let Signup = () => {
  let [error, setErrorState] = useState({
    status: null,
    message: null,
  });

  let name = useRef();
  let email = useRef();
  let password = useRef();

  let submitData = (e) => {
    e.preventDefault();
    let retVal = authVerification({
      email: email.current.value,
      name: name.current.value,
      password: password.current.value,
    });

    if (retVal.status === "fail") {
      setErrorState({
        status: retVal.status,
        message: retVal.message,
      });
      setTimeout(() => {
        setErrorState({
          status: null,
          message: null,
        });
      }, 5000);
    } else {
      setErrorState({
        status: retVal.status,
        message: null,
      });
    }
  };

  let err_class;

  return (
    <div className={authCss.auth}>
      {error.status === "fail" ? (
        <Notification status={error.status} message={error.message} />
      ) : null}
      <div>
        <div className={`${authCss.notify} ${err_class}`}></div>
        <form onSubmit={submitData} className={authCss.form}>
          <div className={authCss.logo}>
            <img src={logo} alt="logo" />
          </div>
          <div className={authCss.signuptxt}>
            Sign up to see photos and videos from your friends.
          </div>
          <div className={authCss.lwf}>
            <span>
              <FacebookIcon />
            </span>
            Login in with Facebook
          </div>
          <div className={authCss.sepDiv}>OR</div>
          <div className={authCss.input}>
            <input
              type="email"
              name="email"
              id="email"
              placeholder="Email..."
              ref={email}
              className={authCss.inputField}
            />
          </div>
          <div className={authCss.input}>
            <input
              type="text"
              name="username"
              id="username"
              placeholder="Username..."
              ref={name}
              className={authCss.inputField}
            />
          </div>
          <div className={authCss.input}>
            <input
              type="password"
              name="password"
              id="password"
              placeholder="Password..."
              ref={password}
              className={authCss.inputField}
            />
          </div>
          <input type="submit" value="Sign up" className={authCss.btn} />
        </form>
        <div className={authCss.dhac}>
          Have an account?
          <Link to="/auth/login" className={authCss.link}>
            Log In
          </Link>
        </div>
        <div className={authCss.getapp}>
          <span className={authCss.getapp_txt}>Get the app</span>
          <div className={authCss.appimgs}>
            <img src={appstore} alt="appstore" className={authCss.appstore} />
            <img
              src={playstore}
              alt="playstore"
              className={authCss.playstore}
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Signup;
