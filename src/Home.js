import { useState } from "react";

import Header from "./headerComponents/Header";
import StatusBar from "./homeComponents/StatusBar";
import Suggestion from "./homeComponents/suggestionComponent/Suggestion";
import Posts from "./homeComponents/postComponents/Posts";
import AddPost from "./homeComponents/addPost/addPost";

import AddBoxIcon from "@material-ui/icons/AddBox";

import AuthVerified from "./auth/AuthVerified";
import Login from "./auth/Login";

import homeCss from "./Home.module.scss";

let Home = () => {
  let authRoutes;

  let authVal = AuthVerified();

  console.log("Au", authVal);

  let [showPost, setShowPost] = useState(false);

  let showAddPost = () => {
    setShowPost((prevState) => !prevState);
  };

  if (authVal) {
    authRoutes = (
      <>
        <Header />
        <div className={homeCss.container}>
          <div className={homeCss.leftSide}>
            {showPost ? <AddPost /> : null}
            <StatusBar />
            <Posts />
            <div style={{ height: "200px" }}></div>
          </div>
          <div className={homeCss.rightSide}>
            <Suggestion />
          </div>
        </div>
        <span className={homeCss.postAddButton} onClick={showAddPost}>
          <AddBoxIcon fontSize="large" />
        </span>
      </>
    );
  } else {
    authRoutes = <Login />;
  }

  return <>{authRoutes}</>;
};

export default Home;
