import axios from 'axios';

const KEY = '46403551-b403f9f66c1c3bacc7ad46072';
const BASE_URL = 'https://pixabay.com/api/';

//Getting images by query
export default async function getImages(query, page, perPage) {
    try {
        const response = await axios.get(BASE_URL, {
            params: {
                key: KEY,
                q: query,
                page: page,
                per_page: perPage,
                image_type: 'photo',
                orientation: 'horizontal',
                safesearch: true,
            },
        });
        console.log(response);
        return response;
    } catch (e) {
        return e.message;
    }
}
