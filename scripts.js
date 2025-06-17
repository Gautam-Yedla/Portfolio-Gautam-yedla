// Enhanced Custom Cursor
const cursor = document.querySelector('.cursor');
let mouseX = 0, mouseY = 0;

// Mouse movement tracking
document.addEventListener('mousemove', (e) => {
    mouseX = e.clientX;
    mouseY = e.clientY;
});

// Smooth cursor animation
function animateCursor() {
    cursor.style.left = mouseX + 'px';
    cursor.style.top = mouseY + 'px';
    requestAnimationFrame(animateCursor);
}
animateCursor();

// Interactive element detection
const interactiveElements = document.querySelectorAll('a, button, [data-cursor="pointer"]');
const navElements = document.querySelectorAll('.nav-links a, .logo');
const buttonElements = document.querySelectorAll('.cta-button, button');
const textElements = document.querySelectorAll('input, textarea, [contenteditable]');

// Add hover effects for different elements
interactiveElements.forEach(el => {
    el.addEventListener('mouseenter', () => cursor.classList.add('hover'));
    el.addEventListener('mouseleave', () => cursor.classList.remove('hover'));
});

navElements.forEach(el => {
    el.addEventListener('mouseenter', () => {
        cursor.classList.remove('hover');
        cursor.classList.add('nav-hover');
    });
    el.addEventListener('mouseleave', () => cursor.classList.remove('nav-hover'));
});

buttonElements.forEach(el => {
    el.addEventListener('mouseenter', () => {
        cursor.classList.remove('hover', 'nav-hover');
        cursor.classList.add('button-hover');
    });
    el.addEventListener('mouseleave', () => cursor.classList.remove('button-hover'));
});

textElements.forEach(el => {
    el.addEventListener('mouseenter', () => cursor.classList.add('text'));
    el.addEventListener('mouseleave', () => cursor.classList.remove('text'));
});

// Click effect
document.addEventListener('mousedown', () => cursor.classList.add('active'));
document.addEventListener('mouseup', () => cursor.classList.remove('active'));

// Loading state example 
function showLoading() {
    cursor.classList.add('loading');
}

function hideLoading() {
    cursor.classList.remove('loading');
}







// Enhanced Loader with Progress Animation
window.addEventListener('load', () => {
    const loader = document.querySelector('.loader');
    const percentage = document.querySelector('.loader-percentage');
    const progressBar = document.querySelector('.progress-bar');
    
    let progress = 0;
    const duration = 3000; // 3 seconds
    const interval = 50; // Update every 50ms
    const increment = 100 / (duration / interval);
    
    // Animate progress counter
    const progressInterval = setInterval(() => {
        progress += increment;
        
        if (progress >= 100) {
            progress = 100;
            clearInterval(progressInterval);
            
            // Start fade out after reaching 100%
            setTimeout(() => {
                loader.classList.add('fade-out');
                setTimeout(() => {
                    loader.style.display = 'none';
                }, 800);
            }, 500);
        }
        
        percentage.textContent = Math.round(progress) + '%';
        progressBar.style.width = progress + '%';
    }, interval);
});

// Optional: Show loading state when navigating
function showLoader() {
    const loader = document.querySelector('.loader');
    loader.style.display = 'flex';
    loader.classList.remove('fade-out');
    loader.style.opacity = '1';
}

// Optional: Trigger cursor loading state
function triggerCursorLoading() {
    const cursor = document.querySelector('.cursor');
    if (cursor) {
        cursor.classList.add('loading');
        setTimeout(() => {
            cursor.classList.remove('loading');
        }, 3000);
    }
}











// Navbar scroll effect
// Mobile menu toggle
const mobileMenu = document.querySelector('.mobile-menu');
const navLinksMenuToggle = document.querySelector('.nav-links');

mobileMenu.addEventListener('click', () => {
    navLinksMenuToggle.classList.toggle('active');
    mobileMenu.classList.toggle('active');
});

// Navbar scroll effect
window.addEventListener('scroll', () => {
    const navbar = document.getElementById('navbar');
    if (window.scrollY > 50) {
        navbar.classList.add('scrolled');
    } else {
        navbar.classList.remove('scrolled');
    }
});

