import iziToast from 'izitoast';
import getImages from './js/pixabay-api';
import renderGallery from './js/render-functions';

const form = document.querySelector('.images-form');
const inputQuery = form.elements.query;
const loadMoreBtn = document.getElementById('js-load-more');
const bottomTextMsg = document.getElementById('js-bottom-text-msg');
const gallery = document.querySelector('.gallery');
let page = 1;
let perPage = 15;
let savedQuery = '';

// iziToast settings
iziToast.settings({
    position: 'topRight',
    transitionIn: 'flipInX',
    transitionOut: 'flipOutX',
});

//Submit listener
form.addEventListener('submit', evt => {
    evt.preventDefault();
    const query = inputQuery.value.trim();
    if (query.length < 3) {
        iziToast.error({
            message: `❌ Input at last three symbols!`,
        });
        return;
    }
    processSubmit(query);
});

//Load more listener
loadMoreBtn.addEventListener('click', () => {
    processSubmit(savedQuery);
});

//Processing submit
async function processSubmit(query) {
    form.reset();
    showLoader();
    hideElement(bottomTextMsg);

    page = query != savedQuery ? 1 : page + 1;
    savedQuery = query;

    const result = await getImages(query, page, perPage);
    hideLoader();

    if (result.status !== 200) {
        hideElement(loadMoreBtn);
        gallery.innerHTML = '';
        iziToast.error({
            message: `❌ ${result}!`,
        });
        return;
    }

    if (result.data.hits.length > 0) {
        renderGallery(result.data.hits, page);

        //If the search results all showing on the page - hide "load more" button
        if (page * perPage >= result.data.totalHits) {
            hideElement(loadMoreBtn);
            showElement(bottomTextMsg);
        } else {
            showElement(loadMoreBtn);
        }
    } else {
        hideElement(loadMoreBtn);
        gallery.innerHTML = '';
        iziToast.error({
            message: `❌ No results found!`,
        });
    }

    //Show element
    function showElement(el) {
        el.classList.remove('hidden');
    }

    //Hide element
    function hideElement(el) {
        el.classList.add('hidden');
    }

    //Show spinned loader
    function showLoader() {
        document.querySelector('.backdrop-loader').classList.add('visible');
    }

    //Hide loader
    function hideLoader() {
        document.querySelector('.backdrop-loader').classList.remove('visible');
    }
}
