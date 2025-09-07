// Advanced XR Chemistry Lab Animations & Effects

class XRAnimationEngine {
    constructor() {
        this.particles = [];
        this.molecules = [];
        this.gestureAnimations = new Map();
        this.init();
    }

    init() {
        this.createParticleSystem();
        this.initMolecularAnimations();
        this.setupGestureVisualizations();
        this.initAdvancedInteractions();
        this.startAnimationLoop();
    }

    // Particle System
    createParticleSystem() {
        const particleContainer = document.createElement('div');
        particleContainer.className = 'particles';
        document.body.appendChild(particleContainer);

        for (let i = 0; i < 50; i++) {
            this.createParticle(particleContainer);
        }
    }

    createParticle(container) {
        const particle = document.createElement('div');
        particle.className = 'particle';
        
        // Random positioning and properties
        particle.style.left = Math.random() * 100 + '%';
        particle.style.animationDelay = Math.random() * 15 + 's';
        particle.style.animationDuration = (15 + Math.random() * 10) + 's';
        
        // Random colors from XR palette
        const colors = ['var(--neon-blue)', 'var(--neon-purple)', 'var(--neon-green)', 'var(--neon-pink)'];
        particle.style.background = colors[Math.floor(Math.random() * colors.length)];
        
        container.appendChild(particle);
        this.particles.push(particle);
    }

    // Molecular Animations
    initMolecularAnimations() {
        const moleculeContainers = document.querySelectorAll('.molecule-container');
        moleculeContainers.forEach(container => {
            this.createMolecule(container);
        });
    }

    createMolecule(container) {
        const atoms = ['atom-1', 'atom-2', 'atom-3', 'atom-4'];
        const colors = ['var(--neon-blue)', 'var(--neon-purple)', 'var(--neon-green)', 'var(--neon-pink)'];
        
        atoms.forEach((atomClass, index) => {
            const atom = document.createElement('div');
            atom.className = `atom ${atomClass}`;
            atom.style.background = colors[index];
            atom.style.boxShadow = `0 0 20px ${colors[index]}`;
            container.appendChild(atom);
        });
    }

    // Gesture Visualizations
    setupGestureVisualizations() {
        const gestureCards = document.querySelectorAll('.gesture-card');
        gestureCards.forEach((card, index) => {
            this.createGestureVisualization(card, index);
        });
    }

    createGestureVisualization(card, index) {
        const visual = document.createElement('div');
        visual.className = 'gesture-visual';
        
        const gestureDemo = card.querySelector('.gesture-demo');
        if (gestureDemo) {
            gestureDemo.appendChild(visual);
            
            // Add interactive hover effects
            card.addEventListener('mouseenter', () => {
                this.animateGesture(visual, index);
            });
        }
    }

    animateGesture(visual, gestureType) {
        const animations = {
            0: this.animatePinchGesture,
            1: this.animateGrabGesture,
            2: this.animatePourGesture,
            3: this.animateStirGesture,
            4: this.animateIgniteGesture,
            5: this.animateScaleGesture,
            6: this.animateRotateGesture
        };

        const animation = animations[gestureType];
        if (animation) {
            animation.call(this, visual);
        }
    }

    animatePinchGesture(visual) {
        visual.style.animation = 'none';
        setTimeout(() => {
            visual.style.animation = 'pinchAnimation 2s ease-in-out';
        }, 10);
    }

    animateGrabGesture(visual) {
        visual.style.animation = 'grabAnimation 2s ease-in-out';
    }

    animatePourGesture(visual) {
        visual.style.animation = 'pourAnimation 3s ease-in-out';
    }

    animateStirGesture(visual) {
        visual.style.animation = 'stirAnimation 2s ease-in-out infinite';
    }

    animateIgniteGesture(visual) {
        visual.style.animation = 'igniteAnimation 1.5s ease-in-out';
    }

    animateScaleGesture(visual) {
        visual.style.animation = 'scaleAnimation 2s ease-in-out';
    }

    animateRotateGesture(visual) {
        visual.style.animation = 'rotateAnimation 3s ease-in-out infinite';
    }

    // Advanced Interactions
    initAdvancedInteractions() {
        this.setupParallaxEffects();
        this.setupMorphingCards();
        this.setupHolographicEffects();
        this.setupQuantumButtons();
    }

