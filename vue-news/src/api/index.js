import axios from "axios";

const config = {
    baseUri: 'https://api.hnpwa.com/v0/'
}

function fetchNewsList() {
    return axios.get(config.baseUri + 'news/1.json')
    // return new Promise();
}

function  fetchJobList() {
    return axios.get(config.baseUri + 'jobs/1.json')
}

function  fetchAskList() {
    return axios.get(config.baseUri + 'ask/1.json')
}

function fetchList(pageName) {
    // return axios.get(`${config.baseUri}${pageName}/1.json'`)
    console.log(config.baseUri + pageName + '/1.json');
    return axios.get(config.baseUri + pageName + '/1.json');
    // return axios.get('https://api.hnpwa.com/v0/news/1.json')
}

function fetchUserInfo(username) {
    return axios.get(`${config.baseUri}user/${username}.json`)
}

function fetchItem(username) {
    return axios.get(`${config.baseUri}item/${username}.json`)
}

export {
    fetchNewsList,
    fetchJobList,
    fetchAskList,
    fetchUserInfo,
    fetchItem,
    fetchList
}

