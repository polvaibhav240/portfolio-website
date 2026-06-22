function Certifications() {
  const certifications = [
    "Python Full Course for Beginners - Angela Yu",
    "Complete Guide in HTML CSS JavaScript - Jerome Morales"
  ];

  return (
    <section id="certifications" className="section">
      <div className="section-header">
        <div className="section-title-pill">Certifications</div>
        <h2>Professional Credentials</h2>
      </div>

      <div className="section-grid">
        {certifications.map((cert, index) => (
          <article key={index} className="card">
            <h3>Certification</h3>
            <p>{cert}</p>
          </article>
        ))}
      </div>
    </section>
  );
}

export default Certifications;
