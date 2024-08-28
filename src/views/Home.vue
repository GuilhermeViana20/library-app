<template>
    <div class="container">
        <ListCategories :categories="categories" />

        <ListBooks :books="books" />
    </div>
</template>

<script>
import ListCategories from '@/components/ListCategories.vue';
import ListBooks from '@/components/ListBooks.vue';

export default {
    name: 'HomeView',
    components: {
        ListCategories,
        ListBooks
    },
    data() {
        return {
            categories: [],
            books: []
        };
    },
    created() {
        this.ListCategories();
        this.listBooks();
    },
    methods: {
        async ListCategories() {
            try {
                const response = await this.$axios.get('/categories?limit=8');
                this.categories = response.data;
            } catch (error) {
                console.error('Erro ao buscar categorias', error);
            }
        },
        async listBooks() {
            try {
                const response = await this.$axios.get('/books');
                this.books = response.data;
            } catch (error) {
                console.error('Erro ao buscar livros:', error);
            }
        }
    }
};
</script>