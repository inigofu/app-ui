import axios from 'axios';

window.axios = axios;
axios.defaults.baseURL = 'http://localhost:3000';
axios.defaults.headers.common['X-Requested-With'] = 'XMLHttpRequest';
