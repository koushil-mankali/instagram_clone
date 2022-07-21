import PhotoIcon from "@material-ui/icons/Photo";

import addPostCss from "./addPost.module.scss";

const AddPost = () => {
  let postAdd = (e) => {
    e.preventDefault();
  };
  return (
    <div className={addPostCss.addpost}>
      <form onSubmit={postAdd} className={addPostCss.frmDiv}>
        <span className={addPostCss.span1}>
          <input
            type="text"
            name="postDesc"
            id="postDesc"
            className={addPostCss.postInpt}
            placeholder="write your post..."
          />
        </span>
        <div>
          <div className={addPostCss.span2}>
            <label htmlFor="fileupload" className={addPostCss.updImg}>
              <PhotoIcon fontSize="large" />
            </label>
            <input
              type="file"
              name="fileupload"
              id="fileupload"
              className={addPostCss.fileUpd}
            />
          </div>
          <input type="submit" value="Post" className={addPostCss.postBttn} />
        </div>
      </form>
    </div>
  );
};

export default AddPost;
