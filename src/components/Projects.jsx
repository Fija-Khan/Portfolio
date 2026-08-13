import "./Projects.css";

function Projects() {
  const projects = [
    {
      title: "CRM Management System",
      description:
        "A full-stack CRM application for managing contacts, leads, deals, tasks, interactions, and business activities through a responsive dashboard.",
      image: "/images/crm-project.png",
      technologies: [
        "Python",
        "Django",
        "SQLite",
        "HTML",
        "CSS",
        "Bootstrap",
      ],
      github: "https://github.com/Fija-Khan/django-crm-",
      live: "YOUR_LIVE_DEMO_LINK",
    },

    {
      title: "Product Inventory System",
      description:
        "A product and order management system with inventory tracking, stock management, search, filters, pagination, and order history.",
      image: "/images/inventory-project.png",
      technologies: [
        "Python",
        "Django",
        "React.js",
        "JavaScript",
        "PostgreSQL",
      ],
      github: "https://github.com/Fija-Khan/Product-Inventory-System",
      live: "YOUR_LIVE_DEMO_LINK",
    },

 
  ];

  return (
    <section className="projects-section" id="projects">
      <div className="projects-container">

        <div className="projects-heading">
          <span>My Work</span>

          <h2>Featured Projects</h2>

          <p>
            A selection of projects I've built to apply my skills in
            frontend and backend development.
          </p>
        </div>

        <div className="projects-grid">

          {projects.map((project, index) => (
            <article className="project-card" key={index}>

              <div className="project-image">
                <img
                  src={project.image}
                  alt={`${project.title} project screenshot`}
                />

                <span className="project-number">
                  0{index + 1}
                </span>
              </div>

              <div className="project-content">

                <h3>{project.title}</h3>

                <p>{project.description}</p>

                <div className="project-technologies">
                  {project.technologies.map((technology, techIndex) => (
                    <span key={techIndex}>
                      {technology}
                    </span>
                  ))}
                </div>

                <div className="project-links">

                  <a
                    href={project.github}
                    target="_blank"
                    rel="noreferrer"
                  >
                    GitHub
                    <span>↗</span>
                  </a>

                  <a
                    href={project.live}
                    target="_blank"
                    rel="noreferrer"
                  >
                    Live Demo
                    <span>↗</span>
                  </a>

                </div>

              </div>

            </article>
          ))}

        </div>

      </div>
    </section>
  );
}

export default Projects;