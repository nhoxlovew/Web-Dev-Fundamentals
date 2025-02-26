const contentElement = document.getElementById('content');
const mvsg = document.querySelector('#movie-sg');

export function getUpdatedMovies(page = 1) {
    let type ='home'
    fetch(`https://ophim1.com/danh-sach/phim-moi-cap-nhat?page=${page}`)
        .then(res => res.json())
        .then(data => {
            contentElement.innerHTML = `z
                <div class="w-full flex justify-center">
                    <div id="movie-station" class="flex flex-col items-center m-8 bg-gray-900 rounded-2xl">
                        <div class="swiper mySwiper w-full h-96 mt-4">
                            <div class="swiper-wrapper w-full my-6">
                                ${data.items.map(item => `
                                    <div class="swiper-slide text-center bg-cover bg-center">
                                        <img class="w-150 h-80 rounded-xl object-cover" src="${data.pathImage}${item.poster_url}" alt="${item.name}">
                                    </div>
                                `).join('')}
                            </div>
                        </div>
                        <div id="category" class="w-full my-4 grid grid-cols-6 place-items-center gap-y-10">
                            ${data.items.map(item => `
                                <div data-id="${item.slug}" class="movie-card h-80 w-56 rounded-2xl cursor-pointer overflow-hidden relative transition-transform duration-300 transform hover:scale-105 hover:brightness-50-img">
                                    <div class="h-full w-full absolute">
                                        <img class="w-56 h-80 object-cover transition duration-300" src="${data.pathImage}${item.thumb_url}" alt="${item.name}">
                                    </div>
                                    <div class="absolute bottom-0 bg-red-rgba text-center text-white w-full h-12 flex justify-center items-center">
                                        <div class="text-white text-sm">${item.name}</div>
                                    </div>
                                    <div class="absolute top-0 h-full w-full opacity-0 flex justify-center items-center hover:opacity-100 transition duration-300">
                                        <i class="fa-solid fa-play text-white text-4xl"></i>
                                    </div>
                                </div>
                            `).join('')}
                        </div>
                        <div id="pagination" class="w-full h-10 flex justify-center items-center mt-4 mb-8"></div>
                    </div>
                </div>
            `;
            activeSwiper();
            let currentPage = data.pagination.currentPage;
            const totalPages = data.pagination.totalPages;
            renderPagination(currentPage, totalPages, type);
            linkMovieSummary(type);
        })
}

function fetchAndRenderMovies(url, page = 1, type) {
    fetch(`${url}?page=${page}`)
        .then(res => res.json())
        .then(metaData => {
            const data = metaData.data;
            contentElement.innerHTML = `
                <div class="w-full flex justify-center">
                    <div id="movie-station" class="flex flex-col items-center m-8 bg-gray-800 rounded-2xl">
                        <div id="category" class="w-full my-4 flex flex-wrap justify-center gap-8 ">
                            ${data.items.map(item => `
                                <div data-id="${item.slug}" class="movie-card h-80 w-56 rounded-2xl cursor-pointer overflow-hidden relative transition-transform duration-300 transform hover:scale-105 hover:brightness-50-img">
                                    <div class="h-full w-full absolute">
                                        <img class="w-56 h-80 object-cover transition duration-300" src="https://img.ophim.live/uploads/movies/${item.thumb_url}" alt="${item.name}">
                                    </div>
                                    <div class="absolute bottom-0 bg-red-rgba text-center w-full h-12 flex justify-center items-center">
                                        <div class="text-white text-sm">${item.name}</div>
                                    </div>
                                    <div class="absolute top-0 h-full w-full opacity-0 flex justify-center items-center hover:opacity-100 transition duration-300">
                                        <i class="fa-solid fa-play text-white text-4xl"></i>
                                    </div>
                                </div>
                            `).join('')}
                        </div>
                        <div id="pagination" class="w-full h-10 flex justify-center items-center mt-4 mb-4"></div>
                    </div>
                </div>
            `;
            const totalItems = data.params.pagination.totalItems;
            const totalItemsPerPage = data.params.pagination.totalItemsPerPage;
            let currentPage = data.params.pagination.currentPage;
            const totalPages = Math.round(totalItems / totalItemsPerPage);
            renderPagination(currentPage, totalPages, type);
            linkMovieSummary(type);
        })
}

export function getSeriesMovies(page = 1) {
    fetchAndRenderMovies('https://ophim1.com/v1/api/danh-sach/phim-bo', page, 'seriesMovies');
}

export function getSingleMovies(page = 1) {
    fetchAndRenderMovies('https://ophim1.com/v1/api/danh-sach/phim-le', page, 'singleMovies');
}

export function getCartoonMovies(page = 1) {
    fetchAndRenderMovies('https://ophim1.com/v1/api/danh-sach/hoat-hinh', page, 'cartoonMovies');
}

