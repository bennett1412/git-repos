import axios from 'axios';
const apiKey = "e272d1b315484049babfaa7553befaca";
const API = axios.create({baseURL:`https://newsapi.org/v2`});

export const searchNews = (searchFor) => API.get(`/everything?q=${searchFor}&sortBy=popularity&apiKey=${apiKey}`);
export const fetchNews = () => API.get(`/top-headlines?country=in&apiKey=${apiKey}`);
export const filterNews = (category) => {
    console.log(category);
    return API.get(`/top-headlines?country=in&category=${category}&apiKey=${apiKey}`)};