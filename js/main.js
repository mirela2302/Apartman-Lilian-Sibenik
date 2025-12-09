// Form submission
const requestForm = document.getElementById('requestForm');
if (requestForm) {
    requestForm.addEventListener('submit', function(e) {
        e.preventDefault();
        alert('Hvala vam na zahtjevu! Kontaktirat ćemo vas u najkraćem mogućem roku.');
        requestForm.reset();
    });
}

// Active tab highlight and smooth scrolling
const tabLinks = document.querySelectorAll('.tab-link');
tabLinks.forEach(link => {
    link.addEventListener('click', function(e) {
        e.preventDefault();
        tabLinks.forEach(tab => tab.classList.remove('active'));
        this.classList.add('active');
        
        // Scroll to section
        const targetId = this.getAttribute('href');
        const targetSection = document.querySelector(targetId);
        if (targetSection) {
            window.scrollTo({
                top: targetSection.offsetTop - 120,
                behavior: 'smooth'
            });
        }
        
        // Close mobile menu if open
        if (window.innerWidth <= 768 && document.querySelector('.mobile-dropdown')) {
            document.querySelector('.mobile-dropdown').classList.remove('open');
            const mobileMenuTrigger = document.getElementById('mobileMenuTrigger');
            if (mobileMenuTrigger) {
                mobileMenuTrigger.textContent = '☰ Menu';
            }
        }
    });
});

// Make navigation tabs sticky on scroll
window.addEventListener('scroll', function() {
    const navTabs = document.querySelector('.nav-tabs-section');
    const heroSection = document.querySelector('.hero-section');
    
    if (navTabs && heroSection) {
        const heroBottom = heroSection.offsetTop + heroSection.offsetHeight;
        
        if (window.scrollY > heroBottom - 120) {
            navTabs.style.position = 'fixed';
            navTabs.style.top = '0';
            navTabs.style.width = '100%';
            navTabs.style.zIndex = '999';
            navTabs.style.marginTop = '0';
        } else {
            navTabs.style.position = 'relative';
            navTabs.style.marginTop = '-122px';
        }
    }
});

// Initialize mobile menu on DOM ready
document.addEventListener('DOMContentLoaded', function() {
    const mobileMenuTrigger = document.getElementById('mobileMenuTrigger');
    const navTabs = document.querySelector('.nav-tabs');
    
    if (!mobileMenuTrigger || !navTabs) return;
    
    // Check if mobile dropdown already exists (avoid duplicates)
    let mobileDropdown = navTabs.querySelector('.mobile-dropdown');
    
    if (!mobileDropdown) {
        // Create dropdown container
        mobileDropdown = document.createElement('div');
        mobileDropdown.className = 'mobile-dropdown';
        
        // Find regular menu links to clone
        const regularLinks = [
            document.querySelector('.tab-link[href="#home"]'),
            document.querySelector('.tab-link[href="#about"]'),
            document.querySelector('.tab-link[href="#gallery"]'),
            document.querySelector('.tab-link[href="#explore"]'),
            document.querySelector('.tab-link[href="#contact"]')
        ];
        
        // Clone and add links to dropdown
        regularLinks.forEach(link => {
            if (link) {
                const clone = link.cloneNode(true);
                mobileDropdown.appendChild(clone);
            }
        });
        
        // Add dropdown to nav tabs
        navTabs.appendChild(mobileDropdown);
        
        // Add click events to dropdown links
        mobileDropdown.querySelectorAll('.tab-link').forEach(link => {
            link.addEventListener('click', function() {
                mobileDropdown.classList.remove('open');
                mobileMenuTrigger.textContent = '☰ Menu';
            });
        });
    }
    
    // Set initial text for mobile menu trigger
    mobileMenuTrigger.textContent = '☰ Menu';
    
    // Toggle mobile menu
    mobileMenuTrigger.addEventListener('click', function(e) {
        e.preventDefault();
        e.stopPropagation();
        
        if (mobileDropdown.classList.contains('open')) {
            mobileDropdown.classList.remove('open');
            this.textContent = '☰ Menu';
        } else {
            mobileDropdown.classList.add('open');
            this.textContent = '✕ Zatvori';
        }
    });
    
    // Close menu when clicking outside
    document.addEventListener('click', function(e) {
        if (!navTabs.contains(e.target) && mobileDropdown.classList.contains('open')) {
            mobileDropdown.classList.remove('open');
            mobileMenuTrigger.textContent = '☰ Menu';
        }
    });
    
    // Close menu on window resize (when switching to desktop)
    window.addEventListener('resize', function() {
        if (window.innerWidth > 768 && mobileDropdown.classList.contains('open')) {
            mobileDropdown.classList.remove('open');
            mobileMenuTrigger.textContent = '☰ Menu';
        }
    });
});