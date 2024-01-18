
    document.addEventListener('DOMContentLoaded', function () {
        const mobileMenuButton = document.getElementById('mobile-menu');
        const nav = document.querySelector('.navbar nav');

        mobileMenuButton.addEventListener('click', function () {
            nav.classList.toggle('active');
        });
    });