// Active link highlighting
const navLinksArray = document.querySelectorAll('.nav-links a');
navLinksArray.forEach(link => {
    link.addEventListener('click', () => {
        navLinksArray.forEach(l => l.classList.remove('active'));
        link.classList.add('active');
    });
});

// Intersection Observer for animations
const observerOptions = {
    threshold: 0.1,
    rootMargin: '0px 0px -50px 0px'
};

const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            entry.target.classList.add('visible');
            
            // Animate skill bars
            if (entry.target.querySelector('.skill-progress')) {
                const progressBars = entry.target.querySelectorAll('.skill-progress');
                progressBars.forEach((bar, index) => {
                    setTimeout(() => {
                        const width = bar.style.width;
                        bar.style.width = '0%';
                        setTimeout(() => {
                            bar.style.width = width;
                        }, 100);
                    }, index * 200);
                });
            }
        }
    });
}, observerOptions);

// Observe all fade-in elements
document.querySelectorAll('.fade-in').forEach(el => {
    observer.observe(el);
});

// Create floating particles
function createParticles() {
    const particlesContainer = document.querySelector('.particles');
    const particleCount = 50;

    for (let i = 0; i < particleCount; i++) {
        const particle = document.createElement('div');
        particle.className = 'particle';
        
        // Random size between 2-6px
        const size = Math.random() * 4 + 2;
        particle.style.width = size + 'px';
        particle.style.height = size + 'px';
        
        // Random horizontal position
        particle.style.left = Math.random() * 100 + '%';
        
        // Random animation delay
        particle.style.animationDelay = Math.random() * 20 + 's';
        
        // Random animation duration
        particle.style.animationDuration = (Math.random() * 10 + 15) + 's';
        
        particlesContainer.appendChild(particle);
    }
}

// Initialize particles
createParticles();

// Parallax effect for hero background
window.addEventListener('scroll', () => {
    const scrolled = window.pageYOffset;
    const parallax = document.querySelector('.hero-bg');
    const speed = scrolled * 0.5;
    
    if (parallax) {
        parallax.style.transform = `translateY(${speed}px)`;
    }
});

// Typing effect for hero title
function typeWriter(element, text, speed = 100) {
    let i = 0;
    element.innerHTML = '';
    
    function type() {
        if (i < text.length) {
            element.innerHTML += text.charAt(i);
            i++;
            setTimeout(type, speed);
        }
    }
    
    setTimeout(type, 1000);
}

// Initialize typing effect after loader
setTimeout(() => {
    const heroTitle = document.querySelector('.hero-title');
    if (heroTitle) {
        const originalText = heroTitle.textContent;
        typeWriter(heroTitle, originalText, 150);
    }
}, 3000);

// Mobile menu functionality
const mobileMenuBtn = document.querySelector('.mobile-menu');
const navLinks = document.querySelector('.nav-links');

mobileMenuBtn?.addEventListener('click', () => {
    navLinks.style.display = navLinks.style.display === 'flex' ? 'none' : 'flex';
    if (navLinks.style.display === 'flex') {
        navLinks.style.position = 'absolute';
        navLinks.style.top = '100%';
        navLinks.style.left = '0';
        navLinks.style.right = '0';
        navLinks.style.background = 'rgba(15, 23, 42, 0.95)';
        navLinks.style.flexDirection = 'column';
        navLinks.style.padding = '1rem';
        navLinks.style.borderRadius = '0 0 10px 10px';
    }
});

// Close mobile menu when clicking outside
document.addEventListener('click', (e) => {
    if (!e.target.closest('.nav-container')) {
        if (window.innerWidth <= 768) {
            navLinks.style.display = 'none';
        }
    }
});

// Dynamic gradient animation
function animateGradient() {
    const gradientElements = document.querySelectorAll('.skill-progress, .cta-button');
    
    gradientElements.forEach(element => {
        element.addEventListener('mouseenter', () => {
            element.style.background = 'linear-gradient(135deg, #6366f1, #8b5cf6, #06b6d4)';
            element.style.backgroundSize = '200% 200%';
            element.style.animation = 'gradientShift 2s ease infinite';
        });
        
        element.addEventListener('mouseleave', () => {
            element.style.background = 'linear-gradient(135deg, #6366f1, #8b5cf6)';
            element.style.animation = 'none';
        });
    });
}

