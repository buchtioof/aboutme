document.addEventListener('DOMContentLoaded', () => {
    
    // Variable for the toggle button and sun/moon icons
    const themeToggleButton = document.getElementById('theme-toggle');
    const iconSun = document.getElementById('icon-sun');
    const iconMoon = document.getElementById('icon-moon');

    // Check the theme stored in localStorage
    const currentTheme = localStorage.getItem('theme');
    if (currentTheme) {
        document.documentElement.setAttribute('data-theme', currentTheme);
        updateIcons();
    } else {
        // Set default theme based on system preference
        const prefersDark = window.matchMedia && window.matchMedia('(prefers-color-scheme: dark)').matches;
        document.documentElement.setAttribute('data-theme', prefersDark ? 'dark' : 'light');
        updateIcons();
    }

    // Function to toggle the theme
    themeToggleButton.addEventListener('click', () => {
        let theme = document.documentElement.getAttribute('data-theme');
        if (theme === 'dark') {
            document.documentElement.setAttribute('data-theme', 'light');
            localStorage.setItem('theme', 'light');
        } else {
            document.documentElement.setAttribute('data-theme', 'dark');
            localStorage.setItem('theme', 'dark');
        }
        updateIcons(); // Update icons immediately
    });

    // Function to update the icons
    function updateIcons() {
        const theme = document.documentElement.getAttribute('data-theme');
        if (theme === 'dark') {
            iconSun.style.display = 'none';
            iconMoon.style.display = 'inline';
        } else {
            iconSun.style.display = 'inline';
            iconMoon.style.display = 'none';
        }
    }
});
