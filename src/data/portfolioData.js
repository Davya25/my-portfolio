// ============================================================
// PORTFOLIO DATA — Davya Poojitha Vemulamada
// Update this file to change any content on the portfolio
// ============================================================

export const personalInfo = {
  name: "Davya Poojitha Vemulamada",
  firstName: "Davya Poojitha",
  lastName: "Vemulamada",
  title: "Python Full Stack Developer",
  location: "Visakhapatnam, Andhra Pradesh",
  email: "vemulamadadavyapoojitha25@gmail.com",
  phone: "+91 9701458602",
  github: "https://github.com/Davya25",
  githubUsername: "Davya25",
  linkedin: "https://linkedin.com/in/davya-poojitha-vemulamada-36710427b",
  resumeView: "https://drive.google.com/file/d/1y6_BAcAwsZEUc-VSXOEPZB8WBGIed-7u/view?usp=sharing",
  resumeDownload: "https://drive.google.com/uc?export=download&id=1y6_BAcAwsZEUc-VSXOEPZB8WBGIed-7u",
  profileImage: null, // Set to image path when available e.g. "/images/profile.jpg"
  availability: "Open to Python Full Stack Developer roles",
  tagline: "Building full-stack web applications with Python, Django & React.js",
};

export const summary = `Python Full Stack Developer with hands-on experience in Python, Django, Django REST Framework,
React.js, HTML, CSS and JavaScript. Built full-stack web applications featuring REST APIs, authentication,
CRUD operations and responsive interfaces. Familiar with SQLite, Git, GitHub and Postman, with a strong
foundation in OOP and database management. Solved 150+ DSA problems using Python.
Seeking an opportunity as a Python Full Stack Developer.`;

export const skills = {
  languages: [
    { name: "Python", icon: "python", color: "#3776AB" },
    { name: "JavaScript (ES6+)", icon: "javascript", color: "#F7DF1E" },
    { name: "SQL", icon: "sql", color: "#336791" },
  ],
  frontend: [
    { name: "React.js", icon: "react", color: "#61DAFB" },
    { name: "HTML5", icon: "html5", color: "#E34F26" },
    { name: "CSS3", icon: "css3", color: "#1572B6" },
    { name: "Tailwind CSS", icon: "tailwind", color: "#06B6D4" },
  ],
  backend: [
    { name: "Django", icon: "django", color: "#092E20" },
    { name: "Django REST Framework", icon: "drf", color: "#A30000" },
    { name: "REST APIs", icon: "api", color: "#FF6C37" },
    { name: "JWT Authentication", icon: "jwt", color: "#000000" },
  ],
  database: [
    { name: "SQLite", icon: "sqlite", color: "#003B57" },
  ],
  tools: [
    { name: "Git", icon: "git", color: "#F05032" },
    { name: "GitHub", icon: "github", color: "#181717" },
    { name: "Postman", icon: "postman", color: "#FF6C37" },
    { name: "VS Code", icon: "vscode", color: "#007ACC" },
    { name: "Netlify", icon: "netlify", color: "#00C7B7" },
    { name: "Render", icon: "render", color: "#46E3B7" },
  ],
  soft: [
    "Problem Solving", "Teamwork", "Time Management",
    "Adaptability", "Quick Learning", "Self-Motivation"
  ],
};

export const projects = [
  {
    id: 1,
    title: "Event Ticket Booking Platform",
    subtitle: "Full-Stack Event Management System",
    description:
      "A comprehensive event booking platform with event listings, venue management, seat selection and booking history. Features secure user authentication, ticket booking, cancellation, payment workflows and role-based access control.",
    techStack: ["Python", "Django", "SQLite", "Django ORM", "CSS"],
    features: [
      "Event listings & venue management",
      "Secure user authentication & role-based access",
      "Ticket booking, cancellation & payment workflows",
      "Seat selection with concurrency handling",
      "Relational database with Django ORM",
      "Responsive interface with Django Templates",
    ],
    image: "/images/project1.png",
    github: "https://github.com/Davya25/event-ticket-booking-platform",
    demo: null,
    featured: true,
    category: "Full Stack",
  },
  {
    id: 2,
    title: "Queue Management Platform",
    subtitle: "Smart Queue System with REST APIs",
    description:
      "A queue management system built with Django ORM and SQLite. Features RESTful APIs via Django REST Framework for queue operations, concurrent queue processing and automated testing.",
    techStack: ["Python", "Django", "SQLite", "Django REST Framework", "REST APIs"],
    features: [
      "Queue management with Django ORM & SQLite",
      "RESTful APIs via Django REST Framework",
      "Concurrent queue processing",
      "Automated testing with Python & Django tools",
      "Efficient queue operations & management",
    ],
    image: "/images/project2.png",
    github: "https://github.com/Davya25/Queue-management-platform",
    demo: null,
    featured: false,
    category: "Backend",
  },
  {
    id: 3,
    title: "Bookle — Online Bookstore",
    subtitle: "Dynamic React Bookstore App",
    description:
      "A dynamic online bookstore built with ReactJS, showcasing proficiency in modern frontend technologies. Features a multi-page layout including Home, Shop and Cart pages with seamless navigation.",
    techStack: ["React.js", "JavaScript", "HTML5", "CSS3", "React Router"],
    features: [
      "Dynamic online bookstore UI",
      "Multi-page layout (Home, Shop, Cart)",
      "React Router for seamless navigation",
      "Modern frontend development practices",
      "Responsive design across devices",
    ],
    image: "/images/project3.png",
    github: "https://github.com/Davya25/Bookstore",
    demo: "https://bookstoreddata.netlify.app/",
    featured: false,
    category: "Frontend",
  },
];

export const education = [
  {
    id: 1,
    degree: "Python Full Stack Program",
    institution: "Nxtwave Intensive",
    duration: "Jan 2026 – Dec 2026",
    location: "Hyderabad",
    score: null,
    scoreLabel: null,
    status: "Ongoing",
    description: "Intensive full-stack development training covering Python, Django, React.js and modern web development practices.",
    icon: "🎓",
  },
  {
    id: 2,
    degree: "B.Tech in Information Technology",
    institution: "Andhra University",
    duration: "2022 – 2026",
    location: "Visakhapatnam",
    score: "8.02",
    scoreLabel: "CGPA",
    status: "Completed",
    description: "Bachelor of Technology with focus on software engineering, data structures, algorithms and web technologies.",
    icon: "🏛️",
  },
  {
    id: 3,
    degree: "Intermediate (12th), MPC",
    institution: "Sri Basara Junior College",
    duration: "2020 – 2022",
    location: "Visakhapatnam",
    score: "94%",
    scoreLabel: "Percentage",
    status: "Completed",
    description: "Mathematics, Physics and Chemistry — secured 94% with distinction.",
    icon: "📚",
  },
];

export const certifications = [
  {
    id: 1,
    name: "The Joy of Computing using Python",
    organization: "NPTEL Online Certification",
    year: "2025",
    status: "Completed",
    icon: "🐍",
    color: "#3776AB",
  },
  {
    id: 2,
    name: "Frontend Web Developer Certification",
    organization: "Infosys Springboard",
    year: "2025",
    status: "Completed",
    icon: "💻",
    color: "#007CC3",
  },
];

export const achievements = [
  "Solved 150+ DSA problems using Python",
  "Secured 94% in Intermediate (12th) MPC",
  "Completed Nxtwave Intensive Python Full Stack Program",
];
