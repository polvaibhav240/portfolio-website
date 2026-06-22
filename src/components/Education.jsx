function Education() {
  const education = [
    {
      degree: "B.Tech Information Technology",
      college: "Shah and Anchor Kutchhi Engineering College",
      score: "CGPA 9.50"
    },
    {
      degree: "HSC",
      college: "R. J. College",
      score: "80.50%"
    },
    {
      degree: "SSC",
      college: "S.V.V.N School",
      score: "97%"
    }
  ];

  return (
    <section id="education" className="section">
      <div className="section-header">
        <div className="section-title-pill">Education</div>
        <h2>Academic Background</h2>
      </div>

      <div className="section-grid">
        {education.map((item, index) => (
          <article key={index} className="card">
            <h3>{item.degree}</h3>
            <p>{item.college}</p>
            <p>{item.score}</p>
          </article>
        ))}
      </div>
    </section>
  );
}

export default Education;
