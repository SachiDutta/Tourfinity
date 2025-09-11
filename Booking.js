// Tab functionality
function initializeTabs() {
    const tabButtons = document.querySelectorAll('.tab-btn');
    const bookingForms = document.querySelectorAll('.booking-form');

    tabButtons.forEach(button => {
        button.addEventListener('click', () => {
            const targetTab = button.dataset.tab;

            // Remove active class from all tabs and forms
            tabButtons.forEach(btn => btn.classList.remove('active'));
            bookingForms.forEach(form => form.classList.remove('active'));

            // Add active class to clicked tab and corresponding form
            button.classList.add('active');
            const targetForm = document.getElementById(targetTab);
            if (targetForm) targetForm.classList.add('active');

            // Show/hide return date for flights
            if (targetTab === 'flights') {
                updateReturnDateVisibility();
            }
        });
    });
}

// Guest/Passenger modal functionality
function initializeGuestModal() {
    const modal = document.getElementById('guestModal');
    const hotelTriggers = document.querySelectorAll('.guests-selector'); // hotels
    const flightTrigger = document.getElementById('flightPassengers');   // flights
    const closeBtn = document.querySelector('.modal-close');
    const applyBtn = document.getElementById('applyGuests');
    const flightSummary = document.getElementById('passengerSummary');

    // default counts (1 adult for flights UX; rooms used only for hotels)
    const guestCounts = { adults: 1, children: 0, infants: 0, rooms: 1 };

    // --- open / close ---
    const openModal = (e) => {
        if (e) e.preventDefault();
        modal.classList.add('active');
        updateRoomsVisibility();
        updateGuestCounts();
    };
    const closeModal = () => modal.classList.remove('active');

    hotelTriggers.forEach(t => t.addEventListener('click', openModal));
    if (flightTrigger) flightTrigger.addEventListener('click', openModal);

    closeBtn.addEventListener('click', closeModal);
    modal.addEventListener('click', (e) => { if (e.target === modal) closeModal(); });

    // --- counter buttons ---
    document.querySelectorAll('.guest-btn').forEach(btn => {
        btn.addEventListener('click', () => {
            const key = btn.dataset.target;
            const plus = btn.classList.contains('plus');
            guestCounts[key] += plus ? 1 : -1;

            // bounds
            if (guestCounts[key] < 0) guestCounts[key] = 0;
            if (key === 'adults' && guestCounts.adults < 1) guestCounts.adults = 1;
            if (key === 'rooms'  && guestCounts.rooms  < 1) guestCounts.rooms  = 1;

            updateGuestCounts();
        });
    });
    function updateGuestCounts() {
        ['adults','children','infants','rooms'].forEach(k => {
            const el = document.getElementById(k);
            if (el) el.textContent = guestCounts[k];
        });
        const minusAdults = document.querySelector('[data-target="adults"].minus');
        if (minusAdults) minusAdults.disabled = guestCounts.adults <= 1;
    
        const minusRooms = document.querySelector('[data-target="rooms"].minus');
        if (minusRooms) minusRooms.disabled = guestCounts.rooms <= 1;
    
        const minusChildren = document.querySelector('[data-target="children"].minus');
        if (minusChildren) minusChildren.disabled = guestCounts.children <= 0;
    
        const minusInfants = document.querySelector('[data-target="infants"].minus');
        if (minusInfants) minusInfants.disabled = guestCounts.infants <= 0;
    
        // Live update passenger summary if flights tab is active
        const tab = document.querySelector('.tab-btn.active')?.dataset.tab;
        if (tab === 'flights') {
            const flightClassSelect = document.getElementById('flightClass');
            const flightClass = flightClassSelect ? flightClassSelect.value : 'Economy';
            let text = `${guestCounts.adults} Adult${guestCounts.adults > 1 ? 's' : ''}`;
            if (guestCounts.children > 0) text += `, ${guestCounts.children} Child${guestCounts.children > 1 ? 'ren' : ''}`;
            if (guestCounts.infants  > 0) text += `, ${guestCounts.infants} Infant${guestCounts.infants > 1 ? 's' : ''}`;
            text += `, ${flightClass}`;
            const flightSummary = document.getElementById('passengerSummary');
            if (flightSummary) flightSummary.textContent = text;
        }
    }
    // hide/show Rooms row depending on active tab
    function updateRoomsVisibility() {
        const tab = document.querySelector('.tab-btn.active')?.dataset.tab;
        const roomsRow = document.getElementById('roomsRow');
        const classRow = document.getElementById('classRow');
        if (roomsRow) roomsRow.style.display = (tab === 'hotels') ? 'flex' : 'none';
        if (classRow) classRow.style.display = (tab === 'flights') ? 'flex' : 'none';
    }
    applyBtn.addEventListener('click', () => {
        const tab = document.querySelector('.tab-btn.active').dataset.tab;
        if (tab === 'hotels') {
            const input = document.querySelector('#hotels .guests-selector input');
            const total = guestCounts.adults + guestCounts.children;
            const text = `${total} Guest${total > 1 ? 's' : ''}, ${guestCounts.rooms} Room${guestCounts.rooms > 1 ? 's' : ''}`;
            if (input) input.value = text;
        } else if (tab === 'flights') {
            const flightClassSelect = document.getElementById('flightClass');
            const flightClass = flightClassSelect ? flightClassSelect.value : 'Economy';
            let text = `${guestCounts.adults} Adult${guestCounts.adults > 1 ? 's' : ''}`;
            if (guestCounts.children > 0) text += `, ${guestCounts.children} Child${guestCounts.children > 1 ? 'ren' : ''}`;
            if (guestCounts.infants  > 0) text += `, ${guestCounts.infants} Infant${guestCounts.infants > 1 ? 's' : ''}`;
            text += `, ${flightClass}`;
            if (flightSummary) flightSummary.textContent = text;
        }
        closeModal();
    });
}
// Flight trip type functionality
function initializeFlightOptions() {
    const tripTypeRadios = document.querySelectorAll('input[name="trip"]');

    tripTypeRadios.forEach(radio => {
        radio.addEventListener('change', updateReturnDateVisibility);
    });
}
function updateReturnDateVisibility() {
    const selectedTrip = document.querySelector('input[name="trip"]:checked')?.value;
    const returnDateGroup = document.querySelector('#flights .return-date');

    if (!returnDateGroup) return;

    if (selectedTrip === 'one') {
        returnDateGroup.classList.add('hidden');
    } else {
        returnDateGroup.classList.remove('hidden');
    }
}
// Set minimum dates to today
function setMinimumDates() {
    const today = new Date().toISOString().split('T')[0];
    const dateInputs = document.querySelectorAll('input[type="date"]');

    dateInputs.forEach(input => {
        input.min = today;
    });
}
// Search functionality
function initializeSearch() {
    const searchButtons = document.querySelectorAll('.btn-search');
    searchButtons.forEach(button => {
        button.addEventListener('click', (e) => {
            e.preventDefault();

            // Add loading state
            button.classList.add('loading');
            const originalText = button.innerHTML;
            button.innerHTML = '<i class="fas fa-spinner fa-spin"></i> Searching...';

            // Simulate search (replace with actual API call)
            setTimeout(() => {
                button.classList.remove('loading');
                button.innerHTML = originalText;

                // Show success message (replace with actual results)
                showNotification('Search completed! Redirecting to results...', 'success');
            }, 2000);
        });
    });
}

