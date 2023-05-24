import React from "react";
import styles from "./Page6.module.css";
import icon1 from "../../Media/erp-app-development-service.png";
import "aos/dist/aos.css";
import { useEffect } from "react";
import AOS from "aos";

function Page6() {
  useEffect(() => {
    AOS.init({ duration: 7000 });
  }, []);
  return (
    <div className={styles.page} id="page-5">
      <div className={styles.left}>
        <div className={styles.content}>
          <h1>ABC 678</h1>
          <h5>
            Best since 2017 <br /> We are offer wide range of <br /> web
            development and app development
          </h5>
          <h4>view case study →</h4>
        </div>
        <div className={styles.bottom}>
          <h4>S K I P</h4>
        </div>
      </div>
      <div className={styles.right}>
        <img data-aos="zoom-in" className={styles.icon1} src={icon1} alt="" />
      </div>
    </div>
  );
}

export default Page6;
