

document.addEventListener('DOMContentLoaded', () => {
    
    const mobileMenuBtn = document.querySelector('.mobile-menu-btn');
    const mainNav = document.querySelector('.main-nav');

    if (mobileMenuBtn && mainNav) {
        
        mobileMenuBtn.addEventListener('click', () => {
            mainNav.classList.toggle('active');
            mobileMenuBtn.classList.toggle('active');
        });
    }

    const sections = document.querySelectorAll('section');
    const navLinks = document.querySelectorAll('.main-nav ul li a');

    const observerOptions = {
        root: null,
        rootMargin: '-50% 0px -50% 0px', 
        threshold: 0
    };

    const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                
                const currentId = entry.target.getAttribute('id');

                navLinks.forEach(link => {
                    link.classList.remove('active');

                    if (currentId && link.getAttribute('href') === `#${currentId}`) {
                        link.classList.add('active');
                    } else if (entry.target.classList.contains('hero-section') && link.getAttribute('href') === '#top') {
                        link.classList.add('active');
                    }
                });
            }
        });
    }, observerOptions);

    sections.forEach(section => {
        observer.observe(section);
    });

    navLinks.forEach(link => {
        link.addEventListener('click', function(e) {
            
            if (window.innerWidth <= 768) {
                mainNav.classList.remove('active');
                if (mobileMenuBtn) mobileMenuBtn.classList.remove('active');
            }

            navLinks.forEach(l => l.classList.remove('active'));
            this.classList.add('active');
        });
    });

    const slides = document.querySelectorAll('.hero-slider .slide');
    if (slides.length > 0) {
        let currentSlide = 0;

        const nextSlide = () => {
            
            slides[currentSlide].classList.remove('active');

            currentSlide = (currentSlide + 1) % slides.length;

            slides[currentSlide].classList.add('active');
        };

        setInterval(nextSlide, 5000);
    }
});

function openLightbox(element) {
    const lightbox = document.getElementById('lightbox');
    const lightboxImg = document.getElementById('lightbox-img');
    const clickedImgSrc = element.querySelector('img').src;
    
    if (lightbox && lightboxImg) {
        lightboxImg.src = clickedImgSrc;
        lightbox.classList.add('active');
        document.body.style.overflow = 'hidden'; 
    }
}

function closeLightbox() {
    const lightbox = document.getElementById('lightbox');
    if (lightbox) {
        lightbox.classList.remove('active');
        document.body.style.overflow = 'auto'; 
    }
}

document.addEventListener('keydown', (e) => {
    if (e.key === 'Escape') closeLightbox();
});

const footerTemplate = `
    <footer class="site-footer">
        <div class="container">
            <div class="footer-grid">
                <div class="footer-about">
                    <h3>NC Centergate</h3>
                    <p>บริษัท เอ็น ซี เซ็นเตอร์เกท จำกัด ผู้เชี่ยวชาญด้านระบบประตูรีโมทอัตโนมัติแบบครบวงจร</p>
                </div>
                <div class="footer-links">
                    <h4>เมนูหลัก</h4>
                    <ul>
                        <li><a href="index.html">หน้าแรก</a></li>
                        <li><a href="index.html#about">เกี่ยวกับเรา</a></li>
                        <li><a href="index.html#products">สินค้า</a></li>
                        <li><a href="index.html#services">บริการ</a></li>
                        <li><a href="index.html#contact">ติดต่อเรา</a></li>
                    </ul>
                </div>
                <div class="footer-contact">
                    <h4>ช่องทางลัด</h4>
                    <p>Line ID: <a href="https://line.me/R/ti/p/@740kjpdf" target="_blank" style="color: #06C755;">NC Center Gate</a><br>Tel: <a href="tel:025784585">02-578-4585</a>, <a href="tel:0813313029">081-331-3029</a>, <a href="tel:0845695610">084-569-5610</a><br>Email: <a href="mailto:nccentergate@hotmail.com">nccentergate@hotmail.com</a></p>
                </div>
            </div>
            <div class="footer-bottom">
                <p>&copy; 2024 NC Centergate Co., Ltd. All Rights Reserved.</p>
            </div>
        </div>
    </footer>
`;

class SiteFooter extends HTMLElement {
    connectedCallback() {
        this.innerHTML = footerTemplate;
    }
}

customElements.define('site-footer', SiteFooter);
