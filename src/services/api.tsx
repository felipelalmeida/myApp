import axios from 'axios';

const api = axios.create({
    baseURL: 'https://dog.ceo/api/breeds/image/random',
    timeout: 5000,
    headers: {
        'Content-Type': 'application/json',
    },
});

export default api;