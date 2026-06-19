// main.js

document.addEventListener('DOMContentLoaded', () => {
    // 1. จัดการเมนูมือถือ (Hamburger Menu)
    const mobileMenuBtn = document.querySelector('.mobile-menu-btn');
    const mainNav = document.querySelector('.main-nav');

    if (mobileMenuBtn && mainNav) {
        // เมื่อคลิกที่ปุ่ม Hamburger
        mobileMenuBtn.addEventListener('click', () => {
            mainNav.classList.toggle('active');
            mobileMenuBtn.classList.toggle('active');
        });
    }

    // 2. จัดการไฮไลท์เมนูเมื่อเลื่อนหน้าจอ (Active Navigation)
    const sections = document.querySelectorAll('section');
    const navLinks = document.querySelectorAll('.main-nav ul li a');

    // ตัวเลือกสำหรับ Intersection Observer
    const observerOptions = {
        root: null,
        rootMargin: '-50% 0px -50% 0px', // กำหนดจุดที่มองว่า Section นั้นอยู่ตรงกลางหน้าจอ
        threshold: 0
    };

    const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                // ดึง id ของ section ที่กำลังแสดงอยู่บนหน้าจอ
                const currentId = entry.target.getAttribute('id');
                
                // ลบคลาส active ออกจากเมนูทั้งหมด
                navLinks.forEach(link => {
                    link.classList.remove('active');
                    
                    // หาก id ของลิงก์ตรงกับ id ของ section ให้เพิ่มคลาส active
                    if (currentId && link.getAttribute('href') === `#${currentId}`) {
                        link.classList.add('active');
                    } else if (entry.target.classList.contains('hero-section') && link.getAttribute('href') === '#top') {
                        link.classList.add('active');
                    }
                });
            }
        });
    }, observerOptions);

    // เริ่มสังเกตการณ์ทุก section
    sections.forEach(section => {
        observer.observe(section);
    });

    // ปิดเมนูมือถือเมื่อคลิกลิงก์
    navLinks.forEach(link => {
        link.addEventListener('click', function(e) {
            // ปิดเมนูเมื่ออยู่บนมือถือ
            if (window.innerWidth <= 768) {
                mainNav.classList.remove('active');
                if (mobileMenuBtn) mobileMenuBtn.classList.remove('active');
            }
            
            // อัปเดตคลาส active ทันทีเมื่อคลิก
            navLinks.forEach(l => l.classList.remove('active'));
            this.classList.add('active');
        });
    });

    // 3. จัดการ Hero Slider (สไลด์โชว์รูปภาพพื้นหลัง)
    const slides = document.querySelectorAll('.hero-slider .slide');
    if (slides.length > 0) {
        let currentSlide = 0;
        
        // ฟังก์ชันเปลี่ยนรูป
        const nextSlide = () => {
            // ลบคลาส active รูปปัจจุบัน
            slides[currentSlide].classList.remove('active');
            
            // เลื่อนไปรูปถัดไป (ถ้าถึงรูปสุดท้ายให้กลับไปรูปแรก)
            currentSlide = (currentSlide + 1) % slides.length;
            
            // เพิ่มคลาส active รูปใหม่
            slides[currentSlide].classList.add('active');
        };
        
        // ตั้งเวลาเปลี่ยนรูปอัตโนมัติทุกๆ 5 วินาที
        setInterval(nextSlide, 5000);
    }
});

/* 
  ========================================
  Lightbox Functionality for Reviews
  ========================================
*/
function openLightbox(element) {
    const lightbox = document.getElementById('lightbox');
    const lightboxImg = document.getElementById('lightbox-img');
    const clickedImgSrc = element.querySelector('img').src;
    
    if (lightbox && lightboxImg) {
        lightboxImg.src = clickedImgSrc;
        lightbox.classList.add('active');
        document.body.style.overflow = 'hidden'; // Prevent scrolling
    }
}

function closeLightbox() {
    const lightbox = document.getElementById('lightbox');
    if (lightbox) {
        lightbox.classList.remove('active');
        document.body.style.overflow = 'auto'; // Re-enable scrolling
    }
}

// Close with Escape key
document.addEventListener('keydown', (e) => {
    if (e.key === 'Escape') closeLightbox();
});
// Centralized Footer (Web Component)
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
