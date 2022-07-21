import fbcss from "./FriendBox.module.css";

import hanuman from "../../../assets/profile.png";

let FriendBox = () => {
  return (
    <>
      <div className={fbcss.friendBox}>
        <img src={hanuman} alt="profile pic" className={fbcss.profileImg} />
        <div className={fbcss.profileDet}>
          <div className={fbcss.pname}>Name</div>
          <div className={fbcss.pmess}>
            last Message <span>. time</span>
          </div>
        </div>
      </div>
    </>
  );
};

export default FriendBox;
