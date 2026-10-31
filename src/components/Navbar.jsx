import { useState, useEffect, useRef } from 'react';
import { useTheme } from '../context/ThemeContext';
import { personalInfo } from '../data/portfolioData';
import { FiSun, FiMoon, FiMenu, FiX, FiDownload, FiEye } from 'react-icons/fi';
import '../styles/Navbar.css';

const navLinks = [
  { label: 'Home', href: '#home' },
  { label: 'About', href: '#about' },
  { label: 'Skills', href: '#skills' },
  { label: 'Projects', href: '#projects' },
  { label: 'Education', href: '#education' },
  { label: 'Certifications', href: '#certifications' },
  { label: 'GitHub', href: '#github' },
  { label: 'Contact', href: '#contact' },
];

export default function Navbar() {
  const { theme, toggleTheme } = useTheme();
  const [menuOpen, setMenuOpen] = useState(false);
  const [activeSection, setActiveSection] = useState('home');
  const [scrolled, setScrolled] = useState(false);
  const [resumeOpen, setResumeOpen] = useState(false);
  const resumeRef = useRef(null);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
      const sections = navLinks.map(l => l.href.substring(1));
      for (let i = sections.length - 1; i >= 0; i--) {
        const el = document.getElementById(sections[i]);
        if (el && el.getBoundingClientRect().top <= 100) {
          setActiveSection(sections[i]);
          break;
        }
      }
    };
    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  useEffect(() => {
    const handleClickOutside = (e) => {
      if (resumeRef.current && !resumeRef.current.contains(e.target)) {
        setResumeOpen(false);
      }
    };
    document.addEventListener('mousedown', handleClickOutside);
    return () => document.removeEventListener('mousedown', handleClickOutside);
  }, []);

  const handleNavClick = (href) => {
    setMenuOpen(false);
    const id = href.substring(1);
    document.getElementById(id)?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <nav className={`navbar ${scrolled ? 'scrolled' : ''} ${menuOpen ? 'menu-open' : ''}`}>
      <div className="navbar-container">
        {/* Logo */}
        <a
          className="navbar-logo"
          href="#home"
          onClick={(e) => { e.preventDefault(); handleNavClick('#home'); }}
        >
          <span className="logo-name">Davya</span>
          <span className="logo-dot gradient-text">.dev</span>
        </a>

        {/* Desktop Nav Links */}
        <ul className="navbar-links">
          {navLinks.map(link => (
            <li key={link.href}>
              <a
                href={link.href}
                className={`nav-link ${activeSection === link.href.substring(1) ? 'active' : ''}`}
                onClick={(e) => { e.preventDefault(); handleNavClick(link.href); }}
              >
                {link.label}
              </a>
            </li>
          ))}
        </ul>

        {/* Right Actions */}
        <div className="navbar-actions">
          {/* Theme Toggle */}
          <button className="theme-toggle" onClick={toggleTheme} aria-label="Toggle theme">
            {theme === 'dark' ? <FiSun size={18} /> : <FiMoon size={18} />}
          </button>

          {/* Resume Dropdown */}
          <div className="resume-dropdown" ref={resumeRef}>
            <button
              className="btn btn-primary btn-sm resume-btn"
              onClick={() => setResumeOpen(prev => !prev)}
            >
              Resume ▾
            </button>
            {resumeOpen && (
              <div className="resume-menu">
                <a
                  href={personalInfo.resumeView}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="resume-menu-item"
                  onClick={() => setResumeOpen(false)}
                >
                  <FiEye size={15} /> View Resume
                </a>
                <a
                  href={personalInfo.resumeDownload}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="resume-menu-item"
                  onClick={() => setResumeOpen(false)}
                >
                  <FiDownload size={15} /> Download Resume
                </a>
              </div>
            )}
          </div>

          {/* Hamburger */}
          <button
            className="hamburger"
            onClick={() => setMenuOpen(prev => !prev)}
            aria-label="Toggle menu"
          >
            {menuOpen ? <FiX size={22} /> : <FiMenu size={22} />}
          </button>
        </div>
      </div>

      {/* Mobile Menu */}
      {menuOpen && (
        <div className="mobile-menu">
          <ul className="mobile-links">
            {navLinks.map(link => (
              <li key={link.href}>
                <a
                  href={link.href}
                  className={`mobile-link ${activeSection === link.href.substring(1) ? 'active' : ''}`}
                  onClick={(e) => { e.preventDefault(); handleNavClick(link.href); }}
                >
                  {link.label}
                </a>
              </li>
            ))}
          </ul>
          <div className="mobile-resume-btns">
            <a href={personalInfo.resumeView} target="_blank" rel="noopener noreferrer" className="btn btn-outline btn-sm">
              <FiEye size={14} /> View Resume
            </a>
            <a href={personalInfo.resumeDownload} target="_blank" rel="noopener noreferrer" className="btn btn-primary btn-sm">
              <FiDownload size={14} /> Download
            </a>
          </div>
        </div>
      )}
    </nav>
  );
}
