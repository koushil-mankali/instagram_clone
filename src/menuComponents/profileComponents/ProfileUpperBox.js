import { Link } from "react-router-dom";

import profilePic from "../../assets/profile.png";

import BrightnessLowIcon from "@material-ui/icons/BrightnessLow";

import pubCss from "./ProfileUpperBox.module.scss";

let ProfileUpperBox = () => {
  return (
    <div className={pubCss.ProfileUpperBox}>
      <div className={pubCss.profilePic}>
        <img src={profilePic} alt="profile pic" className={pubCss.profileImg} />
      </div>
      <div className={pubCss.profileDet}>
        <div className={pubCss.mainDet}>
          <span className={pubCss.name}>Name</span>
          <span>
            <Link to="/user/settings" className={pubCss.edtBtn}>
              Edit Profile
            </Link>
          </span>
          <Link to="/user/settings" className={pubCss.settingsBtn}>
            <BrightnessLowIcon />
          </Link>
        </div>
        <div className={pubCss.userData}>
          <span>2 posts</span>
          <span>2 followers</span>
          <span>2 following</span>
        </div>
        <div>Bio</div>
      </div>
    </div>
  );
};

export default ProfileUpperBox;
