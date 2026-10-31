import { useRef, useState } from 'react';
import emailjs from '@emailjs/browser';
import {
  FiMail, FiPhone, FiMapPin, FiGithub, FiLinkedin,
  FiSend, FiCheck, FiAlertCircle, FiLoader
} from 'react-icons/fi';
import { personalInfo } from '../data/portfolioData';
import '../styles/Contact.css';

// ─── EmailJS Configuration ───────────────────────────────
// 1. Sign up at https://emailjs.com (free)
// 2. Create a service (Gmail recommended) → copy Service ID
// 3. Create an email template → copy Template ID
// 4. Go to Account → copy Public Key
// Replace the placeholders below with your actual credentials
const EMAILJS_SERVICE_ID = 'YOUR_SERVICE_ID';
const EMAILJS_TEMPLATE_ID = 'YOUR_TEMPLATE_ID';
const EMAILJS_PUBLIC_KEY = 'YOUR_PUBLIC_KEY';
// ─────────────────────────────────────────────────────────

const contactLinks = [
  {
    icon: <FiMail size={20} />,
    label: 'Email',
    value: personalInfo.email,
    href: `mailto:${personalInfo.email}`,
    color: '#7c3aed',
  },
  {
    icon: <FiPhone size={20} />,
    label: 'Phone',
    value: personalInfo.phone,
    href: `tel:${personalInfo.phone}`,
    color: '#059669',
  },
  {
    icon: <FiMapPin size={20} />,
    label: 'Location',
    value: personalInfo.location,
    href: `https://maps.google.com/?q=${encodeURIComponent(personalInfo.location)}`,
    color: '#dc2626',
  },
  {
    icon: <FiGithub size={20} />,
    label: 'GitHub',
    value: '@Davya25',
    href: personalInfo.github,
    color: '#181717',
  },
  {
    icon: <FiLinkedin size={20} />,
    label: 'LinkedIn',
    value: 'Davya Poojitha',
    href: personalInfo.linkedin,
    color: '#0077b5',
  },
];

const initialForm = { name: '', email: '', subject: '', message: '' };

