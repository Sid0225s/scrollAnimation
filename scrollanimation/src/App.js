import Page1 from "./Pages/Page1/Page1";
import Page2 from "./Pages/Page2/Page2";
import Page3 from "./Pages/Page3/Page3";
import Page4 from "./Pages/Page4/Page4";
import Page5 from "./Pages/Page5/Page5";
import Page6 from "./Pages/Page6/Page6";
import Page7 from "./Pages/Page7/Page7";
import styles from "./App.module.css";
import SvgComponent from "./SvgComponent";
import { useEffect, useRef, useState } from "react";
import createScrollSnap from "scroll-snap";

function App() {
  const [page, setPage] = useState(0);
  const colorsArray = [
    "#7f19df",
    "#6a21f2",
    "#0e0b44",
    "#131d31",
    "#1243a6",
    "#06168c",
    "#07694c",
  ];
  const positionArray = [10, 145, 290, 425, 550, 690, 820];
  const scrollRef = useRef(null);
  useEffect(() => {
    if (scrollRef.current) {
      const { bind } = createScrollSnap(
        scrollRef.current,
        {
          snapDestinationX: "0%",
          snapDestinationY: "100%",
          timeout: 100,
          duration: 300,
          threshold: 0.2,
          snapStop: false,
        },
        () => {
          let viewPortHeight = window.innerHeight;
          let currentPosition = document.querySelector("#app").scrollTop;
          let p = currentPosition / viewPortHeight;
          p = Math.round(p);
          setPage(p);
        }
      );
      bind();
    }
  }, [scrollRef]);

  return (
    <div className={styles.app} id="app" ref={scrollRef}>
      <Page1 />
      <Page2 />
      <Page3 />
      <Page4 />
      <Page5 />
      <Page6 />
      <Page7 />
      <div className={styles.svg}>
        <SvgComponent
          color={colorsArray[page]}
          position={positionArray[page]}
        />
      </div>
    </div>
  );
}

export default App;
