import { createPortal } from "react-dom";

import modalCss from "./modalCss.module.scss";

let Modal = (props) => {
  return createPortal(
    <div className={modalCss.modal}>
      <div className={modalCss.modalBox}>
        <span className={modalCss.options}>Unfollow</span>
        <span className={modalCss.options}>Share to</span>
        <span className={modalCss.options}>Copy Link</span>
        <span className={modalCss.options} onClick={props.close}>
          Cancel
        </span>
      </div>
    </div>,
    document.getElementById("modal")
  );
};

export default Modal;
