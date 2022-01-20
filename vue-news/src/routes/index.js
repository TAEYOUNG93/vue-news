import VueRouter from 'vue-router'
import Vue from 'vue'
import NewsView from '../views/NewsView.vue'
import AskView from '../views/AskView.vue'
import JobsView from '../views/JobsView.vue'
import UsersView from '../views/UserView.vue'
import ItemView from '../views/ItemView.vue'
// import createListView from '../views/CreateListView.js'
import bus from '../utils/bus'
import { store } from '../store/index.js';

Vue.use(VueRouter);

export const router = new VueRouter({
    mode: 'history',
    routes: [
        {
            path:'/',
            // component: baseUrl/:id 누공을 말씀하시는 것 같습니다
            name: 'news',
            redirect: '/news',
            // component: createListView('NewsView'),
        },
        {
            path: '/news',
            name: 'news',
            component: NewsView,
            beforeEnter: (to, from, next) => {
                bus.$emit('start:spinner')
                // #1
                store.dispatch('FETCH_LIST', to.name)
                .then(() => {
                    // #5
                        bus.$emit('end:spinner')
                        next();
                    } )
                    .catch((error) => {
                        console.log(error)
                    } );
            }
        },
        {
            path: '/ask',
            name: 'ask',
            component: AskView,
            // component: createListView('JobsView'),
            beforeEnter: (to, from, next) => {
                bus.$emit('start:spinner');
                store.dispatch('FETCH_LIST', to.name)
                .then(() => {
                    bus.$emit('end:spinner')
                    next();
                })
                .catch((error) => {
                    console.log(error);
                })
            }
        },
        {
            path: '/jobs',
            name: 'jobs',
            component: JobsView,
            // component: createListView('JobsView'),
            beforeEnter: (to, from, next) => {
                bus.$emit('start:spinner');
                store.dispatch('FETCH_LIST', to.name)
                .then(() => {
                    bus.$emit('end:spinner')
                    next();
                })
                .catch((error) => {
                    console.log(error);
                })
            }
        },
        {
            path:'/item/:id',
            component: ItemView,

        },
        {
            path:'/users/:id',
            component: UsersView,

        },
    ]
});