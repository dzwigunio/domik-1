// script.js

// Mobile menu toggle
const menuToggle = document.getElementById('menu-toggle');
const mobileMenu = document.getElementById('mobile-menu');
if (menuToggle && mobileMenu) {
    menuToggle.addEventListener('click', () => {
        mobileMenu.classList.toggle('active');
    });

    // Close mobile menu on link click
    document.querySelectorAll('#mobile-menu a').forEach(link => {
        link.addEventListener('click', () => {
            mobileMenu.classList.remove('active');
        });
    });
}

// Carousel functionality
const carouselInner = document.querySelector('.carousel-inner');
if (carouselInner) {
    const slides = document.querySelectorAll('.carousel-slide');
    const prevBtn = document.querySelector('.prev');
    const nextBtn = document.querySelector('.next');
    let currentIndex = 0;
    const totalSlides = slides.length;
    
    function updateCarousel() {
        let visibleSlides = 1;
        if (window.innerWidth >= 1024) visibleSlides = 3;
        else if (window.innerWidth >= 768) visibleSlides = 2;
        
        const maxIndex = Math.max(0, totalSlides - visibleSlides);
        if (currentIndex > maxIndex) currentIndex = maxIndex;
        
        const offset = currentIndex * (100 / visibleSlides);
        carouselInner.style.transform = `translateX(-${offset}%)`;
    }

    if (nextBtn && prevBtn) {
        nextBtn.addEventListener('click', () => {
            let visibleSlides = 1;
            if (window.innerWidth >= 1024) visibleSlides = 3;
            else if (window.innerWidth >= 768) visibleSlides = 2;
            const maxIndex = Math.max(0, totalSlides - visibleSlides);
            
            currentIndex = (currentIndex + 1) > maxIndex ? 0 : currentIndex + 1;
            updateCarousel();
        });

        prevBtn.addEventListener('click', () => {
            let visibleSlides = 1;
            if (window.innerWidth >= 1024) visibleSlides = 3;
            else if (window.innerWidth >= 768) visibleSlides = 2;
            const maxIndex = Math.max(0, totalSlides - visibleSlides);
            
            currentIndex = (currentIndex - 1) < 0 ? maxIndex : currentIndex - 1;
            updateCarousel();
        });
    }
    
    window.addEventListener('resize', updateCarousel);
}

function openModal(src, alt) {
    const modal = document.getElementById('imageModal');
    const modalImg = document.getElementById('modalImage');
    if (modal && modalImg) {
        modalImg.src = src;
        modalImg.alt = alt;
        modal.classList.add('active');
    }
}

function closeModal() {
    const modal = document.getElementById('imageModal');
    if (modal) {
        modal.classList.remove('active');
    }
}

// Close modal on background click
const imageModal = document.getElementById('imageModal');
if (imageModal) {
    imageModal.addEventListener('click', function(e) {
        if (e.target === this) {
            closeModal();
        }
    });
}
