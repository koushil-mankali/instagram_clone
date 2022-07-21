import mcss from "./MessageContainer.module.css";

import FirstContainer from "./messageContainerSwitch/FirstContainer";
import SecondContainer from "./messageContainerSwitch/SecondContainer";

let MessageContainer = () => {
  let content;
  if (false) {
    content = (
      <div className={mcss.messageContainer1}>
        <div className={mcss.firstC}>
          <FirstContainer />
        </div>
      </div>
    );
  } else {
    content = (
      <div className={mcss.messageContainer2}>
        <div className={mcss.secondC}>
          <SecondContainer />
        </div>
      </div>
    );
  }
  return (
    <>
      {content}
    </>
  );
};

export default MessageContainer;
