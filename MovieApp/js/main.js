import {
    getUpdatedMovies,
    getSeriesMovies,
    getSingleMovies,
    getCartoonMovies,
    getTvShowMovies,
    searchMovie,
    movieSummary
} from './api.js';

const menuButton = document.querySelector('#menu-button');
const sideBar = document.querySelector('#side-bar');
const searchBtn = document.querySelector('#search-input');
const menuItems = document.querySelectorAll('.menu-item');
const homeItem = document.querySelector('#home');
const seriesItem = document.querySelector('#series-movies');
const singleItem = document.querySelector('#single-movies');
const cartoonItem = document.querySelector('#cartoons');
const tvShowItem = document.querySelector('#tv-shows');
const mvsg = document.querySelector('#movie-sg');
const searchInput = document.getElementById('search-input');
const searchBox = document.querySelector('#search-box');

function showContent(type) {
    switch (type) {
        case "home":
            getUpdatedMovies();
            break;
        case "seriesMovies":
            getSeriesMovies();
            break;
        case "singleMovies":
            getSingleMovies();
            break;
        case "cartoonMovies":
            getCartoonMovies();
            break;
        case "tvShowMovies":
            getTvShowMovies();
            break;
        default:
            break;
    }
    window.history.pushState({ type: type }, '', `?type=${type}`);
}

window.addEventListener('popstate', (event) => {
    if (event.state && event.state.type) {
        showContent(event.state.type);
        if (event.state.slug) {
            movieSummary(event.state.slug);
        }
    } else {
        showContent('home');
    }
});

document.addEventListener('DOMContentLoaded', () => {
    // showContent('home');
    // highlightMenu('home');

    const urlParams = new URLSearchParams(window.location.search);
    const type = urlParams.get('type') || 'home';
    const slug = urlParams.get('slug');
    
    if(type){
        showContent(type);
        highlightMenu(type);
    }
    if(type && slug){
        movieSummary(type,slug);
        highlightMenu(type);
    }
    
    // Register click events for menu items
    homeItem.addEventListener('click', () => {
        showContent('home');
        highlightMenu('home');
    });
    seriesItem.addEventListener('click', () => {
        showContent('seriesMovies');
        highlightMenu('seriesMovies');
    });
    singleItem.addEventListener('click', () => {
        showContent('singleMovies');
        highlightMenu('singleMovies');
    });
    cartoonItem.addEventListener('click', () => {
        showContent('cartoonMovies');
        highlightMenu('cartoonMovies');
    });
    tvShowItem.addEventListener('click', () => {
        showContent('tvShowMovies');
        highlightMenu('tvShowMovies');
    });

    menuButton.addEventListener('click', toggleSidebar);

    searchBox.addEventListener('click', openSideBarBySearchBtn);

    let debounceTimeout;
    searchInput.addEventListener('input', function () {
        mvsg.style.display = 'block';
        clearTimeout(debounceTimeout);
        debounceTimeout = setTimeout(searchMovie, 500);
    })

});

// Function to highlight the current menu
function highlightMenu(menu) {
    menuItems.forEach(mi => {
        mi.style.backgroundColor = '';
        mi.style.color = '';
    });

    switch (menu) {
        case 'home':
            homeItem.style.backgroundColor = '#1f2937';
            homeItem.style.color = '#fde047';
            break;
        case 'seriesMovies':
            seriesItem.style.backgroundColor = '#1f2937';
            seriesItem.style.color = '#fde047';
            break;
        case 'singleMovies':
            singleItem.style.backgroundColor = '#1f2937';
            singleItem.style.color = '#fde047';
            break;
        case 'cartoonMovies':
            cartoonItem.style.backgroundColor = '#1f2937';
            cartoonItem.style.color = '#fde047';
            break;
        case 'tvShowMovies':
            tvShowItem.style.backgroundColor = '#1f2937';
            tvShowItem.style.color = '#fde047';
            break;
        default:
            break;
    }
}

// Function to toggle sidebar
function toggleSidebar() {
    if (menuButton.style.transform === 'rotate(180deg)') {
        menuButton.style.transform = 'rotate(0deg)';
        sideBar.style.width = '240px';
        document.querySelectorAll('.menu-items').forEach(mi => mi.style.display = 'block');
        searchBtn.style.display = 'block';
    } else {
        menuButton.style.transform = 'rotate(180deg)';
        sideBar.style.width = '80px';
        document.querySelectorAll('.menu-items').forEach(mi => mi.style.display = 'none');
        searchBtn.style.display = 'none';
    }
}

// Function to open search
function openSideBarBySearchBtn() {
    menuButton.style.transform = 'rotate(0deg)';
    sideBar.style.width = '240px';
    document.querySelectorAll('.menu-items').forEach(mi => mi.style.display = 'block');
    searchBtn.style.display = 'block';
}

document.addEventListener('click',(event)=>{
    if (!searchBox.contains(event.target)) {
        mvsg.style.display='none';
        searchInput.value='';
    }
})
