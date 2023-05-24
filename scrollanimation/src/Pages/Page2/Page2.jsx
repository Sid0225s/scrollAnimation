import { React, useEffect } from "react";
import styles from "./Page2.module.css";
import icon1 from "../../Media/veme-blockchain-app-developed.png";
import icon2 from "../../Media/veme-app-ui-design.png";
import AOS from "aos";
import "aos/dist/aos.css";

function Page2() {
  useEffect(() => {
    AOS.init({ duration: 7000 });
  }, []);

  return (
    <div className={styles.page} id="page-1">
      <div className={styles.left}>
        <div className={styles.logocon}>
          <div className={styles.h2}>
            <h4>The next big</h4>
            <h2>Blockchain</h2>
          </div>

          <h3> Revolution</h3>
        </div>
        <div className={styles.content}>
          <h1>ABC 234</h1>
          <h5>
            we are the best web developement <br /> company in the world
          </h5>
          <h4>Coming soon </h4>
        </div>
        <div className={styles.bottom}>
          <h4>S K I P</h4>
        </div>
      </div>
      <div className={styles.right}>
        <img className={styles.icon1} src={icon1} alt="iue" />
        <img className={styles.icon2} src={icon2} alt="epw" />
      </div>
    </div>
  );
}

export default Page2;
