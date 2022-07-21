import ReactDOM from "react-dom";
import "./Notification.scss";

let Notification = (props) => {
  let { status, message } = props;

  return ReactDOM.createPortal(
    <div className="notifdiv">
      <div className={`${status}`}>{message}</div>
    </div>,
    document.getElementById("notification")
  );
};

export default Notification;
