function Hero() {
  return (
    <section id="home" className="hero-section">
      <div className="hero-container">

        <div className="hero-content">

          <p className="hero-greeting">
            Hello, I'm
          </p>

          <h1 className="hero-title">
            Fija <span>Pathan</span>
          </h1>

          <h2 className="hero-role">
            Python Full Stack Developer
          </h2>

          <p className="hero-description">
            I build modern, responsive and user-friendly web applications
            using React, Python and Django.
          </p>

          <div className="hero-buttons">
            <a href="#projects" className="btn btn-primary">
              View My Projects
            </a>

            <a href="/resume.pdf" className="btn btn-outline">
              Download Resume
            </a>
          </div>

        </div>

        <div className="hero-image">
          <div className="hero-image-wrapper">
            <div className="hero-image-placeholder">
              <img src="/images/fija-profile.jpg" alt="Fija Pathan" />
            </div>
          </div>
        </div>

      </div>
    </section>
  )
}

export default Hero