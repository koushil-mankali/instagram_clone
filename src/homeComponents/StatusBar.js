import statusCss from "./StatusBar.module.scss";

import kajal from "../assets/Images/kajal.png";

let StatusBar = () => {
  return (
    <div className={statusCss.statusbar}>
      <div className={statusCss.statusPic}>
        <img src={kajal} alt="status" />
        <span>Name</span>
      </div>
      <div className={statusCss.statusPic}>
        <img src={kajal} alt="status" />
        <span>Name</span>
      </div>
      <div className={statusCss.statusPic}>
        <img src={kajal} alt="status" />
        <span>Name</span>
      </div>
      <div className={statusCss.statusPic}>
        <img src={kajal} alt="status" />
        <span>Name</span>
      </div>
      <div className={statusCss.statusPic}>
        <img src={kajal} alt="status" />
        <span>Name</span>
      </div>
      <div className={statusCss.statusPic}>
        <img src={kajal} alt="status" />
        <span>Name</span>
      </div>
      <div className={statusCss.statusPic}>
        <img src={kajal} alt="status" />
        <span>Name</span>
      </div>
      <div className={statusCss.statusPic}>
        <img src={kajal} alt="status" />
        <span>Name</span>
      </div>
      <div className={statusCss.statusPic}>
        <img src={kajal} alt="status" />
        <span>Name</span>
      </div>
      <div className={statusCss.statusPic}>
        <img src={kajal} alt="status" />
        <span>Name</span>
      </div>
      <div className={statusCss.statusPic}>
        <img src={kajal} alt="status" />
        <span>Name</span>
      </div>
    </div>
  );
};

export default StatusBar;
