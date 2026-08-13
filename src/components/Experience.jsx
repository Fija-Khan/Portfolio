import "./Experience.css";

function Experience() {
  const experiences = [
    {
      period: "2024 – 2026",
      role: "Email Marketing Executive",
      company: "Professional Experience",
      description:
        "Worked on email marketing campaigns, lead generation, prospect research, and outreach using various marketing and sales tools.",
      skills: ["Email Marketing", "Lead Generation", "Apollo", "LinkedIn Sales Navigator"],
    },
    {
      period: "2026",
      role: "Python Full Stack Developer",
      company: "Learning & Development",
      description:
        "Developing full-stack web applications using Python, Django, React.js, JavaScript, Bootstrap, and databases.",
      skills: ["Python", "Django", "React.js", "JavaScript", "Git"],
    },
  ];

  return (
    <section className="experience-section" id="experience">
      <div className="experience-container">

        <div className="experience-heading">
          <span>My Journey</span>
          <h2>Experience</h2>
          <p>
            My professional journey and transition into full-stack
            web development.
          </p>
        </div>

        <div className="experience-timeline">
          {experiences.map((experience, index) => (
            <div className="experience-item" key={index}>

              <div className="experience-marker">
                <span></span>
              </div>

              <div className="experience-content">

                <div className="experience-top">
                  <span className="experience-period">
                    {experience.period}
                  </span>
                  <span className="experience-number">
                    0{index + 1}
                  </span>
                </div>

                <h3>{experience.role}</h3>

                <h4>{experience.company}</h4>

                <p>{experience.description}</p>

                <div className="experience-skills">
                  {experience.skills.map((skill, skillIndex) => (
                    <span key={skillIndex}>
                      {skill}
                    </span>
                  ))}
                </div>

              </div>

            </div>
          ))}
        </div>

      </div>
    </section>
  );
}

export default Experience;