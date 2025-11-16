
document.addEventListener("DOMContentLoaded", () => {
    initMobileMenu();
    initModalEvents();
    initContactForm();
});

function initMobileMenu() {
    const menuToggle = document.getElementById('menu-toggle');
    const navLinks = document.getElementById('nav-links');

    if (!menuToggle) return; 

    menuToggle.addEventListener('click', () => {
        navLinks.classList.toggle('active');
        const isExpanded = navLinks.classList.contains('active');
        menuToggle.setAttribute('aria-expanded', isExpanded);
    });
}

function initModalEvents() {
    document.addEventListener('click', (event) => {
        const target = event.target;

        const modalTrigger = target.closest('.desc-link');
        if (modalTrigger) {
            handleModalOpen(modalTrigger);
            return; 
        }

        const closeButton = target.closest('.modal .close');
        if (closeButton) {
            closeButton.closest('.modal').style.display = 'none';
            return;
        }

        if (target.classList.contains('modal')) {
            target.style.display = 'none';
            return;
        }


        const tipsButton = target.closest('.tips-btn');
        if (tipsButton) {
            handleTipsToggle(tipsButton);
        }
    });
}

/**

 * @param {HTMLElement} trigger - Elemen .desc-link yang diklik.
 */
function handleModalOpen(trigger) {
    
    const modalId = trigger.dataset.modal; 
    const modal = document.getElementById(modalId);
    
    if (!modal) return;
    
    const cardImage = trigger.closest('.destination')?.querySelector('img');
    const modalImage = modal.querySelector('.modal-image');

    if (cardImage && modalImage) {
        modalImage.src = cardImage.src;
        modalImage.alt = cardImage.alt;
    }

    modal.style.display = 'block';
}

 */
function handleTipsToggle(button) {
    const tipsContent = button.closest('.modal-content')?.querySelector('.tips-content');
    
    if (!tipsContent) return;

    
    const isVisible = tipsContent.style.display === 'block';

    
    tipsContent.style.display = isVisible ? 'none' : 'block';
    button.innerHTML = isVisible 
        ? '<i class="fa-solid fa-lightbulb"></i> Tampilkan Tips'
        : '<i class="fa-solid fa-lightbulb"></i> Sembunyikan Tips';
}


function initContactForm() {
    const contactForm = document.getElementById('contact-form');
    const formMessage = document.getElementById('form-message');

    if (!contactForm) return;

    contactForm.addEventListener('submit', (e) => {
        e.preventDefault(); 

        
        formMessage.textContent = 'Pesan Anda berhasil terkirim! Terima kasih.';
        formMessage.className = 'form-success';

        
        setTimeout(() => {
            contactForm.reset();
            formMessage.textContent = '';
            formMessage.className = '';
        }, 3000);
    });
}
