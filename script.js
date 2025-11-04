
document.addEventListener('DOMContentLoaded', () => {

    const menuToggle = document.getElementById('menu-toggle');
    const navLinks = document.getElementById('nav-links');

    menuToggle.addEventListener('click', () => {
        navLinks.classList.toggle('active');
        const isExpanded = navLinks.classList.contains('active');
        menuToggle.setAttribute('aria-expanded', isExpanded);
        const icon = menuToggle.querySelector('i');
        if (isExpanded) {
            icon.classList.remove('fa-bars');
            icon.classList.add('fa-xmark');
        } else {
            icon.classList.remove('fa-xmark');
            icon.classList.add('fa-bars');
        }
    });

    const modalTriggers = document.querySelectorAll('.desc-link');
    const closeButtons = document.querySelectorAll('.modal .close');

    modalTriggers.forEach(trigger => {
        trigger.addEventListener('click', () => {
            const modalId = trigger.getAttribute('data-modal');
            const modal = document.getElementById(modalId);
            
            const card = trigger.closest('.destination');
            const cardImage = card.querySelector('img');
            const imgSrc = cardImage.src;
            const imgAlt = cardImage.alt;
            
            const modalImage = modal.querySelector('.modal-image');
            modalImage.src = imgSrc;
            modalImage.alt = imgAlt;

            
            if (modal) {
                modal.style.display = 'block';
            }
        });
    });

    closeButtons.forEach(button => {
        button.addEventListener('click', () => {
            button.closest('.modal').style.display = 'none';
        });
    });

    window.addEventListener('click', (event) => {
        if (event.target.classList.contains('modal')) {
            event.target.style.display = 'none';
        }
    });

    document.querySelectorAll('.tips-btn').forEach(btn => {
        btn.addEventListener('click', () => {
            const modal = btn.closest('.modal-content');
            const tipsContent = modal.querySelector('.tips-content');
            
            const isHidden = tipsContent.style.display === 'none' || tipsContent.style.display === '';
            tipsContent.style.display = isHidden ? 'block' : 'none';

            btn.classList.toggle('active');
            if (!isHidden) {
                btn.innerHTML = '<i class="fa-solid fa-lightbulb"></i> Tampilkan Tips';
            } else {
                btn.innerHTML = '<i class="fa-solid fa-lightbulb"></i> Sembunyikan Tips';
            }
        });
    });

    document.querySelectorAll('.trail-map-btn').forEach(btn => {
        btn.addEventListener('click', () => {
            const modal = btn.closest('.modal-content');
            const trailMapContent = modal.querySelector('.trail-map-content');
            
            const isHidden = trailMapContent.style.display === 'none' || trailMapContent.style.display === '';
            trailMapContent.style.display = isHidden ? 'block' : 'none';

            btn.classList.toggle('active');
            if (!isHidden) {
                btn.innerHTML = '<i class="fa-solid fa-route"></i> Tampilkan Peta Jalur';
            } else {
                btn.innerHTML = '<i class="fa-solid fa-route"></i> Sembunyikan Peta Jalur';
            }
        });
    });

    const contactForm = document.getElementById('contact-form');
    const formMessage = document.getElementById('form-message');

    contactForm.addEventListener('submit', (e) => {
        e.preventDefault(); 
        formMessage.textContent = 'Terima kasih! Pesan Anda telah terkirim.';
        contactForm.reset();
        setTimeout(() => {
            formMessage.textContent = '';
        }, 3000);
    });

});