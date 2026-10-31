import { education } from '../data/portfolioData';
import '../styles/Education.css';

export default function Education() {
  return (
    <section id="education" className="section">
      <div className="container">
        <div className="section-header">
          <span className="section-tag">Education</span>
          <h2 className="section-title">Academic Background</h2>
          <p className="section-subtitle">
            My educational journey that shaped my technical foundation and problem-solving skills.
          </p>
        </div>

        <div className="education-timeline">
          {education.map((edu, index) => (
            <div
              key={edu.id}
              className={`timeline-item ${index % 2 === 0 ? 'left' : 'right'}`}
            >
              {/* Timeline dot */}
              <div className="timeline-dot">
                <span className="timeline-icon">{edu.icon}</span>
              </div>

              {/* Card */}
              <div className="timeline-card card">
                <div className="edu-header">
                  <div className="edu-status-badge" data-status={edu.status}>
                    {edu.status}
                  </div>
                  <span className="edu-duration">{edu.duration}</span>
                </div>

                <h3 className="edu-degree">{edu.degree}</h3>
                <p className="edu-institution">
                  <span className="institution-name">{edu.institution}</span>
                  <span className="edu-separator">·</span>
                  <span className="edu-location">{edu.location}</span>
                </p>

                {edu.score && (
                  <div className="edu-score">
                    <span className="score-label">{edu.scoreLabel}:</span>
                    <span className="score-value gradient-text">{edu.score}</span>
                  </div>
                )}

                <p className="edu-description">{edu.description}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
