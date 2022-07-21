import ccss from "./ChatRoom.module.css";

import Header from "../../headerComponents/Header";
import FriendList from "./FriendList";
import MessageContainer from "./MessageContainer";

let ChatRoom = () => {
  return (
    <>
      <div className={ccss.chatRoom}>
        <Header />
        <div className={ccss.innerChatRoom}>
          <div className={ccss.fdlist}>
            <FriendList />
          </div>
          <MessageContainer />
        </div>
      </div>
    </>
  );
};

export default ChatRoom;
