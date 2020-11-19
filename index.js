document.addEventListener('DOMContentLoaded', function() {
    const mobileMenu = document.querySelector('.top__mobile-list');
    const mobileButton = document.querySelector('.top__mobile-button');

    mobileButton.addEventListener('click', function () {
        if (mobileMenu.classList.contains('active')) {
            mobileMenu.classList.remove('active');
        } else {
            mobileMenu.classList.add('active');
        }
    })
});