import React from 'react';

function App() {
  return (
    <div className="min-h-screen bg-white dark:bg-[#2D2D2D] text-[#2D2D2D] dark:text-white relative overflow-x-hidden">
      {/* Loading Screen */}
      <div className="loading" id="loading">
        <div className="spinner"></div>
      </div>

      {/* Scroll Indicator */}
      <div className="scroll-indicator" id="scrollIndicator"></div>

      {/* Navigation */}
      <nav className="navbar" id="navbar">
        <div className="nav-container">
          <a href="#home" className="logo">Harsh.dev</a>
          <ul className="nav-links">
            <li><a href="#home">Home</a></li>
            <li><a href="#skills">Skills</a></li>
            <li><a href="#projects">Projects</a></li>
            <li><a href="#resume">Resume</a></li>
            <li><button className="theme-toggle" id="themeToggle"><i className="fas fa-moon"></i></button></li>
          </ul>
          <div className="mobile-menu" id="mobileMenu">
            <span></span>
            <span></span>
            <span></span>
          </div>
        </div>
      </nav>

      {/* Social Links */}
      <div className="social-links">
        <a href="https://github.com/Harshpareek258" target="_blank" className="social-link" title="GitHub">
          <i className="fab fa-github"></i>
        </a>
        <a href="https://linkedin.com/in/harshpareek258" target="_blank" className="social-link" title="LinkedIn">
          <i className="fab fa-linkedin-in"></i>
        </a>
        <a href="https://instagram.com/harshpareek_258" target="_blank" className="social-link" title="Instagram">
          <i className="fab fa-instagram"></i>
        </a>
      </div>

      {/* Hero Section */}
      <section className="hero" id="home">
        <canvas id="three-canvas"></canvas>
        <div className="hero-content">
          <h1 className="hero-title">Harsh Pareek</h1>
          <p className="hero-subtitle">Full-Stack Developer & Cloud Engineer</p>
          <p className="hero-intro">
            Hi, I'm Harsh Pareek — a passionate Full-Stack Developer and Cloud Engineer building modern apps with Python, JavaScript, Docker, and Kubernetes.
          </p>
          <div className="cta-buttons">
            <a href="#projects" className="btn btn-primary">
              <i className="fas fa-code"></i>
              View My Work
            </a>
            <a href="#resume" className="btn btn-secondary">
              <i className="fas fa-download"></i>
              Download Resume
            </a>
          </div>
        </div>
      </section>

      {/* Skills Section */}
      <section className="section" id="skills">
        <h2 className="section-title">Skills & Technologies</h2>
        <div className="skills-grid">
          <div className="skill-card">
            <div className="skill-icon"><i className="fab fa-html5"></i></div>
            <h3 className="skill-name">HTML</h3>
            <p className="skill-description">Semantic markup and modern HTML5 features</p>
          </div>
          <div className="skill-card">
            <div className="skill-icon"><i className="fab fa-css3-alt"></i></div>
            <h3 className="skill-name">CSS</h3>
            <p className="skill-description">Responsive design and modern CSS techniques</p>
          </div>
          <div className="skill-card">
            <div className="skill-icon"><i className="fab fa-js-square"></i></div>
            <h3 className="skill-name">JavaScript</h3>
            <p className="skill-description">ES6+ features and modern JavaScript development</p>
          </div>
          <div className="skill-card">
            <div className="skill-icon"><i className="fab fa-node-js"></i></div>
            <h3 className="skill-name">Node.js</h3>
            <p className="skill-description">Server-side JavaScript and API development</p>
          </div>
          <div className="skill-card">
            <div className="skill-icon"><i className="fas fa-server"></i></div>
            <h3 className="skill-name">Express</h3>
            <p className="skill-description">Fast and minimalist web framework</p>
          </div>
          <div className="skill-card">
            <div className="skill-icon"><i className="fab fa-python"></i></div>
            <h3 className="skill-name">Python</h3>
            <p className="skill-description">Backend development and automation</p>
          </div>
          <div className="skill-card">
            <div className="skill-icon"><i className="fas fa-flask"></i></div>
            <h3 className="skill-name">Flask</h3>
            <p className="skill-description">Lightweight Python web framework</p>
          </div>
          <div className="skill-card">
            <div className="skill-icon"><i className="fab fa-docker"></i></div>
            <h3 className="skill-name">Docker</h3>
            <p className="skill-description">Containerization and deployment</p>
          </div>
          <div className="skill-card">
            <div className="skill-icon"><i className="fas fa-dharmachakra"></i></div>
            <h3 className="skill-name">Kubernetes</h3>
            <p className="skill-description">Container orchestration and scaling</p>
          </div>
          <div className="skill-card">
            <div className="skill-icon"><i className="fas fa-code"></i></div>
            <h3 className="skill-name">C++ (NPTEL)</h3>
            <p className="skill-description">Object-oriented programming fundamentals</p>
          </div>
          <div className="skill-card">
            <div className="skill-icon"><i className="fab fa-java"></i></div>
            <h3 className="skill-name">Java (NPTEL)</h3>
            <p className="skill-description">Enterprise application development</p>
          </div>
        </div>
      </section>

      {/* Projects Section */}
      <section className="section" id="projects">
        <h2 className="section-title">Featured Projects</h2>
        <div className="projects-grid">
          <div className="project-card">
            <div className="project-header">
              <h3 className="project-title">Webcam Photo Capture</h3>
              <p className="project-tech">JavaScript, WebRTC, Canvas API</p>
            </div>
            <div className="project-content">
              <p className="project-description">
                A web application that captures photos using the device's webcam with real-time preview and download functionality.
              </p>
              <div className="project-links">
                <a href="https://github.com/Harshpareek258" target="_blank" className="project-link">
                  <i className="fab fa-github"></i>
                  GitHub
                </a>
              </div>
            </div>
          </div>

          <div className="project-card">
            <div className="project-header">
              <h3 className="project-title">Email Media Sender</h3>
              <p className="project-tech">Node.js, Express, Multer, Nodemailer</p>
            </div>
            <div className="project-content">
              <p className="project-description">
                Full-stack application for sending photos, videos, and messages via email with file upload and processing capabilities.
              </p>
              <div className="project-links">
                <a href="https://github.com/Harshpareek258" target="_blank" className="project-link">
                  <i className="fab fa-github"></i>
                  GitHub
                </a>
              </div>
            </div>
          </div>

          <div className="project-card">
            <div className="project-header">
              <h3 className="project-title">Dockerized Python CLI App</h3>
              <p className="project-tech">Python, Docker, CLI</p>
            </div>
            <div className="project-content">
              <p className="project-description">
                Command-line interface application containerized with Docker for cross-platform deployment and scalability.
              </p>
              <div className="project-links">
                <a href="https://github.com/Harshpareek258" target="_blank" className="project-link">
                  <i className="fab fa-github"></i>
                  GitHub
                </a>
              </div>
            </div>
          </div>

          <div className="project-card">
            <div className="project-header">
              <h3 className="project-title">Flask Backup Tool</h3>
              <p className="project-tech">Flask, Docker, Python</p>
            </div>
            <div className="project-content">
              <p className="project-description">
                Web-based backup solution built with Flask and containerized with Docker for easy deployment and management.
              </p>
              <div className="project-links">
                <a href="https://github.com/Harshpareek258" target="_blank" className="project-link">
                  <i className="fab fa-github"></i>
                  GitHub
                </a>
              </div>
            </div>
          </div>

          <div className="project-card">
            <div className="project-header">
              <h3 className="project-title">Geolocation Tracker</h3>
              <p className="project-tech">JavaScript, Geolocation API, Maps</p>
            </div>
            <div className="project-content">
              <p className="project-description">
                Real-time location tracking application using browser geolocation API with interactive map visualization.
              </p>
              <div className="project-links">
                <a href="https://github.com/Harshpareek258" target="_blank" className="project-link">
                  <i className="fab fa-github"></i>
                  GitHub
                </a>
              </div>
            </div>
          </div>

          <div className="project-card">
            <div className="project-header">
              <h3 className="project-title">Email Screenshot App</h3>
              <p className="project-tech">JavaScript, EmailJS, Canvas</p>
            </div>
            <div className="project-content">
              <p className="project-description">
                Application that captures screenshots and sends them via email using EmailJS for client-side email functionality.
              </p>
              <div className="project-links">
                <a href="https://github.com/Harshpareek258" target="_blank" className="project-link">
                  <i className="fab fa-github"></i>
                  GitHub
                </a>
              </div>
            </div>
          </div>

          <div className="project-card">
            <div className="project-header">
              <h3 className="project-title">Kubernetes Pod Deployment</h3>
              <p className="project-tech">NGINX, K3s, NodePort, Kubernetes</p>
            </div>
            <div className="project-content">
              <p className="project-description">
                Container orchestration setup with NGINX deployment on K3s cluster using NodePort service for external access.
              </p>
              <div className="project-links">
                <a href="https://github.com/Harshpareek258" target="_blank" className="project-link">
                  <i className="fab fa-github"></i>
                  GitHub
                </a>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Resume Section */}
      <section className="section" id="resume">
        <h2 className="section-title">Resume</h2>
        <div className="resume-container">
          <p style={{ marginBottom: '2rem', color: 'var(--text-light)' }}>
            Download or view my latest resume to learn more about my experience and qualifications.
          </p>
          
          <div style={{ background: 'var(--white)', borderRadius: '10px', padding: '2rem', marginBottom: '2rem', border: '2px dashed var(--primary-color)' }}>
            <i className="fas fa-file-pdf" style={{ fontSize: '3rem', color: 'var(--primary-color)', marginBottom: '1rem' }}></i>
            <p>Resume PDF will be embedded here</p>
            <p style={{ fontSize: '0.9rem', color: 'var(--text-light)' }}>Upload your resume PDF to GitHub or Netlify and update the src attribute below</p>
          </div>
          
          <div className="cta-buttons">
            <a href="#" className="btn btn-primary" download>
              <i className="fas fa-download"></i>
              Download PDF
            </a>
            <a href="#" target="_blank" className="btn btn-secondary">
              <i className="fas fa-external-link-alt"></i>
              View in New Tab
            </a>
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section className="section" id="contact">
        <h2 className="section-title">Get In Touch</h2>
        <div className="contact-container">
          <div className="contact-info">
            <div className="contact-item">
              <div className="contact-icon">
                <i className="fas fa-envelope"></i>
              </div>
              <h3 className="contact-title">Email</h3>
              <p className="contact-text">harshpareek258@gmail.com</p>
            </div>
            <div className="contact-item">
              <div className="contact-icon">
                <i className="fas fa-phone"></i>
              </div>
              <h3 className="contact-title">Phone</h3>
              <p className="contact-text">+91 93523 19099</p>
            </div>
            <div className="contact-item">
              <div className="contact-icon">
                <i className="fas fa-map-marker-alt"></i>
              </div>
              <h3 className="contact-title">Location</h3>
              <p className="contact-text">Rajasthan, India</p>
            </div>
          </div>
          
          <form className="contact-form">
            <div className="form-group">
              <label htmlFor="name" className="form-label">Name</label>
              <input type="text" id="name" name="name" className="form-input" required />
            </div>
            <div className="form-group">
              <label htmlFor="email" className="form-label">Email</label>
              <input type="email" id="email" name="email" className="form-input" required />
            </div>
            <div className="form-group">
              <label htmlFor="message" className="form-label">Message</label>
              <textarea id="message" name="message" className="form-textarea" required></textarea>
            </div>
            <button type="submit" className="form-button">
              <i className="fas fa-paper-plane"></i>
              Send Message
            </button>
          </form>
        </div>
      </section>

      {/* Footer */}
      <footer className="footer">
        <p>&copy; 2024 Harsh Pareek. All rights reserved. Built with ❤️ and modern web technologies.</p>
      </footer>

      {/* Font Awesome */}
      <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.4.0/css/all.min.css" />
      
      {/* Three.js */}
      <script src="https://cdnjs.cloudflare.com/ajax/libs/three.js/r128/three.min.js"></script>

      <script dangerouslySetInnerHTML={{
        __html: `
          // Loading screen
          window.addEventListener('load', function() {
            const loading = document.getElementById('loading');
            setTimeout(() => {
              loading.classList.add('hidden');
            }, 1000);
          });

          // Theme toggle
          const themeToggle = document.getElementById('themeToggle');
          const body = document.body;
          const themeIcon = themeToggle.querySelector('i');

          // Check for saved theme preference
          const savedTheme = localStorage.getItem('theme');
          if (savedTheme === 'dark') {
            body.classList.add('dark-mode');
            themeIcon.className = 'fas fa-sun';
          }

          themeToggle.addEventListener('click', function() {
            body.classList.toggle('dark-mode');
            
            if (body.classList.contains('dark-mode')) {
              themeIcon.className = 'fas fa-sun';
              localStorage.setItem('theme', 'dark');
            } else {
              themeIcon.className = 'fas fa-moon';
              localStorage.setItem('theme', 'light');
            }
          });

          // Scroll indicator
          window.addEventListener('scroll', function() {
            const scrollIndicator = document.getElementById('scrollIndicator');
            const scrollTop = document.documentElement.scrollTop;
            const scrollHeight = document.documentElement.scrollHeight - document.documentElement.clientHeight;
            const scrollPercent = (scrollTop / scrollHeight) * 100;
            scrollIndicator.style.width = scrollPercent + '%';
          });

          // Navbar scroll effect
          window.addEventListener('scroll', function() {
            const navbar = document.getElementById('navbar');
            if (window.scrollY > 100) {
              navbar.style.background = body.classList.contains('dark-mode') 
                ? 'rgba(45, 45, 45, 0.98)' 
                : 'rgba(255, 255, 255, 0.98)';
              navbar.style.boxShadow = '0 2px 20px rgba(0, 0, 0, 0.1)';
            } else {
              navbar.style.background = body.classList.contains('dark-mode') 
                ? 'rgba(45, 45, 45, 0.95)' 
                : 'rgba(255, 255, 255, 0.95)';
              navbar.style.boxShadow = 'none';
            }
          });

          // Three.js 3D Background
          function initThreeJS() {
            const canvas = document.getElementById('three-canvas');
            if (!canvas || !window.THREE) return;
            
            const scene = new THREE.Scene();
            const camera = new THREE.PerspectiveCamera(75, window.innerWidth / window.innerHeight, 0.1, 1000);
            const renderer = new THREE.WebGLRenderer({ canvas: canvas, alpha: true });
            
            renderer.setSize(window.innerWidth, window.innerHeight);
            renderer.setClearColor(0x000000, 0);

            // Create wireframe nodes
            const nodes = [];
            const nodeCount = 50;
            
            // Node geometry and material
            const nodeGeometry = new THREE.SphereGeometry(0.1, 8, 8);
            const nodeMaterial = new THREE.MeshBasicMaterial({ 
              color: 0xB3003B,
              wireframe: true 
            });

            // Create nodes
            for (let i = 0; i < nodeCount; i++) {
              const node = new THREE.Mesh(nodeGeometry, nodeMaterial);
              node.position.set(
                (Math.random() - 0.5) * 20,
                (Math.random() - 0.5) * 20,
                (Math.random() - 0.5) * 20
              );
              scene.add(node);
              nodes.push(node);
            }

            // Create connections between nodes
            const lineMaterial = new THREE.LineBasicMaterial({ 
              color: 0xB3003B,
              opacity: 0.3,
              transparent: true 
            });

            const connections = [];
            for (let i = 0; i < nodes.length; i++) {
              for (let j = i + 1; j < nodes.length; j++) {
                const distance = nodes[i].position.distanceTo(nodes[j].position);
                if (distance < 5) {
                  const geometry = new THREE.BufferGeometry().setFromPoints([
                    nodes[i].position,
                    nodes[j].position
                  ]);
                  const line = new THREE.Line(geometry, lineMaterial);
                  scene.add(line);
                  connections.push(line);
                }
              }
            }

            camera.position.z = 15;

            // Animation loop
            function animate() {
              requestAnimationFrame(animate);

              // Rotate nodes
              nodes.forEach((node, index) => {
                node.rotation.x += 0.01;
                node.rotation.y += 0.01;
                
                // Floating animation
                node.position.y += Math.sin(Date.now() * 0.001 + index) * 0.002;
              });

              // Rotate entire scene slowly
              scene.rotation.y += 0.002;

              renderer.render(scene, camera);
            }

            animate();

            // Handle window resize
            window.addEventListener('resize', function() {
              camera.aspect = window.innerWidth / window.innerHeight;
              camera.updateProjectionMatrix();
              renderer.setSize(window.innerWidth, window.innerHeight);
            });
          }

          // Initialize Three.js when page loads
          setTimeout(initThreeJS, 1000);

          // Smooth scrolling for navigation links
          document.querySelectorAll('a[href^="#"]').forEach(anchor => {
            anchor.addEventListener('click', function (e) {
              e.preventDefault();
              const target = document.querySelector(this.getAttribute('href'));
              if (target) {
                target.scrollIntoView({
                  behavior: 'smooth',
                  block: 'start'
                });
              }
            });
          });

          // Add scroll animations
          const observerOptions = {
            threshold: 0.1,
            rootMargin: '0px 0px -50px 0px'
          };

          const observer = new IntersectionObserver(function(entries) {
            entries.forEach(entry => {
              if (entry.isIntersecting) {
                entry.target.style.opacity = '1';
                entry.target.style.transform = 'translateY(0)';
              }
            });
          }, observerOptions);

          // Observe all cards and sections
          document.addEventListener('DOMContentLoaded', function() {
            const animatedElements = document.querySelectorAll('.skill-card, .project-card, .section-title');
            animatedElements.forEach(el => {
              el.style.opacity = '0';
              el.style.transform = 'translateY(30px)';
              el.style.transition = 'opacity 0.6s ease, transform 0.6s ease';
              observer.observe(el);
            });
          });

          // Mobile menu toggle
          const mobileMenu = document.getElementById('mobileMenu');
          const navLinks = document.querySelector('.nav-links');

          mobileMenu.addEventListener('click', function() {
            navLinks.style.display = navLinks.style.display === 'flex' ? 'none' : 'flex';
          });

          // Add floating animation to social links
          document.addEventListener('DOMContentLoaded', function() {
            const socialLinks = document.querySelectorAll('.social-link');
            socialLinks.forEach((link, index) => {
              link.style.animationDelay = \`\${index * 0.2}s\`;
              link.classList.add('floating');
            });
          });
        `
      }} />
    </div>
  );
}

export default App;