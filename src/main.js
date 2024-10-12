import iziToast from "izitoast";
import getImages from "./js/pixabay-api";
import renderGallery from "./js/render-functions";

//Show spinned loader
function showLoader() {
  document.querySelector('.loader').style.display = 'inline-block';
}

//Hide loader
function hideLoader() {
  document.querySelector('.loader').style.display = 'none';
}

// iziToast settings
iziToast.settings({
  position: 'topRight',
  transitionIn: 'flipInX',
  transitionOut: 'flipOutX',
});

var form = document.querySelector(".images-form");
const inputQuery = form.elements.query;

//Submit listener
form.addEventListener("submit", (evt) => {
  evt.preventDefault();
  const query = inputQuery.value.trim();
  if (query.length < 3) {
    iziToast.error({
      message: `❌ Input at last three symbols!`
    });
    return
  }
  processSubmit(query);
});

//Processing submit
function processSubmit(query) {
  const gallery = document.querySelector('.gallery');
  gallery.innerHTML = "";
  
  form.reset();
  showLoader()

  //Getting images
  getImages(query)
  .then( result => {
    hideLoader();
    if(!result.ok) {
      throw new Error(response.status);
    }
    return result.json();
  }).then( items => {
    if (items.totalHits > 0) {
      renderGallery(items.hits);
    } else {
      iziToast.error({
        message: `❌ No results found!`
      });
    }
  })
  .catch((e) => {
    hideLoader();
    console.log(e);
  });
  
}
