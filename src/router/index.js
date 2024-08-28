import Vue from 'vue';
import Router from 'vue-router';

import Home from '@/views/Home.vue';
import Book from '@/views/Book.vue';
import Books from '@/views/Books.vue';
import BooksByCategory from '@/views/BooksByCategory.vue';
import Search from '@/views/Search.vue';
import Categories from '@/views/Categories.vue';

Vue.use(Router);

const routes = [
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
    }
];

const router = new Router({
    mode: 'history',
    routes,
});

export default router;