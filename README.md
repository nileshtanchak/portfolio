# Tanchak Nilesh Ramjibhai - Portfolio Website

A modern, responsive portfolio website built with React and Vite showcasing my skills, experience, and projects as a Flutter Developer.

## 🚀 Features

- **Modern Design**: Clean, professional design with smooth animations
- **Responsive**: Fully responsive design that works on all devices
- **Interactive**: Smooth scrolling navigation and hover effects
- **Performance**: Optimized with Vite for fast loading
- **Accessible**: Built with accessibility in mind
- **SEO Optimized**: Proper meta tags and structured content

## 🛠️ Technologies Used

- **React 19** - Modern React with hooks
- **Vite** - Fast build tool and development server
- **Framer Motion** - Smooth animations and transitions
- **Lucide React** - Beautiful icons
- **CSS3** - Modern styling with CSS Grid and Flexbox
- **Google Fonts** - Inter font family

## 📱 Sections

1. **Hero Section** - Introduction and call-to-action
2. **About** - Personal information and statistics
3. **Experience** - Professional work history
4. **Projects** - Showcase of 9 featured projects
5. **Skills** - Technical skills organized by category
6. **Education** - Academic background
7. **Contact** - Contact information and form

## 🎨 Design Features

- **Gradient Backgrounds** - Beautiful gradient combinations
- **Card-based Layout** - Modern card design for content
- **Hover Effects** - Interactive hover animations
- **Smooth Transitions** - Framer Motion animations
- **Mobile-First** - Responsive design approach
- **Dark Accents** - Professional color scheme

## 🚀 Getting Started

### Prerequisites

- Node.js (version 16 or higher)
- npm or yarn

### Installation

1. Clone the repository:
```bash
git clone <repository-url>
cd portfolio
```

2. Install dependencies:
```bash
npm install
```

3. Start the development server:
```bash
npm run dev
```

4. Open your browser and visit `http://localhost:5173`

### Building for Production

```bash
npm run build
```

The built files will be in the `dist` directory.

## 📁 Project Structure

```
portfolio/
├── public/
│   └── vite.svg
├── src/
│   ├── App.jsx          # Main application component
│   ├── App.css          # Main styles
│   ├── index.css        # Global styles
│   ├── main.jsx         # Application entry point
│   └── assets/
│       └── react.svg
├── index.html           # HTML template
├── package.json         # Dependencies and scripts
├── vite.config.js       # Vite configuration
└── README.md           # Project documentation
```

## 🎯 Key Features

### Navigation
- Fixed navigation bar with smooth scrolling
- Mobile-responsive hamburger menu
- Active section highlighting

### Animations
- Framer Motion animations throughout
- Scroll-triggered animations
- Hover effects on interactive elements

### Projects Showcase
- 9 featured projects with descriptions
- Technology tags for each project
- Hover effects with project images

### Skills Display
- Organized by categories (Mobile, Backend, Language, etc.)
- Icon-based skill representation
- Interactive hover effects

### Contact Form
- Professional contact form
- Contact information cards
- Social media links

## 🎨 Customization

### Colors
The color scheme can be customized by modifying the CSS variables in `src/App.css`:

```css
:root {
  --primary-color: #3b82f6;
  --accent-color: #f59e0b;
  --text-primary: #1e293b;
  /* ... other variables */
}
```

### Content
Update the content in `src/App.jsx`:
- Personal information
- Project details
- Skills and experience
- Contact information

### Styling
Modify `src/App.css` to customize:
- Layout and spacing
- Typography
- Animations
- Responsive breakpoints

## 📱 Responsive Design

The website is fully responsive with breakpoints at:
- **Desktop**: 1200px and above
- **Tablet**: 768px - 1199px
- **Mobile**: Below 768px
- **Small Mobile**: Below 480px

## 🚀 Deployment

### Netlify
1. Connect your GitHub repository to Netlify
2. Set build command: `npm run build`
3. Set publish directory: `dist`
4. Deploy!

### Vercel
1. Install Vercel CLI: `npm i -g vercel`
2. Run: `vercel`
3. Follow the prompts

### GitHub Pages
1. Add to `package.json`:
```json
{
  "homepage": "https://yourusername.github.io/portfolio",
  "scripts": {
    "predeploy": "npm run build",
    "deploy": "gh-pages -d dist"
  }
}
```
2. Install gh-pages: `npm install --save-dev gh-pages`
3. Deploy: `npm run deploy`

## 📄 License

This project is open source and available under the [MIT License](LICENSE).

## 🤝 Contributing

Contributions are welcome! Please feel free to submit a Pull Request.

## 📞 Contact

- **Email**: nileshtanchak007@gmail.com
- **Phone**: +91 7984251709
- **Location**: Surat, India
- **LinkedIn**: [Connect with me](https://linkedin.com/in/your-profile)

---

Built with ❤️ by Tanchak Nilesh Ramjibhai
