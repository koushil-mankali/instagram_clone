import cssD from "./StatusTrack.module.css";
import status from "../assets/Images/kajal.png";

import kajal from "../assets/Images/kajal.png";
import prabhas from "../assets/Images/prabhas.jpg";
import rakul from "../assets/Images/rakul.jpeg";
import ram from "../assets/Images/ram.jpg";
import salman from "../assets/Images/salman.jpg";
import sam from "../assets/Images/sam.jpg";
import thamana from "../assets/Images/thamana.jpg";

function StatusCmp() {
  return (
    <>
      <div className={cssD.StatusCmp}>
        <span className={cssD.arrows}>
          <div className={cssD.statusCircle}>
            <img src={status} alt="status" className={cssD.statusImage} />
            <div className={cssD.statusNme}>koushil</div>
          </div>
          <div className={cssD.statusCircle}>
            <img src={kajal} alt="status" className={cssD.statusImage} />
            <div className={cssD.statusNme}>Kajal_002</div>
          </div>
          <div className={cssD.statusCircle}>
            <img src={prabhas} alt="status" className={cssD.statusImage} />
            <div className={cssD.statusNme}>Prabhas</div>
          </div>
          <div className={cssD.statusCircle}>
            <img src={rakul} alt="status" className={cssD.statusImage} />
            <div className={cssD.statusNme}>Rakul_Preet</div>
          </div>
          <div className={cssD.statusCircle}>
            <img src={ram} alt="status" className={cssD.statusImage} />
            <div className={cssD.statusNme}>ram_charri</div>
          </div>
          <div className={cssD.statusCircle}>
            <img src={salman} alt="status" className={cssD.statusImage} />
            <div className={cssD.statusNme}>sallu_bhai</div>
          </div>
          <div className={cssD.statusCircle}>
            <img src={sam} alt="status" className={cssD.statusImage} />
            <div className={cssD.statusNme}>simpli_sam</div>
          </div>
          <div className={cssD.statusCircle}>
            <img src={thamana} alt="status" className={cssD.statusImage} />
            <div className={cssD.statusNme}>Thamanna</div>
          </div>
          <div className={cssD.statusCircle}>
            <img src={rakul} alt="status" className={cssD.statusImage} />
            <div className={cssD.statusNme}>Thamanna</div>
          </div>
          <div className={cssD.statusCircle}>
            <img src={status} alt="status" className={cssD.statusImage} />
            <div className={cssD.statusNme}>Thamanna</div>
          </div>
          <div className={cssD.statusCircle}>
            <img src={sam} alt="status" className={cssD.statusImage} />
            <div className={cssD.statusNme}>Thamanna</div>
          </div>
          <div className={cssD.statusCircle}>
            <img src={kajal} alt="status" className={cssD.statusImage} />
            <div className={cssD.statusNme}>Thamanna</div>
          </div>
        </span>
      </div>
    </>
  );
}

export default StatusCmp;
