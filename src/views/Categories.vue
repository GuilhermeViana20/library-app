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
                    <li class="breadcrumb-item active" aria-current="page">
                        {{ this.$route.name }}
                    </li>
                </ol>
            </nav>
        </div>

        <div v-if="loading" class="text-center justify-content-center">
            <div class="spinner-border" role="status">
                <span class="visually-hidden">Loading...</span>
            </div>
        </div>

        <div v-else>
            <div v-if="categories.length === 0" class="text-center">
                <h4>Não há categorias na base de dados</h4>
            </div>

            <div v-else>
                <ListCategories :categories="categories" />
            </div>
        </div>
    </div>
</template>

<script>
import ListCategories from '@/components/ListCategories.vue';

export default {
    name: 'Categories',
    components: {
        ListCategories,
    },
    data() {
        return {
            categories: [],
            loading: true,
        }
    },
    created() {
        this.listCategories();
    },
    methods: {
        async listCategories() {
            try {
                const response = await this.$axios.get('/categories');
                this.categories = response.data;
                this.loading = false;
            } catch (error) {
                console.error('Erro ao buscar categorias:', error);
                this.loading = false;
            }
        }
    }
}
</script>