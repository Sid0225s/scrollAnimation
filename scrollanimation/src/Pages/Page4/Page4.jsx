import React from "react";
import styles from "./Page4.module.css";
import icon1 from "../../Media/domi-img1.png";
import icon2 from "../../Media/ux-strategy-for-mobile-app-devlopment.png";
import pizzabox from "../../Media/pizza_box.png";
import icon4 from "../../Media/dominos-bread.png";
import icon5 from "../../Media/dominos-bread1.png";
import AOS from "aos";
import "aos/dist/aos.css";
import { useEffect } from "react";

function Page4() {
  useEffect(() => {
    AOS.init({ duration: 7000 });
  }, []);
  return (
    <div className={styles.page}>
      <div className={styles.left}>
        <div className={styles.content}>
          <h1>ABC 456</h1>
          <h5>
            we are the best
            <br /> web developement company
            <br /> in the world
          </h5>
          <h4>view case study → </h4>
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
        <img
          data-aos="slide-right"
          src={pizzabox}
          alt="njsi"
          className={styles.icon3}
        />
        <img
          src={icon4}
          data-aos="slide-down"
          alt="icon4"
          className={styles.icon4}
        />
        <img
          src={icon5}
          data-aos="slide-left"
          className={styles.icon5}
          alt=""
        />
      </div>
    </div>
  );
}

export default Page4;
