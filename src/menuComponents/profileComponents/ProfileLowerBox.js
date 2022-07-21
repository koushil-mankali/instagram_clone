import profilePic from "../../assets/profile.png";

import plbCss from "./ProfileLowerBox.module.scss";

let ProfileLowerBox = () => {
  return (
    <div className={plbCss.outerBox}>
      <div className={plbCss.ProfileLowerBox}>
        <div className={plbCss.postPic}>
          <img src={profilePic} alt="post pic" className={plbCss.postImg} />
        </div>
        <div className={plbCss.postPic}>
          <img src={profilePic} alt="post pic" className={plbCss.postImg} />
        </div>
        <div className={plbCss.postPic}>
          <img src={profilePic} alt="post pic" className={plbCss.postImg} />
        </div>
      </div>
      <div className={plbCss.ProfileLowerBox}>
        <div className={plbCss.postPic}>
          <img src={profilePic} alt="post pic" className={plbCss.postImg} />
        </div>
        <div className={plbCss.postPic}>
          <img src={profilePic} alt="post pic" className={plbCss.postImg} />
        </div>
        <div className={plbCss.postPic}>
          <img src={profilePic} alt="post pic" className={plbCss.postImg} />
        </div>
      </div>
    </div>
  );
};

export default ProfileLowerBox;
