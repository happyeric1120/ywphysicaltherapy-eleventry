// Set current year in footer
document.addEventListener('DOMContentLoaded', function() {
    // 1. 載入 navbar.html 到 id="navbar"
    fetch('navbar.html')
        .then(response => response.text())
        .then(data => {
            document.getElementById('navbar').innerHTML = data;

            // 2. 控制 mobile menu (要等 navbar 載入後才加事件)
            const menuButton = document.getElementById('mobile-menu-button');
            const mobileMenu = document.getElementById('mobile-menu');
            if (menuButton && mobileMenu) {
                menuButton.addEventListener('click', function () {
                    mobileMenu.classList.toggle('hidden');
                });

                // (進階) 點 menu 連結自動收合
                mobileMenu.querySelectorAll('a').forEach(function(link){
                    link.addEventListener('click', function () {
                        mobileMenu.classList.add('hidden');
                    });
                });
            }
        });
    const year = document.getElementById('currentYear');
    if (year) year.textContent = new Date().getFullYear();

    // Mobile menu toggle
    const menuButton = document.getElementById('mobile-menu-button');
    const mobileMenu = document.getElementById('mobile-menu');
    if (menuButton && mobileMenu) {
        const menuIconDivs = menuButton.querySelectorAll('.menu-icon div');
        menuButton.addEventListener('click', () => {
            mobileMenu.classList.toggle('hidden');
            menuIconDivs[0].classList.toggle('rotate-45');
            menuIconDivs[0].classList.toggle('translate-y-[8px]');
            menuIconDivs[1].classList.toggle('opacity-0');
            menuIconDivs[2].classList.toggle('-rotate-45');
            menuIconDivs[2].classList.toggle('-translate-y-[8px]');
        });
    }

    // Smooth scroll for anchor links
    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
        anchor.addEventListener('click', function (e) {
            const targetId = this.getAttribute('href');
            if (targetId && targetId !== "#" && document.querySelector(targetId)) {
                e.preventDefault();
                document.querySelector(targetId).scrollIntoView({ behavior: 'smooth' });
                // Close mobile menu on click
                if (mobileMenu && mobileMenu.contains(this) && !mobileMenu.classList.contains('hidden')) {
                    mobileMenu.classList.add('hidden');
                    if (menuButton) {
                        const menuIconDivs = menuButton.querySelectorAll('.menu-icon div');
                        menuIconDivs[0].classList.remove('rotate-45', 'translate-y-[8px]');
                        menuIconDivs[1].classList.remove('opacity-0');
                        menuIconDivs[2].classList.remove('-rotate-45', '-translate-y-[8px]');
                    }
                }
            } else if (targetId === "#home" || targetId === "#") {
                e.preventDefault();
                window.scrollTo({ top: 0, behavior: 'smooth' });
            }
        });
    });
});