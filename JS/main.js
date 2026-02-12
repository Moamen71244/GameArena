import { fetchGames } from './modules/api.js';
import { hideLoadingScreen, renderGames } from './modules/ui.js';
import { debounce, throttle } from './modules/utils.js';

const init = async () => {
    const games = await fetchGames();
    hideLoadingScreen();
    setupEventListeners();
};

const setupEventListeners = () => {
    const handleResize = debounce(() => {
        console.log("Window resized!");
    }, 250);

    window.addEventListener('resize', handleResize);

    const handleScroll = throttle(() => {
        const scrolled = window.scrollY;
        const navbar = document.querySelector('.navbar');
        if (navbar) {
            if (scrolled > 50) {
                navbar.classList.add('scrolled');
            } else {
                navbar.classList.remove('scrolled');
            }
        }
    }, 100);

    window.addEventListener('scroll', handleScroll);
};

document.addEventListener('DOMContentLoaded', init);
