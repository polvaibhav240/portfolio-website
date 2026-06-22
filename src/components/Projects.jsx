function Projects() {
  const projects = [
    {
      title: "AI Powered ATS Resume Coach",
      tech: "Python, Flask, React, NLP",
      description: "Analyzes resumes against job descriptions using semantic matching and AI."
    },
    {
      title: "Inventory Management System",
      tech: "React, Node.js, MongoDB",
      description: "Inventory tracking and CRUD management dashboard."
    },
    {
      title: "Solar Power Prediction",
      tech: "Python, Streamlit, Scikit-learn",
      description: "Weather-based solar power prediction dashboard."
    }
  ];

  return (
    <section id="projects" className="section">
      <div className="section-header">
        <div className="section-title-pill">Projects</div>
        <h2>Featured Work</h2>
      </div>

      <div className="section-grid">
        {projects.map((project, index) => (
          <article key={index} className="card">
            <h3>{project.title}</h3>
            <p><strong>Tech:</strong> {project.tech}</p>
            <p>{project.description}</p>
          </article>
        ))}
      </div>
    </section>
  );
}

export default Projects;
