# Davya Poojitha Vemulamada — Portfolio

A modern, responsive personal portfolio website built with **React.js + Vite**. Features light/dark theme, live GitHub stats, real contact form via EmailJS, and actual project screenshots.

🌐 **Live:** [Deploy to Vercel](#deployment)

---

## ✨ Features

- 🌗 **Light & Dark Theme** toggle with localStorage persistence
- 📱 **Fully Responsive** — Desktop, Tablet, Mobile
- 🚀 **GitHub Live Stats** via GitHub API (real data, no fakes)
- 📧 **Contact Form** with EmailJS (real email delivery)
- 🖼️ **Actual Project Screenshots** in project cards
- 📄 **Resume View & Download** via Google Drive
- 🎯 **Smooth Scrolling** with active section highlighting
- 🔗 **Working project links** to GitHub repositories
- ⚡ **Fast** — Built with Vite

---

## 🛠️ Tech Stack

| Category | Technology |
|----------|------------|
| Framework | React.js 18 |
| Build Tool | Vite |
| Styling | Plain CSS3 with CSS Variables |
| Email | EmailJS (@emailjs/browser) |
| Icons | React Icons (Feather) |
| Fonts | Google Fonts (Inter, Fira Code) |
| Deployment | Vercel (recommended) |

---

## 📁 Project Structure

```
my-portfolio/
├── public/
│   ├── images/
│   │   ├── project1.png    ← Event Ticket Booking screenshot
│   │   ├── project2.png    ← Queue Management screenshot
│   │   └── project3.png    ← BookStore (Bookle) screenshot
│   └── favicon.svg
├── src/
│   ├── components/
│   │   ├── Navbar.jsx       ← Sticky nav, hamburger, theme toggle
│   │   ├── Hero.jsx         ← Hero with avatar, CTAs, socials
│   │   ├── About.jsx        ← Bio, highlights, achievements
│   │   ├── Skills.jsx       ← Filterable skill cards
│   │   ├── Projects.jsx     ← Project cards with screenshots
│   │   ├── Education.jsx    ← Timeline layout
│   │   ├── Certifications.jsx
│   │   ├── GitHubStats.jsx  ← Live GitHub API data
│   │   ├── Contact.jsx      ← EmailJS form
│   │   └── Footer.jsx
│   ├── context/
│   │   └── ThemeContext.jsx ← Light/Dark theme state
│   ├── data/
│   │   └── portfolioData.js ← ALL personal data here
│   ├── styles/
│   │   ├── global.css       ← CSS variables, reset, utilities
│   │   ├── Navbar.css
│   │   ├── Hero.css
│   │   ├── About.css
│   │   ├── Skills.css
│   │   ├── Projects.css
│   │   ├── Education.css
│   │   ├── Certifications.css
│   │   ├── GitHubStats.css
│   │   ├── Contact.css
│   │   └── Footer.css
│   ├── App.jsx
│   └── main.jsx
├── index.html
├── package.json
├── vite.config.js
└── README.md
```

---

## 🚀 Getting Started

### Prerequisites
- Node.js 18+ 
- npm 9+

### Installation

```bash
# Clone or navigate to the project
cd my-portfolio

# Install dependencies
npm install

# Start development server
npm run dev
```

Open [http://localhost:5173](http://localhost:5173) in your browser.

---

## 📧 Setting Up EmailJS (Real Email Sending)

1. Go to [emailjs.com](https://emailjs.com) and create a **free account**
2. Add a **Gmail service** → note the **Service ID**
3. Create an **email template** → use these variables:
   ```
   From: {{name}} ({{email}})
   Subject: {{subject}}
   Body: {{message}}
   ```
   Note the **Template ID**
4. Go to **Account** → copy your **Public Key**
5. Open [`src/components/Contact.jsx`](./src/components/Contact.jsx)
6. Replace these three constants:
   ```js
   const EMAILJS_SERVICE_ID  = 'service_xxxxxxx';  // ← your Service ID
   const EMAILJS_TEMPLATE_ID = 'template_xxxxxxx'; // ← your Template ID
   const EMAILJS_PUBLIC_KEY  = 'xxxxxxxxxxxx';     // ← your Public Key
   ```

> **Note:** Until configured, the form will fall back to opening Gmail compose in a new tab, so it still works!

---

## 🎨 Customization

All content is in **one file**: [`src/data/portfolioData.js`](./src/data/portfolioData.js)

- Update `personalInfo` for name, title, email, etc.
- Update `skills` to add/remove technologies
- Update `projects` to add new projects or screenshots
- Update `education` and `certifications` arrays

---

## 🖼️ Replacing Profile Photo

1. Add your photo to `public/images/profile.jpg`
2. In `portfolioData.js`, update:
   ```js
   profileImage: '/images/profile.jpg',
   ```

---

## 🏗️ Build for Production

```bash
npm run build
```

Output goes to the `dist/` folder.

---

## 🌐 Deploy to Vercel (Recommended)

1. Push this project to GitHub
2. Go to [vercel.com](https://vercel.com) → New Project
3. Import your GitHub repo
4. Vercel auto-detects Vite → click **Deploy**
5. Your portfolio is live! 🎉

### Alternatively: Netlify

```bash
# Build
npm run build

# Drag & drop the dist/ folder to netlify.com/drop
```

---

## 📜 License

This portfolio is personal. Feel free to use as inspiration but please don't copy content directly.

---

**Built with 💜 by Davya Poojitha Vemulamada**
