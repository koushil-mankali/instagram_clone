import { Link } from "react-router-dom";
import TabCss from "./TabCss.module.scss";

let Tabs = (props) => {
  let editActive = props.tab?.edit ? `${TabCss.active}` : null;
  let passActive = props.tab?.password ? `${TabCss.active}` : null;

  return (
    <div className={TabCss.outer}>
      <Link
        to="?page=edit-profile"
        id="edit"
        className={`${TabCss.tabs}  ${editActive}`}
        onClick={props.activeTab}
      >
        <div id="edit" className={TabCss.name}>
          Edit Profile
        </div>
      </Link>
      <Link
        to="?page=change-password"
        id="password"
        className={`${TabCss.tabs} ${passActive}`}
        onClick={props.activeTab}
      >
        <div className={TabCss.name} id="password">
          Change Password
        </div>
      </Link>
    </div>
  );
};

export default Tabs;
