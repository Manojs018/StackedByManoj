import { useEffect } from "react";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import HoverLinks from "./HoverLinks";
import { gsap } from "gsap";
import { ScrollSmoother } from "gsap-trial/ScrollSmoother";
import "./styles/Navbar.css";

gsap.registerPlugin(ScrollSmoother, ScrollTrigger);
export let smoother: ScrollSmoother;

export function setSmootherInstance(instance: ScrollSmoother) {
  smoother = instance;
}

const Navbar = ({ smootherReady }: { smootherReady: boolean }) => {
  useEffect(() => {
    if (!smootherReady || !smoother) return;

    const clickHandlers: Array<{ element: HTMLAnchorElement; handler: (e: Event) => void }> = [];
    const links = document.querySelectorAll(".header ul a");
    links.forEach((elem) => {
      const element = elem as HTMLAnchorElement;
      const clickHandler = (e: Event) => {
        if (window.innerWidth > 1024) {
          e.preventDefault();
          const section = element.getAttribute("data-href");
          if (section) {
            smoother.scrollTo(section, true, "top top");
          }
        }
      };
      element.addEventListener("click", clickHandler);
      clickHandlers.push({ element, handler: clickHandler });
    });

    const resizeHandler = () => {
      ScrollSmoother.refresh(true);
    };
    window.addEventListener("resize", resizeHandler);

    return () => {
      clickHandlers.forEach(({ element, handler }) => {
        element.removeEventListener("click", handler);
      });
      window.removeEventListener("resize", resizeHandler);
    };
  }, [smootherReady]);

  return (
    <>
      <div className="header">
        <a href="/#" className="navbar-title" data-cursor="disable">
          Logo
        </a>
        <a
          href="mailto:manojmahi.1808@gmail.com"
          className="navbar-connect"
          data-cursor="disable"
        >
          manojmahi.1808@gmail.com
        </a>
        <ul>
          <li>
            <a data-href="#about" href="#about">
              <HoverLinks text="ABOUT" />
            </a>
          </li>
          <li>
            <a data-href="#work" href="#work">
              <HoverLinks text="WORK" />
            </a>
          </li>
          <li>
            <a data-href="#contact" href="#contact">
              <HoverLinks text="CONTACT" />
            </a>
          </li>
        </ul>
      </div>

      <div className="landing-circle1"></div>
      <div className="landing-circle2"></div>
      <div className="nav-fade"></div>
    </>
  );
};

export default Navbar;
