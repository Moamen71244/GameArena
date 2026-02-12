export const hideLoadingScreen = () => {
    const loadingScreen = document.getElementById('loading-screen');
    if (loadingScreen) {
        loadingScreen.classList.add('hidden');
        setTimeout(() => loadingScreen.remove(), 500);
    }
};

export const renderGames = (games, containerId) => {
    const container = document.getElementById(containerId);
    if (!container) return;

    const fragment = document.createDocumentFragment();

    games.forEach(game => {
        const col = document.createElement('div');
        col.className = 'col my-card p-3';
        col.innerHTML = `
            <div class="inner h-100 rounded-4 overflow-hidden position-relative">
                <figure class="p-0 m-0 h-100">
                    <img src="${game.thumbnail}" class="w-100 h-100 object-fit-cover" alt="${game.title}" loading="lazy" />
                </figure>
                <figcaption class="caption position-absolute p-3">
                    <p class="h5 fm-chakra fw-bold">${game.title}</p>
                </figcaption>
                <div class="linear-gradiant-overlay"></div>
                <div class="linear-gradiant-overlay-to-down d-flex gap-3">
                    <div class="desc1 d-flex gap-1 bg-dark px-2 py-1 rounded-pill">
                        <span><i class="fa-solid fa-flag-checkered main-color fa-sm"></i></span>
                        <p class="text-white m-0">${game.genre.toUpperCase()}</p>
                    </div>
                </div>
            </div>
        `;
        fragment.appendChild(col);
    });

    container.innerHTML = '';
    container.appendChild(fragment);
};