    setupParallaxEffects() {
        window.addEventListener('mousemove', (e) => {
            const mouseX = e.clientX / window.innerWidth;
            const mouseY = e.clientY / window.innerHeight;
            
            const floatingElements = document.querySelectorAll('.floating-element');
            floatingElements.forEach((element, index) => {
                const speed = (index + 1) * 0.02;
                const x = (mouseX - 0.5) * speed * 100;
                const y = (mouseY - 0.5) * speed * 100;
                
                element.style.transform = `translate(${x}px, ${y}px) rotateX(${y * 0.1}deg) rotateY(${x * 0.1}deg)`;
            });
        });
    }

    setupMorphingCards() {
        const cards = document.querySelectorAll('.glass-card');
        cards.forEach(card => {
            card.addEventListener('mouseenter', (e) => {
                this.morphCard(card, e);
            });
            
            card.addEventListener('mouseleave', () => {
                this.resetCard(card);
            });
        });
    }

    morphCard(card, event) {
        const rect = card.getBoundingClientRect();
        const x = event.clientX - rect.left;
        const y = event.clientY - rect.top;
        
        const centerX = rect.width / 2;
        const centerY = rect.height / 2;
        
        const rotateX = (y - centerY) / 10;
        const rotateY = (centerX - x) / 10;
        
        card.style.transform = `
            perspective(1000px) 
            rotateX(${rotateX}deg) 
            rotateY(${rotateY}deg) 
            translateZ(20px)
            scale(1.02)
        `;
        
        card.style.boxShadow = `
            ${-rotateY}px ${rotateX}px 50px rgba(0, 212, 255, 0.3),
            0 0 0 1px var(--neon-blue)
        `;
    }

    resetCard(card) {
        card.style.transform = 'perspective(1000px) rotateX(0deg) rotateY(0deg) translateZ(0px) scale(1)';
        card.style.boxShadow = '0 8px 32px rgba(0, 0, 0, 0.3)';
    }

    setupHolographicEffects() {
        const holographicElements = document.querySelectorAll('.holographic-text');
        holographicElements.forEach(element => {
            this.createHolographicGlitch(element);
        });
    }

    createHolographicGlitch(element) {
        setInterval(() => {
            if (Math.random() < 0.1) { // 10% chance every interval
                element.style.textShadow = `
                    2px 0 var(--neon-blue),
                    -2px 0 var(--neon-pink),
                    0 2px var(--neon-green),
                    0 -2px var(--neon-purple)
                `;
                
                setTimeout(() => {
                    element.style.textShadow = 'none';
                }, 100);
            }
        }, 200);
    }

    setupQuantumButtons() {
        const buttons = document.querySelectorAll('.btn-neon');
        buttons.forEach(button => {
            this.addQuantumEffect(button);
        });
    }

    addQuantumEffect(button) {
        button.addEventListener('click', (e) => {
            const ripple = document.createElement('div');
            ripple.className = 'quantum-ripple';
            
            const rect = button.getBoundingClientRect();
            const size = Math.max(rect.width, rect.height);
            const x = e.clientX - rect.left - size / 2;
            const y = e.clientY - rect.top - size / 2;
            
            ripple.style.width = ripple.style.height = size + 'px';
            ripple.style.left = x + 'px';
            ripple.style.top = y + 'px';
            
            button.appendChild(ripple);
            
            setTimeout(() => {
                ripple.remove();
            }, 600);
        });
    }

    // Animation Loop
    startAnimationLoop() {
        const animate = () => {
            this.updateParticles();
            this.updateMolecules();
            requestAnimationFrame(animate);
        };
        animate();
    }

    updateParticles() {
        // Dynamic particle updates can be added here
        // For now, CSS animations handle the movement
    }

    updateMolecules() {
        // Dynamic molecular updates can be added here
        // For now, CSS animations handle the orbital motion
    }

    // Utility Methods
    createFloatingElements() {
        const heroSection = document.querySelector('.hero-section');
        if (!heroSection) return;

        for (let i = 0; i < 3; i++) {
            const element = document.createElement('div');
            element.className = 'floating-element';
            element.innerHTML = this.getRandomIcon();
            heroSection.appendChild(element);
        }
    }

