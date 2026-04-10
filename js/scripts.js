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