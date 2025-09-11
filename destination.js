// Destinations data
const destinations = [
    {
        id: 1,
        name: "Goa Beaches",
        country: "India",
        image: "https://images.pexels.com/photos/1450353/pexels-photo-1450353.jpeg?auto=compress&cs=tinysrgb&w=800",
        description: "Golden sandy beaches with crystal clear waters and vibrant nightlife.",
        famousFor: "Beach parties, Portuguese architecture, and seafood cuisine",
        bestTime: "November to March",
        seasons: ["summer", "winter"],
        rating: 4.8,
        visitors: "8M+"
    },
    {
        id: 2,
        name: "Swiss Alps",
        country: "Switzerland",
        image: "https://images.pexels.com/photos/417074/pexels-photo-417074.jpeg?auto=compress&cs=tinysrgb&w=800",
        description: "Majestic snow-capped mountains perfect for skiing and hiking.",
        famousFor: "Skiing, mountaineering, and luxury resorts",
        bestTime: "December to March",
        seasons: ["winter", "spring"],
        rating: 4.9,
        visitors: "12M+"
    },
    {
        id: 3,
        name: "Kyoto Gardens",
        country: "Japan",
        image: "https://images.pexels.com/photos/161251/senso-ji-temple-japan-kyoto-landmark-161251.jpeg?auto=compress&cs=tinysrgb&w=800",
        description: "Stunning cherry blossoms and traditional Japanese architecture.",
        famousFor: "Cherry blossoms, temples, and traditional tea ceremonies",
        bestTime: "March to May",
        seasons: ["spring", "summer"],
        rating: 4.7,
        visitors: "5M+"
    },
    {
        id: 4,
        name: "Kerala Backwaters",
        country: "India",
        image: "https://images.pexels.com/photos/1583339/pexels-photo-1583339.jpeg?auto=compress&cs=tinysrgb&w=800",
        description: "Serene waterways surrounded by lush greenery during monsoons.",
        famousFor: "Houseboat cruises, Ayurvedic treatments, and spice plantations",
        bestTime: "June to September",
        seasons: ["monsoon", "winter"],
        rating: 4.6,
        visitors: "3M+"
    },
    {
        id: 5,
        name: "Maldives",
        country: "Maldives",
        image: "https://images.pexels.com/photos/1174732/pexels-photo-1174732.jpeg?auto=compress&cs=tinysrgb&w=800",
        description: "Tropical paradise with overwater bungalows and pristine beaches.",
        famousFor: "Luxury resorts, underwater dining, and coral reefs",
        bestTime: "November to April",
        seasons: ["summer", "winter"],
        rating: 4.9,
        visitors: "2M+"
    },
    {
        id: 6,
        name: "Norway Fjords",
        country: "Norway",
        image: "https://images.pexels.com/photos/1559825/pexels-photo-1559825.jpeg?auto=compress&cs=tinysrgb&w=800",
        description: "Dramatic fjords with cascading waterfalls and Northern Lights.",
        famousFor: "Northern Lights, fjord cruises, and midnight sun",
        bestTime: "December to February",
        seasons: ["winter", "spring"],
        rating: 4.8,
        visitors: "6M+"
    },
    {
        id: 7,
        name: "Bali Rice Terraces",
        country: "Indonesia",
        image: "https://images.pexels.com/photos/2166553/pexels-photo-2166553.jpeg?auto=compress&cs=tinysrgb&w=800",
        description: "Lush green rice terraces with traditional Indonesian culture.",
        famousFor: "Rice terraces, temples, and traditional dancing",
        bestTime: "April to June",
        seasons: ["spring", "summer"],
        rating: 4.7,
        visitors: "7M+"
    },
    {
        id: 8,
        name: "Thailand Islands",
        country: "Thailand",
        image: "https://images.pexels.com/photos/1450360/pexels-photo-1450360.jpeg?auto=compress&cs=tinysrgb&w=800",
        description: "Tropical islands with monsoon rains creating lush landscapes.",
        famousFor: "Island hopping, Thai massages, and street food",
        bestTime: "June to October",
        seasons: ["monsoon", "summer"],
        rating: 4.6,
        visitors: "9M+"
    },
    {
        id: 9,
        name: "Iceland",
        country: "Iceland",
        image: "https://images.pexels.com/photos/1010657/pexels-photo-1010657.jpeg?auto=compress&cs=tinysrgb&w=800",
        description: "Land of fire and ice with geysers and glacial formations.",
        famousFor: "Blue Lagoon, Northern Lights, and volcanic landscapes",
        bestTime: "October to March",
        seasons: ["winter", "spring"],
        rating: 4.8,
        visitors: "4M+"
    },
    {
        id: 10,
        name: "Tuscany",
        country: "Italy",
        image: "https://images.pexels.com/photos/2661176/pexels-photo-2661176.jpeg?auto=compress&cs=tinysrgb&w=800",
        description: "Rolling hills covered with vineyards and historic towns.",
        famousFor: "Wine tasting, Renaissance art, and culinary experiences",
        bestTime: "April to June",
        seasons: ["spring", "summer"],
        rating: 4.7,
        visitors: "15M+"
    },
    {
        id: 11,
        name: "Amazon Rainforest",
        country: "Brazil",
        image: "https://images.pexels.com/photos/975771/pexels-photo-975771.jpeg?auto=compress&cs=tinysrgb&w=800",
        description: "Dense rainforest with incredible biodiversity and river systems.",
        famousFor: "Wildlife spotting, indigenous culture, and river cruises",
        bestTime: "June to August",
        seasons: ["monsoon", "winter"],
        rating: 4.5,
        visitors: "1M+"
    },
    {
        id: 12,
        name: "Sahara Desert",
        country: "Morocco",
        image: "https://images.pexels.com/photos/1001435/pexels-photo-1001435.jpeg?auto=compress&cs=tinysrgb&w=800",
        description: "Vast sand dunes with stunning sunsets and camel treks.",
        famousFor: "Camel safaris, desert camps, and star gazing",
        bestTime: "March to May",
        seasons: ["summer", "spring"],
        rating: 4.6,
        visitors: "2M+"
    },
    {
        id: 13,
        name: "Canadian Rockies",
        country: "Canada",
        image: "https://images.pexels.com/photos/417074/pexels-photo-417074.jpeg?auto=compress&cs=tinysrgb&w=800",
        description: "Towering peaks with pristine lakes and abundant wildlife.",
        famousFor: "Hiking, wildlife viewing, and scenic drives",
        bestTime: "December to March",
        seasons: ["winter", "spring"],
        rating: 4.8,
        visitors: "10M+"
    },
    {
        id: 14,
        name: "Vietnam Highlands",
        country: "Vietnam",
        image: "https://images.pexels.com/photos/2166559/pexels-photo-2166559.jpeg?auto=compress&cs=tinysrgb&w=800",
        description: "Misty mountains and terraced fields during monsoon season.",
        famousFor: "Coffee plantations, ethnic minorities, and trekking",
        bestTime: "May to September",
        seasons: ["monsoon", "summer"],
        rating: 4.4,
        visitors: "3M+"
    },
    {
        id: 15,
        name: "Greek Cyclades",
        country: "Greece",
        image: "https://images.pexels.com/photos/1285625/pexels-photo-1285625.jpeg?auto=compress&cs=tinysrgb&w=800",
        description: "White-washed buildings overlooking crystal blue waters.",
        famousFor: "Ancient history, island hopping, and Mediterranean cuisine",
        bestTime: "May to September",
        seasons: ["summer", "spring"],
        rating: 4.7,
        visitors: "11M+"
    },
    {
        id: 16,
        name: "New Zealand Alps",
        country: "New Zealand",
        image: "https://images.pexels.com/photos/2662116/pexels-photo-2662116.jpeg?auto=compress&cs=tinysrgb&w=800",
        description: "Dramatic landscapes with flowering meadows in spring.",
        famousFor: "Adventure sports, Lord of the Rings filming locations, and hiking",
        bestTime: "September to November",
        seasons: ["spring", "summer"],
        rating: 4.9,
        visitors: "4M+"
    }
];

