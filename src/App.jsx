import { useState, useEffect } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import {
  Mail,
  Phone,
  MapPin,
  Linkedin,
  Github,
  Download,
  Code,
  Database,
  Smartphone,
  Globe,
  Award,
  BookOpen,
  Briefcase,
  User,
  Home,
  FileText,
  MessageCircle
} from 'lucide-react'
import './App.css'
import profileImage from './assets/niel.jpeg'

function App() {
  const [activeSection, setActiveSection] = useState('home')
  const [isMenuOpen, setIsMenuOpen] = useState(false)

  const scrollToSection = (sectionId) => {
    const element = document.getElementById(sectionId)
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' })
    }
    setActiveSection(sectionId)
    setIsMenuOpen(false)
  }

  useEffect(() => {
    const handleScroll = () => {
      const sections = ['home', 'about', 'experience', 'projects', 'skills', 'education', 'contact']
      const scrollPosition = window.scrollY + 100

      for (const section of sections) {
        const element = document.getElementById(section)
        if (element) {
          const offsetTop = element.offsetTop
          const offsetHeight = element.offsetHeight

          if (scrollPosition >= offsetTop && scrollPosition < offsetTop + offsetHeight) {
            setActiveSection(section)
            break
          }
        }
      }
    }

    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  const skills = [
    { name: 'Flutter', icon: <Smartphone className="w-6 h-6" />, category: 'Mobile' },
    { name: 'Dart', icon: <Code className="w-6 h-6" />, category: 'Language' },
    { name: 'Firebase', icon: <Database className="w-6 h-6" />, category: 'Backend' },
    { name: 'Node.js', icon: <Globe className="w-6 h-6" />, category: 'Backend' },
    { name: 'Express.js', icon: <Code className="w-6 h-6" />, category: 'Backend' },
    { name: 'JavaScript', icon: <Code className="w-6 h-6" />, category: 'Language' },
    { name: 'MongoDB', icon: <Database className="w-6 h-6" />, category: 'Database' },
    { name: 'Supabase', icon: <Database className="w-6 h-6" />, category: 'Database' },
    { name: 'REST API', icon: <Globe className="w-6 h-6" />, category: 'API' },
    { name: 'Git', icon: <Github className="w-6 h-6" />, category: 'Version Control' },
    { name: 'Android', icon: <Smartphone className="w-6 h-6" />, category: 'Platform' },
  ]

  const projects = [
    {
      title: 'BBSAtom',
      description: 'Comprehensive inventory management app for seamless order processing, from buying to picking and delivering.',
      tech: ['Flutter', 'REST API', 'Local Storage', 'Barcode Scanning'],
      image: 'https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=400&h=300&fit=crop'
    },
    {
      title: 'BBSEmploy',
      description: 'Employee self-service app with AppLock, biometric authentication, and personal information management.',
      tech: ['Flutter', 'Biometric Auth', 'AppLock', 'Payroll Integration'],
      image: 'https://images.unsplash.com/photo-1553877522-43269d4ea984?w=400&h=300&fit=crop'
    },
    {
      title: 'Transectra',
      description: 'Premier diamond marketplace for buying and selling diamonds with advanced search and media features.',
      tech: ['Flutter', 'E-commerce', 'Media Handling', 'Search Engine'],
      image: 'https://images.unsplash.com/photo-1573408301185-9146fe634ad0?w=400&h=300&fit=crop'
    },
    {
      title: 'My Care Bubble',
      description: 'Advanced social care platform with secure live chats, media sharing, and hospital module integration.',
      tech: ['Flutter', 'Socket.io', 'Real-time Chat', 'Media Sharing'],
      image: 'https://images.unsplash.com/photo-1576091160399-112ba8d25d1f?w=400&h=300&fit=crop'
    },
    {
      title: 'Fitness App',
      description: 'Comprehensive workout tracker with social login, guided routines, and leaderboard functionality.',
      tech: ['Flutter', 'Supabase', 'Social Login', 'Progress Tracking'],
      image: 'https://images.unsplash.com/photo-1571019613454-1cb2f99b2d8b?w=400&h=300&fit=crop'
    },
    {
      title: 'BNN App',
      description: 'Social media and e-commerce platform combining posts, reels, stories with marketplace functionality.',
      tech: ['Flutter', 'Supabase', 'Social Media', 'E-commerce'],
      image: 'https://images.unsplash.com/photo-1611224923853-80b023f02d71?w=400&h=300&fit=crop'
    },
    {
      title: 'Solo Luxury',
      description: 'Premium e-commerce app for luxury fashion with custom backend API package for multiple apps.',
      tech: ['Flutter', 'Custom API', 'E-commerce', 'Multi-app Support'],
      image: 'https://images.unsplash.com/photo-1441986300917-64674bd600d8?w=400&h=300&fit=crop'
    },
    {
      title: 'Road Assistance',
      description: 'Reliable roadside assistance app connecting users with towing services and admin chat support.',
      tech: ['Flutter', 'Supabase', 'Location Services', 'Chat System'],
      image: 'https://images.unsplash.com/photo-1549924231-f129b911e442?w=400&h=300&fit=crop'
    },
    {
      title: 'The Victory Capital',
      description: 'Wealth building mutual fund platform with expert strategies and diverse investment opportunities.',
      tech: ['Flutter', 'Financial API', 'Investment Tracking', 'Analytics'],
      image: 'https://images.unsplash.com/photo-1554224155-6726b3ff858f?w=400&h=300&fit=crop'
    }
  ]

  return (
    <div className="app">
      {/* Navigation */}
      <nav className="navbar">
        <div className="nav-container">
          <motion.div
            className="nav-logo"
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5 }}
          >
            <span className="logo-text">Nilesh</span>
          </motion.div>

          <div className={`nav-menu ${isMenuOpen ? 'active' : ''}`}>
            {[
              { id: 'home', label: 'Home', icon: <Home className="w-4 h-4" /> },
              { id: 'about', label: 'About', icon: <User className="w-4 h-4" /> },
              { id: 'experience', label: 'Experience', icon: <Briefcase className="w-4 h-4" /> },
              { id: 'projects', label: 'Projects', icon: <Code className="w-4 h-4" /> },
              { id: 'skills', label: 'Skills', icon: <Award className="w-4 h-4" /> },
              { id: 'education', label: 'Education', icon: <BookOpen className="w-4 h-4" /> },
              { id: 'contact', label: 'Contact', icon: <MessageCircle className="w-4 h-4" /> }
            ].map((item) => (
              <motion.button
                key={item.id}
                className={`nav-link ${activeSection === item.id ? 'active' : ''}`}
                onClick={() => scrollToSection(item.id)}
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                {item.icon}
                <span>{item.label}</span>
              </motion.button>
            ))}
          </div>

          <div
            className={`hamburger ${isMenuOpen ? 'active' : ''}`}
            onClick={() => setIsMenuOpen(!isMenuOpen)}
          >
            <span></span>
            <span></span>
            <span></span>
          </div>
        </div>
      </nav>

      {/* Hero Section */}
      <section id="home" className="hero">
        <div className="hero-container">
          <motion.div
            className="hero-content"
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            <h1 className="hero-title">
              Hi, I'm <span className="highlight">Tanchak Nilesh Ramjibhai</span>
            </h1>
            <h2 className="hero-subtitle">Flutter Developer</h2>
            <p className="hero-description">
              Dedicated Flutter application developer with 2 years of experience in developing
              high-quality mobile applications for both Android and iOS platforms.
            </p>
            <div className="hero-buttons">
              <motion.button
                className="btn btn-primary"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                onClick={() => scrollToSection('projects')}
              >
                View My Work
              </motion.button>
              <motion.button
                className="btn btn-secondary"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                onClick={() => scrollToSection('contact')}
              >
                Get In Touch
              </motion.button>
            </div>
          </motion.div>

          <motion.div
            className="hero-image"
            initial={{ opacity: 0, x: 50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
          >
            <div className="profile-card">
              <div className="profile-image">
                <div className="image-placeholder">
                  <img
                    src={profileImage}
                    alt="Tanchak Nilesh Ramjibhai"
                    className="profile-photo"
                  />
                </div>
              </div>
              <div className="profile-info">
                <h3>Flutter Developer</h3>
                <p>2+ Years Experience</p>
                <div className="tech-badges">
                  <span className="badge">Flutter</span>
                  <span className="badge">Dart</span>
                  <span className="badge">Node.js</span>
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      </section>

      {/* About Section */}
      <section id="about" className="section">
        <div className="container">
          <motion.div
            className="section-header"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
          >
            <h2>About Me</h2>
            <p>Get to know me better</p>
          </motion.div>

          <div className="about-content">
            <motion.div
              className="about-text"
              initial={{ opacity: 0, x: -50 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              viewport={{ once: true }}
            >
              <p>
                I am a dedicated Flutter application developer with 2 years of experience in developing
                high-quality mobile applications for both Android and iOS platforms. I also have experience
                in Node.js and JavaScript for Backend Development.
              </p>
              <p>
                My core skills include building custom widgets, integrating APIs, handling state management,
                and implementing complex UI designs using Flutter. I have extensive experience in developing
                cross-platform mobile applications using Flutter, which has allowed me to create robust and
                efficient solutions that work seamlessly across multiple platforms.
              </p>
              <div className="about-stats">
                <div className="stat">
                  <h3>2+</h3>
                  <p>Years Experience</p>
                </div>
                <div className="stat">
                  <h3>9+</h3>
                  <p>Projects Completed</p>
                </div>
                <div className="stat">
                  <h3>3</h3>
                  <p>Languages</p>
                </div>
              </div>
            </motion.div>

            <motion.div
              className="about-image"
              initial={{ opacity: 0, x: 50 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6, delay: 0.4 }}
              viewport={{ once: true }}
            >
              <div className="image-container">
                <div className="floating-card">
                  <Smartphone className="w-8 h-8 text-blue-500" />
                  <h4>Mobile Development</h4>
                  <p>Cross-platform solutions</p>
                </div>
                <div className="floating-card">
                  <Database className="w-8 h-8 text-green-500" />
                  <h4>Backend Integration</h4>
                  <p>API & Database management</p>
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Experience Section */}
      <section id="experience" className="section bg-light">
        <div className="container">
          <motion.div
            className="section-header"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
          >
            <h2>Professional Experience</h2>
            <p>My work journey</p>
          </motion.div>

          <motion.div
            className="timeline"
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            viewport={{ once: true }}
          >
            <div className="timeline-item">
              <div className="timeline-marker"></div>
              <div className="timeline-content">
                <div className="timeline-header">
                  <h3>Flutter Developer</h3>
                  <span className="timeline-company">Coderkube Technologies</span>
                </div>
                <div className="timeline-period">
                  <span>09/2022 – Present</span>
                  <span>Surat, India</span>
                </div>
                <p>
                  Developing high-quality mobile applications for both Android and iOS platforms using Flutter.
                  Building custom widgets, integrating APIs, handling state management, and implementing complex UI designs.
                </p>
              </div>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Projects Section */}
      <section id="projects" className="section">
        <div className="container">
          <motion.div
            className="section-header"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
          >
            <h2>Featured Projects</h2>
            <p>Some of my recent work</p>
          </motion.div>

          <div className="projects-grid">
            {projects.map((project, index) => (
              <motion.div
                key={project.title}
                className="project-card"
                initial={{ opacity: 0, y: 50 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                viewport={{ once: true }}
                whileHover={{ y: -10 }}
              >
                <div className="project-image">
                  <img src={project.image} alt={project.title} />
                  <div className="project-overlay">
                    <button className="btn btn-primary">View Details</button>
                  </div>
                </div>
                <div className="project-content">
                  <h3>{project.title}</h3>
                  <p>{project.description}</p>
                  <div className="project-tech">
                    {project.tech.map((tech, techIndex) => (
                      <span key={techIndex} className="tech-tag">{tech}</span>
                    ))}
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Skills Section */}
      <section id="skills" className="section bg-light">
        <div className="container">
          <motion.div
            className="section-header"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
          >
            <h2>Skills & Technologies</h2>
            <p>Technologies I work with</p>
          </motion.div>

          <div className="skills-container">
            {['Mobile', 'Backend', 'Language', 'Database', 'API', 'Version Control', 'Platform'].map((category) => (
              <motion.div
                key={category}
                className="skill-category"
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.1 }}
                viewport={{ once: true }}
              >
                <h3>{category}</h3>
                <div className="skills-grid">
                  {skills
                    .filter(skill => skill.category === category)
                    .map((skill, index) => (
                      <motion.div
                        key={skill.name}
                        className="skill-item"
                        initial={{ opacity: 0, scale: 0.8 }}
                        whileInView={{ opacity: 1, scale: 1 }}
                        transition={{ duration: 0.4, delay: index * 0.1 }}
                        viewport={{ once: true }}
                        whileHover={{ scale: 1.05 }}
                      >
                        {skill.icon}
                        <span>{skill.name}</span>
                      </motion.div>
                    ))}
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Education Section */}
      <section id="education" className="section">
        <div className="container">
          <motion.div
            className="section-header"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
          >
            <h2>Education</h2>
            <p>My academic background</p>
          </motion.div>

          <div className="education-grid">
            <motion.div
              className="education-card"
              initial={{ opacity: 0, x: -50 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              viewport={{ once: true }}
            >
              <div className="education-icon">
                <BookOpen className="w-8 h-8" />
              </div>
              <div className="education-content">
                <h3>BE Mechanical</h3>
                <p className="institution">GEC Bharuch</p>
                <p className="period">2012 – 2016</p>
                <p className="location">Bharuch, India</p>
              </div>
            </motion.div>

            <motion.div
              className="education-card"
              initial={{ opacity: 0, x: 50 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6, delay: 0.4 }}
              viewport={{ once: true }}
            >
              <div className="education-icon">
                <Award className="w-8 h-8" />
              </div>
              <div className="education-content">
                <h3>HSC</h3>
                <p className="institution">Sadhana Vidhyalaya</p>
                <p className="period">2010 – 2012</p>
                <p className="location">Surat, India</p>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section id="contact" className="section bg-light">
        <div className="container">
          <motion.div
            className="section-header"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
          >
            <h2>Get In Touch</h2>
            <p>Let's work together</p>
          </motion.div>

          <div className="contact-content">
            <motion.div
              className="contact-info"
              initial={{ opacity: 0, x: -50 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              viewport={{ once: true }}
            >
              <div className="contact-item">
                <Mail className="w-6 h-6" />
                <div>
                  <h4>Email</h4>
                  <p>nileshtanchak007@gmail.com</p>
                </div>
              </div>
              <div className="contact-item">
                <Phone className="w-6 h-6" />
                <div>
                  <h4>Phone</h4>
                  <p>+91 7984251709</p>
                </div>
              </div>
              <div className="contact-item">
                <MapPin className="w-6 h-6" />
                <div>
                  <h4>Location</h4>
                  <p>Surat, India</p>
                </div>
              </div>
              <div className="contact-item">
                <Linkedin className="w-6 h-6" />
                <div>
                  <h4>LinkedIn</h4>
                  <p>Connect with me</p>
                </div>
              </div>
            </motion.div>

            <motion.div
              className="contact-form"
              initial={{ opacity: 0, x: 50 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6, delay: 0.4 }}
              viewport={{ once: true }}
            >
              <form>
                <div className="form-group">
                  <input type="text" placeholder="Your Name" required />
                </div>
                <div className="form-group">
                  <input type="email" placeholder="Your Email" required />
                </div>
                <div className="form-group">
                  <input type="text" placeholder="Subject" required />
                </div>
                <div className="form-group">
                  <textarea placeholder="Your Message" rows="5" required></textarea>
                </div>
                <motion.button
                  type="submit"
                  className="btn btn-primary"
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                >
                  Send Message
                </motion.button>
              </form>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="footer">
        <div className="container">
          <div className="footer-content">
            <p>&copy; 2024 Tanchak Nilesh Ramjibhai. All rights reserved.</p>
            <div className="footer-links">
              <a href="#home">Home</a>
              <a href="#about">About</a>
              <a href="#projects">Projects</a>
              <a href="#contact">Contact</a>
            </div>
          </div>
        </div>
      </footer>
    </div>
  )
}

export default App
