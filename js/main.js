

// Modal and carousel functionality
let currentCarouselIndex = 0;
let currentGameMedia = [];

// Initialize modal functionality
function initializeModals() {
    const gameCards = document.querySelectorAll('.game-card');
    const gameButtons = document.querySelectorAll('.game-details-btn');
    const modalOverlay = document.getElementById('modal-overlay');
    const modalClose = document.getElementById('modal-close');

    // Handle both card clicks and button clicks for detailed cards only
    gameCards.forEach(card => {
        // Only add modal functionality to cards with data-game attribute
        if (card.hasAttribute('data-game') && !card.classList.contains('simple-card') && !card.classList.contains('coming-soon-card')) {
            card.addEventListener('click', (e) => {
                // Don't trigger if clicking the button directly
                if (!e.target.classList.contains('game-details-btn')) {
                    const gameId = card.getAttribute('data-game');
                    openGameModal(gameId);
                }
            });
        }
    });

    // Handle button clicks specifically for detailed games
    gameButtons.forEach(button => {
        button.addEventListener('click', (e) => {
            e.stopPropagation(); // Prevent card click
            const gameCard = button.closest('.game-card');
            if (gameCard && gameCard.hasAttribute('data-game')) {
                const gameId = gameCard.getAttribute('data-game');
                openGameModal(gameId);
            }
        });
    });

    if (modalClose) {
        modalClose.addEventListener('click', closeModal);
    }
    
    if (modalOverlay) {
        modalOverlay.addEventListener('click', (e) => {
            if (e.target === modalOverlay) {
                closeModal();
            }
        });
    }

    document.addEventListener('keydown', (e) => {
        if (e.key === 'Escape') {
            closeModal();
        }
    });
}

// Open game modal with data
function openGameModal(gameId) {
    const game = gameData[gameId];
    if (!game) return;

    // Update modal content
    document.getElementById('modal-title').textContent = game.title;
    
    // Update game links
    updateGameLinks(game.platforms);
    
    // Update media carousel
    updateMediaCarousel(game.media);
    
    // Update game information
    updateGameInfo(game);
    
    // Show modal
    document.getElementById('modal-overlay').classList.add('active');
    document.body.style.overflow = 'hidden';
}

// Close modal
function closeModal() {
    document.getElementById('modal-overlay').classList.remove('active');
    document.body.style.overflow = '';
}

// Update game platform links
function updateGameLinks(platforms) {
    const linksContainer = document.getElementById('game-links');
    linksContainer.innerHTML = '';
    
    platforms.forEach(platform => {
        const link = document.createElement('a');
        link.href = platform.url;
        link.target = '_blank';
        link.className = `platform-link ${platform.class}`;
        link.innerHTML = `
            <span>${getPlatformIcon(platform.class)}</span>
            <span>${platform.name}</span>
        `;
        linksContainer.appendChild(link);
    });
}

// Get platform icon
function getPlatformIcon(platformClass) {
    const icons = {
        steam: '🎮',
        itch: '🎯',
        epic: '⚡'
    };
    return icons[platformClass] || '🎮';
}

