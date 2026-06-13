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

/* =====================================================
   GALLERY LIGHTBOX
   ===================================================== */

// Image lists for each realizacja
const galleriesData = {
    lagiewniki: {
        lead: 'realizacje/1-lagiewniki/lagiewniki-lead-photo.webp',
        images: [
            'realizacje/1-lagiewniki/lagiewniki-lead-photo.webp',
            'realizacje/1-lagiewniki/img/20171212_100001a.webp',
            'realizacje/1-lagiewniki/img/20171212_100001b.webp',
            'realizacje/1-lagiewniki/img/20171212_100002.webp',
            'realizacje/1-lagiewniki/img/20171212_100003.webp',
            'realizacje/1-lagiewniki/img/20171212_100004.webp',
            'realizacje/1-lagiewniki/img/20171212_100005.webp',
            'realizacje/1-lagiewniki/img/20171212_100006.webp',
            'realizacje/1-lagiewniki/img/20181210_104616.webp',
            'realizacje/1-lagiewniki/img/20201231_140637.webp',
            'realizacje/1-lagiewniki/img/20201231_140750.webp',
            'realizacje/1-lagiewniki/img/20201231_140815.webp',
            'realizacje/1-lagiewniki/img/20201231_140834.webp',
            'realizacje/1-lagiewniki/img/20201231_140907.webp',
            'realizacje/1-lagiewniki/img/20201231_140939.webp',
            'realizacje/1-lagiewniki/img/20201231_141110.webp',
            'realizacje/1-lagiewniki/img/20201231_141200.webp',
            'realizacje/1-lagiewniki/img/20201231_141201.webp',
            'realizacje/1-lagiewniki/img/20201231_141202.webp',
            'realizacje/1-lagiewniki/img/20201231_141203.webp',
            'realizacje/1-lagiewniki/img/20201231_141204.webp',
            'realizacje/1-lagiewniki/img/20201231_141205.webp',
        ]
    },
    zamosc: {
        lead: 'realizacje/2-zamosc/zamosc-lead-photo.webp',
        images: [
            'realizacje/2-zamosc/zamosc-lead-photo.webp',
            'realizacje/2-zamosc/img/20180528_155458.webp',
            'realizacje/2-zamosc/img/20180528_155632.webp',
            'realizacje/2-zamosc/img/20180528_155634.webp',
            'realizacje/2-zamosc/img/20180606_153707.webp',
            'realizacje/2-zamosc/img/20180606_154016.webp',
            'realizacje/2-zamosc/img/20180606_154039.webp',
            'realizacje/2-zamosc/img/20180613_124332.webp',
            'realizacje/2-zamosc/img/20180706_111552.webp',
            'realizacje/2-zamosc/img/20181121_112103.webp',
            'realizacje/2-zamosc/img/20181121_112549.webp',
            'realizacje/2-zamosc/img/20190107_120340.webp',
            'realizacje/2-zamosc/img/20190107_120357.webp',
            'realizacje/2-zamosc/img/20190107_125107.webp',
            'realizacje/2-zamosc/img/20190107_125551.webp',
            'realizacje/2-zamosc/img/20190107_125638.webp',
            'realizacje/2-zamosc/img/20190107_133847.webp',
            'realizacje/2-zamosc/img/20190107_172200.webp',
            'realizacje/2-zamosc/img/20190615_085940.webp',
            'realizacje/2-zamosc/img/20190615_090015.webp',
            'realizacje/2-zamosc/img/20190615_090029.webp',
            'realizacje/2-zamosc/img/20190615_090106.webp',
            'realizacje/2-zamosc/img/20200620_171621.webp',
            'realizacje/2-zamosc/img/20200620_171626.webp',
            'realizacje/2-zamosc/img/20200620_171700.webp',
            'realizacje/2-zamosc/img/20200620_171732.webp',
            'realizacje/2-zamosc/img/20200620_171740.webp',
            'realizacje/2-zamosc/img/20200620_171745.webp',
            'realizacje/2-zamosc/img/20200620_171750.webp',
            'realizacje/2-zamosc/img/20200620_171820.webp',
            'realizacje/2-zamosc/img/20200620_171825.webp',
            'realizacje/2-zamosc/img/20200620_171850.webp',
            'realizacje/2-zamosc/img/20200620_171904.webp',
            'realizacje/2-zamosc/img/20200620_171914.webp',
            'realizacje/2-zamosc/img/20200620_172125.webp',
            'realizacje/2-zamosc/img/20200620_172131.webp',
        ]
    },
    puzdrowizna: {
        lead: 'realizacje/3-puzdrowizna/puzdrowizna-lead-photo.webp',
        images: [
            'realizacje/3-puzdrowizna/puzdrowizna-lead-photo.webp',
            'realizacje/3-puzdrowizna/img/20200407_171653.webp',
            'realizacje/3-puzdrowizna/img/20200407_171810.webp',
            'realizacje/3-puzdrowizna/img/20200409_152204.webp',
            'realizacje/3-puzdrowizna/img/20200409_152212.webp',
            'realizacje/3-puzdrowizna/img/20200409_163523.webp',
            'realizacje/3-puzdrowizna/img/20200414_130956.webp',
            'realizacje/3-puzdrowizna/img/20200414_131025.webp',
            'realizacje/3-puzdrowizna/img/20200415_134555.webp',
            'realizacje/3-puzdrowizna/img/20200417_070014.webp',
            'realizacje/3-puzdrowizna/img/20200417_070210.webp',
            'realizacje/3-puzdrowizna/img/20200417_110215.webp',
            'realizacje/3-puzdrowizna/img/20200417_110244.webp',
            'realizacje/3-puzdrowizna/img/20200421_112759.webp',
            'realizacje/3-puzdrowizna/img/20200421_173124.webp',
            'realizacje/3-puzdrowizna/img/20200422_173307.webp',
            'realizacje/3-puzdrowizna/img/20200508_102501.webp',
            'realizacje/3-puzdrowizna/img/20200602_152622.webp',
            'realizacje/3-puzdrowizna/img/20200610_081104.webp',
            'realizacje/3-puzdrowizna/img/20200616_104107.webp',
            'realizacje/3-puzdrowizna/img/20200616_104133.webp',
            'realizacje/3-puzdrowizna/img/20200616_113021.webp',
            'realizacje/3-puzdrowizna/img/20200616_120730.webp',
            'realizacje/3-puzdrowizna/img/20200629_102528.webp',
            'realizacje/3-puzdrowizna/img/20200629_102553.webp',
            'realizacje/3-puzdrowizna/img/20200629_132547.webp',
            'realizacje/3-puzdrowizna/img/20200629_132551.webp',
            'realizacje/3-puzdrowizna/img/20200824_153618.webp',
            'realizacje/3-puzdrowizna/img/20200904_162739.webp',
            'realizacje/3-puzdrowizna/img/20201020_074829.webp',
            'realizacje/3-puzdrowizna/img/20201027_075742.webp',
            'realizacje/3-puzdrowizna/img/20201116_143420.webp',
            'realizacje/3-puzdrowizna/img/20221215_093459.webp',
            'realizacje/3-puzdrowizna/img/20221215_093511.webp',
            'realizacje/3-puzdrowizna/img/20230325_084111.webp',
            'realizacje/3-puzdrowizna/img/20230325_084130.webp',
            'realizacje/3-puzdrowizna/img/20230325_084200.webp',
        ]
    },
    dziuchow: {
        lead: 'realizacje/4-dziuchow/dziuchow-lead-photo.webp',
        images: [
            'realizacje/4-dziuchow/dziuchow-lead-photo.webp',
            'realizacje/4-dziuchow/img/20200303_160623.webp',
            'realizacje/4-dziuchow/img/20200305_125315.webp',
            'realizacje/4-dziuchow/img/20200310_110113.webp',
            'realizacje/4-dziuchow/img/20200310_133047.webp',
            'realizacje/4-dziuchow/img/20200311_132645.webp',
            'realizacje/4-dziuchow/img/20200313_091537.webp',
            'realizacje/4-dziuchow/img/20200313_112127.webp',
            'realizacje/4-dziuchow/img/20200317_092450.webp',
            'realizacje/4-dziuchow/img/20200317_150007.webp',
            'realizacje/4-dziuchow/img/20200317_154139.webp',
            'realizacje/4-dziuchow/img/20200318_161747.webp',
            'realizacje/4-dziuchow/img/20200318_170418.webp',
            'realizacje/4-dziuchow/img/20200318_170433.webp',
            'realizacje/4-dziuchow/img/20200319_101548.webp',
            'realizacje/4-dziuchow/img/20200320_094553.webp',
            'realizacje/4-dziuchow/img/20200320_135416.webp',
            'realizacje/4-dziuchow/img/20200321_100552.webp',
            'realizacje/4-dziuchow/img/20200326_162900.webp',
            'realizacje/4-dziuchow/img/20200403_134803.webp',
            'realizacje/4-dziuchow/img/20200501_144444.webp',
            'realizacje/4-dziuchow/img/20200501_151714.webp',
            'realizacje/4-dziuchow/img/20200502_144738.webp',
            'realizacje/4-dziuchow/img/20200520_112713.webp',
            'realizacje/4-dziuchow/img/20200612_155954.webp',
            'realizacje/4-dziuchow/img/20200612_160031.webp',
            'realizacje/4-dziuchow/img/20200617_081554.webp',
            'realizacje/4-dziuchow/img/20200805_113116.webp',
            'realizacje/4-dziuchow/img/20200805_113123.webp',
            'realizacje/4-dziuchow/img/20200917_142613.webp',
            'realizacje/4-dziuchow/img/20200918_095357.webp',
            'realizacje/4-dziuchow/img/20200918_095437.webp',
            'realizacje/4-dziuchow/img/20200918_134124.webp',
            'realizacje/4-dziuchow/img/20200928_172133.webp',
            'realizacje/4-dziuchow/img/20200928_172648.webp',
            'realizacje/4-dziuchow/img/20200928_172735.webp',
            'realizacje/4-dziuchow/img/20201009_122138.webp',
            'realizacje/4-dziuchow/img/20201009_122315.webp',
            'realizacje/4-dziuchow/img/20210206_151605.webp',
            'realizacje/4-dziuchow/img/20210208_112238.webp',
            'realizacje/4-dziuchow/img/20210208_112555.webp',
            'realizacje/4-dziuchow/img/20210208_112615.webp',
        ]
    },
    jakubowice: {
        lead: 'realizacje/5-jakubowice/jakubowice-lead-photo.webp',
        images: [
            'realizacje/5-jakubowice/jakubowice-lead-photo.webp',
            'realizacje/5-jakubowice/img/20220930_115730.webp',
            'realizacje/5-jakubowice/img/20220930_115732.webp',
            'realizacje/5-jakubowice/img/20221029_160118.webp',
            'realizacje/5-jakubowice/img/20221029_160135.webp',
            'realizacje/5-jakubowice/img/20221029_160149.webp',
            'realizacje/5-jakubowice/img/20221029_160212.webp',
            'realizacje/5-jakubowice/img/20221029_160245.webp',
            'realizacje/5-jakubowice/img/20221029_160355.webp',
            'realizacje/5-jakubowice/img/20221029_160423.webp',
            'realizacje/5-jakubowice/img/20221031_145622.webp',
            'realizacje/5-jakubowice/img/20221205_081021.webp',
            'realizacje/5-jakubowice/img/20221205_110925.webp',
            'realizacje/5-jakubowice/img/20221205_141028.webp',
            'realizacje/5-jakubowice/img/20221205_141052.webp',
            'realizacje/5-jakubowice/img/20221207_095726.webp',
            'realizacje/5-jakubowice/img/20221209_100801.webp',
            'realizacje/5-jakubowice/img/20221209_144535.webp',
            'realizacje/5-jakubowice/img/20221219_091702.webp',
            'realizacje/5-jakubowice/img/20221219_091756.webp',
            'realizacje/5-jakubowice/img/20230221_075005.webp',
            'realizacje/5-jakubowice/img/20230223_101833.webp',
            'realizacje/5-jakubowice/img/20230223_101936.webp',
            'realizacje/5-jakubowice/img/20230629_134137.webp',
            'realizacje/5-jakubowice/img/20230901_073409.webp',
            'realizacje/5-jakubowice/img/20230901_073440.webp',
            'realizacje/5-jakubowice/img/20230901_073511.webp',
            'realizacje/5-jakubowice/img/20230901_073513.webp',
            'realizacje/5-jakubowice/img/20231013_090113.webp',
            'realizacje/5-jakubowice/img/20231018_132230.webp',
            'realizacje/5-jakubowice/img/20231018_132251.webp',
            'realizacje/5-jakubowice/img/20231018_132255.webp',
            'realizacje/5-jakubowice/img/20231018_132344.webp',
            'realizacje/5-jakubowice/img/20231018_132448.webp',
        ]
    },
    siedlce: {
        lead: 'realizacje/6-siedlce/siedlce-lead-photo.webp',
        images: [
            'realizacje/6-siedlce/siedlce-lead-photo.webp',
            'realizacje/6-siedlce/img/20221109_131112.webp',
            'realizacje/6-siedlce/img/20221109_131351.webp',
            'realizacje/6-siedlce/img/20221109_142717.webp',
            'realizacje/6-siedlce/img/20221117_152647.webp',
            'realizacje/6-siedlce/img/20221117_152911.webp',
            'realizacje/6-siedlce/img/20221129_131712.webp',
            'realizacje/6-siedlce/img/20221129_133523.webp',
            'realizacje/6-siedlce/img/20221208_120557.webp',
            'realizacje/6-siedlce/img/20221208_120831.webp',
            'realizacje/6-siedlce/img/20230105_083738.webp',
            'realizacje/6-siedlce/img/20230105_090803.webp',
            'realizacje/6-siedlce/img/20230105_090825.webp',
            'realizacje/6-siedlce/img/20230113_091445.webp',
            'realizacje/6-siedlce/img/20230113_142516.webp',
            'realizacje/6-siedlce/img/20230119_141619.webp',
            'realizacje/6-siedlce/img/20230119_142936.webp',
            'realizacje/6-siedlce/img/20230119_142946.webp',
            'realizacje/6-siedlce/img/20230120_124429.webp',
            'realizacje/6-siedlce/img/20230123_113647.webp',
            'realizacje/6-siedlce/img/20230123_120332.webp',
            'realizacje/6-siedlce/img/20230123_121217(0).webp',
            'realizacje/6-siedlce/img/20230123_145410.webp',
            'realizacje/6-siedlce/img/20230127_101911.webp',
            'realizacje/6-siedlce/img/20230127_102158.webp',
            'realizacje/6-siedlce/img/20230127_102206.webp',
            'realizacje/6-siedlce/img/20230127_102947.webp',
            'realizacje/6-siedlce/img/20230127_103113.webp',
            'realizacje/6-siedlce/img/20230207_105520.webp',
            'realizacje/6-siedlce/img/20230207_105629.webp',
            'realizacje/6-siedlce/img/20230207_105905.webp',
            'realizacje/6-siedlce/img/20230217_085934.webp',
            'realizacje/6-siedlce/img/20230217_090206.webp',
            'realizacje/6-siedlce/img/20230217_090318.webp',
            'realizacje/6-siedlce/img/20230301_112530.webp',
            'realizacje/6-siedlce/img/20230308_103353.webp',
            'realizacje/6-siedlce/img/20230308_103818.webp',
            'realizacje/6-siedlce/img/20230308_104122.webp',
            'realizacje/6-siedlce/img/20230424_114338.webp',
            'realizacje/6-siedlce/img/20230705_140625.webp',
            'realizacje/6-siedlce/img/20230810_124141.webp',
            'realizacje/6-siedlce/img/20230810_124150.webp',
            'realizacje/6-siedlce/img/20230810_124216.webp',
            'realizacje/6-siedlce/img/20230810_132548.webp',
            'realizacje/6-siedlce/img/20231109_145837.webp',
            'realizacje/6-siedlce/img/20231229_104533.webp',
            'realizacje/6-siedlce/img/20231229_105705.webp',
            'realizacje/6-siedlce/img/20240626_095116.webp',
            'realizacje/6-siedlce/img/20240626_095207.webp',
            'realizacje/6-siedlce/img/20240814_114923.webp',
            'realizacje/6-siedlce/img/20241008_105833.webp',
            'realizacje/6-siedlce/img/20241009_144942.webp',
            'realizacje/6-siedlce/img/20241030_120415.webp',
            'realizacje/6-siedlce/img/20241031_151920.webp',
            'realizacje/6-siedlce/img/20241112_113256.webp',
            'realizacje/6-siedlce/img/20250902_085939.webp',
        ]
    }
};