    getRandomIcon() {
        const icons = [
            '<i class="fas fa-atom fa-3x" style="color: var(--neon-blue);"></i>',
            '<i class="fas fa-dna fa-3x" style="color: var(--neon-purple);"></i>',
            '<i class="fas fa-flask fa-3x" style="color: var(--neon-green);"></i>'
        ];
        return icons[Math.floor(Math.random() * icons.length)];
    }

    // Performance Monitoring
    monitorPerformance() {
        let frameCount = 0;
        let lastTime = performance.now();
        
        const checkFPS = () => {
            frameCount++;
            const currentTime = performance.now();
            
            if (currentTime - lastTime >= 1000) {
                const fps = Math.round((frameCount * 1000) / (currentTime - lastTime));
                console.log(`XR Animation FPS: ${fps}`);
                
                // Adjust quality based on performance
                if (fps < 30) {
                    this.reduceAnimationQuality();
                } else if (fps > 50) {
                    this.increaseAnimationQuality();
                }
                
                frameCount = 0;
                lastTime = currentTime;
            }
            
            requestAnimationFrame(checkFPS);
        };
        
        checkFPS();
    }

    reduceAnimationQuality() {
        // Reduce particle count
        const particlesToRemove = this.particles.slice(0, 10);
        particlesToRemove.forEach(particle => {
            particle.remove();
        });
        this.particles = this.particles.slice(10);
    }

    increaseAnimationQuality() {
        // Add more particles if performance allows
        if (this.particles.length < 50) {
            const container = document.querySelector('.particles');
            for (let i = 0; i < 5; i++) {
                this.createParticle(container);
            }
        }
    }
}

// CSS Keyframes for Gesture Animations
const gestureAnimationCSS = `
@keyframes pinchAnimation {
    0%, 100% { transform: scale(1); }
    50% { transform: scale(0.8); border-color: var(--neon-purple); }
}

@keyframes grabAnimation {
    0%, 100% { transform: scale(1) rotate(0deg); }
    25% { transform: scale(1.1) rotate(5deg); }
    75% { transform: scale(0.9) rotate(-5deg); }
}

@keyframes pourAnimation {
    0%, 100% { transform: rotate(0deg); }
    50% { transform: rotate(45deg) translateX(10px); }
}

@keyframes stirAnimation {
    0% { transform: rotate(0deg); }
    100% { transform: rotate(360deg); }
}

@keyframes igniteAnimation {
    0%, 100% { 
        box-shadow: 0 0 20px var(--neon-blue);
        background: var(--neon-blue);
    }
    50% { 
        box-shadow: 0 0 40px var(--neon-orange);
        background: var(--neon-orange);
    }
}

@keyframes scaleAnimation {
    0%, 100% { transform: scale(1); }
    50% { transform: scale(1.3); }
}

@keyframes rotateAnimation {
    0% { transform: rotateY(0deg) rotateX(0deg); }
    25% { transform: rotateY(90deg) rotateX(0deg); }
    50% { transform: rotateY(180deg) rotateX(90deg); }
    75% { transform: rotateY(270deg) rotateX(180deg); }
    100% { transform: rotateY(360deg) rotateX(360deg); }
}

.quantum-ripple {
    position: absolute;
    border-radius: 50%;
    background: radial-gradient(circle, var(--neon-blue) 0%, transparent 70%);
    transform: scale(0);
    animation: quantumRipple 0.6s ease-out;
    pointer-events: none;
}

@keyframes quantumRipple {
    to {
        transform: scale(2);
        opacity: 0;
    }
}
`;

// Initialize Animation Engine
document.addEventListener('DOMContentLoaded', () => {
    // Add gesture animation CSS
    const style = document.createElement('style');
    style.textContent = gestureAnimationCSS;
    document.head.appendChild(style);
    
    // Initialize XR Animation Engine
    window.xrAnimationEngine = new XRAnimationEngine();
    
    // Start performance monitoring
    window.xrAnimationEngine.monitorPerformance();
    
    // Create floating elements
    window.xrAnimationEngine.createFloatingElements();
});

// Export for external use
window.XRAnimationEngine = XRAnimationEngine;
