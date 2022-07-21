import Header from "../headerComponents/Header";

import { Link } from "react-router-dom";

import errCss from "./Error.module.scss";

let Error = () => {
  return (
    <>
      <Header />
      <div className={errCss.error}>
        <div className={errCss.srry}>Sorry, this page isn't available.</div>
        <div className={errCss.redirMess}>
          The link you followed may be broken, or the page may have been
          removed.
          <Link to="/" className={errCss.redir}>
            Return to HomePage
          </Link>
        </div>
      </div>
    </>
  );
};

export default Error;
