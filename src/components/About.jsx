function About() {
  return (
    <section id="about" className="about-section">
      <div className="about-container">

        <div className="about-heading">
          <span>GET TO KNOW ME</span>
          <h2>About Me</h2>
          <p>
            A little about my journey, skills and passion for web development.
          </p>
        </div>

        <div className="about-content">

          <div className="about-profile">
            <div className="about-avatar">
                <img src="/images/fija-profile.jpg" alt="Fija Profile" />
            </div>
          </div>

          <div className="about-details">
            <h3>Hi, I'm Fija Pathan 👋</h3>

            <p>
              I'm a Python Full Stack Developer passionate about building
              modern, responsive and user-friendly web applications.
            </p>

            <p>
              I enjoy turning ideas into functional websites and applications
              using modern frontend and backend technologies.
            </p>

            <div className="about-highlights">

              <div className="highlight-item">
                <span className="highlight-icon">🎓</span>
                <div>
                  <small>Education</small>
                  <strong>Computer Science Graduate</strong>
                </div>
              </div>

              <div className="highlight-item">
                <span className="highlight-icon">💻</span>
                <div>
                  <small>Frontend</small>
                  <strong>HTML · CSS · JavaScript · React . Bootstrap</strong>
                </div>
              </div>

              <div className="highlight-item">
                <span className="highlight-icon">🐍</span>
                <div>
                  <small>Backend</small>
                  <strong>Python · Django</strong>
                </div>
              </div>
            </div>

            <div className="about-links">
              <a href="https://github.com/Fija-Khan" className="about-btn">
                GitHub
              </a>

              <a href="https://www.linkedin.com/in/fija-pathan-482a05221/" className="about-btn about-btn-outline">
                LinkedIn
              </a>
            </div>

          </div>
        </div>
      </div>
    </section>
  );
}

export default About;