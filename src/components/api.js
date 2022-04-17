import axios from 'axios';

const API = axios.create({baseURL:`https://api.github.com/search/`});

export const searchRepos = (searchKey,language,sort,order) => API.get(`repositories?q=${searchKey}+language:${language}&sort=${sort}&order=${order}`);
export const changePage = (page,pageCount,searchKey,language,sort,order) => API.get(`repositories?q=${searchKey}+language:${language}&sort=${sort}&order=${order}&page=${page}&per_page=${pageCount}`);