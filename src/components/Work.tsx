import "./styles/Work.css";
import WorkImage from "./WorkImage";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { useGSAP } from "@gsap/react";
import { MdArrowOutward } from "react-icons/md";

gsap.registerPlugin(useGSAP);

const projects = [
  {
    name: "EStore",
    category: "Full Stack Hardware eStore",
    stack: "PHP, MySQL, TiDB Cloud, Vanilla CSS, JavaScript, XAMPP",
    description: "Full-stack hardware eStore with user auth (login/register), wishlist, address management, quantity selection, order placement, and order tracking. Separate admin panel for managing orders and full CRUD on product listings. Connected to TiDB Cloud (MySQL-compatible) with SSL/TLS enforcement, production-ready routing for Vercel serverless deployment.",
    github: "https://github.com/Manojs018/eStore",
    demo: "",
  },
  {
    name: "Spendify",
    category: "Personal Finance Web App",
    stack: "Node.js, Express, MongoDB, Passport.js, Chart.js, JWT, OAuth 2.0, Vercel",
    description: "Personal finance web app to log expenses, manage multiple cards, and track spending. Features peer-to-peer transfers, recurring transactions, CSV export, interactive Chart.js visualizations for income vs expense. Secured with CSRF protection, XSS sanitization, token rotation. Deployed on Vercel with PWA support and Sentry error tracking.",
    github: "https://github.com/Manojs018/Spendify",
    demo: "https://exptrack-black.vercel.app/",
  },
  {
    name: "Gen QR",
    category: "Privacy-First QR Generator",
    stack: "HTML, CSS, Vanilla JS, Web APIs, QRCode.js, Accessibility (WCAG), Git",
    description: "Zero-build, privacy-first QR generator with real-time previews, multi-format export (PNG/SVG), offline fallbacks, and advanced customization (size, colors, error levels, logo embedding).",
    github: "https://github.com/Manojs018/qrgen",
    demo: "https://qrgen-kappa.vercel.app/",
  },
  {
    name: "Mini-Keep",
    category: "Full Stack Note-Taking App",
    stack: "React, Node.js, Express.js, MongoDB, REST APIs",
    description: "Full-stack note-taking app with create/edit/organize notes, secure authentication, real-time updates, and persistent MongoDB storage.",
    github: "https://github.com/Manojs018/mini-keep",
    demo: "https://mini-keep.vercel.app/",
  }
];

const Work = () => {
  useGSAP(() => {
    const getTranslateX = () => {
      const box = document.getElementsByClassName("work-box");
      if (box.length === 0) return 0;
      const rectLeft = document.querySelector(".work-container")?.getBoundingClientRect().left ?? 0;
      const boxWidth = (box[0] as HTMLElement).offsetWidth;
      const parentWidth = (box[0].parentElement as HTMLElement).offsetWidth;
      const padding = parseInt(window.getComputedStyle(box[0]).padding) / 2 || 0;
      return boxWidth * box.length - (rectLeft + parentWidth) + padding;
    };

    let timeline = gsap.timeline({
      scrollTrigger: {
        trigger: ".work-section",
        start: "top top",
        end: () => `+=${getTranslateX()}`,
        scrub: true,
        pin: true,
        id: "work",
        invalidateOnRefresh: true,
      },
    });

    timeline.to(".work-flex", {
      x: () => -getTranslateX(),
      ease: "none",
    });

    // Clean up (optional, good practice)
    return () => {
      timeline.kill();
      ScrollTrigger.getById("work")?.kill();
    };
  }, []);

  return (
    <div className="work-section" id="work">
      <div className="work-container section-container">
        <h2>
          My <span>Work</span>
        </h2>
        <div className="work-flex">
          {projects.map((project, index) => (
            <div className="work-box" key={index}>
              <div className="work-info">
                <div className="work-title">
                  <h3>0{index + 1}</h3>

                  <div>
                    <h4>{project.name}</h4>
                    <p>{project.category}</p>
                  </div>
                </div>
                
                <p className="work-description">{project.description}</p>
                
                <div className="work-tech">
                  <h4>Tools & Technologies</h4>
                  <p>{project.stack}</p>
                </div>
                
                <div className="work-links">
                  <a href={project.github} target="_blank" rel="noopener noreferrer" className="project-link">
                    GitHub <MdArrowOutward />
                  </a>
                  {project.demo && (
                    <a href={project.demo} target="_blank" rel="noopener noreferrer" className="project-link">
                      Live Demo <MdArrowOutward />
                    </a>
                  )}
                </div>
              </div>
              <WorkImage image="/images/placeholder.webp" alt={project.name} link={project.demo || project.github} />
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Work;
