import editCss from "./EditProfile.module.scss";

import koushil from "../../../../assets/koushil.jpg";

let EditProfile = () => {
  let updateDetails = (e) => {
    e.preventDefault();
  };

  return (
    <div className={editCss.editProfile}>
      <form onSubmit={updateDetails} className={editCss.form}>
        <div className={editCss.profilePic}>
          <img src={koushil} alt="profile pic" className={editCss.profileImg} />
          <div className={editCss.fileUpd}>
            <label
              htmlFor="profile"
              className={`${editCss.label} ${editCss.fileLabel}`}
            >
              Update Profile Pic
            </label>
            <input
              type="file"
              name="profile"
              id="profile"
              className={editCss.inptEleFile}
            />
          </div>
        </div>
        <div className={editCss.inpFld}>
          <label htmlFor="username" className={editCss.label}>
            Name
          </label>
          <input
            type="text"
            name="username"
            id="username"
            className={editCss.inptEle}
          />
        </div>
        <div className={editCss.inpFld}>
          <label htmlFor="email" className={editCss.label}>
            Email
          </label>
          <input
            type="email"
            name="email"
            id="email"
            className={editCss.inptEle}
          />
        </div>
        <div className={editCss.inpFld}>
          <label htmlFor="bio" className={editCss.label}>
            Bio
          </label>
          <textarea
            name="bio"
            id="bio"
            cols="30"
            rows="10"
            className={editCss.inptEle}
          ></textarea>
        </div>

        <input type="submit" value="Submit" className={editCss.sbtBtn} />
      </form>
    </div>
  );
};

export default EditProfile;
