import { useState } from 'react';
import { skills } from '../data/portfolioData';
import '../styles/Skills.css';

const skillIcons = {
  python: '🐍',
  javascript: '📜',
  sql: '🗄️',
  react: '⚛️',
  html5: '🌐',
  css3: '🎨',
  tailwind: '💨',
  django: '🟩',
  drf: '🔧',
  api: '🔗',
  jwt: '🔐',
  sqlite: '💾',
  git: '🌿',
  github: '🐙',
  postman: '📮',
  vscode: '💻',
  netlify: '🌍',
  render: '☁️',
};

const categories = [
  { key: 'languages', label: 'Languages', color: '#7c3aed', bg: '#7c3aed18' },
  { key: 'frontend', label: 'Frontend', color: '#2563eb', bg: '#2563eb18' },
  { key: 'backend', label: 'Backend', color: '#059669', bg: '#05966918' },
  { key: 'database', label: 'Database', color: '#d97706', bg: '#d9770618' },
  { key: 'tools', label: 'Tools', color: '#dc2626', bg: '#dc262618' },
];

export default function Skills() {
  const [activeCategory, setActiveCategory] = useState('all');

  const allSkills = categories.flatMap(c =>
    (skills[c.key] || []).map(s => ({ ...s, category: c.key, categoryLabel: c.label, color: c.color, bg: c.bg }))
  );

  const displayedSkills = activeCategory === 'all'
    ? allSkills
    : allSkills.filter(s => s.category === activeCategory);

  return (
    <section id="skills" className="section">
      <div className="container">
        <div className="section-header">
          <span className="section-tag">Technical Skills</span>
          <h2 className="section-title">Technologies I Work With</h2>
          <p className="section-subtitle">
            A curated collection of languages, frameworks and tools I use to build full-stack web applications.
          </p>
        </div>

        {/* Category Filter */}
        <div className="skills-filter">
          <button
            className={`filter-btn ${activeCategory === 'all' ? 'active' : ''}`}
            onClick={() => setActiveCategory('all')}
          >
            All Skills
          </button>
          {categories.map(c => (
            <button
              key={c.key}
              className={`filter-btn ${activeCategory === c.key ? 'active' : ''}`}
              onClick={() => setActiveCategory(c.key)}
              style={activeCategory === c.key ? { '--filter-color': c.color } : {}}
            >
              {c.label}
            </button>
          ))}
        </div>

        {/* Skills Grid */}
        <div className="skills-grid">
          {displayedSkills.map((skill, i) => (
            <div className="skill-card card" key={i} style={{ '--skill-color': skill.color }}>
              <div className="skill-icon-wrap" style={{ background: skill.bg, color: skill.color }}>
                <span className="skill-emoji">{skillIcons[skill.icon] || '⚙️'}</span>
              </div>
              <span className="skill-name">{skill.name}</span>
              <span className="skill-category-label" style={{ color: skill.color }}>
                {skill.categoryLabel}
              </span>
            </div>
          ))}
        </div>

        {/* Soft Skills */}
        <div className="soft-skills-section">
          <h3 className="soft-skills-title">Soft Skills</h3>
          <div className="soft-skills-list">
            {skills.soft.map((s, i) => (
              <span key={i} className="soft-skill-badge badge">{s}</span>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
