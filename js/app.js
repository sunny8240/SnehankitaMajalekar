document.addEventListener('DOMContentLoaded', function() {
    if (typeof pages === 'undefined') {
        console.warn('Pages not yet loaded, retrying...');
        setTimeout(arguments.callee, 50);
        return;
    }
    
    if (typeof lucide !== 'undefined') {
        normalizeLucideAndCreate();
    }
    
    const currentYearElement = document.getElementById('currentYear');
    if (currentYearElement) {
        currentYearElement.textContent = new Date().getFullYear();
    }
    
    initializeApp();
    initializeNavigation();
    initializeMobileMenu();
    
    const hash = window.location.hash.slice(1) || 'home';
    navigateToPage(hash);
});

function initializeApp() {
    const mainContent = document.getElementById('mainContent');
    if (!mainContent) return;
    
    Object.keys(pages).forEach(pageName => {
        const pageDiv = document.createElement('div');
        pageDiv.innerHTML = pages[pageName];
        mainContent.appendChild(pageDiv.firstElementChild);
    });
    
    setTimeout(() => {
        if (typeof lucide !== 'undefined') {
            normalizeLucideAndCreate();
        }
    }, 100);
}

function initializeNavigation() {
    const navLinks = document.querySelectorAll('.nav-link');
    navLinks.forEach(link => {
        link.addEventListener('click', function(e) {
            e.preventDefault();
            const page = this.getAttribute('data-page');
            navigateToPage(page);
        });
    });
    
    const mobileNavLinks = document.querySelectorAll('.mobile-nav-link');
    mobileNavLinks.forEach(link => {
        link.addEventListener('click', function(e) {
            e.preventDefault();
            const page = this.getAttribute('data-page');
            navigateToPage(page);
            closeMobileMenu();
        });
    });
    
    window.addEventListener('popstate', function() {
        const hash = window.location.hash.slice(1) || 'home';
        navigateToPage(hash, false);
    });
}
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
function openMobileMenu() {
    const mobileNav = document.getElementById('mobileNav');
    const menuIcon = document.getElementById('menuIcon');
    const closeIcon = document.getElementById('closeIcon');
    
    mobileNav.classList.add('active');
    menuIcon.style.display = 'none';
    closeIcon.style.display = 'block';
    
    if (typeof lucide !== 'undefined') {
        normalizeLucideAndCreate();
    }
}

function closeMobileMenu() {
    const mobileNav = document.getElementById('mobileNav');
    const menuIcon = document.getElementById('menuIcon');
    const closeIcon = document.getElementById('closeIcon');
    
    mobileNav.classList.remove('active');
    menuIcon.style.display = 'block';
    closeIcon.style.display = 'none';
    
    if (typeof lucide !== 'undefined') {
        normalizeLucideAndCreate();
    }
}

function navigateToPage(pageName, updateHistory = true) {
    const selectedPage = document.getElementById(pageName);
    if (!selectedPage) return;

    const currentPage = document.querySelector('.page.active');
    if (currentPage === selectedPage) {
        updateNavigationActive(pageName);
        if (updateHistory) history.pushState(null, '', `#${pageName}`);
        return;
    }

    const loader = document.getElementById('pageLoader');
    if (loader) loader.classList.add('visible');

    updateNavigationActive(pageName);

    if (updateHistory) {
        history.pushState(null, '', `#${pageName}`);
    }

    window.scrollTo(0, 0);

    const exitDuration = 320; 
    const enterDuration = 420; 
    const loaderDuration = 600; 

    if (currentPage) {
        currentPage.classList.remove('page-enter');
        currentPage.classList.add('page-exit');

        setTimeout(() => {
            currentPage.classList.remove('active', 'page-exit');
            selectedPage.classList.add('active', 'page-enter');

            setTimeout(() => {
                selectedPage.classList.remove('page-enter');
            }, enterDuration);
        }, exitDuration);
    } else {
        selectedPage.classList.add('active', 'page-enter');
        setTimeout(() => {
            selectedPage.classList.remove('page-enter');
        }, enterDuration);
    }

    setTimeout(() => {
        if (loader) loader.classList.remove('visible');
    }, loaderDuration);

    setTimeout(() => {
        if (typeof lucide !== 'undefined') {
            normalizeLucideAndCreate();
        }
    }, 120);
}

function updateNavigationActive(pageName) {
    const navLinks = document.querySelectorAll('.nav-link');
    navLinks.forEach(link => {
        if (link.getAttribute('data-page') === pageName) {
            link.classList.add('active');
        } else {
            link.classList.remove('active');
        }
    });
    
    const mobileNavLinks = document.querySelectorAll('.mobile-nav-link');
    mobileNavLinks.forEach(link => {
        if (link.getAttribute('data-page') === pageName) {
            link.classList.add('active');
        } else {
            link.classList.remove('active');
        }
    });
}

function handleWhatsAppClick() {
    const message = "Hello Dr. Snehankita, I would like to connect with you.";
    const whatsappUrl = `https://wa.me/917057371098?text=${encodeURIComponent(message)}`;
    window.open(whatsappUrl, '_blank');
}
function handleFormSubmit(event) {
    console.log('Contact form submission delegated to contact-handler.js');
}

