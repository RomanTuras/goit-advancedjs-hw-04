import SimpleLightbox from "simplelightbox";

// Init a new instence of the SimpleLightbox
const lightbox = new SimpleLightbox('.gallery .gallery-item a', {
  captionDelay: 250,
  captionsData: 'alt',
  showCounter: false,
});

// Rendering the gallery with results
export default function renderGallery(images) {
  const gallery = document.querySelector('.gallery');
  let markup = '';
  
  images.forEach(image => {
    const { largeImageURL, tags, likes, views, comments, downloads } = image;
  
    markup += `<li class="gallery-item">
      <a class="gallery-link" href="${largeImageURL}">
        <img
          class="gallery-image"
          src="${largeImageURL}"
          alt="${tags}"
        />
        <div class="gallery-footer">
          <div class="footer-item">
            <span class="item-title">Likes</span>
            <span class="item-value">${likes}</span>
          </div>
          <div class="footer-item">
            <span class="item-title">Views</span>
            <span class="item-value">${views}</span>
          </div>
          <div class="footer-item">
            <span class="item-title">Comments</span>
            <span class="item-value">${comments}</span>
          </div>
          <div class="footer-item">
            <span class="item-title">Downloads</span>
            <span class="item-value">${downloads}</span>
          </div>
        </div>
      </a>
    </li>`;
  });
  
  gallery.innerHTML = markup;
  lightbox.refresh();

}
