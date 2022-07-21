import { useState } from "react";

import Header from "../../headerComponents/Header";
import Tabs from "./tabComponents/Tabs";
import Options from "./tabComponents/Options";

import SettingsCss from "./SettingsComponent.module.scss";

let SettingsComponent = () => {
  let [tab, setTab] = useState({ edit: true });

  let changeActiveTab = (e) => {
    setTab({ [e.target.id]: true });
  };

  return (
    <div className={SettingsCss.outerBox}>
      <Header />
      <div className={SettingsCss.settings}>
        <div className={SettingsCss.tabs}>
          <Tabs activeTab={changeActiveTab} tab={tab} />
        </div>
        <div className={SettingsCss.box}>
          <Options tab={tab} />
        </div>
      </div>
    </div>
  );
};

export default SettingsComponent;