export function getTvShowMovies(page = 1) {
    fetchAndRenderMovies('https://ophim1.com/v1/api/danh-sach/tv-shows', page, 'tvShowMovies');
}


function renderPagination(currentPage, totalPages, type) {
    const paginationContainer = document.getElementById('pagination');
    paginationContainer.innerHTML = '';
    function createPageItem(page, text = page, classes = '') {
        const pageItem = document.createElement('div');
        pageItem.className = `page-item ${classes} cursor-pointer px-4 py-2 mx-1 text-center rounded-md transition-colors duration-300 ${classes.includes('disabled') ? 'opacity-50 cursor-not-allowed' : 'bg-white text-black hover:bg-blue-500'}`;
        pageItem.innerText = text;
        pageItem.addEventListener('click', () => {
            if (!classes.includes('disabled') && page !== currentPage && page >= 1 && page <= totalPages) {
                currentPage = page;
                switch (type) {
                    case "home":
                        getUpdatedMovies(currentPage);
                        break;
                    case "seriesMovies":
                        getSeriesMovies(currentPage);
                        break;
                    case "singleMovies":
                        getSingleMovies(currentPage);
                        break;
                    case "cartoonMovies":
                        getCartoonMovies(currentPage);
                        break;
                    case "tvShowMovies":
                        getTvShowMovies(currentPage);
                        break;
                    default:
                        break;
                }
            }
        });
        return pageItem;
    }

    if (currentPage > 1) {
        paginationContainer.appendChild(createPageItem(currentPage - 1, 'Prev'));
    } else {
        paginationContainer.appendChild(createPageItem(currentPage - 1, 'Prev', 'disabled'));
    }

    const maxVisiblePages = 3;
    let startPage = Math.max(1, currentPage - Math.floor(maxVisiblePages / 2));
    let endPage = Math.min(totalPages, startPage + maxVisiblePages - 1);

    if (endPage - startPage < maxVisiblePages - 1) {
        startPage = Math.max(1, endPage - maxVisiblePages + 1);
    }

    if (startPage > 1) {
        paginationContainer.appendChild(createPageItem(1));
        if (startPage > 2) {
            paginationContainer.appendChild(createPageItem(startPage, '...'));
        }
    }

    for (let i = startPage; i <= endPage; i++) {
        paginationContainer.appendChild(createPageItem(i, i, i === currentPage ? 'bg-blue-500 text-white' : ''));
    }

    if (endPage < totalPages) {
        if (endPage < totalPages - 1) {
            paginationContainer.appendChild(createPageItem(endPage, '...'));
        }
        paginationContainer.appendChild(createPageItem(totalPages));
    }

    if (currentPage < totalPages) {
        paginationContainer.appendChild(createPageItem(currentPage + 1, 'Next'));
    } else {
        paginationContainer.appendChild(createPageItem(currentPage + 1, 'Next', 'disabled'));
    }
}

function linkMovieSummary(type) {
    document.querySelectorAll('.movie-card').forEach(card => {
        card.addEventListener('click', () => {
            const slug = card.getAttribute('data-id');
            movieSummary(type,slug);
            if(mvsg.style.display='block')
                mvsg.style.display='none';
        });
    });
}

