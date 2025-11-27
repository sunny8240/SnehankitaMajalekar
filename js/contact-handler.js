(function() {
    const PUBLIC_KEY = 'EShafe42TYbglyHn1';
    const SERVICE_ID = 'service_jzd8rx9';
    const TEMPLATE_ID = 'template_zyl7sot';
    let emailjsInitialized = false;
    let initialized = false;

    function waitForEmailJS() {
        if (typeof emailjs !== 'undefined' && !emailjsInitialized) {
            try {
                emailjs.init(PUBLIC_KEY);
                emailjsInitialized = true;
                console.log('Contact Handler: EmailJS initialized successfully');
            } catch (error) {
                console.error('Contact Handler: Failed to initialize EmailJS:', error);
                setTimeout(waitForEmailJS, 500);
            }
        } else if (!emailjsInitialized) {
            setTimeout(waitForEmailJS, 200);
        }
    }

    waitForEmailJS();

    function initCharCounter() {
        const messageInput = document.getElementById('message');
        const charCount = document.querySelector('.char-count');

        if (messageInput && charCount) {
            messageInput.addEventListener('input', (e) => {
                const count = e.target.value.length;
                charCount.textContent = count + ' / 500';
                if (count > 500) {
                    messageInput.value = messageInput.value.substring(0, 500);
                    charCount.textContent = '500 / 500';
                }
            });
        }
    }

    function validateForm() {
        let isValid = true;
        const name = document.getElementById('name');
        const email = document.getElementById('email');
        const message = document.getElementById('message');

        document.querySelectorAll('.form-error').forEach(el => el.textContent = '');

        if (!name || !name.value.trim()) {
            const nameError = document.getElementById('nameError');
            if (nameError) nameError.textContent = 'Please enter your name';
            isValid = false;
        } else if (name.value.trim().length < 2) {
            const nameError = document.getElementById('nameError');
            if (nameError) nameError.textContent = 'Name must be at least 2 characters';
            isValid = false;
        }

        const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
        if (!email || !email.value.trim()) {
            const emailError = document.getElementById('emailError');
            if (emailError) emailError.textContent = 'Please enter your email';
            isValid = false;
        } else if (!emailRegex.test(email.value)) {
            const emailError = document.getElementById('emailError');
            if (emailError) emailError.textContent = 'Please enter a valid email address';
            isValid = false;
        }

        if (!message || !message.value.trim()) {
            const messageError = document.getElementById('messageError');
            if (messageError) messageError.textContent = 'Please enter your message';
            isValid = false;
        } else if (message.value.trim().length < 10) {
            const messageError = document.getElementById('messageError');
            if (messageError) messageError.textContent = 'Message must be at least 10 characters';
            isValid = false;
        }

        return isValid;
    }

    function showToast(message, type = 'info') {
        const existingToasts = document.querySelectorAll('.toast-notification');
        existingToasts.forEach(toast => toast.remove());

        const toast = document.createElement('div');
        toast.className = `toast-notification toast-${type}`;
        toast.innerHTML = message;
        
        const styles = {
            position: 'fixed',
            bottom: '2rem',
            right: '2rem',
            padding: '1rem 1.5rem',
            borderRadius: '0.75rem',
            zIndex: '9999',
            animation: 'slideIn 0.3s ease',
            fontWeight: '500',
            maxWidth: '400px',
            boxShadow: '0 10px 25px rgba(0, 0, 0, 0.1)'
        };

        if (type === 'success') {
            Object.assign(toast.style, {
                ...styles,
                backgroundColor: '#10b981',
                color: 'white'
            });
        } else if (type === 'error') {
            Object.assign(toast.style, {
                ...styles,
                backgroundColor: '#ef4444',
                color: 'white'
            });
        } else {
            Object.assign(toast.style, {
                ...styles,
                backgroundColor: '#3b82f6',
                color: 'white'
            });
        }

        document.body.appendChild(toast);

        setTimeout(() => {
            toast.style.animation = 'slideOut 0.3s ease';
            setTimeout(() => toast.remove(), 300);
        }, 4000);
    }

    function openMailClient(params) {
        try {
            const subject = encodeURIComponent(params.subject || 'Message from Academic Portfolio');
            const body = encodeURIComponent(`Name: ${params.from_name}\nEmail: ${params.from_email}\n\n${params.message}`);
            const to = encodeURIComponent('snehankitamajalekar@yahoo.com');
            const mailto = `mailto:${to}?subject=${subject}&body=${body}`;
            window.location.href = mailto;
        } catch (err) {
            console.error('Fallback mail client failed', err);
            showToast('Unable to open mail client. Please email directly to snehankitamajalekar@yahoo.com', 'error');
        }
    }

    function initFormSubmit() {
        const form = document.getElementById('contactForm');
        if (!form) return;

        form.addEventListener('submit', async (e) => {
            e.preventDefault();

            if (!validateForm()) {
                showToast('Please fix the errors above', 'error');
                return;
            }

            const submitBtn = form.querySelector('.form-submit-btn');
            if (!submitBtn) return;

            const originalText = submitBtn.innerHTML;
            submitBtn.disabled = true;
            submitBtn.innerHTML = '<i data-lucide="loader"></i> Sending...';

            if (typeof lucide !== 'undefined') {
                setTimeout(() => lucide.createIcons(), 50);
            }

            const templateParams = {
                from_name: document.getElementById('name').value,
                from_email: document.getElementById('email').value,
                to_name: 'Dr. Snehankita Majalekar',
                message: document.getElementById('message').value,
                reply_to: document.getElementById('email').value
            };

            if (typeof emailjs === 'undefined' || !emailjs.send) {
                console.warn('EmailJS not available; using mail client fallback');
                showToast('Email service unavailable — opening your mail client', 'error');
                openMailClient(templateParams);
                submitBtn.disabled = false;
                submitBtn.innerHTML = originalText;
                return;
            }

            try {
                const resp = await emailjs.send(SERVICE_ID, TEMPLATE_ID, templateParams);
                console.log('EmailJS response:', resp);
                showToast('✓ Message sent successfully! Dr. Snehankita will get back to you soon.', 'success');
                form.reset();
                
                const charCount = document.querySelector('.char-count');
                if (charCount) charCount.textContent = '0 / 500';
                
                document.querySelectorAll('.form-error').forEach(el => el.textContent = '');
            } catch (err) {
                console.error('EmailJS error:', err);
                const msg = (err && err.text) ? `Failed: ${err.text}` : 'Failed to send message via service.';
                showToast(`✗ ${msg} Opening mail client as fallback.`, 'error');
                openMailClient(templateParams);
            } finally {
                submitBtn.disabled = false;
                submitBtn.innerHTML = originalText;
                
                if (typeof lucide !== 'undefined') {
                    setTimeout(() => lucide.createIcons(), 50);
                }
            }
        });
    }

    function initWhatsAppHandler() {
        const waBtn = document.getElementById('waSendBtn');
        if (!waBtn) return;

        waBtn.addEventListener('click', () => {
            const waMessage = document.getElementById('waMessage');
            const waName = document.getElementById('waName');

            if (!waMessage || !waMessage.value.trim()) {
                showToast('Please enter a message', 'error');
                return;
            }

            const professorPhone = '917057371098'; 
            let fullMessage = '';
            
            if (waName && waName.value.trim()) {
                fullMessage += `Name: ${waName.value.trim()}\n`;
            }
            fullMessage += `Message: ${waMessage.value.trim()}`;

            const whatsappUrl = `https://wa.me/${professorPhone}?text=${encodeURIComponent(fullMessage)}`;
            window.open(whatsappUrl, '_blank');

            if (waName) waName.value = '';
            if (waMessage) waMessage.value = '';
            showToast('Opening WhatsApp...', 'success');
        });
    }

    function init() {
        if (initialized) return;
        const formEl = document.getElementById('contactForm');
        if (formEl) {
            initCharCounter();
            initFormSubmit();
            initWhatsAppHandler();
            initialized = true;
            window.contactHandlerInitialized = true;
            console.log('Contact handler initialized');
        } else {
            setTimeout(init, 100);
        }
    }

    document.addEventListener('DOMContentLoaded', init);

    const observer = new MutationObserver(() => {
        if (document.getElementById('contactForm') && !initialized) {
            init();
        }
    });

    observer.observe(document.body, { childList: true, subtree: true });

    setTimeout(init, 500);
})();

if (!document.getElementById('toastStyles')) {
    const style = document.createElement('style');
    style.id = 'toastStyles';
    style.textContent = `
        @keyframes slideIn {
            from {
                transform: translateX(400px);
                opacity: 0;
            }
            to {
                transform: translateX(0);
                opacity: 1;
            }
        }
        @keyframes slideOut {
            from {
                transform: translateX(0);
                opacity: 1;
            }
            to {
                transform: translateX(400px);
                opacity: 0;
            }
        }
        .toast-notification {
            font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', 'Roboto', 'Helvetica', 'Arial', sans-serif;
        }
        @media (max-width: 640px) {
            .toast-notification {
                bottom: 1rem !important;
                right: 1rem !important;
                left: 1rem !important;
                max-width: none !important;
            }
        }
    `;
    document.head.appendChild(style);
}
