import { useContext } from "react";
import { Link, NavLink } from "react-router-dom";

import Store from "../../store/StoreLayout";
import Notifications from "./Notifications";

import profileMenu from "./ProfileMenu.module.scss";

import profile from "../../assets/profile.png";

import HomeIcon from "@material-ui/icons/Home";
// import HomeOutlinedIcon from "@material-ui/icons/HomeOutlined";
import OfflineBoltIcon from "@material-ui/icons/OfflineBolt";
import OfflineBoltOutlinedIcon from "@material-ui/icons/OfflineBoltOutlined";
import ExploreIcon from "@material-ui/icons/Explore";
import ExploreOutlinedIcon from "@material-ui/icons/ExploreOutlined";
import FavoriteIcon from "@material-ui/icons/Favorite";
import FavoriteBorderOutlinedIcon from "@material-ui/icons/FavoriteBorderOutlined";
import AccountCircleIcon from "@material-ui/icons/AccountCircle";
import BookmarkBorderSharpIcon from "@material-ui/icons/BookmarkBorderSharp";
import BrightnessLowRoundedIcon from "@material-ui/icons/BrightnessLowRounded";

let ProfileMenu = () => {
  let store = useContext(Store);

  let { changeIC, setChangeIc } = store;

  let changeIc = (e) => {
    setChangeIc({
      [e.target.parentElement.id]: !changeIC[e.target.parentElement.id],
    });
  };

  return (
    <>
      <NavLink to="/">
        <HomeIcon
          className={profileMenu.menu_icons}
          style={{ fontSize: 30 }}
          onClick={changeIc}
        />
      </NavLink>
      <NavLink to="/chat" id="chat">
        {changeIC.chat ? (
          <OfflineBoltIcon
            className={profileMenu.menu_icons}
            style={{ fontSize: 30 }}
          />
        ) : (
          <OfflineBoltOutlinedIcon
            className={profileMenu.menu_icons}
            style={{ fontSize: 30 }}
            onClick={changeIc}
          />
        )}
      </NavLink>
      <NavLink to="/explore" id="explore">
        {changeIC.explore ? (
          <ExploreIcon
            className={profileMenu.menu_icons}
            style={{ fontSize: 30 }}
          />
        ) : (
          <ExploreOutlinedIcon
            className={profileMenu.menu_icons}
            style={{ fontSize: 30 }}
            onClick={changeIc}
          />
        )}
      </NavLink>
      <span className={profileMenu.notifications_css} id="notify">
        {changeIC.notify ? (
          <>
            <FavoriteIcon
              className={profileMenu.menu_icons}
              style={{ fontSize: 30 }}
              onClick={changeIc}
            />
            <Notifications />
          </>
        ) : (
          <FavoriteBorderOutlinedIcon
            id="notifyBtn"
            className={profileMenu.menu_icons}
            style={{ fontSize: 30 }}
            onClick={changeIc}
          />
        )}
      </span>
      <span className={profileMenu.profile_pic_div}>
        <img src={profile} alt="profile" />
        <span className={profileMenu.hover_menu}>
          <Link to="/user/profile" className={profileMenu.menu_options}>
            <AccountCircleIcon /> &nbsp; &nbsp;<span>Profile </span>
          </Link>
          <Link to="/user/saved" className={profileMenu.menu_options}>
            <BookmarkBorderSharpIcon /> &nbsp; &nbsp;<span>Saved </span>
          </Link>
          <Link to="/user/settings" className={profileMenu.menu_options}>
            <BrightnessLowRoundedIcon /> &nbsp; &nbsp;<span>Settings </span>
          </Link>
          <Link to="/auth/logout" className={profileMenu.menu_options}>
            &nbsp;<span>Logout </span>
          </Link>
        </span>
      </span>
    </>
  );
};

export default ProfileMenu;