// Notification system
function showNotification(message, type = 'info') {
    const notification = document.createElement('div');
    notification.className = `notification notification-${type}`;
    notification.innerHTML = `
        <i class="fas fa-${type === 'success' ? 'check-circle' : 'info-circle'}"></i>
        <span>${message}</span>
    `;
    document.body.appendChild(notification);

    // Show notification
    setTimeout(() => notification.classList.add('show'), 100);

    // Remove notification after 3 seconds
    setTimeout(() => {
        notification.classList.remove('show');
        setTimeout(() => notification.remove(), 300);
    }, 3000);
}

// Auto-complete simulation (replace with actual API)
function initializeAutocomplete() {
    const locationInputs = document.querySelectorAll('input[placeholder*="city"], input[placeholder*="location"], input[placeholder*="Destination"], input[placeholder*="station"]');

    locationInputs.forEach(input => {
        input.addEventListener('input', (e) => {
            const value = e.target.value;
            if (value.length >= 2) {
                // Simulate autocomplete suggestions
                // In a real app, you'd make an API call here
            }
        });
    });
}
// Date input enhancements
function initializeDateInputs() {
    const checkInInputs = document.querySelectorAll('input[type="date"]');

    checkInInputs.forEach((input, index) => {
        input.addEventListener('change', () => {
            // Auto-set checkout/return date to next day
            const nextInput = checkInInputs[index + 1];
            if (nextInput && !nextInput.value) {
                const selectedDate = new Date(input.value);
                selectedDate.setDate(selectedDate.getDate() + 1);
                const nextDateStr = selectedDate.toISOString().split('T')[0];
                nextInput.value = nextDateStr;
                nextInput.min = nextDateStr;
            }
        });
    });
}

// Initialize all functionality when DOM is loaded
document.addEventListener('DOMContentLoaded', () => {
    initializeTabs();
    initializeGuestModal();
    initializeFlightOptions();
    setMinimumDates();
    initializeSearch();
    initializeAutocomplete();
    initializeDateInputs();

    // Set initial return date visibility
    updateReturnDateVisibility();

    // Set default dates (tomorrow and day after)
    const tomorrow = new Date();
    tomorrow.setDate(tomorrow.getDate() + 1);
    const dayAfter = new Date();
    dayAfter.setDate(dayAfter.getDate() + 2);

    // Set default check-in dates
    const dateInputs = document.querySelectorAll('input[type="date"]');
    if (dateInputs.length > 1) {
        dateInputs[0].value = tomorrow.toISOString().split('T')[0];
        dateInputs[1].value = dayAfter.toISOString().split('T')[0];
    }
});

  // Countdown target date (Sept 10, 2025 23:59:59)
  const countdownDate = new Date("Sep 10, 2025 23:59:59").getTime();

  const timer = setInterval(function() {
    const now = new Date().getTime();
    const distance = countdownDate - now;

    // Time calculations
    const days = Math.floor(distance / (1000 * 60 * 60 * 24));
    const hours = Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
    const minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
    const seconds = Math.floor((distance % (1000 * 60)) / 1000);

    // Display result
    document.getElementById("countdown").innerHTML =
      days + "D : " + hours + "H : " + minutes + "M : " + seconds + "S";

    // When expired
    if (distance < 0) {
      clearInterval(timer);
      document.getElementById("countdown").innerHTML = "EXPIRED";
    }
  }, 1000);