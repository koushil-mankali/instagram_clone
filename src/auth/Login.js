import { useState, useRef } from "react";
import { Link } from "react-router-dom";

import authVerification from "./authVerification";
import Notification from "../utilities/Notification";

import logo from "../assets/instagram.png";
import appstore from "../assets/Images/appStore.png";
import playstore from "../assets/Images/playStore.png";

import authCss from "./auth.module.scss";

import FacebookIcon from "@material-ui/icons/Facebook";

let Login = () => {
  let [error, setErrorState] = useState({
    status: null,
    message: null,
  });

  let email = useRef(null);
  let password = useRef(null);

  let submitData = (e) => {
    e.preventDefault();
    let retVal = authVerification({
      email: email.current.value,
      name: null,
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

    //login database
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
              type="password"
              name="password"
              id="password"
              placeholder="Password..."
              ref={password}
              className={authCss.inputField}
            />
          </div>
          <input type="submit" value="Log In" className={authCss.btn} />
          <div className={authCss.sepDiv}>OR</div>
          <div className={authCss.lwf}>
            <span>
              <FacebookIcon />
            </span>
            Login in with Facebook
          </div>
          <div className={authCss.forgetPass}>Forgot password?</div>
        </form>
        <div className={authCss.dhac}>
          Don't have an account?{" "}
          <Link to="/auth/signup" className={authCss.link}>
            Sign up
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

export default Login;
