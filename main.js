var navlinks = document.getElementById("navlinks");
var menuVisible = false;

function toggleMenu() {
    if (menuVisible) {
        hideMenu();
    } else {
        showMenu();
    }
}

function showMenu() {
    navlinks.style.right = '0';
    menuVisible = true;
}

function hideMenu() {
    navlinks.style.right = '-100%';
    menuVisible = false;
}

// Add event listener to toggle menu when the menu button is clicked
var menuButton = document.querySelector('.fa-bars');
menuButton.addEventListener('click', function() {
    if (window.innerWidth <= 768) {
        toggleMenu();
    }
});

// Add event listener to hide menu when the close button is clicked
var closeButton = document.querySelector('.fa-xmark');
closeButton.addEventListener('click', function() {
    if (window.innerWidth <= 768) {
        hideMenu();
    }
});

// Adjusted the existing code to hide the menu when the window is resized
window.addEventListener('resize', function() {
    if (window.innerWidth > 768) {
        showMenu();
    } else if (!menuVisible) {
        hideMenu();
    }
});