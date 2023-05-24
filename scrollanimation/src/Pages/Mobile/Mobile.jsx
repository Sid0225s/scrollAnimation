import Page1 from "../Page1/Page1";
import Page2 from "../Page2/Page2";
import Page3 from "../Page3/Page3";
import Page4 from "../Page4/Page4";
import Page5 from "../Page5/Page5";
import Page6 from "../Page6/Page6";
import Page7 from "../Page7/Page7";
import React from "react";
import styles from "./Mobile.module.css";
import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";

const responsive = {
  mobile: {
    breakpoint: { max: 800, min: 0 },
    items: 1,
  },
};

function Mobile() {
  return (
    <div className={styles.mobile}>
      <Carousel
        swipeable={true}
        showDots={true}
        arrows={false}
        keyBoardControl={true}
        responsive={responsive}
        draggable={true}
        transitionDuration={500}
        autoPlay={true}
      >
        <div>
          <Page1 />
        </div>
        <div>
          <Page2 />
        </div>
        <div>
          <Page3 />
        </div>
        <div>
          <Page4 />
        </div>
        <div>
          <Page5 />
        </div>
        <div>
          <Page6 />
        </div>
        <div>
          <Page7 />
        </div>
      </Carousel>
    </div>
  );
}

export default Mobile;
