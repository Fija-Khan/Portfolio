import "./Skills.css";

function Skills() {
  const skillGroups = [
    {
      category: "Frontend",
      description: "Building responsive and interactive user interfaces",
      skills: ["HTML", "CSS", "JavaScript", "Bootstrap", "React.js"],
    },
    {
      category: "Backend",
      description: "Developing secure and scalable web applications",
      skills: ["Python", "Django"],
    },
    {
      category: "Database",
      description: "Managing and working with application data",
      skills: ["SQLite", "PostgreSQL"],
    },
    {
      category: "Tools",
      description: "Development, testing and version control",
      skills: ["Git", "GitHub", "Postman"],
    },
  ];

  return (
    <section className="skills-section" id="skills">
      <div className="skills-container">

        <div className="skills-heading">
          <span>My Expertise</span>
          <h2>Skills & Technologies</h2>
          <p>
            A collection of technologies and tools I use to build
            modern and responsive web applications.
          </p>
        </div>

        <div className="skills-list">
          {skillGroups.map((group, index) => (
            <div className="skills-row" key={index}>

              <div className="skills-category">
                <h3>{group.category}</h3>
                <p>{group.description}</p>
              </div>

              <div className="skills-items">
                {group.skills.map((skill, skillIndex) => (
                  <span className="skill-item" key={skillIndex}>
                    {skill}
                  </span>
                ))}
              </div>

            </div>
          ))}
        </div>

      </div>
    </section>
  );
}

export default Skills;