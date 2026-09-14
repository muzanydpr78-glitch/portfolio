// Kamus Bahasa (ID & EN)
const translations = {
    en: {
        loading: "Initializing Multiverse Portal...",
        nav_home: "Home",
        nav_about: "About",
        nav_project: "Project",
        nav_skills: "My Skills",
        nav_contact: "Contact Me",
        mobile_nav_title: "-- Multiverse Navigation --",
        hero_badge: "God-Tier Developer Portfolio",
        hero_hi: "Hi, I'm",
        hero_desc: "Building future web experiences with elite aesthetics, lightning performance, and world-class code architecture.",
        btn_explore: "Explore Projects",
        btn_talk: "Let's Talk",
        about_status: "Status: Elite Developer",
        exp_years: "Years Exp",
        exp_awards: "Awards",
        exp_success: "Success",
        about_badge: "System Profile // 01",
        about_title: "Architecting Digital <span class='text-transparent bg-clip-text bg-gradient-to-r from-neonBlue to-cyberPink'>Multiverse</span>.",
        about_desc: "Hello! I'm <strong class='text-neonBlue'>Muz</strong>. Not just writing code, but weaving interactive visual experiences that spark awe. Based at the intersection of futuristic design art and cutting-edge tech performance.",
        feat_clean: "Clean Architecture",
        feat_clean_desc: "Scalable & efficient code structure.",
        feat_ui: "Immersive UI/UX",
        feat_ui_desc: "Smooth 60+ FPS animations.",
        proj_badge: "Showcase // 02",
        proj_title: "Featured Projects",
        proj_desc: "Code experiments and digital masterpieces built with god-tier performance.",
        cat_all: "All Projects",
        cat_multi: "Multiverse UI",
        cat_ai: "AI & Neural",
        cat_mob: "Mobile App",
        p1_desc: "3D web portal animation system featuring space-time distortion using GSAP.",
        p2_desc: "AI data intelligence analytics dashboard with glassmorphism effects and real-time charts.",
        p3_desc: "Mobile crypto wallet application with futuristic UI and high-level quantum encryption.",
        p4_desc: "Cloud-based virtual workspace environment with cursor gestures and space theme.",
        btn_detail: "Lihat Detail →",
        skills_badge: "Arsenal // 03",
        skills_title: "My Tech Skills",
        skills_desc: "Core technology specs and mastered framework systems.",
        s1_sub: "Frontend Core",
        s2_sub: "UI Styling",
        s3_sub: "Motion Engine",
        s4_sub: "Design System",
        contact_title: "04 // Contact Me",
        contact_desc: "Interested in collaborating or building the digital future together? Get in touch.",
        btn_send: "Send Transmission",
        footer_secure: "Multiverse Connection Secure // 2026",
        footer_dev: "Designed & Developed with God-Tier Precision by",
        footer_copy: "&copy; 2026 MUZ.DEV. All Rights Reserved across all dimensions.",
        modal_badge: "Project Archive Specification",
        modal_status: "Status: Deployed & Active",
        modal_overview: "Project Overview",
        modal_tech: "Tech Stack Used",
        modal_close: "Close Archive"
    },
    id: {
        loading: "Menginisialisasi Portal Multiverse...",
        nav_home: "Home",
        nav_about: "About",
        nav_project: "Project",
        nav_skills: "My Skills",
        nav_contact: "Contact Me",
        mobile_nav_title: "-- Navigasi Multiverse --",
        hero_badge: "God-Tier Developer Portfolio",
        hero_hi: "Hi, I'm",
        hero_desc: "Membangun pengalaman web masa depan dengan estetika tingkat tinggi, performa kilat, dan arsitektur kode kelas dunia.",
        btn_explore: "Explore Projects",
        btn_talk: "Let's Talk",
        about_status: "Status: Elite Developer",
        exp_years: "Tahun Exp",
        exp_awards: "Penghargaan",
        exp_success: "Sukses",
        about_badge: "System Profile // 01",
        about_title: "Merajut <span class='text-transparent bg-clip-text bg-gradient-to-r from-neonBlue to-cyberPink'>Multiverse</span> Digital.",
        about_desc: "Halo! Gue <strong class='text-neonBlue'>Muz</strong>. Bukan sekadar nulis kode, tapi merajut pengalaman visual interaktif yang bikin decak kagum. Berbasis di persimpangan seni desain futuristik dan performa teknologi mutakhir.",
        feat_clean: "Clean Architecture",
        feat_clean_desc: "Struktur kode scalable & efisien.",
        feat_ui: "Immersive UI/UX",
        feat_ui_desc: "Animasi mulus 60+ FPS.",
        proj_badge: "Showcase // 02",
        proj_title: "Featured Projects",
        proj_desc: "Eksperimen kode dan mahakarya digital dengan performa tingkat dewa.",
        cat_all: "All Projects",
        cat_multi: "Multiverse UI",
        cat_ai: "AI & Neural",
        cat_mob: "Mobile App",
        p1_desc: "Sistem animasi portal 3D berbasis web dengan distorsi ruang dan waktu menggunakan GSAP.",
        p2_desc: "Dashboard analisis data kecerdasan buatan dengan efek glassmorphism dan grafik real-time.",
        p3_desc: "Aplikasi dompet kripto seluler dengan antarmuka futuristik dan enkripsi kuantum tingkat tinggi.",
        p4_desc: "Lingkungan kerja virtual berbasis cloud dengan gestur kursor dan tema luar angkasa.",
        btn_detail: "Lihat Detail →",
        skills_badge: "Arsenal // 03",
        skills_title: "My Tech Skills",
        skills_desc: "Spesifikasi inti teknologi dan sistem kerangka kerja yang dikuasai.",
        s1_sub: "Frontend Core",
        s2_sub: "UI Styling",
        s3_sub: "Motion Engine",
        s4_sub: "Design System",
        contact_title: "04 // Contact Me",
        contact_desc: "Tertarik berkolaborasi atau membangun proyek digital masa depan bersama? Hubungi saya.",
        btn_send: "Send Transmission",
        footer_secure: "Multiverse Connection Secure // 2026",
        footer_dev: "Designed & Developed with God-Tier Precision by",
        footer_copy: "&copy; 2026 MUZ.DEV. All Rights Reserved across all dimensions.",
        modal_badge: "Spesifikasi Arsip Proyek",
        modal_status: "Status: Aktif & Ter-deploy",
        modal_overview: "Ringkasan Proyek",
        modal_tech: "Teknologi yang Digunakan",
        modal_close: "Tutup Arsip"
    }
};

