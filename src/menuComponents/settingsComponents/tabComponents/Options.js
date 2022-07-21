import EditProfile from "./editProfile/EditProfile";
import ChangePassword from "./changePassword/ChangePassword";

import OptionCss from "./OptionCss.module.scss";

let Options = (props) => {
  let editTab = props.tab.edit ? true : false;
  let passTab = props.tab.password ? true : false;

  let contentDiv;

  if (editTab) {
    contentDiv = <EditProfile />;
  } else if (passTab) {
    contentDiv = <ChangePassword />;
  }

  return (
    <>
      <div className={OptionCss.options}>{contentDiv}</div>
    </>
  );
};

export default Options;
