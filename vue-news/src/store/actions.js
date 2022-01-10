
import { fetchNewsList, fetchJobList, fetchAskList, fetchUserInfo, fetchItem, fetchList } from '../api/index.js'

export default {
    FETCH_NEWS(context) {
        fetchNewsList()
            .then(response => {
                console.log(response.data);
                context.commit('SET_NEWS', response.data);
                return response;
            })
            .catch(error => {
                console.log(error);
            })
    }, 
    FETCH_JOBS(context) {
        fetchJobList()
            .then(response => {
                console.log(response.data);
                context.commit('SET_JOBS', response.data)
            })
            .catch(error => {
                console.log(error);
            })
    },
    FETCH_ASKS(context) {
        fetchAskList()
            .then(response =>  {
                context.commit('SET_ASKS', response.data)  
            })
            .catch(error =>  {
                console.log(error);
            })
    },
    FETCH_USER(context, name) {
        fetchUserInfo(name)
            .then(response => {
                context.commit('SET_USER', response.data)
            })
            .catch(error => {
                console.log(error);
            })
    },
    // FETCH_ITEM(context, name) {
    //     fetchItem(name)
    //         .then(response => {
    //             context.commit('SET_ITEM', response.data)
    //         })
    //         .catch(error => {
    //             console.log(error);
    //         })
    // }
    FETCH_ITEM({ commit }, id) {
        fetchItem(id)
            .then(({ data }) => {
                commit('SET_ITEM', data)
            })
            .catch(error => {
                console.log(error);
            })
    },
    FETCH_LIST({ commit }, pageName) {
        fetchList(pageName)
            .then(({ data }) => {
                console.log(data)
                commit('SET_LIST', data)
            })
            .catch(error => {
                console.log(error)
            })
    }
    

}