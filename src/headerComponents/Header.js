import { NavLink } from "react-router-dom";

import SearchBar from "./searchComponent/SearchBox";
import ProfileMenu from "./profileMenu/ProfileMenu";
import MenuIcon from "@material-ui/icons/Menu";

import "./Header.scss";

import logo from "../assets/instagram.png";

let Header = () => {
  let openMenu = (e) => {
    e.target.closest("#header").classList.toggle("headerHeight");

    document.getElementById("search_bar").classList.toggle("res_menu_css");
    document.getElementById("menu_bar").classList.toggle("res_menu_css");
  };

  return (
    <div className="header" id="header">
      <div className="logo">
        <NavLink to="/">
          <img src={logo} alt="logo" className="logo_img" />
        </NavLink>
        <span className="menu_responsive" onClick={openMenu}>
          <MenuIcon className="menu-icons" style={{ fontSize: 30 }} />
        </span>
      </div>
      <div className="search_bar res_menu_css" id="search_bar">
        <SearchBar />
      </div>
      <div className="menu_bar res_menu_css" id="menu_bar">
        <ProfileMenu />
      </div>
    </div>
  );
};

export default Header;
