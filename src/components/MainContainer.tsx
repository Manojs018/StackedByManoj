import { PropsWithChildren, useEffect, useState } from "react";
import About from "./About";
import Career from "./Career";
import Contact from "./Contact";
import Cursor from "./Cursor";
import Landing from "./Landing";
import Navbar, { setSmootherInstance } from "./Navbar";
import SocialIcons from "./SocialIcons";
import WhatIDo from "./WhatIDo";
import Work from "./Work";
import TechStack from "./TechStack";
import setSplitText from "./utils/splitText";
import { ScrollSmoother } from "gsap-trial/ScrollSmoother";

const MainContainer = ({ children }: PropsWithChildren) => {
  const [isDesktopView, setIsDesktopView] = useState<boolean>(
    window.innerWidth > 1024
  );
  const [smootherReady, setSmootherReady] = useState(false);

  useEffect(() => {
    const smoother = ScrollSmoother.create({
      wrapper: "#smooth-wrapper",
      content: "#smooth-content",
      smooth: 1.7,
      speed: 1.7,
      effects: true,
      autoResize: true,
      ignoreMobileResize: true,
    });

    smoother.scrollTop(0);
    smoother.paused(true);

    setSmootherInstance(smoother);
    setSmootherReady(true);

    return () => {
      smoother.kill();
    };
  }, []);

  useEffect(() => {
    const resizeHandler = () => {
      if (smootherReady) {
        setSplitText();
      }
      setIsDesktopView(window.innerWidth > 1024);
    };
    window.addEventListener("resize", resizeHandler);
    return () => {
      window.removeEventListener("resize", resizeHandler);
    };
  }, [isDesktopView, smootherReady]);

  useEffect(() => {
    if (smootherReady) {
      setSplitText();
    }
  }, [smootherReady]);

  return (
    <div className="container-main">
      <Cursor />
      <Navbar smootherReady={smootherReady} />
      <SocialIcons />
      {isDesktopView && children}
      <div id="smooth-wrapper">
        <div id="smooth-content">
          <div className="container-main">
            {smootherReady && (
              <>
                <Landing>{!isDesktopView && children}</Landing>
                <About />
                <WhatIDo />
                <Career />
                <Work />
                {isDesktopView && <TechStack />}
                <Contact />
              </>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

export default MainContainer;
