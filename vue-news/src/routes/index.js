import VueRouter from 'vue-router'
import Vue from 'vue'
// import NewsView from '../views/NewsView.vue'
// import AskView from '../views/AskView.vue'
// import JobsView from '../views/JobsView.vue'
import UsersView from '../views/UserView.vue'
import ItemView from '../views/ItemView.vue'
import createListView from '../views/CreateListView.js'


Vue.use(VueRouter);

export const router = new VueRouter({
    mode: 'history',
    routes: [
        {
            path:'/',
            // component: baseUrl/:id 누공을 말씀하시는 것 같습니다
            name: 'news',
            // component: url 주소로 갔을때 표시될 컴포넌트 
            // component: NewsView,
            component: createListView('NewsView'),
        },
        {
            path: '/ask',
            name: 'ask',
            // component: AskView,
            component: createListView('AskView'),
        },
        {
            path: '/jobs',
            name: 'jobs',
            // component: JobsView,
            component: createListView('JobsView'),
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