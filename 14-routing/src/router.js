import { createWebHistory, createRouter } from 'vue-router';

import notFound from './components/nav/notFound.vue';
import TeamsList from './components/teams/TeamsList.vue';
import UsersList from './components/users/UsersList.vue';
import TeamMembers from './components/teams/TeamMembers.vue';
import TeamsFooter from './components/teams/TeamsFooter.vue';
import UsersFooter from './components/users/UsersFooter.vue';

const router = createRouter({
    history: createWebHistory(),
    routes: [
        {
            path: '/',
            // component: TeamsList,

            // REDIRECT - url changes
            redirect: '/teams'
        },
        {
            name: 'teams',
            path: '/teams',
            meta: { needsAuth: true } ,
            // for multiple routes per route
            components: {
                default: TeamsList,
                footer: TeamsFooter
            },            
            // component: TeamsList,
            children: [
                {
                    name: 'team-members',
                    path: ':teamId',
                    component: TeamMembers, 
                    props: true
                }
            ],

            // '/' -> '/teams' ALIAS - url doesn't changes
            // alias: '/'
        },
        {
            path: '/users',
            // component: UsersList,
            components: {
                default: UsersList,
                footer: UsersFooter
            },

            // NAVIGATION GUARDS
            // BEFORE EACH
            // beforeEnter(to, from, next) {
            //     console.log('users before enter')
            //     console.log(to,from)
            //     next();
            // }
            // this can also be done at component as hooks
        },
        // {
        //     path: '/teams/:teamId',
        //     component: TeamMembers,
        //     props: true                 
        // }, // props : true means that dynamic param is like props rathan $routes properties

        // UNKNOWN ROUTES
        {
            path: '/:notFound(.*)',
            // redirect: '/teams'
            component: notFound
        }
    ],
    // this is changing linkActiveClass to active
    linkActiveClass: 'active',
    scrollBehavior(to, from , savedPosition) {
        // console.log(to, from, savedPosition);
        if(savedPosition){
            return savedPosition;
        }
        
        return {left:0, top: 0};
    }
    
});

// NAVIGATION GUARDS
router.beforeEach(function(to,from,next){
    console.log('global before each');
    console.log(to, from);
    if(to.meta.needsAuth){
        console.log('Needs Auth!');
        next();
    }else {
        next();
    }
    // fails all the navigations
    // next(false);
    // next('/users');

    // if(to.name === 'team-members'){
    //     next();
    // } else {
    //     next({name: 'team-members', params: {teamId: 't2'}});
    // }

    next();
});

// another guard
router.afterEach(function(to,from){
    // sending analytical data from server
    console.log('after each')
    console.log(to, from);
})

export default router;