import scss from "./SecondContainer.module.css";

import InfoOutlinedIcon from "@material-ui/icons/InfoOutlined";
import SentimentSatisfiedOutlinedIcon from "@material-ui/icons/SentimentSatisfiedOutlined";
import ImageOutlinedIcon from "@material-ui/icons/ImageOutlined";
import FavoriteBorderOutlinedIcon from "@material-ui/icons/FavoriteBorderOutlined";

import hanuman from "../../../assets/profile.png";

let SecondContainer = () => {
  return (
    <>
      <div className={scss.secondContainer}>
        <div className={scss.header}>
          <span className={scss.innerHeader}>
            <img src={hanuman} alt="profile pic" className={scss.profilePic} />
            <span>Name</span>
          </span>
          <span className={scss.infoIcon}>
            <InfoOutlinedIcon />
          </span>
        </div>
        <div className={scss.boxBody}>
          <div className={scss.you}>YOU</div>
          <div className={scss.me}>ME</div>

          <div className={scss.you}>Hi</div>
          <div className={scss.me}>Hii</div>
          <div className={scss.you}>How are you ?</div>
          <div className={scss.me}>Good what about you ?</div>
          <div className={scss.you}>
            Yeah good thanks... Aah i have heard that you got a job ?
          </div>
          <div className={scss.me}>
            Yeah i got a job as web developer job in a big MNC
          </div>
          <div className={scss.you}>
            That's great man am also trying to crack a job in MNC can you give
            any tips ?
          </div>
          <div className={scss.me}>
            Yeah just practice the language that you'r good in and do solve some
            most asked interview questions that will help you...
          </div>
          <div className={scss.you}>
            Thanks for the advice... will try to get a job soon...
          </div>
          <div className={scss.me}>Good</div>
          <div className={scss.you}>Bye...</div>
          <div className={scss.me}>Bye..</div>
        </div>
        <div className={scss.keypad}>
          <span className={scss.smileIcon}>
            <SentimentSatisfiedOutlinedIcon fontSize="inherit" />
          </span>
          <input
            type="text"
            name="chatKey"
            id="chatKey"
            className={scss.chatKey}
            placeholder="Message..."
          />
          <span>
            <input
              type="file"
              name="imgup"
              id="imgup"
              className={scss.fileUp}
            />
            <label htmlFor="imgup" className={scss.fileUpLbl}>
              <ImageOutlinedIcon fontSize="inherit" />
            </label>
          </span>
          <span className={scss.loveIcon}>
            <FavoriteBorderOutlinedIcon fontSize="inherit" />
          </span>
        </div>
      </div>
    </>
  );
};

export default SecondContainer;
