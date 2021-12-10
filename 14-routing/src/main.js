import { createApp } from 'vue';
import { createWebHistory, createRouter } from 'vue-router';

import App from './App.vue';
import TeamsList from './components/teams/TeamsList.vue';
import UsersList from './components/users/UsersList.vue';
import TeamMembers from './components/teams/TeamMembers.vue';

const app = createApp(App)
const router = createRouter({
    history: createWebHistory(),
    routes: [
        {
            path: '/teams',
            component: TeamsList,

        },
        {
            path: '/users',
            component: UsersList,
        },
        {
            path: '/teams/:teamId',
            component: TeamMembers,
            props: true                 
        }, // props : true means that dynamic param is like props rathan $routes properties
    ],
    linkActiveClass: 'active'
});

app.use(router);

app.mount('#app');
