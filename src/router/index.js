import Vue from 'vue';
import Router from 'vue-router';

import Home from '@/views/Home.vue';
import Book from '@/views/Book.vue';
import Books from '@/views/Books.vue';
import BooksByCategory from '@/views/BooksByCategory.vue';
import Search from '@/views/Search.vue';
import Categories from '@/views/Categories.vue';
import ViewBook from '@/views/ViewBook.vue';
import Registrations from '@/views/Registrations.vue';
import Login from '@/views/Auth/Login.vue';
import Register from '@/views/Auth/Register.vue';

Vue.use(Router);

const routes = [
    {
        path: '/login',
        name: 'Entrar',
        component: Login,
        meta: { layout: 'auth' }
    },
    {
        path: '/register',
        name: 'Cadastrar',
        component: Register,
        meta: { layout: 'auth' }
    },
    {
        path: '/',
        name: 'Home',
        component: Home,
        meta: { requiresAuth: true }
    },
    {
        path: '/books/:id',
        name: 'Book',
        component: Book,
        meta: { requiresAuth: true }
    },
    {
        path: '/books',
        name: 'Livros',
        component: Books,
        meta: { requiresAuth: true }
    },
    {
        path: '/categories/:id',
        name: 'BooksByCategory',
        component: BooksByCategory,
        meta: { requiresAuth: true }
    },
    {
        path: '/search',
        name: 'Search',
        component: Search,
        meta: { requiresAuth: true }
    },
    {
        path: '/categories',
        name: 'Categorias',
        component: Categories,
        meta: { requiresAuth: true }
    },
    {
        path: '/books/:id/view',
        name: 'Visualizador de PDF',
        component: ViewBook,
        meta: { requiresAuth: true }
    },
    {
        path: '/registrations',
        name: 'Cadastros',
        component: Registrations,
        meta: { requiresAuth: true, requiresAdmin: true }
    }
];

const router = new Router({
    mode: 'history',
    routes,
});

router.beforeEach((to, from, next) => {
    const isAuthenticated = !!localStorage.getItem('access_token');
    const user = JSON.parse(atob(localStorage.getItem('user'))); // Recupera o usuário e decodifica

    if (to.matched.some(record => record.meta.requiresAuth)) {
        if (!isAuthenticated) {
            next({ path: '/login' });
        } else if (to.matched.some(record => record.meta.requiresAdmin)) {
            // Verifica se o usuário é admin
            if (user && user.is_admin) {
                next();
            } else {
                next({ path: '/' }); // Redireciona para Home se não for admin
            }
        } else {
            next();
        }
    } else {
        next();
    }
});

export default router;