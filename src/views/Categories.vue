<template>
    <div class="container">
        <nav aria-label="breadcrumb">
            <ol class="breadcrumb">
                <li class="breadcrumb-item"><router-link to="/">Início</router-link></li>
                <li class="breadcrumb-item active" aria-current="page">{{ this.$route.name }}</li>
            </ol>
        </nav>

        <ListCategories :categories="categories" />
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
            categories: []
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
            } catch (error) {
                console.error('Erro ao buscar categorias:', error);
            }
        }
    }
}
</script>