// Advanced Chemistry Animations for XR Lab Website

document.addEventListener('DOMContentLoaded', function() {
    // Initialize all animations
    initParticleSystem();
    initChemicalReactions();
    initScrollAnimations();
    initLoadingAnimation();
    
    // Remove loading screen after page loads
    setTimeout(() => {
        const loader = document.querySelector('.loading-container');
        if (loader) {
            loader.classList.add('hidden');
            setTimeout(() => loader.remove(), 500);
        }
    }, 2000);
});

// Particle System for Background Effects
function initParticleSystem() {
    const particlesContainer = document.querySelector('.particles');
    if (!particlesContainer) return;
    
    // Create additional particles dynamically
    for (let i = 0; i < 20; i++) {
        const particle = document.createElement('div');
        particle.className = 'particle';
        particle.style.left = Math.random() * 100 + '%';
        particle.style.animationDelay = Math.random() * 10 + 's';
        particle.style.animationDuration = (6 + Math.random() * 4) + 's';
        
        // Random colors for particles
        const colors = ['#ff1744', '#00bcd4', '#4caf50', '#ffeb3b', '#9c27b0'];
        particle.style.background = colors[Math.floor(Math.random() * colors.length)];
        
        particlesContainer.appendChild(particle);
    }
}

// Enhanced Chemical Reactions
function initChemicalReactions() {
    const beakers = document.querySelectorAll('.beaker');
    const testTubes = document.querySelectorAll('.test-tube');
    
    // Add interactive hover effects
    [...beakers, ...testTubes].forEach((container, index) => {
        container.addEventListener('mouseenter', () => {
            const liquid = container.querySelector('.chemical-liquid');
            if (liquid) {
                liquid.style.animationDuration = '0.5s';
                liquid.style.transform = 'scaleY(1.2)';
            }
            
            // Add glow effect
            container.style.boxShadow = '0 0 30px rgba(255, 23, 68, 0.6)';
        });
        
        container.addEventListener('mouseleave', () => {
            const liquid = container.querySelector('.chemical-liquid');
            if (liquid) {
                liquid.style.animationDuration = '2s';
                liquid.style.transform = 'scaleY(1)';
            }
            
            container.style.boxShadow = 'none';
        });
        
        // Add click reaction effect
        container.addEventListener('click', () => {
            createReactionBurst(container);
        });
    });
}

// Create reaction burst effect
function createReactionBurst(container) {
    const burst = document.createElement('div');
    burst.style.position = 'absolute';
    burst.style.top = '50%';
    burst.style.left = '50%';
    burst.style.width = '100px';
    burst.style.height = '100px';
    burst.style.background = 'radial-gradient(circle, rgba(255,23,68,0.8) 0%, transparent 70%)';
    burst.style.borderRadius = '50%';
    burst.style.transform = 'translate(-50%, -50%) scale(0)';
    burst.style.animation = 'reactionBurst 0.6s ease-out forwards';
    burst.style.pointerEvents = 'none';
    burst.style.zIndex = '10';
    
    container.style.position = 'relative';
    container.appendChild(burst);
    
    setTimeout(() => burst.remove(), 600);
}

// Scroll-triggered animations
function initScrollAnimations() {
    const observerOptions = {
        threshold: 0.1,
        rootMargin: '0px 0px -50px 0px'
    };
    
    const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.classList.add('animate-in');
                
                // Animate stats numbers
                if (entry.target.classList.contains('stat-number')) {
                    animateNumber(entry.target);
                }
                
                // Stagger card animations
                if (entry.target.classList.contains('chemistry-card')) {
                    const cards = document.querySelectorAll('.chemistry-card');
                    cards.forEach((card, index) => {
                        setTimeout(() => {
                            card.style.opacity = '1';
                            card.style.transform = 'translateY(0)';
                        }, index * 100);
                    });
                }
            }
        });
    }, observerOptions);
    
    // Observe elements for animation
    document.querySelectorAll('.chemistry-card, .stat-number, .hero-content').forEach(el => {
        el.style.opacity = '0';
        el.style.transform = 'translateY(30px)';
        el.style.transition = 'all 0.6s ease';
        observer.observe(el);
    });
}

// Animate numbers counting up
function animateNumber(element) {
    const target = parseInt(element.textContent.replace(/[^\d]/g, ''));
    const duration = 2000;
    const step = target / (duration / 16);
    let current = 0;
    
    const timer = setInterval(() => {
        current += step;
        if (current >= target) {
            current = target;
            clearInterval(timer);
        }
        
        // Format number with original suffix
        const originalText = element.textContent;
        const suffix = originalText.replace(/[\d]/g, '');
        element.textContent = Math.floor(current) + suffix;
    }, 16);
}

// Loading animation
function initLoadingAnimation() {
    // Create loading screen if it doesn't exist
    if (!document.querySelector('.loading-container')) {
        const loader = document.createElement('div');
        loader.className = 'loading-container';
        loader.innerHTML = `
            <div class="loading-beaker">
                <div class="loading-liquid"></div>
            </div>
        `;
        document.body.appendChild(loader);
    }
}

// Enhanced button interactions
document.addEventListener('DOMContentLoaded', function() {
    const buttons = document.querySelectorAll('.btn-chemistry, .btn-outline-chemistry');
    
    buttons.forEach(button => {
        button.addEventListener('click', function(e) {
            // Create ripple effect
            const ripple = document.createElement('span');
            const rect = button.getBoundingClientRect();
            const size = Math.max(rect.width, rect.height);
            const x = e.clientX - rect.left - size / 2;
            const y = e.clientY - rect.top - size / 2;
            
            ripple.style.width = ripple.style.height = size + 'px';
            ripple.style.left = x + 'px';
            ripple.style.top = y + 'px';
            ripple.classList.add('ripple');
            
            button.appendChild(ripple);
            
            setTimeout(() => ripple.remove(), 600);
        });
    });
});

// Navbar scroll effect
window.addEventListener('scroll', () => {
    const navbar = document.querySelector('.navbar');
    if (window.scrollY > 50) {
        navbar.style.background = 'rgba(10, 10, 10, 0.98)';
        navbar.style.backdropFilter = 'blur(20px)';
    } else {
        navbar.style.background = 'rgba(10, 10, 10, 0.95)';
        navbar.style.backdropFilter = 'blur(20px)';
    }
});

// Add CSS for animations
const style = document.createElement('style');
style.textContent = `
    @keyframes reactionBurst {
        0% {
            transform: translate(-50%, -50%) scale(0);
            opacity: 1;
        }
        100% {
            transform: translate(-50%, -50%) scale(2);
            opacity: 0;
        }
    }
    
    .animate-in {
        opacity: 1 !important;
        transform: translateY(0) !important;
    }
    
    .ripple {
        position: absolute;
        border-radius: 50%;
        background: rgba(255, 255, 255, 0.3);
        transform: scale(0);
        animation: rippleEffect 0.6s linear;
        pointer-events: none;
    }
    
    @keyframes rippleEffect {
        to {
            transform: scale(2);
            opacity: 0;
        }
    }
    
    .chemistry-card {
        transition: all 0.3s ease;
    }
    
    .chemistry-card:hover {
        transform: translateY(-10px) !important;
    }
`;
document.head.appendChild(style);
