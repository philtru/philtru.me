# Developer Portfolio | Philipp Trubchenko

A minimal, terminal-themed portfolio website built with React and Vite. Features a code-editor aesthetic designed for developers who appreciate clean, efficient design.

## 🚀 Live Demo

[View Live Portfolio](https://philipptrubchenko.github.io/portfolio/) *(Update this link after deployment)*

## 💻 Features

- **Terminal-style interface** with typing animation
- **Single-page design** with smooth scrolling
- **Keyboard navigation** (Press 1-5 to jump to sections)
- **Code-editor aesthetic** using JetBrains Mono font
- **React-based** - Modern component architecture
- **Fast build** - Powered by Vite
- **CI/CD** - Automated testing and deployment with GitHub Actions
- **Responsive design** - Works on all devices

## 🛠️ Tech Stack

```javascript
const portfolio = {
  framework: 'React 18',
  buildTool: 'Vite',
  styling: 'CSS3',
  font: 'JetBrains Mono',
  deployment: 'GitHub Pages',
  ci: 'GitHub Actions'
};
```

## 📦 Quick Start

### Prerequisites

- Node.js >= 18.0.0
- npm or yarn

### Local Development

```bash
# Clone the repository
git clone https://github.com/philtru/portfolio.git

# Navigate to project
cd portfolio

# Install dependencies
npm install

# Start development server
npm run dev

# Build for production
npm run build

# Preview production build
npm run preview
```

The development server will start at `http://localhost:5173`

## 🚀 Deployment

### GitHub Pages (Automated)

This repository includes GitHub Actions workflows that automatically:

1. **CI Workflow** - Runs on every push/PR:
   - Lints code with ESLint
   - Builds the project
   - Tests on Node.js 18.x and 20.x

2. **Deploy Workflow** - Runs on push to `main`:
   - Builds the production bundle
   - Deploys to GitHub Pages

To enable GitHub Pages:

1. Go to your repository Settings → Pages
2. Under "Source", select "GitHub Actions"
3. Push to the `main` branch to trigger deployment
4. Your site will be available at `https://[your-username].github.io/[repo-name]/`

### Manual Deployment

```bash
# Build the project
npm run build

# The dist folder contains the production build
# Deploy the contents of dist/ to your hosting provider
```

## 🎨 Customization

### Update Personal Information

Edit the following component files:

1. **Hero Section** - `src/components/Hero.jsx`
2. **About Section** - `src/components/About.jsx`
3. **Experience Section** - `src/components/Experience.jsx` (update the `experiences` array)
4. **Projects Section** - `src/components/Projects.jsx` (update the `projects` array)
5. **Contact Section** - `src/components/Contact.jsx`

### Color Scheme

Modify CSS variables in `src/index.css`:

```css
:root {
  --bg: #0a0a0a;        /* Background */
  --text: #e0e0e0;      /* Main text */
  --accent: #00ff00;    /* Terminal green */
  --comment: #888;      /* Comments */
  --code-bg: #1a1a1a;   /* Code blocks */
}
```

## 📁 Project Structure

```
portfolio/
├── .github/
│   └── workflows/
│       ├── ci.yml          # CI workflow
│       └── deploy.yml       # Deployment workflow
├── public/                  # Static assets
├── src/
│   ├── components/         # React components
│   │   ├── About.jsx
│   │   ├── Contact.jsx
│   │   ├── Experience.jsx
│   │   ├── Hero.jsx
│   │   ├── Projects.jsx
│   │   ├── TechStack.jsx
│   │   └── Divider.jsx
│   ├── App.jsx             # Main app component
│   ├── App.css
│   ├── main.jsx            # Entry point
│   └── index.css           # Global styles
├── .eslintrc.cjs           # ESLint configuration
├── .gitignore
├── index.html
├── package.json
├── vite.config.js          # Vite configuration
└── README.md
```

## ⌨️ Keyboard Shortcuts

- `1` - Jump to About
- `2` - Jump to Experience  
- `3` - Jump to Tech Stack
- `4` - Jump to Projects
- `5` - Jump to Contact

## 🧪 Development Scripts

- `npm run dev` - Start development server
- `npm run build` - Build for production
- `npm run preview` - Preview production build
- `npm run lint` - Run ESLint

## 📊 Performance

- **Fast HMR** - Instant updates during development
- **Optimized Build** - Production-ready bundle
- **Modern React** - Using latest React features
- **Type Safety** - ESLint configured for code quality

## 🤝 Contributing

Feel free to fork this project and customize it for your own portfolio!

1. Fork the Project
2. Create your Feature Branch (`git checkout -b feature/YourFeature`)
3. Commit your Changes (`git commit -m 'Add YourFeature'`)
4. Push to the Branch (`git push origin feature/YourFeature`)
5. Open a Pull Request

## 📝 License

This project is open source and available under the [MIT License](LICENSE).

## 👤 Author

**Philipp Trubchenko**

- LinkedIn: [linkedin.com/in/philipptrubchenko](https://www.linkedin.com/in/philipptru)
- GitHub: [@philipptrubchenko](https://github.com/philtru)
- Email: seresigo1@gmail.com

## 🙏 Acknowledgments

- Font: [JetBrains Mono](https://www.jetbrains.com/lp/mono/)
- Inspiration: Terminal interfaces and code editors
- Built with React and Vite

---

```javascript
// EOF
console.log('Thanks for checking out my portfolio! 🚀');
```
