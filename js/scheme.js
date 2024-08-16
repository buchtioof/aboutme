document.addEventListener('DOMContentLoaded', () => {
    const themeToggleButton = document.getElementById('theme-toggle');
    const iconSun = document.getElementById('icon-sun');
    const iconMoon = document.getElementById('icon-moon');

    // Vérifier le thème stocké dans le localStorage
    const currentTheme = localStorage.getItem('theme');
    if (currentTheme) {
        document.documentElement.setAttribute('data-theme', currentTheme);
        updateIcons();
    } else {
        // Définir le thème par défaut basé sur la préférence système
        const prefersDark = window.matchMedia && window.matchMedia('(prefers-color-scheme: dark)').matches;
        document.documentElement.setAttribute('data-theme', prefersDark ? 'dark' : 'light');
        updateIcons();
    }

    // Fonction pour basculer le thème
    themeToggleButton.addEventListener('click', () => {
        let theme = document.documentElement.getAttribute('data-theme');
        if (theme === 'dark') {
            document.documentElement.setAttribute('data-theme', 'light');
            localStorage.setItem('theme', 'light');
        } else {
            document.documentElement.setAttribute('data-theme', 'dark');
            localStorage.setItem('theme', 'dark');
        }
        updateIcons(); // Mettre à jour les icônes immédiatement
    });

    // Fonction pour mettre à jour les icônes
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