// Update media carousel
function updateMediaCarousel(media) {
    currentGameMedia = media;
    currentCarouselIndex = 0;
    
    const track = document.getElementById('carousel-track');
    const indicators = document.getElementById('carousel-indicators');
    
    // Navbar scroll effect
window.addEventListener('scroll', () => {
    const navbar = document.getElementById('navbar');
    if (window.scrollY > 50) {
        navbar.classList.add('scrolled');
    } else {
        navbar.classList.remove('scrolled');
    }
});

// Create falling snowflakes
function createSnowflake() {
    const snowflakes = ['❄️', '❅', '❆', '✻', '✼'];
    const snowflake = document.createElement('div');
    snowflake.classList.add('snowflake');
    snowflake.innerHTML = snowflakes[Math.floor(Math.random() * snowflakes.length)];
    snowflake.style.left = Math.random() * 100 + 'vw';
    snowflake.style.animationDelay = Math.random() * 2 + 's';
    snowflake.style.animationDuration = (Math.random() * 3 + 5) + 's';
    snowflake.style.fontSize = (Math.random() * 0.8 + 0.8) + 'rem';
    document.querySelector('.hero').appendChild(snowflake);

    setTimeout(() => {
        snowflake.remove();
    }, 8000);
}

// Generate snowflakes periodically
setInterval(createSnowflake, 800);

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

// Form submission handler
document.querySelector('.contact-form').addEventListener('submit', function(e) {
    e.preventDefault();
    
    // Get form data
    const name = document.getElementById('name').value;
    const email = document.getElementById('email').value;
    const message = document.getElementById('message').value;
    
    // Simple validation
    if (name && email && message) {
        alert('Thank you for your message! We\'ll get back to you soon.');
        this.reset();
    } else {
        alert('Please fill in all fields.');
    }
});

// Add hover effect to cards with winter sparkle
const cards = document.querySelectorAll('.about-card, .game-card');
cards.forEach(card => {
    card.addEventListener('mouseenter', function() {
        this.style.transform = 'translateY(-10px) scale(1.02)';
        this.style.filter = 'brightness(1.1)';
    });
    
    card.addEventListener('mouseleave', function() {
        this.style.transform = 'translateY(0) scale(1)';
        this.style.filter = 'brightness(1)';
    });
});

// Winter particle effect on scroll
window.addEventListener('scroll', () => {
    const scrolled = window.pageYOffset;
    const rate = scrolled * -0.3;
    
    // Create floating ice crystals on scroll
    if (Math.random() > 0.98) {
        createIceCrystal();
    }
});

// Create ice crystal particles
function createIceCrystal() {
    const crystal = document.createElement('div');
    crystal.style.position = 'fixed';
    crystal.style.color = '#64b5f6';
    crystal.style.fontSize = '0.5rem';
    crystal.style.left = Math.random() * 100 + 'vw';
    crystal.style.top = Math.random() * 100 + 'vh';
    crystal.style.opacity = '0.6';
    crystal.style.animation = 'crystal-shimmer 2s ease-out forwards';
    crystal.innerHTML = '✦';
    crystal.style.pointerEvents = 'none';
    crystal.style.zIndex = '10';
    
    document.body.appendChild(crystal);
    
    setTimeout(() => {
        crystal.remove();
    }, 2000);
}

// Add winter loading animation
window.addEventListener('load', () => {
    document.body.style.opacity = '0';
    document.body.style.transition = 'opacity 0.8s ease-in-out';
    
    setTimeout(() => {
        document.body.style.opacity = '1';
    }, 100);
});

// Ice crystal cursor trail effect
let mouseX = 0, mouseY = 0;
document.addEventListener('mousemove', (e) => {
    mouseX = e.clientX;
    mouseY = e.clientY;
    
    if (Math.random() > 0.95) {
        createCursorCrystal();
    }
});

// Create cursor trail crystals
function createCursorCrystal() {
    const crystal = document.createElement('div');
    crystal.style.position = 'fixed';
    crystal.style.left = mouseX + 'px';
    crystal.style.top = mouseY + 'px';
    crystal.style.color = '#64b5f6';
    crystal.style.fontSize = '0.3rem';
    crystal.style.opacity = '0.8';
    crystal.style.pointerEvents = 'none';
    crystal.style.zIndex = '9999';
    crystal.style.animation = 'crystal-shimmer 1s ease-out forwards';
    crystal.innerHTML = '✧';
    
    document.body.appendChild(crystal);
    
    setTimeout(() => {
        crystal.remove();
    }, 1000);
}

// Intersection Observer for animations
const observerOptions = {
    threshold: 0.1,
    rootMargin: '0px 0px -50px 0px'
};

const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            entry.target.style.opacity = '1';
            entry.target.style.transform = 'translateY(0)';
        }
    });
}, observerOptions);

// Observe all cards and sections for scroll animations
document.querySelectorAll('.about-card, .game-card, .section-title').forEach(el => {
    el.style.opacity = '0';
    el.style.transform = 'translateY(50px)';
    el.style.transition = 'opacity 0.6s ease, transform 0.6s ease';
    observer.observe(el);
});

// Add winter background particles
function createBackgroundParticles() {
    const particleContainer = document.createElement('div');
    particleContainer.style.position = 'fixed';
    particleContainer.style.top = '0';
    particleContainer.style.left = '0';
    particleContainer.style.width = '100%';
    particleContainer.style.height = '100%';
    particleContainer.style.pointerEvents = 'none';
    particleContainer.style.zIndex = '1';
    document.body.appendChild(particleContainer);

    for (let i = 0; i < 50; i++) {
        const particle = document.createElement('div');
        particle.style.position = 'absolute';
        particle.style.width = '2px';
        particle.style.height = '2px';
        particle.style.background = '#64b5f6';
        particle.style.borderRadius = '50%';
        particle.style.opacity = Math.random() * 0.5 + 0.1;
        particle.style.left = Math.random() * 100 + '%';
        particle.style.top = Math.random() * 100 + '%';
        particle.style.animation = `float-particle ${Math.random() * 20 + 10}s infinite linear`;
        particleContainer.appendChild(particle);
    }
}

// Initialize background particles
createBackgroundParticles();

// Add CSS for floating particles
const style = document.createElement('style');
style.textContent = `
    @keyframes float-particle {
        0% {
            transform: translateY(0px) translateX(0px);
            opacity: 0.1;
        }
        50% {
            opacity: 0.3;
        }
        100% {
            transform: translateY(-100px) translateX(50px);
            opacity: 0;
        }
    }
`;
document.head.appendChild(style);