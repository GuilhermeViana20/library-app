<template>
    <div class="container">
        <nav aria-label="breadcrumb">
            <ol class="breadcrumb">
                <li class="breadcrumb-item"><a href="/">Início</a></li>
                <li class="breadcrumb-item active" aria-current="page">{{ this.$route.name }}</li>
            </ol>
        </nav>

        <ListBooks :books="books" />
    </div>
</template>

<script>
import ListBooks from '@/components/ListBooks.vue';

export default {
    name: 'Books',
    components: {
        ListBooks,
    },
    data() {
        return {
            books: []
        }
    },
    created() {
        this.listBooks();
    },
    methods: {
        async listBooks() {
            try {
                const response = await this.$axios.get('/books');
                this.books = response.data;
            } catch (error) {
                console.error('Erro ao buscar livros:', error);
            }
        }
    }
}
</script>