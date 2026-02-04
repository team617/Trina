/**
 * Trina Requena Website
 * Main JavaScript File
 */

document.addEventListener('DOMContentLoaded', function() {
  
  // =============================================
  // HEADER SCROLL EFFECT
  // =============================================
  const header = document.getElementById('header');
  
  function handleScroll() {
    if (window.scrollY > 50) {
      header.classList.add('scrolled');
    } else {
      header.classList.remove('scrolled');
    }
  }
  
  window.addEventListener('scroll', handleScroll);
  handleScroll(); // Check on load
  
  
  // =============================================
  // MOBILE MENU TOGGLE
  // =============================================
  const menuToggle = document.getElementById('menu-toggle');
  const navList = document.getElementById('nav-list');
  
  if (menuToggle && navList) {
    menuToggle.addEventListener('click', function() {
      navList.classList.toggle('active');
      menuToggle.classList.toggle('active');
      
      // Toggle aria-expanded
      const isExpanded = navList.classList.contains('active');
      menuToggle.setAttribute('aria-expanded', isExpanded);
    });
    
    // Close menu when clicking a link
    const navLinks = navList.querySelectorAll('.nav__link');
    navLinks.forEach(link => {
      link.addEventListener('click', function() {
        navList.classList.remove('active');
        menuToggle.classList.remove('active');
      });
    });
    
    // Close menu when clicking outside
    document.addEventListener('click', function(event) {
      if (!navList.contains(event.target) && !menuToggle.contains(event.target)) {
        navList.classList.remove('active');
        menuToggle.classList.remove('active');
      }
    });
  }
  
  
  // =============================================
  // SCROLL ANIMATIONS (Intersection Observer)
  // =============================================
  const animatedElements = document.querySelectorAll('.animate-on-scroll');
  
  if (animatedElements.length > 0 && 'IntersectionObserver' in window) {
    const observerOptions = {
      root: null,
      rootMargin: '0px',
      threshold: 0.1
    };
    
    const observer = new IntersectionObserver((entries, observer) => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          entry.target.classList.add('visible');
          observer.unobserve(entry.target); // Stop observing once animated
        }
      });
    }, observerOptions);
    
    animatedElements.forEach(element => {
      observer.observe(element);
    });
  } else {
    // Fallback for browsers without IntersectionObserver
    animatedElements.forEach(element => {
      element.classList.add('visible');
    });
  }
  
  
  // =============================================
  // SMOOTH SCROLL FOR ANCHOR LINKS
  // =============================================
  const anchorLinks = document.querySelectorAll('a[href^="#"]');
  
  anchorLinks.forEach(link => {
    link.addEventListener('click', function(e) {
      const href = this.getAttribute('href');
      
      if (href === '#') return;
      
      const target = document.querySelector(href);
      
      if (target) {
        e.preventDefault();
        
        const headerHeight = header.offsetHeight;
        const targetPosition = target.getBoundingClientRect().top + window.pageYOffset - headerHeight - 20;
        
        window.scrollTo({
          top: targetPosition,
          behavior: 'smooth'
        });
      }
    });
  });
  
  
  // =============================================
  // ACTIVE NAV LINK HIGHLIGHTING
  // =============================================
  function setActiveNavLink() {
    const currentPage = window.location.pathname.split('/').pop() || 'index.html';
    const navLinks = document.querySelectorAll('.nav__link');
    
    navLinks.forEach(link => {
      const href = link.getAttribute('href');
      if (href === currentPage) {
        link.classList.add('active');
      } else {
        link.classList.remove('active');
      }
    });
  }
  
  setActiveNavLink();
  
  
  // =============================================
  // LAZY LOADING IMAGES (Native + Fallback)
  // =============================================
  const lazyImages = document.querySelectorAll('img[data-src]');
  
  if (lazyImages.length > 0) {
    if ('loading' in HTMLImageElement.prototype) {
      // Native lazy loading supported
      lazyImages.forEach(img => {
        img.src = img.dataset.src;
        img.removeAttribute('data-src');
      });
    } else if ('IntersectionObserver' in window) {
      // Fallback to IntersectionObserver
      const imageObserver = new IntersectionObserver((entries, observer) => {
        entries.forEach(entry => {
          if (entry.isIntersecting) {
            const img = entry.target;
            img.src = img.dataset.src;
            img.removeAttribute('data-src');
            observer.unobserve(img);
          }
        });
      });
      
      lazyImages.forEach(img => imageObserver.observe(img));
    } else {
      // Final fallback: load all images
      lazyImages.forEach(img => {
        img.src = img.dataset.src;
        img.removeAttribute('data-src');
      });
    }
  }
  
  
  // =============================================
  // FORM VALIDATION (if contact form is present)
  // =============================================
  const contactForm = document.getElementById('contact-form');
  
  if (contactForm) {
    contactForm.addEventListener('submit', function(e) {
      e.preventDefault();
      
      // Get form fields
      const name = document.getElementById('name');
      const email = document.getElementById('email');
      const message = document.getElementById('message');
      
      let isValid = true;
      
      // Simple validation
      if (name && name.value.trim() === '') {
        isValid = false;
        name.classList.add('error');
      } else if (name) {
        name.classList.remove('error');
      }
      
      if (email && !isValidEmail(email.value)) {
        isValid = false;
        email.classList.add('error');
      } else if (email) {
        email.classList.remove('error');
      }
      
      if (message && message.value.trim() === '') {
        isValid = false;
        message.classList.add('error');
      } else if (message) {
        message.classList.remove('error');
      }
      
      if (isValid) {
        // Form is valid - you can submit it here
        console.log('Form submitted successfully');
        // contactForm.submit(); // Uncomment to actually submit
      }
    });
  }
  
  function isValidEmail(email) {
    const re = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return re.test(email);
  }
  
  
  // =============================================
  // PRELOAD CRITICAL FONTS
  // =============================================
  if ('fonts' in document) {
    document.fonts.ready.then(function() {
      document.body.classList.add('fonts-loaded');
    });
  }
  
  
  // =============================================
  // CONSOLE WELCOME MESSAGE
  // =============================================
  console.log('%c✨ Trina Requena - Integrative Alignment Guide', 
    'color: #014544; font-size: 16px; font-weight: bold;');
  console.log('%cAligning body, mind, and heart.', 
    'color: #c09c80; font-size: 12px;');
  
});
