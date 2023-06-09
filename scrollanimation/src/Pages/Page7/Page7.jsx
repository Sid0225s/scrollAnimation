import React from "react";
import styles from "./Page7.module.css";
import banner from "../../Media/mobile-app-of-the-year-by-entrepreneur.png";
import icon1 from "../../Media/melltoo-img2.png";
import icon2 from "../../Media/melltoo-img1.png";
import "aos/dist/aos.css";
import { useEffect } from "react";
import AOS from "aos";

function Page7() {
  useEffect(() => {
    AOS.init({ duration: 6000 });
  }, []);
  return (
    <div className={styles.page}>
      <div className={styles.left}>
        <div className={styles.logocon}>
          <div className={styles.h2}>
            <h4>Biggest classifieds</h4>
            <h2>East Asia</h2>
          </div>
          <h3>Countries</h3>
        </div>
        <div className={styles.content}>
          <img src={banner} alt="bh" />
          <h1>ABC 23478</h1>
          <h5>
            we are the best
            <br /> web developement company <br /> in the world
          </h5>
          <h4>Coming soon </h4>
        </div>
        <div className={styles.bottom}>
          <h4>S K I P</h4>
        </div>
      </div>
      <div className={styles.right}>
        <img className={styles.icon1} src={icon1} alt="3" />
        <img className={styles.icon2} src={icon2} alt="df" />
      </div>
    </div>
  );
}

export default Page7;
