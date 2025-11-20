// Main application JavaScript

// Wait for DOM to be fully loaded
document.addEventListener('DOMContentLoaded', function() {
    // Initialize Lucide icons
    if (typeof lucide !== 'undefined') {
        lucide.createIcons();
    }
    
    // Set current year in footer
    const currentYearElement = document.getElementById('currentYear');
    if (currentYearElement) {
        currentYearElement.textContent = new Date().getFullYear();
    }
    
    // Initialize the app
    initializeApp();
    initializeNavigation();
    initializeMobileMenu();
    
    // Handle initial page load
    const hash = window.location.hash.slice(1) || 'home';
    navigateToPage(hash);
});

// Initialize the application
function initializeApp() {
    const mainContent = document.getElementById('mainContent');
    if (!mainContent) return;
    
    // Load all pages into the DOM
    Object.keys(pages).forEach(pageName => {
        const pageDiv = document.createElement('div');
        pageDiv.innerHTML = pages[pageName];
        mainContent.appendChild(pageDiv.firstElementChild);
    });
    
    // Re-initialize icons after adding content
    setTimeout(() => {
        if (typeof lucide !== 'undefined') {
            lucide.createIcons();
        }
    }, 100);
}

// Initialize navigation
function initializeNavigation() {
    // Desktop navigation links
    const navLinks = document.querySelectorAll('.nav-link');
    navLinks.forEach(link => {
        link.addEventListener('click', function(e) {
            e.preventDefault();
            const page = this.getAttribute('data-page');
            navigateToPage(page);
        });
    });
    
    // Mobile navigation links
    const mobileNavLinks = document.querySelectorAll('.mobile-nav-link');
    mobileNavLinks.forEach(link => {
        link.addEventListener('click', function(e) {
            e.preventDefault();
            const page = this.getAttribute('data-page');
            navigateToPage(page);
            closeMobileMenu();
        });
    });
    
    // Handle browser back/forward buttons
    window.addEventListener('popstate', function() {
        const hash = window.location.hash.slice(1) || 'home';
        navigateToPage(hash, false);
    });
}

// Initialize mobile menu
function initializeMobileMenu() {
    const mobileMenuBtn = document.getElementById('mobileMenuBtn');
    const mobileNav = document.getElementById('mobileNav');
    const menuIcon = document.getElementById('menuIcon');
    const closeIcon = document.getElementById('closeIcon');
    
    if (!mobileMenuBtn) return;
    
    mobileMenuBtn.addEventListener('click', function() {
        if (mobileNav.classList.contains('active')) {
            closeMobileMenu();
        } else {
            openMobileMenu();
        }
    });
}

// Open mobile menu
function openMobileMenu() {
    const mobileNav = document.getElementById('mobileNav');
    const menuIcon = document.getElementById('menuIcon');
    const closeIcon = document.getElementById('closeIcon');
    
    mobileNav.classList.add('active');
    menuIcon.style.display = 'none';
    closeIcon.style.display = 'block';
    
    // Re-initialize icons
    if (typeof lucide !== 'undefined') {
        lucide.createIcons();
    }
}

// Close mobile menu
function closeMobileMenu() {
    const mobileNav = document.getElementById('mobileNav');
    const menuIcon = document.getElementById('menuIcon');
    const closeIcon = document.getElementById('closeIcon');
    
    mobileNav.classList.remove('active');
    menuIcon.style.display = 'block';
    closeIcon.style.display = 'none';
    
    // Re-initialize icons
    if (typeof lucide !== 'undefined') {
        lucide.createIcons();
    }
}

// Navigate to a specific page
function navigateToPage(pageName, updateHistory = true) {
    // Hide all pages
    const allPages = document.querySelectorAll('.page');
    allPages.forEach(page => {
        page.classList.remove('active');
    });
    
    // Show the selected page
    const selectedPage = document.getElementById(pageName);
    if (selectedPage) {
        selectedPage.classList.add('active');
    }
    
    // Update navigation active states
    updateNavigationActive(pageName);
    
    // Update URL hash
    if (updateHistory) {
        history.pushState(null, '', `#${pageName}`);
    }
    
    // Scroll to top
    window.scrollTo(0, 0);
    
    // Re-initialize icons for dynamically loaded content
    setTimeout(() => {
        if (typeof lucide !== 'undefined') {
            lucide.createIcons();
        }
    }, 100);
}

