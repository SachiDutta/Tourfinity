// Animated counter for stats
// function animateCounter(element, target) {
//     const duration = 2000;
//     const increment = target / (duration / 16);
//     let current = 0;
    
//     const timer = setInterval(() => {
//         current += increment;
//         if (current >= target) {
//             current = target;
//             clearInterval(timer);
//         }
        
//         // Format large numbers
//         let displayValue;
//         if (target >= 1000000) {
//             displayValue = (current / 1000000).toFixed(1) + 'M+';
//         } else if (target >= 1000) {
//             displayValue = Math.floor(current / 1000) + 'K+';
//         } else {
//             displayValue = Math.floor(current);
//         }
//         element.textContent = displayValue;
//     }, 16);
// }

// Intersection Observer for animations
const observerOptions = {
    threshold: 0.5,
    rootMargin: '0px'
};

const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            // Animate stat numbers
            if (entry.target.classList.contains('stat-number')) {
                const target = parseInt(entry.target.dataset.count);
                animateCounter(entry.target, target);
                observer.unobserve(entry.target);
            }
            
            // Add reveal animation to cards
            if (entry.target.classList.contains('value-card') || 
                entry.target.classList.contains('feature-card') ||
                entry.target.classList.contains('intro-card')) {
                entry.target.style.opacity = '1';
                entry.target.style.transform = 'translateY(0)';
                observer.unobserve(entry.target);
            }
        }
    });
}, observerOptions);

// Initialize animations when DOM is loaded
document.addEventListener('DOMContentLoaded', () => {
    // Observe stat numbers for counter animation
    document.querySelectorAll('.stat-number[data-count]').forEach(stat => {
        observer.observe(stat);
    });
    
    // Set initial state for cards and observe them
    document.querySelectorAll('.value-card, .feature-card, .intro-card').forEach(card => {
        card.style.opacity = '0';
        card.style.transform = 'translateY(30px)';
        card.style.transition = 'opacity 0.6s ease, transform 0.6s ease';
        observer.observe(card);
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
    
    // Add scroll effect to navbar
    let lastScrollTop = 0;
    window.addEventListener('scroll', () => {
        const scrollTop = window.pageYOffset || document.documentElement.scrollTop;
        const navbar = document.querySelector('.navbar');
        
        if (scrollTop > 100) {
            navbar.style.background = 'rgba(255, 255, 255, 0.98)';
            navbar.style.boxShadow = '0 4px 20px rgba(0, 0, 0, 0.1)';
        } else {
            navbar.style.background = 'rgba(255, 255, 255, 0.95)';
            navbar.style.boxShadow = 'none';
        }
        
        lastScrollTop = scrollTop;
    });
});

// Add click handlers for intro cards
document.addEventListener('DOMContentLoaded', () => {
    document.querySelectorAll('.intro-card').forEach(card => {
        card.addEventListener('click', function() {
            const href = this.getAttribute('onclick').match(/location\.href='([^']+)'/);
            if (href) {
                window.location.href = href[1];
            }
        });
    });
});