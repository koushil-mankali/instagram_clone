import expCss from "./ExplorePosts.module.scss";

import profilePic from "../../assets/profile.png";

let ExploreComponent = () => {
  return (
    <>
      <div className={expCss.main}>
        <img src={profilePic} alt="posts" className={expCss.post} />
      </div>
    </>
  );
};

export default ExploreComponent;
