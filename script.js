document.addEventListener('DOMContentLoaded', function() {
    // ===== ORIGINAL SCRIPT =====
    const themeToggleBtn = document.getElementById('theme-toggle');
    const darkIcon = document.getElementById('theme-toggle-dark-icon');
    const lightIcon = document.getElementById('theme-toggle-light-icon');
    const menuBtn = document.getElementById('menu-btn');
    const mobileMenu = document.getElementById('mobile-menu');
    const header = document.getElementById('header');
    const contactForm = document.getElementById('contact-form');
    const formMessage = document.getElementById('form-message');

    // Set current year in footer
    if(document.getElementById('year')) {
        document.getElementById('year').textContent = new Date().getFullYear();
    }

    // Theme toggle functionality
    if (localStorage.getItem('color-theme') === 'dark' || (!('color-theme' in localStorage) && window.matchMedia('(prefers-color-scheme: dark)').matches)) {
        document.documentElement.classList.add('dark');
        if(lightIcon) lightIcon.classList.remove('hidden');
    } else {
        document.documentElement.classList.remove('dark');
        if(darkIcon) darkIcon.classList.remove('hidden');
    }

    if(themeToggleBtn) {
        themeToggleBtn.addEventListener('click', function() {
            if(darkIcon) darkIcon.classList.toggle('hidden');
            if(lightIcon) lightIcon.classList.toggle('hidden');

            if (localStorage.getItem('color-theme')) {
                if (localStorage.getItem('color-theme') === 'light') {
                    document.documentElement.classList.add('dark');
                    localStorage.setItem('color-theme', 'dark');
                } else {
                    document.documentElement.classList.remove('dark');
                    localStorage.setItem('color-theme', 'light');
                }
            } else {
                if (document.documentElement.classList.contains('dark')) {
                    document.documentElement.classList.remove('dark');
                    localStorage.setItem('color-theme', 'light');
                } else {
                    document.documentElement.classList.add('dark');
                    localStorage.setItem('color-theme', 'dark');
                }
            }
        });
    }
    
    // Mobile menu toggle
    if(menuBtn) {
        menuBtn.addEventListener('click', () => {
            if(mobileMenu) mobileMenu.classList.toggle('hidden');
        });
    }

    // Close mobile menu when a link is clicked
    if(mobileMenu) {
        mobileMenu.querySelectorAll('a').forEach(link => {
            link.addEventListener('click', () => {
                mobileMenu.classList.add('hidden');
            });
        });
    }

    // Header shadow on scroll
    window.addEventListener('scroll', () => {
        if(header) {
            if (window.scrollY > 50) {
                header.classList.add('shadow-lg');
            } else {
                header.classList.remove('shadow-lg');
            }
        }
    });

    // Scroll reveal animation
    const revealElements = document.querySelectorAll('.reveal');
    const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.classList.add('reveal-visible');
            }
        });
    }, {
        threshold: 0.1
    });

    revealElements.forEach(el => {
        observer.observe(el);
    });
    
    // Contact form submission
    if(contactForm) {
        contactForm.addEventListener('submit', function(e) {
            e.preventDefault();
            const lang = localStorage.getItem('language') || 'id';
            if (lang === 'id') {
                if(formMessage) formMessage.textContent = 'Terima kasih! Pesan Anda telah terkirim.';
            } else {
                if(formMessage) formMessage.textContent = 'Thank you! Your message has been sent.';
            }
            if(formMessage) formMessage.className = 'text-green-500';
            contactForm.reset();
            setTimeout(() => {
                if(formMessage) formMessage.textContent = '';
            }, 3000);
        });
    }

    // ===== TRANSLATION SCRIPT =====
    const langIdButton = document.getElementById('lang-id');
    const langEnButton = document.getElementById('lang-en');

    // 1. Kamus Terjemahan
    const translations = {
        'id': {
            'nav_home': 'Home', 'nav_home_mobile': 'Home',
            'nav_about': 'Tentang', 'nav_about_mobile': 'Tentang',
            'nav_skills': 'Keahlian', 'nav_skills_mobile': 'Keahlian',
            'nav_projects': 'Projek', 'nav_projects_mobile': 'Projek',
            'nav_contact': 'Kontak', 'nav_contact_mobile': 'Kontak',
            'hero_greeting': 'Halo, Saya',
            'hero_desc': 'Saya adalah seorang Mahasiswa Prodi Teknik Informatika dari Universitas Budi Luhur dengan semangat tinggi untuk memulai karir dalam desain 3D/2D dan pengembangan game. Saya berdedikasi untuk belajar dan menerapkan keterampilan saya dalam menciptakan dunia virtual yang imersif.',
            'hero_button': 'Lihat Portofolio',
            'about_title': 'About Mehh',
            'about_subtitle': 'Perkenalan singkat tentang diri saya.',
            'about_p1': 'Sebagai Mahasiswa Teknik Informatika Fakultas Teknologi Informasi di Universitas Budi Luhur, saya telah membangun fondasi yang kuat dalam seni digital dan teknologi. Saya sangat tertarik pada proses pembuatan aset 3D di Blender dan seni pixel di Aseprite, serta menerjemahkannya ke dalam pengalaman interaktif.',
            'about_p2': 'Selama masa kuliah, saya aktif mengerjakan berbagai proyek pribadi dan tugas akademik yang mengasah kemampuan saya di Unity dan Godot. Saya seorang pembelajar yang cepat dan selalu antusias untuk menghadapi tantangan baru di industri kreatif.',
            'stat1_title': 'Mahasiswa',
            'stat1_desc': 'Universitas Budi Luhur',
            'stat2_title': '5+',
            'stat2_desc': 'Projek Akademik',
            'stat3_title': '1',
            'stat3_desc': 'Partisipasi Game Jam',
            'skills_title': 'Keahlian',
            'skills_subtitle': 'Tingkat Kemampuan Teknis Saya',
            'skills_box1_title': 'Desain 3D & 2D',
            'skills_box2_title': 'Game Development',
            'projects_title': 'Projek',
            'projects_subtitle': 'Karya Akademik & Pribadi Saya',
            'proj1_title': '"Low-Poly World"',
            'proj1_desc': 'Proyek tugas akhir mata kuliah Pemodelan 3D. Diorama fantasi low-poly yang dibuat sepenuhnya di Blender.',
            'proj1_link1': 'Lihat di ArtStation',
            'proj1_link2': 'Detail Proyek',
            'proj2_title': '"Pixel Knights"',
            'proj2_desc': 'Proyek pribadi untuk mengeksplorasi seni pixel. Koleksi aset karakter dan animasi untuk prototipe game RPG dibuat dengan Aseprite.',
            'proj2_link1': 'Lihat di Itch.io',
            'proj2_link2': 'Detail Proyek',
            'proj3_title': '"Platformer Jam"',
            'proj3_desc': 'Hasil dari partisipasi Game Jam selama 48 jam. Prototipe game platformer 2.5D yang dikembangkan di Unity.',
            'proj3_link1': 'Mainkan Demo',
            'proj3_link2': 'Source Code',
            'contact_title': 'Hubungi Saya',
            'contact_subtitle': 'Mari berkolaborasi dalam sebuah projek!',
            'contact_name': 'Nama Anda',
            'contact_email': 'Email Anda',
            'contact_message': 'Pesan Anda',
            'contact_button': 'Kirim Pesan',
            'footer_name': 'Raki Albani',
            'footer_about': 'Tentang',
            'footer_projects': 'Projek',
            'footer_contact': 'Kontak',
            'footer_rights': 'Semua hak dilindungi.'
        },
        'en': {
            'nav_home': 'Home', 'nav_home_mobile': 'Home',
            'nav_about': 'About', 'nav_about_mobile': 'About',
            'nav_skills': 'Skills', 'nav_skills_mobile': 'Skills',
            'nav_projects': 'Projects', 'nav_projects_mobile': 'Projects',
            'nav_contact': 'Contact', 'nav_contact_mobile': 'Contact',
            'hero_greeting': "Hello, I'm",
            'hero_desc': 'I am a fresh graduate from Budi Luhur University with a great passion for starting a career in 3D/2D design and game development. I am dedicated to learning and applying my skills to create immersive virtual worlds.',
            'hero_button': 'View Portfolio',
            'about_title': 'About Me',
            'about_subtitle': 'A brief introduction about myself.',
            'about_p1': 'As a recent graduate of the Visual Communication Design program at Budi Luhur University, I have built a strong foundation in digital arts and technology. I am passionate about creating 3D assets in Blender and pixel art in Aseprite, and translating them into interactive experiences.',
            'about_p2': 'During my studies, I actively worked on various personal and academic projects that honed my skills in Unity and Godot. I am a fast learner and always enthusiastic about tackling new challenges in the creative industry.',
            'stat1_title': 'student of',
            'stat1_desc': 'Budi Luhur University',
            'stat2_title': '5+',
            'stat2_desc': 'Academic Projects',
            'stat3_title': '1',
            'stat3_desc': 'Game Jam Participation',
            'skills_title': 'Skills',
            'skills_subtitle': 'My Technical Skill Level',
            'skills_box1_title': '3D & 2D Design',
            'skills_box2_title': 'Game Development',
            'projects_title': 'Projects',
            'projects_subtitle': 'My Academic & Personal Works',
            'proj1_title': '"Low-Poly World"',
            'proj1_desc': 'Final project for the 3D Modeling course. A low-poly fantasy diorama created entirely in Blender.',
            'proj1_link1': 'View on ArtStation',
            'proj1_link2': 'Project Details',
            'proj2_title': '"Pixel Knights"',
            'proj2_desc': 'A personal project to explore pixel art. A collection of character assets and animations for an RPG prototype made with Aseprite.',
            'proj2_link1': 'View on Itch.io',
            'proj2_link2': 'Project Details',
            'proj3_title': '"Platformer Jam"',
            'proj3_desc': 'The result of a 48-hour Game Jam. A 2.5D platformer game prototype developed in Unity.',
            'proj3_link1': 'Play Demo',
            'proj3_link2': 'Source Code',
            'contact_title': 'Contact Me',
            'contact_subtitle': "Let's collaborate on a project!",
            'contact_name': 'Your Name',
            'contact_email': 'Your Email',
            'contact_message': 'Your Message',
            'contact_button': 'Send Message',
            'footer_name': 'Raki Albani',
            'footer_about': 'About',
            'footer_projects': 'Projects',
            'footer_contact': 'Contact',
            'footer_rights': 'All rights reserved.'
        }
    };
    
    // 2. Fungsi untuk mengganti bahasa
    const setLanguage = (lang) => {
        const elements = document.querySelectorAll('[data-key]');
        elements.forEach(el => {
            const key = el.getAttribute('data-key');
            if(translations[lang][key]) {
                if (el.tagName === 'INPUT' || el.tagName === 'TEXTAREA') {
                    el.placeholder = translations[lang][key];
                } else {
                    el.innerHTML = translations[lang][key];
                }
            }
        });

        // Update tampilan tombol
        if (lang === 'id') {
            if(langIdButton) langIdButton.classList.add('bg-primary', 'text-white', 'font-semibold');
            if(langEnButton) langEnButton.classList.remove('bg-primary', 'text-white', 'font-semibold');
        } else {
            if(langEnButton) langEnButton.classList.add('bg-primary', 'text-white', 'font-semibold');
            if(langIdButton) langIdButton.classList.remove('bg-primary', 'text-white', 'font-semibold');
        }

        localStorage.setItem('language', lang);
    };

    // 3. Event listener untuk tombol
    if(langIdButton) langIdButton.addEventListener('click', () => setLanguage('id'));
    if(langEnButton) langEnButton.addEventListener('click', () => setLanguage('en'));

    // 4. Cek bahasa yang tersimpan saat halaman dimuat
    const savedLang = localStorage.getItem('language') || 'id'; // Default ke ID
    setLanguage(savedLang);
});