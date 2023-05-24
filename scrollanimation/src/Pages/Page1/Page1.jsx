import { React, useEffect } from "react";
import styles from "./Page1.module.css";
import banner from "../../Media/world-communication-awards-for-best-digital-experience.png";
import icon1 from "../../Media/nexgtv-entertainment-mobile-app-development.png";
import icon2 from "../../Media/nexgtv-mobile-app-ui-design.png";
import AOS from "aos";
import "aos/dist/aos.css";

function Page1() {
  useEffect(() => {
    AOS.init({ duration: 7000 });
  }, []);
  return (
    <div className={styles.page}>
      <div className={styles.left}>
        <div className={styles.content}>
          <img src={banner} alt="bh" />
          <h1>ABC 123</h1>
          <h5>
            we are the best web developement <br />
            company in the world
          </h5>
          <h4>view case study →</h4>
        </div>
        <div className={styles.bottom}>
          <h4>S K I P</h4>
        </div>
      </div>
      <div className={styles.right}>
        <img
          className={styles.icon1}
          data-aos="slide-down"
          src={icon1}
          alt=""
        />
        <img className={styles.icon2} data-aos="slide-up" src={icon2} alt="" />
      </div>
    </div>
  );
}

export default Page1;
