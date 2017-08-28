import axios from 'axios';

axios.defaults.xsrfHeaderName = 'X-CSRFTOKEN';
axios.defaults.xsrfCookieName = 'csrftoken';

if (!!localStorage.token) {
    axios.defaults.headers.common['Authorization'] = 'Token ' + localStorage.token;
}

axios.defaults.headers.common['Accept'] = 'application/json';
axios.defaults.headers.common['Content-Type'] = 'application/json';

export default axios;