let currentLang = 'en';

function toggleLanguage() {
    currentLang = currentLang === 'en' ? 'id' : 'en';
    document.getElementById('lang-btn').innerText = currentLang.toUpperCase();
    
    document.querySelectorAll('[data-i18n]').forEach(el => {
        const key = el.getAttribute('data-i18n');
        if (translations[currentLang][key]) {
            el.innerHTML = translations[currentLang][key];
        }
    });

    document.getElementById('inp-name').placeholder = currentLang === 'en' ? 'Your Name' : 'Nama Anda';
    document.getElementById('inp-email').placeholder = currentLang === 'en' ? 'Your Email' : 'Email Anda';
    document.getElementById('inp-msg').placeholder = currentLang === 'en' ? 'Your Message' : 'Pesan Anda';
}

function openProjectModal(title, descKey, tech, icon) {
    document.getElementById('modal-title').innerText = title;
    document.getElementById('modal-desc').innerText = translations[currentLang][descKey] || descKey;
    document.getElementById('modal-tech').innerText = tech;
    document.getElementById('modal-icon').innerText = icon;
    document.getElementById('modal-icon-bg').innerText = icon;

    const modal = document.getElementById('project-modal');
    const content = document.getElementById('modal-content');
    modal.classList.remove('opacity-0', 'pointer-events-none');
    modal.classList.add('opacity-100', 'pointer-events-auto');
    content.classList.remove('scale-95');
    content.classList.add('scale-100');
}

