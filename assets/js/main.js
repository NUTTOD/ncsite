// main.js

document.addEventListener('DOMContentLoaded', () => {
    // 1. จัดการเมนูมือถือ (Hamburger Menu)
    const mobileMenuBtn = document.querySelector('.mobile-menu-btn');
    const mainNav = document.querySelector('.main-nav');

    // เมื่อคลิกที่ปุ่ม Hamburger
    mobileMenuBtn.addEventListener('click', () => {
        mainNav.classList.toggle('active');
    });

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
                    // สำหรับหน้าแรก (Hero Section) ให้ตรวจจับจาก href="#top"
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