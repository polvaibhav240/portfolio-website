function Skills() {
  const skills = {
    Languages: ["Python", "Java", "C", "SQL", "HTML", "CSS"],
    // Testing: ["Manual Testing", "Functional Testing", "Integration Testing", "Bug Reporting"],
    Frameworks: ["React", "Flask", "Pandas", "NumPy", "Scikit-learn"],
    Database: ["MongoDB", "MySQL"],
    Tools: ["Git", "GitHub", "Postman", "VS Code", "Streamlit"]
  };

  return (
    <section id="skills" className="section">
      <div className="section-header">
        <div className="section-title-pill">Skills</div>
        <h2>Technical Skillset</h2>
      </div>

      <div className="section-grid">
        {Object.entries(skills).map(([category, items]) => (
          <article key={category} className="card">
            <h3>{category}</h3>
            <p>{items.join(", ")}</p>
          </article>
        ))}
      </div>
    </section>
  );
}

export default Skills;
