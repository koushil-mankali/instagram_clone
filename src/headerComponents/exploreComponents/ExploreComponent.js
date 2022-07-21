import Header from "../Header";

import expDCss from "./ExploreComponent.module.scss";

import ExplorePosts from "./ExplorePosts";

let ExploreComponent = () => {
  return (
    <>
      <Header />
      <div className={expDCss.body}>
        <ExplorePosts />
      </div>
    </>
  );
};

export default ExploreComponent;
