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
    },
    {
        path: '/books/:id',
        name: 'Book',
        component: Book
    },
    {
        path: '/books',
        name: 'Livros',
        component: Books
    },
    {
        path: '/categories/:id',
        name: 'BooksByCategory',
        component: BooksByCategory
    },
    {
        path: '/search',
        name: 'Search',
        component: Search
    },
    {
        path: '/categories',
        name: 'Categorias',
        component: Categories
    },
    {
        path: '/books/:id/view',
        name: 'Visualizador de PDF',
        component: ViewBook,
    },
    {
        path: '/registrations',
        name: 'Cadastros',
        component: Registrations
    }
];

const router = new Router({
    mode: 'history',
    routes,
});

export default router;