export function movieSummary(type,slug) {
    window.history.pushState({ type: type , slug }, '', `?type=${type}&slug=${slug}`);
    fetch(`https://ophim1.com/phim/${slug}`)
        .then(res => res.json())
        .then(data => {
            const movie = data.movie;
            document.querySelector('#content').innerHTML = `
                <div id="movie-summary" class="w-full h-full flex flex-col items-center gap-y-4 ">
                    <div class="w-full h-8 flex items-center justify-center">
                        <div class="text-4xl font-bold text-orange-500">${movie.name}</div> 
                    </div>
                    <div id="total" class="w-full h-180 flex justify-center items-center gap-x-6 bg-gray-800 rounded-4xl border">
                        <div id="img-movie" class="w-3/12 h-130 flex justify-center items-center rounded-2xl">
                            <img class="w-80 object-cover rounded-3xl" src="${movie.thumb_url}" alt="${movie.name}">
                        </div>
                        <div id="list-summary" class="w-9/12 h-130 rounded-2xl flex items-center">
                            <div class="w-full h-113 text-white flex flex-col items-center justify-between">
                                <div class="w-full flex">
                                    <p class="w-3/12 text-2xl font-semibold text-orange-500">Thể Loại:</p>
                                    <p class="w-9/12 text-xl">${movie.category.map(cat => cat.name).join(' | ')}</p>
                                </div>
                                <div class="w-full flex">
                                    <p class="w-3/12 text-2xl font-semibold text-orange-500">Số Tập:</p>
                                    <p class="w-9/12 text-xl">${movie.episode_current} / ${movie.episode_total}</p>
                                </div>
                                <div class="w-full flex">
                                    <p class="w-3/12 text-2xl font-semibold text-orange-500">Thời Lượng:</p>
                                    <p class="w-9/12 text-xl">${movie.time}</p>
                                </div>
                                <div class="w-full flex">
                                    <p class="w-3/12 text-2xl font-semibold text-orange-500">Chất Lượng:</p>
                                    <p class="w-9/12 text-xl">${movie.quality}</p>
                                </div>
                                <div class="w-full flex">
                                    <p class="w-3/12 text-2xl font-semibold text-orange-500">Ngôn Ngữ:</p>
                                    <p class="w-9/12 text-xl">${movie.lang}</p>
                                </div>
                                <div class="w-full flex">
                                    <p class="w-3/12 text-2xl font-semibold text-orange-500">Năm Phát Hành:</p>
                                    <p class="w-9/12 text-xl">${movie.year}</p>
                                </div>
                                <div class="w-full flex">
                                    <p class="w-3/12 text-2xl font-semibold text-orange-500">Quốc Gia:</p>
                                    <p class="w-9/12 text-xl">${movie.country.map(c => c.name).join(', ')}</p>
                                </div>
                                <div class="w-full flex">
                                    <p class="w-3/12 text-2xl font-semibold text-orange-500">Đạo Diễn:</p>
                                    <p class="w-9/12 text-xl">${movie.director.some(dir => dir.trim() !== '') ? movie.director.filter(dir => dir.trim() !== '').join(', ') : 'Đang cập nhật'}</p>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div id="movie-player" class="flex items-center justify-center bg-black hidden border">
                        <iframe id="player" class="w-full h-full" src="" frameborder="0" allowfullscreen></iframe>
                    </div>
                    <div class="w-full h-60 flex items-center bg-black bg-gray-800 border rounded-3xl gap-x-6">
                        <div id="episode-list-movie" class="w-3/12 h-4/5 flex flex-col items-center text-center">
                            <div class="w-full text-orange-500 text-2xl font-semibold">Danh sách tập phim</div>
                            <div class="w-full h-full overflow-y-scroll pl-8">
                                <div class="w-full flex flex-wrap gap-2">
                                    ${data.episodes[0].server_data.map(ep => `
                                        <a href="#" data-link="${ep.link_embed}" class="episode-link h-6 w-10 text-center bg-blue-400 hover:bg-orange-500 rounded-md">${ep.name}</a>
                                    `).join('')}
                                </div>
                            </div>
                        </div>
                        <div id="content-movie" class="w-9/12 h-4/5 flex flex-col">
                            <div class="w-full text-orange-500 text-2xl font-semibold">Nội dung phim</div>
                            <div class="w-full h-full pr-8 overflow-y-scroll">
                                <div class="text-white text-xl">${movie.content}</div>
                            </div>
                        </div>
                    </div>
                </div>
            `;
            document.querySelectorAll('.episode-link').forEach(link => {
                link.addEventListener('click', (e) => {
                    e.preventDefault();
                    document.querySelectorAll('.episode-link').forEach(link => {
                        link.style.backgroundColor = '';
                        link.style.color = '';
                    });
                    link.style.backgroundColor = '#f97316';
                    link.style.color = 'white';

                    const src = link.getAttribute('data-link');
                    document.getElementById('player').src = src;
                    document.getElementById('movie-player').classList.remove('hidden');
                    document.getElementById('total').style.display='none';
                });
            });
        })
}

export function searchMovie() {
    const keyword = document.getElementById('search-input').value;
    fetch(`https://ophim1.com/v1/api/tim-kiem?keyword=${encodeURIComponent(keyword)}`)
        .then(res => res.json())
        .then(metaData => {
            const data = metaData.data;
            let html='';
            data.items.forEach(element=>{
                html += `
                    <div data-id="${element.slug}" class="movie-card w-full h-24 flex items-center justify-between hover:text-yellow-300">
                        <div class="w-16 h-24 flex justify-center items-center"><img class="w-14 object-cover"
                            src="https://img.ophim.live/uploads/movies/${element.thumb_url}" alt="${element.name}"></div>
                        <div class="w-40 h-24 flex items-center">
                            <div class="text-sm">${element.name}</div>
                        </div>
                    </div>
                `
            });
            mvsg.innerHTML = html;
            linkMovieSummary();
        })
}

let swiperInstance = null;

function activeSwiper() {
    if (swiperInstance) {
        swiperInstance.destroy(true, true);
    }

    swiperInstance = new Swiper(".mySwiper", {
        effect: "coverflow",
        grabCursor: true,
        centeredSlides: true,
        slidesPerView: 3,
        coverflowEffect: {
            rotate: 50,
            stretch: 0,
            depth: 100,
            modifier: 1,
            slideShadows: false,
        },
        loop: true,
        autoplay: {
            delay: 2000,
        }
    });
}