// ---- Lightbox state ----
let glImages = [];
let glCurrentIndex = 0;
let glThumbOffset = 0;
const THUMB_W = 80 + 8; // thumb width + gap

// DOM refs
const glOverlay    = document.getElementById('galleryLightbox');
const glMainImg    = document.getElementById('glMainImg');
const glCounter    = document.getElementById('glCounter');
const glThumbsStrip = document.getElementById('glThumbsStrip');
const glThumbsViewport = document.getElementById('glThumbsViewport');
const glClose      = document.getElementById('glClose');
const glPrev       = document.getElementById('glPrev');
const glNext       = document.getElementById('glNext');
const glThumbPrev  = document.getElementById('glThumbPrev');
const glThumbNext  = document.getElementById('glThumbNext');

function glOpen(galleryKey, startIndex) {
    const data = galleriesData[galleryKey];
    if (!data) return;

    glImages = data.images;
    glCurrentIndex = startIndex || 0;
    glThumbOffset = 0;

    // Build thumbnails
    glThumbsStrip.innerHTML = '';
    glImages.forEach((src, i) => {
        const img = document.createElement('img');
        img.src = src;
        img.alt = '';
        img.className = 'gl-thumb';
        img.loading = 'lazy';
        img.addEventListener('click', () => glGoTo(i));
        glThumbsStrip.appendChild(img);
    });

    glOverlay.removeAttribute('hidden');
    document.body.style.overflow = 'hidden';
    glRender(glCurrentIndex);
}