// Global variables
let selectedSeason = 'all';
let currentEmojis = [];
let emojiInterval;

// Emoji mappings for seasons
const emojiMap = {
    summer: ['☀️', '🌞', '🔥', '🌅'],
    winter: ['❄️', '⛄', '🌨️', '🧊'],
    spring: ['🌸', '🌺', '🌼', '🌻', '🌷', '🌹'],
    monsoon: ['🌧️', '☔', '💧', '⛈️']
};

// Initialize the application
document.addEventListener('DOMContentLoaded', function() {
    renderDestinations();
    setupEventListeners();
    startFallingEmojis('all');
});

// Setup event listeners
function setupEventListeners() {
    const seasonSelect = document.getElementById('season-select');
    const closeModalBtn = document.getElementById('close-modal');
    const modal = document.getElementById('destination-modal');

    seasonSelect.addEventListener('change', function() {
        selectedSeason = this.value;
        renderDestinations();
        startFallingEmojis(selectedSeason);
    });

    closeModalBtn.addEventListener('click', closeModal);
    
    modal.addEventListener('click', function(e) {
        if (e.target === modal) {
            closeModal();
        }
    });

    // Close modal with Escape key
    document.addEventListener('keydown', function(e) {
        if (e.key === 'Escape') {
            closeModal();
        }
    });
}

