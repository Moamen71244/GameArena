const API_URL = 'https://www.freetogame.com/api/games';

const SAMPLE_GAMES = [
    { title: "Lost Ark", thumbnail: "images/latest-games-1.png", genre: "ARPG" },
    { title: "Valorant", thumbnail: "images/latest-games-2.png", genre: "Shooter" },
    { title: "Apex Legends", thumbnail: "images/latest-games-3.png", genre: "Shooter" },
    { title: "Dota 2", thumbnail: "images/latest-games-4.png", genre: "MOBA" },
    { title: "Genshin Impact", thumbnail: "images/latest-games-5.png", genre: "Action" },
    { title: "Warframe", thumbnail: "images/latest-games-6.png", genre: "Action" }
];

export const fetchGames = async () => {
    try {
        await new Promise(resolve => setTimeout(resolve, 1500));
        return SAMPLE_GAMES;
    } catch (error) {
        console.error("Error fetching games:", error);
        return SAMPLE_GAMES;
    }
};