function glClose_() {
    glOverlay.setAttribute('hidden', '');
    document.body.style.overflow = '';
}

function glRender(index) {
    glCurrentIndex = ((index % glImages.length) + glImages.length) % glImages.length;

    // Fade-out transition
    glMainImg.classList.add('gl-fade');
    setTimeout(() => {
        glMainImg.src = glImages[glCurrentIndex];
        glMainImg.alt = `Zdjęcie ${glCurrentIndex + 1} z ${glImages.length}`;
        glMainImg.classList.remove('gl-fade');
    }, 180);

    glCounter.textContent = `${glCurrentIndex + 1} / ${glImages.length}`;

    // Update active thumb
    const thumbs = glThumbsStrip.querySelectorAll('.gl-thumb');
    thumbs.forEach((t, i) => t.classList.toggle('active', i === glCurrentIndex));

    // Auto-scroll thumb strip to keep active thumb visible
    glScrollThumbsToActive();
}

function glGoTo(index) {
    glRender(index);
}

function glScrollThumbsToActive() {
    const vpWidth = glThumbsViewport.offsetWidth;
    const thumbPx = glCurrentIndex * THUMB_W;
    const maxOffset = Math.max(0, glImages.length * THUMB_W - vpWidth);

    // Center active thumb in viewport
    let desired = thumbPx - vpWidth / 2 + THUMB_W / 2;
    glThumbOffset = Math.max(0, Math.min(desired, maxOffset));
    glThumbsStrip.style.transform = `translateX(-${glThumbOffset}px)`;
}

