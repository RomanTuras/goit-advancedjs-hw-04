const KEY = "46403551-b403f9f66c1c3bacc7ad46072";
const BASE_URL = "https://pixabay.com/api/";


//Getting images by query
export default function getImages(query) {
  const searchParams = new URLSearchParams({
    key: KEY,
    q: query,
    image_type: "photo",
    orientation: "horizontal",
    safesearch: true
  });

  return fetch(BASE_URL + `?${searchParams}`);
}