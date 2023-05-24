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
    <div className={styles.page} id="page-0">
      <div className={styles.left}>
        <div className={styles.logocon}>
          <h2 data-aos="zoom-in">25M+ Downloads</h2>
          <h3> on appstore and google playstore</h3>
        </div>
        <div className={styles.content}>
          <img data-aos="fade-up" src={banner} alt="bh" />

          <h1 data-aos="flip-up">ABC 123</h1>
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
        <img data-aos="slide-up" className={styles.icon1} src={icon1} alt="" />
        <img
          data-aos="slide-down"
          className={styles.icon2}
          src={icon2}
          alt=""
        />
      </div>
    </div>
  );
}

export default Page1;
