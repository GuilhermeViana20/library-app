<template>
    <div class="container">
        <h2 class="mb-5">Resultados da busca por "{{ $route.query.q }}"</h2>

        <ListBooks :books="books" />
    </div>
</template>

<script>
import ListBooks from "@/components/ListBooks.vue";

export default {
    name: 'Search',
    components: {
        ListBooks,
    },
    data() {
        return {
            books: [],
            searchQuery: ''
        };
    },
    async created() {
        this.searchQuery = this.$route.query.q;

        await this.fetchSearchResults();
    },
    methods: {
        async fetchSearchResults() {
            try {
                const response = await this.$axios.get("/search", {
                    params: { q: this.searchQuery },
                });
                this.books = response.data;
            } catch (error) {
                console.error("Erro ao buscar livros:", error);
            }
        },
    },
};
</script>