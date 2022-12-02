import axios from 'axios';

export const testimonialApi = axios.create({
    baseURL: 'https://testimonialapi.toolcarton.com/api'
})

testimonialApi.get('/');

export default testimonialApi