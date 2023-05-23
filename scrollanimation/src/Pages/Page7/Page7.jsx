import React from "react";
import styles from "./Page7.module.css";
import banner from "../../Media/world-communication-awards-for-best-digital-experience.png";
import icon1 from "../../Media/nexgtv-entertainment-mobile-app-development.png";
import icon2 from "../../Media/nexgtv-mobile-app-ui-design.png";

function Page1() {
  return (
    <div className={styles.page}>
      <div className={styles.left}>
        <div className={styles.content}>
          <img src={banner} alt="bh" />
          <h1>ABC 123</h1>
          <h5>we are the best web developement company in the world</h5>
          <h4>view case study →</h4>
        </div>
        <div className={styles.bottom}>
          <h4>S K I P</h4>
        </div>
      </div>
      <div className={styles.right}>
        <img src={icon1} alt="" />
        <img src={icon2} alt="" />
      </div>
    </div>
  );
}

export default Page1;