// Render destinations based on selected season
function renderDestinations() {
    const grid = document.getElementById('destinations-grid');
    const noResults = document.getElementById('no-results');
    
    const filteredDestinations = selectedSeason === 'all' 
        ? destinations 
        : destinations.filter(dest => dest.seasons.includes(selectedSeason));

    if (filteredDestinations.length === 0) {
        grid.innerHTML = '';
        noResults.classList.remove('hidden');
        return;
    }

    noResults.classList.add('hidden');
    
    grid.innerHTML = filteredDestinations.map(destination => `
        <div class="destination-card group" onclick="openModal(${destination.id})">
            <div class="relative overflow-hidden">
                <img src="${destination.image}" alt="${destination.name}" loading="lazy">
                <div class="rating-badge">
                    <span class="star-icon">⭐</span>
                    <span class="rating-text">${destination.rating}</span>
                </div>
            </div>
            
            <div class="card-content">
                <h3>${destination.name}</h3>
                <div class="location">
                    <span>📍</span>
                    <span class="ml-2">${destination.country}</span>
                </div>
                <p class="description">${destination.description}</p>
                <div class="card-footer">
                    <div class="visitors">
                        <span>👥</span>
                        <span class="ml-1">${destination.visitors}</span>
                    </div>
                    <span class="learn-more">Learn More →</span>
                </div>
            </div>
        </div>
    `).join('');
}

// Open modal with destination details
function openModal(destinationId) {
    const destination = destinations.find(dest => dest.id === destinationId);
    if (!destination) return;

    document.getElementById('modal-image').src = destination.image;
    document.getElementById('modal-image').alt = destination.name;
    document.getElementById('modal-title').textContent = destination.name;
    document.getElementById('modal-rating').textContent = destination.rating;
    document.getElementById('modal-country').textContent = destination.country;
    document.getElementById('modal-best-time').textContent = destination.bestTime;
    document.getElementById('modal-visitors').textContent = destination.visitors;
    document.getElementById('modal-description').textContent = destination.description;
    document.getElementById('modal-famous-for').textContent = destination.famousFor;

    document.getElementById('destination-modal').classList.remove('hidden');
    document.body.style.overflow = 'hidden';
}

