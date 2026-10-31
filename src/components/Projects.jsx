import { useState } from 'react';
import { FiGithub, FiExternalLink, FiStar, FiCode } from 'react-icons/fi';
import { projects } from '../data/portfolioData';
import '../styles/Projects.css';

const categories = ['All', 'Full Stack', 'Backend', 'Frontend'];

export default function Projects() {
  const [activeFilter, setActiveFilter] = useState('All');
  const [hoveredId, setHoveredId] = useState(null);

  const filtered = activeFilter === 'All'
    ? projects
    : projects.filter(p => p.category === activeFilter);

  return (
    <section id="projects" className="section section-alt">
      <div className="container">
        <div className="section-header">
          <span className="section-tag">Projects</span>
          <h2 className="section-title">Things I've Built</h2>
          <p className="section-subtitle">
            A selection of projects I've developed using Python, Django and React.js — each solving a real-world problem.
          </p>
        </div>

        {/* Category Filter */}
        <div className="projects-filter">
          {categories.map(cat => (
            <button
              key={cat}
              className={`filter-btn ${activeFilter === cat ? 'active' : ''}`}
              onClick={() => setActiveFilter(cat)}
            >
              {cat}
            </button>
          ))}
        </div>

        {/* Projects Grid */}
        <div className="projects-grid">
          {filtered.map(project => (
            <div
              key={project.id}
              className={`project-card card ${project.featured ? 'featured' : ''} ${hoveredId === project.id ? 'hovered' : ''}`}
              onMouseEnter={() => setHoveredId(project.id)}
              onMouseLeave={() => setHoveredId(null)}
            >
              {/* Featured Badge */}
              {project.featured && (
                <div className="featured-badge">
                  <FiStar size={12} /> Featured Project
                </div>
              )}

              {/* Screenshot */}
              <div className="project-image-wrap">
                <img
                  src={project.image}
                  alt={project.title}
                  className="project-image"
                  loading="lazy"
                />
                <div className="project-image-overlay">
                  <div className="overlay-links">
                    <a
                      href={project.github}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="overlay-btn"
                      title="View Code"
                    >
                      <FiGithub size={20} />
                    </a>
                    {project.demo && (
                      <a
                        href={project.demo}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="overlay-btn"
                        title="Live Demo"
                      >
                        <FiExternalLink size={20} />
                      </a>
                    )}
                  </div>
                </div>
              </div>

              {/* Content */}
              <div className="project-content">
                <div className="project-header">
                  <div>
                    <p className="project-category">
                      <FiCode size={12} /> {project.category}
                    </p>
                    <h3 className="project-title">{project.title}</h3>
                    <p className="project-subtitle">{project.subtitle}</p>
                  </div>
                </div>

                <p className="project-description">{project.description}</p>

                {/* Features */}
                <div className="project-features">
                  <p className="features-label">Key Features:</p>
                  <ul className="features-list">
                    {project.features.slice(0, 4).map((f, i) => (
                      <li key={i} className="feature-item">
                        <span className="feature-dot" />
                        {f}
                      </li>
                    ))}
                  </ul>
                </div>

                {/* Tech Stack */}
                <div className="tech-tags">
                  {project.techStack.map((tech, i) => (
                    <span key={i} className="tech-tag">{tech}</span>
                  ))}
                </div>

                {/* Action Buttons */}
                <div className="project-actions">
                  <a
                    href={project.github}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="btn btn-outline btn-sm"
                  >
                    <FiGithub size={15} /> GitHub
                  </a>
                  {project.demo ? (
                    <a
                      href={project.demo}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="btn btn-primary btn-sm"
                    >
                      <FiExternalLink size={15} /> Live Demo
                    </a>
                  ) : (
                    <span className="btn btn-ghost btn-sm no-demo" title="No live demo available">
                      No Live Demo
                    </span>
                  )}
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* GitHub CTA */}
        <div className="projects-cta">
          <p>Want to see more? Check out my GitHub for all repositories.</p>
          <a
            href="https://github.com/Davya25"
            target="_blank"
            rel="noopener noreferrer"
            className="btn btn-primary"
          >
            <FiGithub size={16} /> View All on GitHub
          </a>
        </div>
      </div>
    </section>
  );
}
