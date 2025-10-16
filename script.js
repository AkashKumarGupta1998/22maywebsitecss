// script.js
document.addEventListener('DOMContentLoaded', function() {
    // Set current year in footer
    document.getElementById('year').textContent = new Date().getFullYear();
    
    // Loading screen
    setTimeout(() => {
        document.getElementById('loading-screen').style.opacity = '0';
        setTimeout(() => {
            document.getElementById('loading-screen').style.display = 'none';
        }, 500);
    }, 1500);
    
    // Theme toggle functionality
    const themeToggle = document.getElementById('theme-toggle');
    const themeIcon = themeToggle.querySelector('i');
    
    // Check for saved theme or prefer-color-scheme
    const savedTheme = localStorage.getItem('theme') || 
                      (window.matchMedia('(prefers-color-scheme: dark)').matches ? 'dark' : 'light');
    
    // Apply the saved theme
    document.documentElement.setAttribute('data-theme', savedTheme);
    updateThemeIcon(savedTheme);
    
    themeToggle.addEventListener('click', () => {
        const currentTheme = document.documentElement.getAttribute('data-theme');
        const newTheme = currentTheme === 'light' ? 'dark' : 'light';
        
        document.documentElement.setAttribute('data-theme', newTheme);
        localStorage.setItem('theme', newTheme);
        updateThemeIcon(newTheme);
    });
    
    function updateThemeIcon(theme) {
        themeIcon.className = theme === 'light' ? 'fas fa-moon' : 'fas fa-sun';
    }
    
    // Mobile Navigation Toggle
    const mobileMenuToggle = document.querySelector('.mobile-menu-toggle');
    const mobileNav = document.querySelector('.mobile-nav');
    
    mobileMenuToggle.addEventListener('click', function() {
        mobileNav.classList.toggle('active');
        mobileMenuToggle.innerHTML = mobileNav.classList.contains('active') 
            ? '<i class="fas fa-times"></i>' 
            : '<i class="fas fa-bars"></i>';
    });
    
    // Close mobile menu when clicking on a link
    document.querySelectorAll('.mobile-nav a').forEach(link => {
        link.addEventListener('click', () => {
            mobileNav.classList.remove('active');
            mobileMenuToggle.innerHTML = '<i class="fas fa-bars"></i>';
        });
    });
    
    // Header scroll effect
    window.addEventListener('scroll', function() {
        const header = document.querySelector('header');
        if (window.scrollY > 50) {
            header.style.padding = '10px 0';
            header.style.boxShadow = 'var(--shadow)';
        } else {
            header.style.padding = '15px 0';
            header.style.boxShadow = 'var(--shadow)';
        }
    });
    
    // Animate skill bars when in viewport
    const animateSkillBars = function() {
        const skillBars = document.querySelectorAll('.skill-progress');
        
        skillBars.forEach(bar => {
            const barTop = bar.getBoundingClientRect().top;
            const barBottom = bar.getBoundingClientRect().bottom;
            
            if (barTop < window.innerHeight && barBottom > 0) {
                const width = bar.getAttribute('data-width');
                bar.style.width = width;
            }
        });
    };
    
    // Initial check for skill bars
    window.addEventListener('load', animateSkillBars);
    window.addEventListener('scroll', animateSkillBars);
    
    // Experience data
    const experienceData = [
        {
            date: "Apr 2025 – Present",
            title: "Shadowfax Technologies",
            role: "City POC – Q-Com Nykaa",
            description: "Handling dedicated Q-Com operations for Nykaa with a focus on coordination and performance optimization.",
            details: [
                "Handling dedicated Q-Com operations for Nykaa",
                "Coordinating between multiple teams for smooth delivery operations",
                "Monitoring performance metrics and implementing improvements"
            ]
        },
        {
            date: "Jun 2025 – Aug 2025",
            title: "Shadowfax Technologies",
            role: "Healthkart Hyperlocal – Ops Coordinator",
            description: "Managed hyperlocal delivery operations with a focus on 2-hour delivery targets.",
            details: [
                "Aligned operations with 2-hour delivery targets for Healthkart orders",
                "Monitored delivery attempts, ensured dispatch timeliness",
                "Investigated fake deliveries and resolved customer escalations",
                "Worked closely with dark store TLs and HIs for smooth last-mile operations"
            ]
        },
        {
            date: "Apr 2025 – Aug 2025",
            title: "Shadowfax Technologies",
            role: "Qmin – Operations Support",
            description: "Supported Qmin delivery services with a focus on operational efficiency.",
            details: [
                "Managed hyperlocal operations for Qmin delivery services",
                "Coordinated with field teams for order execution",
                "Ensured SLA adherence and smooth rider allocation"
            ]
        },
        {
            date: "May 2025 – Aug 2025",
            title: "Shadowfax Technologies",
            role: "Myntra Now – Operations",
            description: "Oversaw hyperlocal delivery process for Myntra Now with a focus on customer satisfaction.",
            details: [
                "Oversaw hyperlocal delivery process for Myntra Now orders",
                "Tracked delivery timelines and coordinated with dark stores",
                "Ensured customer satisfaction through real-time issue resolution"
            ]
        },
        {
            date: "Nov 2024 – Apr 2025",
            title: "Shadowfax Technologies",
            role: "Rider Care Centre – Chat Support",
            description: "Provided support to riders through chat and ticket resolution.",
            details: [
                "Provided chat support for rider-related queries",
                "Handled live support during peak periods",
                "Worked on non-live ticket resolution"
            ]
        },
        {
            date: "Apr 2024 – Nov 2024",
            title: "Shadowfax Technologies",
            role: "Central Onboarding Team (COB)",
            description: "Managed rider onboarding processes during collaboration with Uber Bike Taxi.",
            details: [
                "Managed rider onboarding processes during Uber Bike Taxi collaboration",
                "Verified documentation and eligibility (CRC verification)",
                "Ensured smooth transition for new riders"
            ]
        },
        {
            date: "Early 2024",
            title: "Job Search – Bangalore",
            role: "DevOps/Cloud Roles",
            description: "Pursued opportunities in DevOps and Cloud computing, gaining valuable industry exposure.",
            details: [
                "Attended interviews for DevOps/Cloud positions",
                "Gained valuable interview and industry exposure",
                "Transitioned into operations role to gain corporate experience"
            ]
        }
    ];
    
    // Render experience timeline
    function renderExperience() {
        const timeline = document.querySelector('#experience .timeline');
        
        experienceData.forEach(exp => {
            const timelineItem = document.createElement('div');
            timelineItem.className = 'timeline-item fade-in';
            
            timelineItem.innerHTML = `
                <div class="timeline-date">${exp.date}</div>
                <div class="timeline-content">
                    <h3>${exp.title}</h3>
                    <h4>${exp.role}</h4>
                    <p>${exp.description}</p>
                    <ul>
                        ${exp.details.map(detail => `<li>${detail}</li>`).join('')}
                    </ul>
                </div>
            `;
            
            timeline.appendChild(timelineItem);
        });
    }
    
    // Projects data
    const projectsData = [
        {
            title: "Cloud Infrastructure Setup",
            description: "Designed and implemented a scalable cloud infrastructure using AWS services for a chemical research database.",
            tags: ["AWS", "Docker", "Kubernetes", "Ansible"],
            links: [
                { text: "View Details", url: "#" },
                { text: "GitHub", url: "#" }
            ]
        },
        {
            title: "Chemical Data Analysis Tool",
            description: "Developed a web application for analyzing chemical compound data with interactive visualizations.",
            tags: ["Python", "React", "Data Visualization"],
            links: [
                { text: "View Details", url: "#" },
                { text: "GitHub", url: "#" }
            ]
        },
        {
            title: "Automated Deployment Pipeline",
            description: "Created a CI/CD pipeline for automated testing and deployment of cloud applications.",
            tags: ["GitLab CI", "Docker", "Kubernetes", "AWS"],
            links: [
                { text: "View Details", url: "#" },
                { text: "GitHub", url: "#" }
            ]
        }
    ];
    
    // Render projects
    function renderProjects() {
        const projectsGrid = document.querySelector('.projects-grid');
        
        projectsData.forEach(project => {
            const projectCard = document.createElement('div');
            projectCard.className = 'project-card fade-in';
            
            projectCard.innerHTML = `
                <div class="project-image">
                    <i class="fas fa-project-diagram"></i>
                </div>
                <div class="project-content">
                    <h3>${project.title}</h3>
                    <p>${project.description}</p>
                    <div class="project-tags">
                        ${project.tags.map(tag => `<span class="project-tag">${tag}</span>`).join('')}
                    </div>
                    <div class="project-links">
                        ${project.links.map(link => 
                            `<a href="${link.url}">${link.text} <i class="fas fa-arrow-right"></i></a>`
                        ).join('')}
                    </div>
                </div>
            `;
            
            projectsGrid.appendChild(projectCard);
        });
    }
    
    // Testimonials data
    const testimonialsData = [
        {
            text: "Akash demonstrated exceptional problem-solving skills during our cloud migration project. His unique background in chemistry brought a fresh perspective to our technical challenges.",
            author: "Rajesh Kumar",
            role: "Project Manager, STL"
        },
        {
            text: "Working with Akash was a great experience. He quickly adapted to our operational requirements and contributed significantly to improving our delivery processes.",
            author: "Priya Sharma",
            role: "Team Lead, Shadowfax"
        },
        {
            text: "Akash's ability to bridge technical and operational aspects made him an invaluable team member. He consistently delivered high-quality work under tight deadlines.",
            author: "Amit Patel",
            role: "Senior Developer"
        }
    ];
    
    // Render testimonials
    function renderTestimonials() {
        const testimonialSlider = document.querySelector('.testimonial-slider');
        
        // Create track
        const track = document.createElement('div');
        track.className = 'testimonial-track';
        
        // Create slides
        testimonialsData.forEach((testimonial, index) => {
            const slide = document.createElement('div');
            slide.className = 'testimonial-slide';
            
            slide.innerHTML = `
                <div class="testimonial-card">
                    <div class="testimonial-avatar">
                        <i class="fas fa-user"></i>
                    </div>
                    <p class="testimonial-text">"${testimonial.text}"</p>
                    <h4 class="testimonial-author">${testimonial.author}</h4>
                    <p class="testimonial-role">${testimonial.role}</p>
                </div>
            `;
            
            track.appendChild(slide);
        });
        
        testimonialSlider.appendChild(track);
        
        // Create navigation dots
        const nav = document.createElement('div');
        nav.className = 'testimonial-nav';
        
        testimonialsData.forEach((_, index) => {
            const dot = document.createElement('div');
            dot.className = `testimonial-dot ${index === 0 ? 'active' : ''}`;
            dot.dataset.index = index;
            
            dot.addEventListener('click', () => {
                goToSlide(index);
            });
            
            nav.appendChild(dot);
        });
        
        testimonialSlider.appendChild(nav);
        
        // Testimonial slider functionality
        let currentSlide = 0;
        
        function goToSlide(index) {
            currentSlide = index;
            track.style.transform = `translateX(-${index * 100}%)`;
            
            // Update active dot
            document.querySelectorAll('.testimonial-dot').forEach((dot, i) => {
                dot.classList.toggle('active', i === index);
            });
        }
        
        // Auto-advance slides
        setInterval(() => {
            currentSlide = (currentSlide + 1) % testimonialsData.length;
            goToSlide(currentSlide);
        }, 5000);
    }
    
    // Blog posts data
    const blogData = [
        {
            title: "Bridging Chemistry and Cloud Computing",
            excerpt: "Exploring how my background in chemistry enhances my approach to cloud infrastructure and problem-solving.",
            date: "July 15, 2023",
            readTime: "5 min read"
        },
        {
            title: "Getting Started with AWS for Science Professionals",
            excerpt: "A beginner's guide to AWS cloud services tailored for those with a science background.",
            date: "August 22, 2023",
            readTime: "7 min read"
        },
        {
            title: "The Future of Scientific Computing in the Cloud",
            excerpt: "How cloud technologies are transforming scientific research and data analysis.",
            date: "September 10, 2023",
            readTime: "6 min read"
        }
    ];
    
    // Render blog posts
    function renderBlogPosts() {
        const blogGrid = document.querySelector('.blog-grid');
        
        blogData.forEach(post => {
            const blogCard = document.createElement('div');
            blogCard.className = 'blog-card fade-in';
            
            blogCard.innerHTML = `
                <div class="blog-image">
                    <i class="fas fa-blog"></i>
                </div>
                <div class="blog-content">
                    <div class="blog-date">${post.date} • ${post.readTime}</div>
                    <h3>${post.title}</h3>
                    <p class="blog-excerpt">${post.excerpt}</p>
                    <a href="#" class="read-more">Read More <i class="fas fa-arrow-right"></i></a>
                </div>
            `;
            
            blogGrid.appendChild(blogCard);
        });
    }
    
    // Contact form functionality
    const contactForm = document.getElementById('contact-form');
    const formStatus = document.getElementById('formStatus');
    const submitBtn = document.getElementById('submitBtn');
    const btnText = document.getElementById('btnText');
    const btnLoader = document.getElementById('btnLoader');
    
    contactForm.addEventListener('submit', function(e) {
        e.preventDefault();
        
        // Get form data
        const formData = new FormData(contactForm);
        const name = document.getElementById('name').value;
        const email = document.getElementById('email').value;
        const subject = document.getElementById('subject').value;
        const message = document.getElementById('message').value;
        
        // Simple validation
        if (!name || !email || !message) {
            showFormStatus('Please fill in all required fields.', 'error');
            return;
        }
        
        // Email validation
        const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
        if (!emailRegex.test(email)) {
            showFormStatus('Please enter a valid email address.', 'error');
            return;
        }
        
        // Show loading state
        btnText.textContent = 'Sending...';
        btnLoader.style.display = 'block';
        submitBtn.disabled = true;
        
        // Simulate form submission (replace with actual form submission)
        setTimeout(function() {
            // In a real implementation, you would send the data to a server here
            // For demonstration, we'll just show a success message
            
            // Reset form
            contactForm.reset();
            
            // Show success message
            showFormStatus('Thank you! Your message has been sent successfully. I\'ll get back to you soon.', 'success');
            
            // Reset button
            btnText.textContent = 'Send Message';
            btnLoader.style.display = 'none';
            submitBtn.disabled = false;
        }, 2000);
    });
    
    function showFormStatus(message, type) {
        formStatus.textContent = message;
        formStatus.className = `form-status ${type}`;
        formStatus.style.display = 'block';
        
        // Hide status message after 5 seconds
        setTimeout(function() {
            formStatus.style.display = 'none';
        }, 5000);
    }
    
    // Initialize all components
    renderExperience();
    renderProjects();
    renderTestimonials();
    renderBlogPosts();
    
    // Add fade-in animation to elements when they come into view
    const fadeElements = document.querySelectorAll('.timeline-item, .project-card, .blog-card');
    
    const fadeInObserver = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.classList.add('fade-in');
            }
        });
    }, { threshold: 0.1 });
    
    fadeElements.forEach(el => {
        fadeInObserver.observe(el);
    });
    
    // Smooth scrolling for anchor links
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
});
