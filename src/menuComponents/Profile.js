import Header from "../headerComponents/Header";
import ProfileUpperBox from "./profileComponents/ProfileUpperBox";
import ProfileLowerBox from "./profileComponents/ProfileLowerBox";

import StatusTrack from "./StatusTrack";

import profileCss from "./Profile.module.scss";

let Profile = () => {
  return (
    <div className={profileCss.profile}>
      <Header />
      <div className={profileCss.upperBox}>
        <ProfileUpperBox />
        <StatusTrack />
      </div>
      <div className={profileCss.bottomBox}>
        <ProfileLowerBox />
      </div>
      <div style={{ height: "200px" }}></div>
    </div>
  );
};

export default Profile;
