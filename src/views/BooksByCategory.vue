<template>
    <div class="container">
        <div class="mb-5">
            <nav aria-label="breadcrumb">
                <ol class="breadcrumb breadcrumb-chevron p-3 bg-dark rounded-3">
                    <li class="breadcrumb-item">
                        <router-link class="link-body-emphasis" to="/">
                            <svg style="margin-top: -3px;" xmlns="http://www.w3.org/2000/svg"
                                class="icon icon-tabler icon-tabler-home-2" width="20" height="20" viewBox="0 0 24 24"
                                stroke-width="1.5" stroke="#fff" fill="none" stroke-linecap="round"
                                stroke-linejoin="round">
                                <path stroke="none" d="M0 0h24v24H0z" fill="none" />
                                <path d="M5 12l-2 0l9 -9l9 9l-2 0" />
                                <path d="M5 12v7a2 2 0 0 0 2 2h10a2 2 0 0 0 2 -2v-7" />
                                <path d="M10 12h4v4h-4z" />
                            </svg>
                            <span class="visually-hidden">Início</span>
                        </router-link>
                    </li>
                    <li class="breadcrumb-item" aria-current="page">
                        <router-link class="link-body-emphasis" to="/books">
                            Livros
                        </router-link>
                    </li>
                    <li class="breadcrumb-item active" aria-current="page">
                        Categoria: {{ categoryName }}
                    </li>
                </ol>
            </nav>
        </div>

        
        <div v-if="books.length === 0" class="text-center">
            <h4>Não há livros para a categoria: {{ categoryName }}</h4>
        </div>

        <div v-else>
            <ListBooks :books="books" :hiddenTitle="true" />
        </div>
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