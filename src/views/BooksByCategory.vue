<template>
    <div class="container">
        <div class="bg-">
            <nav aria-label="breadcrumb">
                <ol class="breadcrumb">
                    <li class="breadcrumb-item"><router-link to="/">Início</router-link></li>
                    <li class="breadcrumb-item"><router-link to="/books">Livros</router-link></li>
                    <li class="breadcrumb-item active" aria-current="page">{{ categoryName }}</li>
                </ol>
            </nav>
        </div>

        <ListBooks :books="books" />
    </div>
</template>

<script>
import ListBooks from '@/components/ListBooks.vue';

export default {
    data() {
        return {
            books: [],
            categoryName: 'Livros'
        };
    },
    components: {
        ListBooks
    },
    async created() {
        console.log(this.$route)

        await this.fetchCategory();
        await this.fetchBooksByCategory();
    },
    methods: {
        async fetchCategory() {
            try {
                const categoryId = this.$route.params.id;
                const response = await this.$axios.get(`/categories/${categoryId}`);
                this.categoryName = response.data.name;
            } catch (error) {
                console.error('Erro ao buscar categoria:', error);
            }
        },
        async fetchBooksByCategory() {
            try {
                const categoryId = this.$route.params.id;
                const response = await this.$axios.get(`/categories/${categoryId}/books`);
                this.books = response.data;
            } catch (error) {
                console.error('Erro ao buscar livros:', error);
            }
        }
    }
};
</script>