// Add gradient shift animation
const style = document.createElement('style');
style.textContent = `
    @keyframes gradientShift {
        0% { background-position: 0% 50%; }
        50% { background-position: 100% 50%; }
        100% { background-position: 0% 50%; }
    }
`;
document.head.appendChild(style);

// Initialize gradient animations
animateGradient();

// Scroll progress indicator
function createScrollProgress() {
    const progressBar = document.createElement('div');
    progressBar.style.cssText = `
        position: fixed;
        top: 0;
        left: 0;
        width: 0%;
        height: 3px;
        background: linear-gradient(90deg, #6366f1, #8b5cf6);
        z-index: 10001;
        transition: width 0.3s ease;
    `;
    document.body.appendChild(progressBar);

    window.addEventListener('scroll', () => {
        const scrollTop = window.pageYOffset;
        const docHeight = document.body.offsetHeight - window.innerHeight;
        const scrollPercent = (scrollTop / docHeight) * 100;
        progressBar.style.width = scrollPercent + '%';
    });
}

createScrollProgress();

// Enhanced cursor interactions
document.querySelectorAll('a, button, .skill-card, .project-card').forEach(element => {
    element.addEventListener('mouseenter', () => {
        cursor.style.transform = 'scale(1.5)';
        cursor.style.background = 'rgba(99, 102, 241, 0.3)';
    });
    
    element.addEventListener('mouseleave', () => {
        cursor.style.transform = 'scale(1)';
        cursor.style.background = 'none';
    });
});





// Lazy loading for project images
function lazyLoadImages() {
    const imageObserver = new IntersectionObserver((entries, observer) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                const img = entry.target;
                // Add shimmer effect
                img.style.animation = 'shimmer 1.5s ease-in-out infinite';
                observer.unobserve(img);
            }
        });
    });

    document.querySelectorAll('.project-image').forEach(img => {
        imageObserver.observe(img);
    });
}

lazyLoadImages();

// Easter egg: Konami code
let konamiCode = [];
const targetCode = [38, 38, 40, 40, 37, 39, 37, 39, 66, 65]; // ↑↑↓↓←→←→BA

document.addEventListener('keydown', (e) => {
    konamiCode.push(e.keyCode);
    if (konamiCode.length > targetCode.length) {
        konamiCode.shift();
    }
    
    if (konamiCode.length === targetCode.length && 
        konamiCode.every((code, index) => code === targetCode[index])) {
        // Easter egg animation
        document.body.style.animation = 'rainbow 2s ease-in-out';
        setTimeout(() => {
            document.body.style.animation = 'none';
        }, 2000);
        
        // Add rainbow animation
        const rainbowStyle = document.createElement('style');
        rainbowStyle.textContent = `
            @keyframes rainbow {
                0% { filter: hue-rotate(0deg); }
                25% { filter: hue-rotate(90deg); }
                50% { filter: hue-rotate(180deg); }
                75% { filter: hue-rotate(270deg); }
                100% { filter: hue-rotate(360deg); }
            }
        `;
        document.head.appendChild(rainbowStyle);
        
        konamiCode = [];
    }
});

// Performance optimization: Throttle scroll events
function throttle(func, limit) {
    let inThrottle;
    return function() {
        const args = arguments;
        const context = this;
        if (!inThrottle) {
            func.apply(context, args);
            inThrottle = true;
            setTimeout(() => inThrottle = false, limit);
        }
    }
}

// Apply throttling to scroll events
window.addEventListener('scroll', throttle(() => {
    // Existing scroll handlers here
}, 16)); // ~60fps

// Preload critical resources
function preloadResources() {
    const criticalResources = [
        // Add any image URLs here if you had actual images
    ];
    
    criticalResources.forEach(src => {
        const link = document.createElement('link');
        link.rel = 'preload';
        link.as = 'image';
        link.href = src;
        document.head.appendChild(link);
    });
}

preloadResources();

console.log('🚀 Portfolio loaded successfully!');
console.log('💡 Try the Konami code: ↑↑↓↓←→←→BA');