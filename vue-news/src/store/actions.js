
import { fetchNewsList, fetchJobList, fetchAskList, fetchUserInfo, fetchItem, fetchList } from '../api/index.js'

export default {
    FETCH_NEWS(context) {
        return fetchNewsList()
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
        return fetchJobList()
            .then(response => {
                console.log(response.data);
                context.commit('SET_JOBS', response.data)
            })
            .catch(error => {
                console.log(error);
            })
    },
    FETCH_ASKS(context) {
        return fetchAskList()
            .then(response =>  {
                context.commit('SET_ASKS', response.data)
                return response
            })
            .catch(error =>  {
                console.log(error);
            })
    },
    FETCH_USER(context, name) {
        return fetchUserInfo(name)
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

        return fetchItem(id)
            .then(({ data }) => {
                commit('SET_ITEM', data)
            })
            .catch(error => {
                console.log(error);
            })
    },
    // FETCH_LIST({ commit }, pageName) {
    //     return fetchList(pageName)
    //         .then(({ data }) => {
    //             commit('SET_LIST', data)
    //         })
    //         .catch(error => {
    //             console.log(error)
    //         })
    // }

    // # 2
    FETCH_LIST({ commit }, pageName) {

        // # 3
        return fetchList(pageName)

            .then(response => {
                // #4
                console.log(4);
                console.log(pageName);
                commit('SET_LIST', response.data);
                return response;
            })
            .catch(error => console.log(error));
    }

}