function closeProjectModal() {
    const modal = document.getElementById('project-modal');
    const content = document.getElementById('modal-content');
    modal.classList.remove('opacity-100', 'pointer-events-auto');
    modal.classList.add('opacity-0', 'pointer-events-none');
    content.classList.remove('scale-100');
    content.classList.add('scale-95');
}

window.addEventListener('DOMContentLoaded', () => {
    let progress = 0;
    const loadingText = document.getElementById('loading-text');
    const loadingScreen = document.getElementById('loading-screen');

    const interval = setInterval(() => {
        progress += Math.floor(Math.random() * 25) + 15;
        if (progress >= 100) {
            progress = 100;
            clearInterval(interval);
            if (loadingScreen) {
                loadingScreen.style.opacity = '0';
                setTimeout(() => loadingScreen.style.display = 'none', 700);
            }
        }
        if (loadingText) {
            loadingText.innerText = progress + '%';
        }
    }, 80);
});

function toggleMobileMenu() {
    const menu = document.getElementById('mobile-menu');
    const isOpen = menu.classList.contains('opacity-100');
    if (isOpen) {
        menu.classList.remove('opacity-100', 'pointer-events-auto');
        menu.classList.add('opacity-0', 'pointer-events-none');
    } else {
        menu.classList.remove('opacity-0', 'pointer-events-none');
        menu.classList.add('opacity-100', 'pointer-events-auto');
    }
}

function filterProjects(category) {
    const cards = document.querySelectorAll('.project-card');
    document.querySelectorAll('.glass-panel button[onclick^="filterProjects"]').forEach(btn => {
        btn.className = "px-3 py-1.5 md:px-4 md:py-2 text-xs md:text-sm font-semibold rounded-xl hover:text-neonBlue transition whitespace-nowrap";
    });
    const activeBtn = document.getElementById(`btn-${category}`);
    if(activeBtn) {
        activeBtn.className = "px-3 py-1.5 md:px-4 md:py-2 text-xs md:text-sm font-semibold rounded-xl bg-neonBlue text-white lightsaber-glow transition whitespace-nowrap";
    }
    cards.forEach(card => {
        if (category === 'all' || card.getAttribute('data-category') === category) {
            card.style.display = 'block';
            setTimeout(() => card.style.opacity = '1', 50);
        } else {
            card.style.opacity = '0';
            setTimeout(() => card.style.display = 'none', 300);
        }
    });
}

function toggleTheme() {
    const html = document.documentElement;
    html.classList.toggle('light');
    const wrapper = document.getElementById('body-wrapper');
    const isLight = html.classList.contains('light');
    if (isLight) {
        wrapper.className = "bg-slate-100 text-slate-950 min-h-screen overflow-x-hidden selection:bg-neonBlue selection:text-white transition-colors duration-500 light";
    } else {
        wrapper.className = "bg-slate-950 text-slate-100 min-h-screen overflow-x-hidden selection:bg-neonBlue selection:text-white transition-colors duration-500";
    }
}

window.addEventListener('DOMContentLoaded', () => {
    const container = document.getElementById('reveal-container');
    const maskLayer = document.getElementById('mask-layer');

    if (container && maskLayer) {
        function updateMaskPosition(clientX, clientY) {
            const rect = container.getBoundingClientRect();
            const x = clientX - rect.left;
            const y = clientY - rect.top;
            
            maskLayer.style.setProperty('--mouse-x', `${x}px`);
            maskLayer.style.setProperty('--mouse-y', `${y}px`);
        }

        container.addEventListener('mousemove', (e) => {
            updateMaskPosition(e.clientX, e.clientY);
        });

        container.addEventListener('touchmove', (e) => {
            if(e.touches.length > 0) {
                updateMaskPosition(e.touches[0].clientX, e.touches[0].clientY);
            }
        }, {passive: true});

        container.addEventListener('mouseleave', () => {
            maskLayer.style.setProperty('--mouse-x', '-500px');
            maskLayer.style.setProperty('--mouse-y', '-500px');
        });

        container.addEventListener('touchend', () => {
            maskLayer.style.setProperty('--mouse-x', '-500px');
            maskLayer.style.setProperty('--mouse-y', '-500px');
        });
    }
});