// Close modal
function closeModal() {
    document.getElementById('destination-modal').classList.add('hidden');
    document.body.style.overflow = 'auto';
}

// Falling emojis animation
function startFallingEmojis(season) {
    const container = document.getElementById('falling-emojis');
    
    // Clear existing emojis and interval
    container.innerHTML = '';
    if (emojiInterval) {
        clearInterval(emojiInterval);
    }
    
    if (season === 'all') {
        return;
    }

    const seasonEmojis = emojiMap[season];
    if (!seasonEmojis) return;

    function createEmoji() {
        const emoji = document.createElement('div');
        emoji.className = 'falling-emoji';
        emoji.textContent = seasonEmojis[Math.floor(Math.random() * seasonEmojis.length)];
        emoji.style.left = Math.random() * 100 + '%';
        emoji.style.animationDuration = (3 + Math.random() * 4) + 's';
        emoji.style.animationDelay = Math.random() * 2 + 's';
        
        container.appendChild(emoji);

        // Remove emoji after animation completes
        setTimeout(() => {
            if (emoji.parentNode) {
                emoji.parentNode.removeChild(emoji);
            }
        }, 8000);
    }

    // Create initial emojis
    for (let i = 0; i < 8; i++) {
        setTimeout(createEmoji, i * 200);
    }

    // Continue creating emojis at intervals
    emojiInterval = setInterval(() => {
        createEmoji();
    }, 1000);
}

// Add smooth scrolling behavior
document.documentElement.style.scrollBehavior = 'smooth';

// Add loading states for images
document.addEventListener('DOMContentLoaded', function() {
    const images = document.querySelectorAll('img');
    images.forEach(img => {
        img.addEventListener('load', function() {
            this.style.opacity = '1';
        });
        
        img.addEventListener('error', function() {
            this.style.opacity = '0.5';
            this.alt = 'Image failed to load';
        });
    });
});

// Add intersection observer for animations
const observerOptions = {
    threshold: 0.1,
    rootMargin: '0px 0px -50px 0px'
};

const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            entry.target.classList.add('animate-fade-in-up');
        }
    });
}, observerOptions);

// Observe destination cards when they're created
function observeCards() {
    const cards = document.querySelectorAll('.destination-card');
    cards.forEach(card => {
        observer.observe(card);
    });
}

// Update the renderDestinations function to include observation
const originalRenderDestinations = renderDestinations;
renderDestinations = function() {
    originalRenderDestinations();
    setTimeout(observeCards, 100);
};

// Add keyboard navigation for accessibility
document.addEventListener('keydown', function(e) {
    if (e.key === 'Tab') {
        // Add focus styles for keyboard navigation
        const focusableElements = document.querySelectorAll('button, select, .destination-card');
        focusableElements.forEach(el => {
            el.addEventListener('focus', function() {
                this.style.outline = '2px solid #3b82f6';
                this.style.outlineOffset = '2px';
            });
            
            el.addEventListener('blur', function() {
                this.style.outline = 'none';
            });
        });
    }
});

// Performance optimization: Debounce resize events
let resizeTimeout;
window.addEventListener('resize', function() {
    clearTimeout(resizeTimeout);
    resizeTimeout = setTimeout(() => {
        // Recalculate emoji positions if needed
        if (selectedSeason !== 'all') {
            startFallingEmojis(selectedSeason);
        }
    }, 250);
});

// Add touch support for mobile devices
let touchStartY = 0;
document.addEventListener('touchstart', function(e) {
    touchStartY = e.touches[0].clientY;
});

document.addEventListener('touchmove', function(e) {
    const touchY = e.touches[0].clientY;
    const touchDiff = touchStartY - touchY;
    
    // Add momentum scrolling feel
    if (Math.abs(touchDiff) > 5) {
        document.body.style.transform = `translateY(${-touchDiff * 0.1}px)`;
    }
});

document.addEventListener('touchend', function() {
    document.body.style.transform = 'translateY(0)';
});