function glScrollThumbs(dir) {
    const vpWidth = glThumbsViewport.offsetWidth;
    const maxOffset = Math.max(0, glImages.length * THUMB_W - vpWidth);
    glThumbOffset = Math.max(0, Math.min(glThumbOffset + dir * vpWidth * 0.7, maxOffset));
    glThumbsStrip.style.transform = `translateX(-${glThumbOffset}px)`;
}

// Event listeners
if (glClose) glClose.addEventListener('click', glClose_);
if (glPrev)  glPrev.addEventListener('click', () => glRender(glCurrentIndex - 1));
if (glNext)  glNext.addEventListener('click', () => glRender(glCurrentIndex + 1));
if (glThumbPrev) glThumbPrev.addEventListener('click', () => glScrollThumbs(-1));
if (glThumbNext) glThumbNext.addEventListener('click', () => glScrollThumbs(1));

// Close on overlay backdrop click (not on children)
if (glOverlay) {
    glOverlay.addEventListener('click', e => {
        if (e.target === glOverlay) glClose_();
    });
}

// Keyboard
document.addEventListener('keydown', e => {
    if (!glOverlay || glOverlay.hasAttribute('hidden')) return;
    if (e.key === 'Escape')      glClose_();
    if (e.key === 'ArrowRight')  glRender(glCurrentIndex + 1);
    if (e.key === 'ArrowLeft')   glRender(glCurrentIndex - 1);
});

// Touch swipe support
(function() {
    let touchStartX = 0;
    let touchStartY = 0;
    const SWIPE_THRESHOLD = 50;

    if (!glOverlay) return;

    glOverlay.addEventListener('touchstart', e => {
        touchStartX = e.touches[0].clientX;
        touchStartY = e.touches[0].clientY;
    }, { passive: true });

    glOverlay.addEventListener('touchend', e => {
        const dx = e.changedTouches[0].clientX - touchStartX;
        const dy = e.changedTouches[0].clientY - touchStartY;
        if (Math.abs(dx) > Math.abs(dy) && Math.abs(dx) > SWIPE_THRESHOLD) {
            if (dx < 0) glRender(glCurrentIndex + 1);
            else        glRender(glCurrentIndex - 1);
        }
    }, { passive: true });
})();

// Wire up realizacja cards
document.querySelectorAll('.realizacja-card[data-gallery]').forEach(card => {
    const key = card.dataset.gallery;

    function open() {
        glOpen(key, 0);
    }

    card.addEventListener('click', open);
    card.addEventListener('keydown', e => {
        if (e.key === 'Enter' || e.key === ' ') {
            e.preventDefault();
            open();
        }
    });
});
