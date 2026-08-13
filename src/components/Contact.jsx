import "./Contact.css";

function Contact() {
  return (
    <section className="contact-section" id="contact">
      <div className="contact-container">

        <div className="contact-heading">
          <span>Get In Touch</span>
          <h2>Let's Work Together</h2>
          <p>
            Have a project, opportunity, or just want to connect?
            Feel free to reach out. I'd love to hear from you.
          </p>
        </div>

        <div className="contact-content">

          <div className="contact-info">

            <div className="contact-item">
              <div className="contact-icon">@</div>

              <div>
                <span>Email</span>
                <a href="mailto:fijapathan@example.com">
                  fijapathan@example.com
                </a>
              </div>
            </div>

            <div className="contact-item">
              <div className="contact-icon">in</div>

              <div>
                <span>LinkedIn</span>
                <a
                  href="https://www.linkedin.com/in/fija-pathan-482a05221/"
                  target="_blank"
                  rel="noreferrer"
                >
                  LinkedIn Profile
                </a>
              </div>
            </div>

            <div className="contact-item">
              <div className="contact-icon">GH</div>

              <div>
                <span>GitHub</span>
                <a
                  href="https://github.com/Fija-Khan"
                  target="_blank"
                  rel="noreferrer"
                >
                  github.com/Fija-Khan
                </a>
              </div>
            </div>

          </div>

          <form className="contact-form">

            <div className="form-group">
              <label htmlFor="name">Name</label>
              <input
                type="text"
                id="name"
                placeholder="Your name"
              />
            </div>

            <div className="form-group">
              <label htmlFor="email">Email</label>
              <input
                type="email"
                id="email"
                placeholder="Your email"
              />
            </div>

            <div className="form-group">
              <label htmlFor="message">Message</label>
              <textarea
                id="message"
                rows="5"
                placeholder="Your message"
              ></textarea>
            </div>

            <button type="submit" className="contact-btn">
              Send Message →
            </button>

          </form>

        </div>

      </div>
    </section>
  );
}

export default Contact;