document.addEventListener('click', function(e) {
    if (e.target.tagName === 'A' && e.target.getAttribute('href')?.startsWith('#')) {
        const hash = e.target.getAttribute('href').slice(1);
        
        if (pages[hash]) {
            e.preventDefault();
            navigateToPage(hash);
        }
    }
});

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

setTimeout(() => {
    const cards = document.querySelectorAll('.card');
    cards.forEach(card => {
        card.style.opacity = '0';
        card.style.transform = 'translateY(20px)';
        card.style.transition = 'opacity 0.5s ease, transform 0.5s ease';
        observer.observe(card);
    });
}, 500);

let resizeTimeout;
window.addEventListener('resize', function() {
    clearTimeout(resizeTimeout);
    resizeTimeout = setTimeout(function() {
        if (typeof lucide !== 'undefined') {
            normalizeLucideAndCreate();
        }
    }, 250);
});
document.addEventListener('click', function(e) {
    const target = e.target.closest('a');
    if (target && target.getAttribute('href')?.startsWith('#')) {
        const hash = target.getAttribute('href').slice(1);
        if (pages[hash]) {
            e.preventDefault();
        }
    }
});

function showLoading() {
    document.body.style.cursor = 'wait';
}

function hideLoading() {
    document.body.style.cursor = 'default';
}

function navigateToPageWithLoading(pageName) {
    showLoading();
    navigateToPage(pageName);
    setTimeout(hideLoading, 300);
}

console.log('Faculty Website - Dr. Snehankita Majalekar');
console.log('Academic Portfolio System Loaded Successfully');
console.log('Available pages:', Object.keys(pages));

if ('ontouchstart' in window) {
    document.addEventListener('touchstart', function() {}, {passive: true});
}

function normalizeLucideAndCreate() {
    try {
        const mapping = {
            'key-round': 'key',
            'link-2': 'link',
            'bolt': 'zap',
            'swords': 'sword',
            'book-marked': 'book-open',
            'shield-alert': 'shield-alert',
            'presentation': 'monitor',
            'linkedin': 'external-link'
        };

        document.querySelectorAll('i[data-lucide]').forEach(el => {
            let name = el.getAttribute('data-lucide');
            if (!name) return;
            name = name.trim().replace(/\"|\'/g, '');
            if (mapping[name] && mapping[name] !== name) {
                el.setAttribute('data-lucide', mapping[name]);
            }
        });
        lucide.createIcons();
    } catch (e) {
        console.warn('Lucide normalization failed', e);
        try { lucide.createIcons(); } catch (err) { /* ignore */ }
    }
}

function getScreenSize() {
    const width = window.innerWidth;
    if (width <= 640) return 'mobile';
    if (width <= 1024) return 'tablet';
    return 'desktop';
}

function applyResponsiveStyles() {
    const screenSize = getScreenSize();
    const mainContent = document.getElementById('mainContent');
    
    if (!mainContent) return;
    
    mainContent.classList.remove('mobile-view', 'tablet-view', 'desktop-view');
    mainContent.classList.add(`${screenSize}-view`);
    
    const grids = mainContent.querySelectorAll('[style*="grid-template-columns"]');
    grids.forEach(grid => {
        if (screenSize === 'mobile') {
            if (grid.style.gridTemplateColumns.includes('repeat(3')) {
                grid.style.gridTemplateColumns = '1fr';
                grid.style.gap = '1rem';
            } else if (grid.style.gridTemplateColumns.includes('repeat(2')) {
                grid.style.gridTemplateColumns = '1fr';
                grid.style.gap = '1rem';
            }
        } else if (screenSize === 'tablet') {
            if (grid.style.gridTemplateColumns.includes('repeat(3')) {
                grid.style.gridTemplateColumns = 'repeat(2, 1fr)';
                grid.style.gap = '1.25rem';
            } else if (grid.style.gridTemplateColumns.includes('repeat(4')) {
                grid.style.gridTemplateColumns = 'repeat(2, 1fr)';
                grid.style.gap = '1.25rem';
            }
        }
    });
}

function optimizeFontSizes() {
    const screenSize = getScreenSize();
    const rootElement = document.documentElement;
    
    if (screenSize === 'mobile') {
        rootElement.style.fontSize = '14px';
    } else if (screenSize === 'tablet') {
        rootElement.style.fontSize = '15px';
    } else {
        rootElement.style.fontSize = '16px';
    }
}

function optimizeSpacing() {
    const screenSize = getScreenSize();
    const mainContent = document.getElementById('mainContent');
    
    if (!mainContent) return;
    
    const cards = mainContent.querySelectorAll('.card');
    
    cards.forEach(card => {
        if (screenSize === 'mobile') {
            card.style.padding = '1.5rem';
        } else if (screenSize === 'tablet') {
            card.style.padding = '2rem';
        } else {
            card.style.padding = '2.5rem';
        }
    });
}

function initializeResponsive() {
    applyResponsiveStyles();
    optimizeFontSizes();
    optimizeSpacing();
}

let responsiveTimeout;
window.addEventListener('resize', function() {
    clearTimeout(responsiveTimeout);
    responsiveTimeout = setTimeout(function() {
        initializeResponsive();
    }, 150);
});

document.addEventListener('DOMContentLoaded', function() {
    setTimeout(initializeResponsive, 500);
});

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

setTimeout(lazyLoadImages, 1000);



