import React from "react";
import styles from "./Page3.module.css";
import icon1 from "../../Media/nasa-fitness-tracking-mobile-app.png";
import icon2 from "../../Media/measure-total-body-weight-through-fitness-app.png";
import AOS from "aos";
import "aos/dist/aos.css";
import { useEffect } from "react";

function Page3() {
  useEffect(() => {
    AOS.init({ duration: 7000 });
  }, []);
  return (
    <div className={styles.page}>
      <div className={styles.left}>
        <div className={styles.content}>
          <h1>ABC 345</h1>
          <h5>
            we are the best
            <br /> web developement company
            <br /> in the world
          </h5>
          <h4>Coming soon </h4>
        </div>
        <div className={styles.bottom}>
          <h4>S K I P</h4>
        </div>
      </div>
      <div className={styles.right}>
        <img
          data-aos="slide-up"
          className={styles.icon1}
          src={icon1}
          alt="iue"
        />
        <img
          data-aos="slide-down"
          className={styles.icon2}
          src={icon2}
          alt="epw"
        />
      </div>
    </div>
  );
}

export default Page3;
