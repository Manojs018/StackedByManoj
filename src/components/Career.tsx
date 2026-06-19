import "./styles/Career.css";

const Career = () => {
  return (
    <div className="career-section section-container">
      <div className="career-container">
        <h2>
          Education <span>&</span>
          <br /> Qualifications
        </h2>
        <div className="career-info">
          <div className="career-timeline">
            <div className="career-dot"></div>
          </div>
          <div className="career-info-box">
            <div className="career-info-in">
              <div className="career-role">
                <h4>B.E, Electrical and Electronics</h4>
                <h5>Dayananda Sagar College of Engineering, Bengaluru, India</h5>
              </div>
              <h3>2023 - 2027</h3>
            </div>
            <p>
              Pursuing Bachelor of Engineering. Studying core engineering subjects while building strong technical skills in software engineering, modern web technologies, and systems design.
            </p>
          </div>
          <div className="career-info-box">
            <div className="career-info-in">
              <div className="career-role">
                <h4>Pre-University, Science</h4>
                <h5>Govt Higher Secondary School, Thally, India</h5>
              </div>
              <h3>2021 - 2023</h3>
            </div>
            <p>
              Completed Pre-University education focusing on Science (Physics, Chemistry, Mathematics, and Computer Science). Developed foundational skills in programming and problem solving.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Career;