export default function Contact() {
  const formRef = useRef(null);
  const [form, setForm] = useState(initialForm);
  const [errors, setErrors] = useState({});
  const [status, setStatus] = useState('idle'); // idle | loading | success | error

  const validate = () => {
    const errs = {};
    if (!form.name.trim()) errs.name = 'Name is required';
    if (!form.email.trim()) {
      errs.email = 'Email is required';
    } else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(form.email)) {
      errs.email = 'Enter a valid email address';
    }
    if (!form.subject.trim()) errs.subject = 'Subject is required';
    if (!form.message.trim()) {
      errs.message = 'Message is required';
    } else if (form.message.trim().length < 20) {
      errs.message = 'Message must be at least 20 characters';
    }
    return errs;
  };

  const handleChange = (e) => {
    const { name, value } = e.target;
    setForm(prev => ({ ...prev, [name]: value }));
    if (errors[name]) setErrors(prev => ({ ...prev, [name]: '' }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    const errs = validate();
    if (Object.keys(errs).length > 0) {
      setErrors(errs);
      return;
    }

    setStatus('loading');

    // Check if EmailJS is configured
    if (
      EMAILJS_SERVICE_ID === 'YOUR_SERVICE_ID' ||
      EMAILJS_TEMPLATE_ID === 'YOUR_TEMPLATE_ID' ||
      EMAILJS_PUBLIC_KEY === 'YOUR_PUBLIC_KEY'
    ) {
      // Fallback: open Gmail compose
      const gmailUrl = `https://mail.google.com/mail/?view=cm&to=${personalInfo.email}&su=${encodeURIComponent(form.subject)}&body=${encodeURIComponent(`Name: ${form.name}\nEmail: ${form.email}\n\n${form.message}`)}`;
      window.open(gmailUrl, '_blank');
      setStatus('success');
      setForm(initialForm);
      setTimeout(() => setStatus('idle'), 5000);
      return;
    }

    try {
      await emailjs.sendForm(
        EMAILJS_SERVICE_ID,
        EMAILJS_TEMPLATE_ID,
        formRef.current,
        EMAILJS_PUBLIC_KEY
      );
      setStatus('success');
      setForm(initialForm);
      setTimeout(() => setStatus('idle'), 5000);
    } catch (err) {
      console.error('EmailJS error:', err);
      setStatus('error');
      setTimeout(() => setStatus('idle'), 5000);
    }
  };

  return (
    <section id="contact" className="section section-alt">
      <div className="container">
        <div className="section-header">
          <span className="section-tag">Contact</span>
          <h2 className="section-title">Let's Work Together</h2>
          <p className="section-subtitle">
            Have an opportunity, project or just want to connect? I'd love to hear from you.
            Feel free to reach out through any channel below.
          </p>
        </div>

        <div className="contact-content">
          {/* Left: Contact Info */}
          <div className="contact-info">
            <h3 className="contact-info-title">Get in Touch</h3>
            <p className="contact-info-desc">
              I'm actively looking for Python Full Stack Developer roles. If you have an
              opportunity that matches my skills, don't hesitate to reach out!
            </p>

            <div className="contact-links">
              {contactLinks.map((link, i) => (
                <a
                  key={i}
                  href={link.href}
                  target={link.href.startsWith('http') ? '_blank' : '_self'}
                  rel="noopener noreferrer"
                  className="contact-link-item"
                >
                  <div className="contact-link-icon" style={{ background: `${link.color}15`, color: link.color }}>
                    {link.icon}
                  </div>
                  <div>
                    <p className="contact-link-label">{link.label}</p>
                    <p className="contact-link-value">{link.value}</p>
                  </div>
                </a>
              ))}
            </div>

            <div className="availability-card">
              <div className="avail-dot" />
              <div>
                <p className="avail-title">Open to Opportunities</p>
                <p className="avail-desc">{personalInfo.availability}</p>
              </div>
            </div>
          </div>

          {/* Right: Form */}
          <div className="contact-form-wrap card">
            <h3 className="form-title">Send a Message</h3>

            {status === 'success' && (
              <div className="form-alert alert-success">
                <FiCheck size={18} />
                <span>Message sent successfully! I'll get back to you soon. 🎉</span>
              </div>
            )}

            {status === 'error' && (
              <div className="form-alert alert-error">
                <FiAlertCircle size={18} />
                <span>Something went wrong. Please try emailing directly at {personalInfo.email}</span>
              </div>
            )}

            <form ref={formRef} onSubmit={handleSubmit} noValidate className="contact-form">
              {/* Name + Email Row */}
              <div className="form-row">
                <div className="form-group">
                  <label htmlFor="name" className="form-label">Your Name *</label>
                  <input
                    type="text"
                    id="name"
                    name="name"
                    value={form.name}
                    onChange={handleChange}
                    placeholder="e.g. John Doe"
                    className={`form-input ${errors.name ? 'input-error' : ''}`}
                    disabled={status === 'loading'}
                  />
                  {errors.name && <span className="error-msg">{errors.name}</span>}
                </div>
                <div className="form-group">
                  <label htmlFor="email" className="form-label">Your Email *</label>
                  <input
                    type="email"
                    id="email"
                    name="email"
                    value={form.email}
                    onChange={handleChange}
                    placeholder="e.g. john@example.com"
                    className={`form-input ${errors.email ? 'input-error' : ''}`}
                    disabled={status === 'loading'}
                  />
                  {errors.email && <span className="error-msg">{errors.email}</span>}
                </div>
              </div>

              {/* Subject */}
              <div className="form-group">
                <label htmlFor="subject" className="form-label">Subject *</label>
                <input
                  type="text"
                  id="subject"
                  name="subject"
                  value={form.subject}
                  onChange={handleChange}
                  placeholder="e.g. Job Opportunity — Python Developer"
                  className={`form-input ${errors.subject ? 'input-error' : ''}`}
                  disabled={status === 'loading'}
                />
                {errors.subject && <span className="error-msg">{errors.subject}</span>}
              </div>

              {/* Message */}
              <div className="form-group">
                <label htmlFor="message" className="form-label">Message *</label>
                <textarea
                  id="message"
                  name="message"
                  rows={5}
                  value={form.message}
                  onChange={handleChange}
                  placeholder="Tell me about the opportunity, project or anything you'd like to discuss..."
                  className={`form-input form-textarea ${errors.message ? 'input-error' : ''}`}
                  disabled={status === 'loading'}
                />
                {errors.message && <span className="error-msg">{errors.message}</span>}
                <span className="char-count">{form.message.length} characters</span>
              </div>

              {/* Hidden fields for EmailJS */}
              <input type="hidden" name="to_email" value={personalInfo.email} />
              <input type="hidden" name="to_name" value={personalInfo.firstName} />

              <button
                type="submit"
                className="btn btn-primary submit-btn"
                disabled={status === 'loading'}
              >
                {status === 'loading' ? (
                  <><FiLoader size={16} className="spin-icon" /> Sending...</>
                ) : (
                  <><FiSend size={16} /> Send Message</>
                )}
              </button>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
}
