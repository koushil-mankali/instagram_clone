import suggCss from "./Suggestion.module.scss";

import kajal from "../../assets/Images/kajal.png";

let Suggestion = () => {
  return (
    <div className={suggCss.suggestions}>
      <div className={suggCss.own_profile}>
        <span className={suggCss.own_profile_box}>
          <img
            src={kajal}
            alt="prodile-pic"
            className={suggCss.own_profile_pic}
          />
          <div className={suggCss.account_det}>
            <span className={suggCss.name}>Name</span>
            <span className={suggCss.tag}>You'r Account</span>
          </div>
        </span>
        <div className={suggCss.btn}>Switch</div>
      </div>
      <div className={suggCss.suggestion_inner_title}>
        <span className={suggCss.ttl}>Suggestions For You</span>
        <span className={suggCss.sell_all}>Sell All</span>
      </div>

      {/* Repeat this  */}

      <div className={suggCss.own_profile}>
        <span className={suggCss.own_profile_box}>
          <img src={kajal} alt="prodile-pic" className={suggCss.profile_pic} />
          <div className={suggCss.account_det}>
            <span className={suggCss.name}>Name</span>
            <span className={suggCss.tag}>Suggested for you</span>
          </div>
        </span>
        <div className={suggCss.btn}>Follow</div>
      </div>

      <div className={suggCss.own_profile}>
        <span className={suggCss.own_profile_box}>
          <img src={kajal} alt="prodile-pic" className={suggCss.profile_pic} />
          <div className={suggCss.account_det}>
            <span className={suggCss.name}>Name</span>
            <span className={suggCss.tag}>Suggested for you</span>
          </div>
        </span>
        <div className={suggCss.btn}>Follow</div>
      </div>
      <div className={suggCss.footer}>
        Developed with ❤️ in India by &nbsp;
        <a href="https://www.koushilmankali.com/" className={suggCss.cred}>
          Koushil Mankali
        </a>
      </div>
    </div>
  );
};

export default Suggestion;
