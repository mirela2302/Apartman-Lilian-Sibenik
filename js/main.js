// Active tab highlight and smooth scrolling 
const tabLinks = document.querySelectorAll('.tab-link');
tabLinks.forEach(link => {
    link.addEventListener('click', function(e) {
        const href = this.getAttribute('href');
        
        // Provjeri da li je link unutarnji anchor (#section) ili vanjska stranica
        if (href.startsWith('#')) {
            // Unutarnji anchor - koristi smooth scroll i spriječi default ponašanje
            e.preventDefault();
            
            tabLinks.forEach(tab => tab.classList.remove('active'));
            this.classList.add('active');
            
            // Scroll to section
            const targetId = href;
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
        }
        // Ako link vodi na drugu stranicu (npr. galerija.html, booking.html, itd.),
        // ne spriječavamo default ponošanje - pregledač će normalno pratiti link
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

// Main initialization
document.addEventListener('DOMContentLoaded', function() {
    // Mobile menu functionality
    const mobileMenuTrigger = document.getElementById('mobileMenuTrigger');
    const navTabs = document.querySelector('.nav-tabs');
    
    if (mobileMenuTrigger && navTabs) {
        // Check if mobile dropdown already exists (avoid duplicates)
        let mobileDropdown = navTabs.querySelector('.mobile-dropdown');
        
        if (!mobileDropdown) {
            // Create dropdown container
            mobileDropdown = document.createElement('div');
            mobileDropdown.className = 'mobile-dropdown';
            
            // Find all tab links except the mobile menu trigger itself
            const allTabLinks = Array.from(navTabs.querySelectorAll('.tab-link'));
            const regularLinks = allTabLinks.filter(link => link !== mobileMenuTrigger);
            
            // Clone and add links to dropdown
            regularLinks.forEach(link => {
                const clone = link.cloneNode(true);
                // Ukloni "active" klasu iz klona
                clone.classList.remove('active');
                mobileDropdown.appendChild(clone);
            });
            
            // Add dropdown to nav tabs
            navTabs.appendChild(mobileDropdown);
            
            // Add click events to dropdown links
            mobileDropdown.querySelectorAll('.tab-link').forEach(link => {
                link.addEventListener('click', function(e) {
                    const href = this.getAttribute('href');
                    
                    if (href.startsWith('#')) {
                        // Samo za anchor linkove, zatvori meni
                        mobileDropdown.classList.remove('open');
                        mobileMenuTrigger.textContent = '☰ Menu';
                    }
                    // Za linkove na druge stranice, meni će se automatski zatvoriti
                    // kad se stranica učita
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
    }

    //++++++++++++++++++++++++++++++++++++++++++++++++Kontakt.html
    // Contact form functionality
    const contactForm = document.getElementById('contactForm');
    if (contactForm) {
        contactForm.addEventListener('submit', function(e) {
            e.preventDefault();
            alert('Hvala vam na poruci! Odgovorit ćemo vam u najkraćem mogućem roku.');
            contactForm.reset();
        });
    }
    
    // FAQ functionality
    const faqQuestions = document.querySelectorAll('.faq-question');
    faqQuestions.forEach(question => {
        question.addEventListener('click', function() {
            const answer = this.nextElementSibling;
            const toggle = this.querySelector('.faq-toggle');
            
            // Close all other FAQ answers
            document.querySelectorAll('.faq-answer').forEach(item => {
                if (item !== answer) {
                    item.style.maxHeight = null;
                    const itemToggle = item.parentElement.querySelector('.faq-toggle');
                    if (itemToggle) {
                        itemToggle.textContent = '+';
                    }
                }
            });
            
            // Toggle current FAQ answer
            if (answer.style.maxHeight) {
                answer.style.maxHeight = null;
                toggle.textContent = '+';
            } else {
                answer.style.maxHeight = answer.scrollHeight + "px";
                toggle.textContent = '−';
            }
        });
    });
    
    // Set active tab based on current page
    const currentPage = window.location.pathname;
    const contactTab = document.querySelector('.tab-link[href="kontakt.html"]');
    
    if (currentPage.includes('kontakt.html') && contactTab) {
        // Remove active class from all tabs
        document.querySelectorAll('.tab-link').forEach(tab => {
            tab.classList.remove('active');
        });
        // Add active class to contact tab
        contactTab.classList.add('active');
    }
    
    // ⭐⭐⭐ NOVI DIO ZA SVE FORME - DODAJEMO NA KRAJ ⭐⭐⭐
    
    // Brza forma - samo na index.html 
    const quickForm = document.getElementById('quickInquiryForm');
    if (quickForm) {
        quickForm.addEventListener('submit', function(e) {
            e.preventDefault();
            console.log('Quick inquiry submitted');
            alert('Hvala na upitu! Kontaktirat ćemo vas u roku 24h.');
            this.reset();
        });
    }
    
    // Booking forma - samo na booking.html
    const bookingForm = document.getElementById('bookingForm');
    if (bookingForm) {
        bookingForm.addEventListener('submit', function(e) {
            e.preventDefault();
            console.log('Booking form submitted');
            alert('Rezervacija zaprimljena! Očekujte potvrdni email.');
            this.reset();
        });
    }
    
    // Newsletter forma (ako postoji)
    const newsletterForm = document.getElementById('newsletterForm');
    if (newsletterForm) {
        newsletterForm.addEventListener('submit', function(e) {
            e.preventDefault();
            console.log('Newsletter subscription');
            alert('Hvala na pretplati!');
            this.reset();
        });
    }
    
    // ⭐⭐⭐ KRAJ NOVOG DIJELA ⭐⭐⭐
    
}); // OVO JE KRAJ DOMContentLoaded

// Firebase funkcija za slanje podataka
// ========== FIREBASE FUNKCIJE ==========

// Glavna funkcija za slanje podataka u Firebase
async function sendToFirebase(formType, data) {
    console.log("🚀 Šaljem podatke u Firebase:", formType);
    console.log("📦 Podaci:", data);
    
    try {
        // Provjeri da li Firebase radi
        if (!window.firebaseDB) {
            console.error("Firebase nije inicijaliziran!");
            return { success: false, error: "Firebase nije spreman" };
        }
        
        // Dodaj timestamp i metadata
        const firebaseData = {
            ...data,
            timestamp: Date.now(),
            date: new Date().toISOString(),
            status: 'new',
            read: false,
            source: formType
        };
        
        // ODREDI ISPRAVNU PUTANJU U BAZI 
        let path = '';
        switch(formType) {
            case 'quick-inquiry':
                path = 'quick_inquiries';  // OVO JE PUTANJA, ne URL!
                break;
            case 'contact':
                path = 'contact_messages'; // OVO JE PUTANJA, ne URL!
                break;
            case 'booking':
                path = 'bookings';         // OVO JE PUTANJA, ne URL!
                // Dodaj booking-specific data
                firebaseData.bookingCode = 'AL-' + Date.now().toString().slice(-6);
                break;
            default:
                path = 'other_inquiries';
        }
        
        console.log("📍 Firebase putanja:", path);
        
        // Spremi u Firebase
        const newRef = window.firebaseDB.ref(path).push();
        await newRef.set(firebaseData);
        
        console.log(`✅ Podaci spremljeni u Firebase: ${path}/${newRef.key}`);
        
        // Track with Analytics (ako postoji)
        if (window.firebaseAnalytics) {
            window.firebaseAnalytics.logEvent('form_submission', {
                form_type: formType,
                form_id: newRef.key
            });
        }
        
        return { 
            success: true, 
            id: newRef.key,
            bookingCode: firebaseData.bookingCode 
        };
        
    } catch (error) {
        console.error('❌ Firebase error:', error);
        return { success: false, error: error.message };
    }
}

// ========== FORM HANDLERI ==========

// Form handler za sve forme
// Form handler za sve forme
// Form handler za sve forme
// Form handler za sve forme
function setupFormHandler(formId, formType) {
    const form = document.getElementById(formId);
    
    if (!form) {
        console.log(`Forma ${formId} nije pronađena na ovoj stranici`);
        return;
    }
    
    console.log(`✅ Postavljam NOVI handler za formu: ${formId} (${formType})`);
    
    // Ukloni sve postojeće handlere tako što ćemo klonirati formu
    const newForm = form.cloneNode(true);
    form.parentNode.replaceChild(newForm, form);
    
    // Sada radimo s "čistom" formom
    const cleanForm = document.getElementById(formId);
    
    // Dodaj naš handler na "čistu" formu
    cleanForm.addEventListener('submit', async function(e) {
        // SPRIJEČI SVE default ponašanje
        e.preventDefault();
        e.stopPropagation();
        e.stopImmediatePropagation();
        
        console.log(`🚨 HANDLER za ${formType} se izvršava!`);
        
        // DEBUG: Prikaži sve inpute u formi
        console.log("🔍 Svi inputi u formi:");
        const allInputs = this.querySelectorAll('input, textarea, select');
        allInputs.forEach(input => {
            console.log(`  ${input.id || input.name || input.type}: value="${input.value}"`);
        });
        
        // FLEKSIBILNO: Dohvati sve podatke iz forme
        const formData = new FormData(this);
        const formDataObj = Object.fromEntries(formData.entries());
        
        console.log("🔍 FormData objekt:", formDataObj);
        
        // Za različite tipove formi, pripremi različite podatke
        let data = {};
        
        if (formType === 'quick-inquiry') {
            // Quick inquiry forma
            data = {
                name: formDataObj.name || '',
                email: formDataObj.email || '',
                message: formDataObj.message || '',
                date: new Date().toISOString(),
                read: false,
                source: formType,
                status: 'new',
                timestamp: Date.now()
            };
        } else if (formType === 'booking') {
            // Booking forma - DRUGAČIJA POLJA!
            data = {
                full_name: formDataObj.full_name || '',
                email: formDataObj.email || '',
                phone: formDataObj.phone || '',
                check_in: formDataObj.check_in || '',
                check_out: formDataObj.check_out || '',
                guests: formDataObj.guests || '',
                message: formDataObj.message || formDataObj.note || '', // Opcionalno
                date: new Date().toISOString(),
                read: false,
                source: formType,
                status: 'new',
                timestamp: Date.now()
            };
        } else if (formType === 'contact') {
            // Contact forma
            data = {
                name: formDataObj.name || '',
                email: formDataObj.email || '',
                message: formDataObj.message || '',
                date: new Date().toISOString(),
                read: false,
                source: formType,
                status: 'new',
                timestamp: Date.now()
            };
        }
        
        console.log("📦 Podaci za slanje:", data);
        
        // Prikaži loading
        const submitBtn = this.querySelector('button[type="submit"]');
        const originalText = submitBtn.textContent;
        submitBtn.innerHTML = '<i class="fas fa-spinner fa-spin"></i> Šaljem...';
        submitBtn.disabled = true;
        
        try {
            // Validacija - RAZLIČITA za svaku formu
            let isValid = true;
            let errorMessage = '';
            
            if (formType === 'quick-inquiry') {
                if (!data.name || !data.email || !data.message) {
                    isValid = false;
                    errorMessage = "Molimo popunite sva polja!";
                }
            } else if (formType === 'booking') {
                if (!data.full_name || !data.email || !data.phone || !data.check_in || !data.check_out || !data.guests) {
                    isValid = false;
                    errorMessage = "Molimo popunite sva obavezna polja!";
                }
            } else if (formType === 'contact') {
                if (!data.name || !data.email || !data.message) {
                    isValid = false;
                    errorMessage = "Molimo popunite sva polja!";
                }
            }
            
            if (!isValid) {
                throw new Error(errorMessage);
            }
            
            // Pošalji u Firebase
            const result = await sendToFirebase(formType, data);
            
            if (result.success) {
                // Uspjeh
                const message = getSuccessMessage(formType, result.bookingCode);
                showNotification(message, 'success');
                
                // Resetiraj formu SAMO NAKON uspjeha
                this.reset();
                
                console.log("🎉 Forma uspješno poslana! ID:", result.id);
            } else {
                // Greška
                console.error("❌ Greška pri slanju:", result.error);
                showNotification('Došlo je do greške. Pokušajte ponovno.', 'error');
            }
        } catch (error) {
            console.error("❌ Neočekivana greška:", error);
            showNotification(error.message || 'Došlo je do greške.', 'error');
        } finally {
            // Vrati gumb
            submitBtn.textContent = originalText;
            submitBtn.disabled = false;
        }
        
        return false;
    });
    
    console.log(`✅ Handler postavljen za: ${formId}`);
}

// ========== POMOĆNE FUNKCIJE ==========

// Funkcija za poruke uspjeha-pametna poruka:-)
function getSuccessMessage(formType, bookingCode = '') {
    switch(formType) {
        case 'quick-inquiry':
            return 'Hvala na upitu! Javit ćemo vam se u roku 24h.';
        case 'contact':
            return 'Poruka je poslana! Kontaktirat ćemo vas za detalje.';
        case 'booking':
            return `Rezervacija je zaprimljena! ${bookingCode ? 'Vaš kod: ' + bookingCode : ''}`;
        default:
            return 'Hvala vam!';
    }
}

// Funkcija za prikaz notifikacija-pop up poruka
function showNotification(message, type = 'success') {
    // Kreiraj notifikaciju
    const notification = document.createElement('div');
    notification.className = `notification notification-${type}`;
    notification.innerHTML = `
        <div class="notification-content">
            <strong>${type === 'success' ? '✓' : '✗'} ${message}</strong>
        </div>
        <button class="notification-close">&times;</button>
    `;
    
    // Dodaj na stranicu
    document.body.appendChild(notification);
    
    // Pokaži animaciju
    setTimeout(() => notification.classList.add('show'), 10);
    
    // Automatski sakrij nakon 5 sekundi
    setTimeout(() => {
        notification.classList.remove('show');
        setTimeout(() => notification.remove(), 300);
    }, 5000);
    
    // Close button
    notification.querySelector('.notification-close').addEventListener('click', () => {
        notification.remove();
    });
}

// ========== INICIJALIZACIJA ==========

// Main initialization - OVO SE POKREĆE KADA SE STRANICA UČITA
document.addEventListener('DOMContentLoaded', function() {
    console.log("🚀 Main.js učitan!");
    console.log("Firebase DB dostupan:", !!window.firebaseDB);
    
    // Mobile menu functionality (vaš postojeći kod)
    const mobileMenuTrigger = document.getElementById('mobileMenuTrigger');
    const navTabs = document.querySelector('.nav-tabs');
    
    if (mobileMenuTrigger && navTabs) {
        // ... vaš postojeći mobile menu kod ...
    }
    
    // FORME - postavi handlere za sve 3 forme
    
    // 1. Brza forma na index.html
    const quickForm = document.getElementById('quickInquiryForm');
    if (quickForm) {
        console.log("✅ Pronađena quickInquiryForm");
        setupFormHandler('quickInquiryForm', 'quick-inquiry');
    }
    
    // 2. Kontakt forma na kontakt.html
    const contactForm = document.getElementById('contactForm');
    if (contactForm) {
        console.log("✅ Pronađena contactForm");
        setupFormHandler('contactForm', 'contact');
    }
    
    // 3. Booking forma na booking.html
    const bookingForm = document.getElementById('bookingForm');
    if (bookingForm) {
        console.log("✅ Pronađena bookingForm");
        setupFormHandler('bookingForm', 'booking');
    }
    
    // FAQ functionality (vaš postojeći kod)
    const faqQuestions = document.querySelectorAll('.faq-question');
    faqQuestions.forEach(question => {
        question.addEventListener('click', function() {
            // ... vaš postojeći FAQ kod ...
        });
    });
    
    // Set active tab based on current page (vaš postojeći kod)
    const currentPage = window.location.pathname;
    const contactTab = document.querySelector('.tab-link[href="kontakt.html"]');
    
    if (currentPage.includes('kontakt.html') && contactTab) {
        document.querySelectorAll('.tab-link').forEach(tab => {
            tab.classList.remove('active');
        });
        contactTab.classList.add('active');
    }
    
    // Dodaj CSS za notifikacije ako već ne postoji
    if (!document.querySelector('#notification-styles')) {
        const notificationCSS = `
        .notification {
            position: fixed;
            top: 20px;
            right: 20px;
            padding: 15px 20px;
            border-radius: 8px;
            color: white;
            z-index: 10000;
            max-width: 350px;
            transform: translateX(100%);
            opacity: 0;
            transition: all 0.3s ease;
            display: flex;
            align-items: center;
            justify-content: space-between;
            gap: 15px;
        }
        
        .notification.show {
            transform: translateX(0);
            opacity: 1;
        }
        
        .notification-success {
            background-color: #2ecc71;
            border-left: 5px solid #27ae60;
        }
        
        .notification-error {
            background-color: #e74c3c;
            border-left: 5px solid #c0392b;
        }
        
        .notification-close {
            background: none;
            border: none;
            color: white;
            font-size: 24px;
            cursor: pointer;
            padding: 0;
            line-height: 1;
        }
        
        .notification-content {
            flex: 1;
        }
        `;
        
        const style = document.createElement('style');
        style.id = 'notification-styles';
        style.textContent = notificationCSS;
        document.head.appendChild(style);
    }
    
    console.log("✅ Main.js inicijalizacija završena!");
});



