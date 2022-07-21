import editCss from "../editProfile/EditProfile.module.scss";

let ChangePassword = () => {
  let updateDetails = (e) => {
    e.preventDefault();
  };
  return (
    <div className={editCss.editProfile}>
      <form onSubmit={updateDetails} className={editCss.form}>
        <div className={editCss.inpFld}>
          <label htmlFor="password" className={editCss.label}>
            Password
          </label>
          <input
            type="text"
            name="password"
            id="password"
            className={editCss.inptEle}
          />
        </div>

        <input
          type="submit"
          value="Change Password"
          className={editCss.sbtBtn}
        />
      </form>
    </div>
  );
};

export default ChangePassword;
