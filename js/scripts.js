// Theme Logic
        const themeToggle = document.getElementById('theme-toggle');
        const themeIcon = document.getElementById('theme-icon');
        const body = document.body;

        themeToggle.addEventListener('click', () => {
            if (body.classList.contains('theme-dark')) {
                body.classList.replace('theme-dark', 'theme-light');
                themeIcon.classList.replace('fa-sun', 'fa-moon');
                themeToggle.classList.replace('bg-white', 'bg-gray-900');
                themeToggle.classList.replace('text-gray-900', 'text-white');
            } else {
                body.classList.replace('theme-light', 'theme-dark');
                themeIcon.classList.replace('fa-moon', 'fa-sun');
                themeToggle.classList.replace('bg-gray-900', 'bg-white');
                themeToggle.classList.replace('text-white', 'text-gray-900');
            }
        });

        // Scroll Logic
        window.addEventListener('scroll', () => {
            const nav = document.getElementById('mainNav');
            if (window.scrollY > 50) {
                nav.classList.add('nav-scrolled', 'shadow-2xl', 'bg-black/20');
            } else {
                nav.classList.remove('nav-scrolled', 'shadow-2xl', 'bg-black/20');
            }
        });

    document.addEventListener('DOMContentLoaded', () => {
        const sections = document.querySelectorAll('section, header, div[id]');
        const navLinks = document.querySelectorAll('.nav-link-custom');

        const observerOptions = {
            root: null,
            rootMargin: '-20% 0px -70% 0px', // Menentukan area deteksi di tengah layar
            threshold: 0
        };

        const observerCallback = (entries) => {
            entries.forEach(entry => {
                if (entry.isIntersecting) {
                    const id = entry.target.getAttribute('id');
                    
                    navLinks.forEach(link => {
                        link.classList.remove('active');
                        if (link.getAttribute('href') === `#${id}`) {
                            link.classList.add('active');
                        }
                    });
                }
            });
        };

        const observer = new IntersectionObserver(observerCallback, observerOptions);
        
        // Daftarkan semua section yang punya ID untuk diamati
        sections.forEach(section => {
            if (section.id) observer.observe(section);
        });
    });

    // 1. Mobile Menu Toggle
        const mobileToggle = document.getElementById('mobile-toggle');
        const mobileMenu = document.getElementById('mobile-menu');
        const toggleIcon = mobileToggle.querySelector('i');

        mobileToggle.addEventListener('click', () => {
            const isHidden = mobileMenu.classList.contains('invisible');
            if (isHidden) {
                mobileMenu.classList.remove('invisible', 'opacity-0', 'translate-y-[-20px]');
                mobileMenu.classList.add('visible', 'opacity-100', 'translate-y-0');
                toggleIcon.classList.replace('fa-bars', 'fa-times');
            } else {
                mobileMenu.classList.add('invisible', 'opacity-0', 'translate-y-[-20px]');
                mobileMenu.classList.remove('visible', 'opacity-100', 'translate-y-0');
                toggleIcon.classList.replace('fa-times', 'fa-bars');
            }
        });

        // 2. Scroll Active Script
        const sections = document.querySelectorAll('section[id], header[id]');
        const navLinks = document.querySelectorAll('.nav-link-custom, .mobile-link');

        window.addEventListener('scroll', () => {
            let current = "";
            sections.forEach(section => {
                const sectionTop = section.offsetTop;
                const sectionHeight = section.clientHeight;
                if (pageYOffset >= (sectionTop - sectionHeight / 3)) {
                    current = section.getAttribute('id');
                }
            });

            navLinks.forEach(link => {
                link.classList.remove('active');
                if (link.getAttribute('href').includes(current)) {
                    link.classList.add('active');
                }
            });
        });

        // 3. Auto-close mobile menu on click
        navLinks.forEach(link => {
            link.addEventListener('click', () => {
                mobileMenu.classList.add('invisible', 'opacity-0', 'translate-y-[-20px]');
                toggleIcon.classList.replace('fa-times', 'fa-bars');
            });
        });