import FriendBox from './friendBox/FriendBox';

import fcss from './FriendList.module.css';

import RateReviewIcon from '@material-ui/icons/RateReview';

let FriendList = () => {
  return (
    <>
      <div className={fcss.friendList}>
        <div className={fcss.headerBox}>
          <span></span>
          <span>Name</span>
          <span className={fcss.mssgicon}>{<RateReviewIcon />}</span>
        </div>
        <div className={fcss.friend_list_box}>
            {/* Map  */}
          <FriendBox />
          <FriendBox />
          <FriendBox />
          <FriendBox />
          <FriendBox />
          <FriendBox />
          <FriendBox />
          <FriendBox />
          <FriendBox />
          <FriendBox />
          <FriendBox />
          <FriendBox />
          <FriendBox />
          <FriendBox />
          <FriendBox />
          <FriendBox />
          <FriendBox />
          <FriendBox />
          <FriendBox />
          <FriendBox />
          <FriendBox />
          <FriendBox />
          <FriendBox />
          <FriendBox />
        </div>
      </div>
    </>
  );
};

export default FriendList;