// Update navigation active states
function updateNavigationActive(pageName) {
    // Update desktop nav
    const navLinks = document.querySelectorAll('.nav-link');
    navLinks.forEach(link => {
        if (link.getAttribute('data-page') === pageName) {
            link.classList.add('active');
        } else {
            link.classList.remove('active');
        }
    });
    
    // Update mobile nav
    const mobileNavLinks = document.querySelectorAll('.mobile-nav-link');
    mobileNavLinks.forEach(link => {
        if (link.getAttribute('data-page') === pageName) {
            link.classList.add('active');
        } else {
            link.classList.remove('active');
        }
    });
}

// Handle WhatsApp click
function handleWhatsAppClick() {
    const message = "Hello Dr. Snehankita, I would like to connect with you.";
    const whatsappUrl = `https://wa.me/917057371098?text=${encodeURIComponent(message)}`;
    window.open(whatsappUrl, '_blank');
}

// Handle form submission
function handleFormSubmit(event) {
    event.preventDefault();
    
    const form = event.target;
    const name = form.name.value;
    const email = form.email.value;
    const message = form.message.value;
    
    // In a production environment, you would send this data to a server
    // For now, we'll just show an alert
    alert(`Thank you for your message, ${name}! This is a demo form. In a production environment, your message would be sent to Dr. Snehankita Majalekar.`);
    
    // Reset the form
    form.reset();
}

// Add smooth scrolling to anchor links
document.addEventListener('click', function(e) {
    if (e.target.tagName === 'A' && e.target.getAttribute('href')?.startsWith('#')) {
        const hash = e.target.getAttribute('href').slice(1);
        
        // Check if it's a page link
        if (pages[hash]) {
            e.preventDefault();
            navigateToPage(hash);
        }
    }
});

// Add intersection observer for animations (optional enhancement)
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

// Observe cards for animation
setTimeout(() => {
    const cards = document.querySelectorAll('.card');
    cards.forEach(card => {
        card.style.opacity = '0';
        card.style.transform = 'translateY(20px)';
        card.style.transition = 'opacity 0.5s ease, transform 0.5s ease';
        observer.observe(card);
    });
}, 500);

// Handle responsive grid layouts on window resize
let resizeTimeout;
window.addEventListener('resize', function() {
    clearTimeout(resizeTimeout);
    resizeTimeout = setTimeout(function() {
        // Re-initialize any layout-dependent features
        if (typeof lucide !== 'undefined') {
            lucide.createIcons();
        }
    }, 250);
});

// Prevent default anchor behavior for internal links
document.addEventListener('click', function(e) {
    const target = e.target.closest('a');
    if (target && target.getAttribute('href')?.startsWith('#')) {
        const hash = target.getAttribute('href').slice(1);
        if (pages[hash]) {
            e.preventDefault();
        }
    }
});

// Add loading state management
function showLoading() {
    // Optional: Add a loading indicator
    document.body.style.cursor = 'wait';
}

function hideLoading() {
    document.body.style.cursor = 'default';
}

// Enhanced page navigation with loading state
function navigateToPageWithLoading(pageName) {
    showLoading();
    navigateToPage(pageName);
    setTimeout(hideLoading, 300);
}

// Add console log for debugging
console.log('Faculty Website - Dr. Snehankita Majalekar');
console.log('Academic Portfolio System Loaded Successfully');
console.log('Available pages:', Object.keys(pages));

// Add touch event support for mobile
if ('ontouchstart' in window) {
    document.addEventListener('touchstart', function() {}, {passive: true});
}

// Performance optimization: Lazy load images if needed
function lazyLoadImages() {
    const images = document.querySelectorAll('img[data-src]');
    const imageObserver = new IntersectionObserver((entries, observer) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                const img = entry.target;
                img.src = img.dataset.src;
                img.removeAttribute('data-src');
                imageObserver.unobserve(img);
            }
        });
    });
    
    images.forEach(img => imageObserver.observe(img));
}

// Call lazy load on page load
setTimeout(lazyLoadImages, 1000);

// Add service worker registration for PWA (optional)
if ('serviceWorker' in navigator) {
    // Uncomment to enable service worker
    // navigator.serviceWorker.register('/sw.js').then(function(registration) {
    //     console.log('Service Worker registered successfully:', registration);
    // }).catch(function(error) {
    //     console.log('Service Worker registration failed:', error);
    // });
}


