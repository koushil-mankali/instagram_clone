import { useState } from "react";

import Modal from "./modal/Modal";

import postCss from "./Posts.module.scss";

import kajal from "../../assets/Images/kajal.png";

import MoreHorizRoundedIcon from "@material-ui/icons/MoreHorizRounded";
import FavoriteBorderRoundedIcon from "@material-ui/icons/FavoriteBorderRounded";
import FavoriteIcon from "@material-ui/icons/Favorite";
import ChatBubbleOutlineRoundedIcon from "@material-ui/icons/ChatBubbleOutlineRounded";
import TelegramIcon from "@material-ui/icons/Telegram";
import BookmarkBorderRoundedIcon from "@material-ui/icons/BookmarkBorderRounded";
import BookmarkIcon from "@material-ui/icons/Bookmark";

let Post = () => {
  let [showModal, setShowModal] = useState(false);
  let [liked, setLiked] = useState(false);
  let [saved, setSaved] = useState(false);
  let [showClass, setShowClass] = useState(false);

  let modal = () => {
    setShowModal((prevState) => !prevState);
  };

  let fillBtn = (e) => {
    setSaved((prevState) => !prevState);
  };

  let likeBtn = (e) => {
    setLiked((prevState) => !prevState);
  };

  let likedAnimate = (e) => {
    setShowClass(true);
    setLiked(true);
    setTimeout(() => {
      setShowClass(false);
    }, 800);
  };

  return (
    <div className={postCss.post}>
      {showModal ? <Modal close={modal} /> : null}
      <div className={postCss.postHeader}>
        <div className={postCss.userName}>
          <img src={kajal} alt="profilePic" />
          <span> Kajal</span>
        </div>
        <span className={postCss.options} onClick={modal}>
          <MoreHorizRoundedIcon />
        </span>
      </div>
      <div className={postCss.postBody} onDoubleClick={likedAnimate}>
        <img src={kajal} alt="post" className={postCss.postImg} />
        {showClass ? (
          <div className={postCss.likedAnimate}>
            <FavoriteIcon
              style={{ fontSize: "100px", color: "rgba(255,255,255,0.9)" }}
            />
          </div>
        ) : null}
      </div>
      <div className={postCss.postFooter}>
        <div className={postCss.postFunctions}>
          <span>
            <span className={postCss.postFunction}>
              {liked ? (
                <FavoriteIcon
                  fontSize="large"
                  onClick={likeBtn}
                  style={{
                    color: "#ED4956",
                  }}
                />
              ) : (
                <FavoriteBorderRoundedIcon fontSize="large" onClick={likeBtn} />
              )}
            </span>
            <span className={postCss.postFunction}>
              <ChatBubbleOutlineRoundedIcon fontSize="large" />
            </span>
            <span className={postCss.postFunction}>
              <TelegramIcon fontSize="large" />
            </span>
          </span>
          <span className={postCss.postFunction}>
            {saved ? (
              <BookmarkIcon fontSize="large" onClick={fillBtn} />
            ) : (
              <BookmarkBorderRoundedIcon fontSize="large" onClick={fillBtn} />
            )}
          </span>
        </div>
        <div className={postCss.post_likes}>
          liked by <strong>anand_sai_raj2324</strong> and others
        </div>
        <div className={postCss.postDisc}>
          <strong>chaibisket</strong> #30Weds21 episode 5 promo. Meghana ki
          malli kopam ochindi 👀. Wait till tomorrow morning to know why
        </div>
        <div className={postCss.viewComments}>
          View all <span>200</span> comments
        </div>
        <div className={postCss.postComments}>
          <strong>sai_nandan999</strong> @son_of__hussain_ avanu Broo , lockdown
          Kada 😢
        </div>
        <div className={postCss.viewComments}>38 mins ago</div>
      </div>
      <form className={postCss.commentForm}>
        <input
          type="text"
          name="comment"
          id="comment"
          className={postCss.comment}
          placeholder="Add a comment..."
        />
        <input type="submit" value="Post" className={postCss.postbtn} />
      </form>
    </div>
  );
};

export default Post;
