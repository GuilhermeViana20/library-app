<template>
    <div class="container">
        <div class="mb-5">
            <nav aria-label="breadcrumb">
                <ol class="breadcrumb breadcrumb-chevron p-3 bg-body-tertiary rounded-3">
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

        <p class="d-inline-flex gap-1">
            <button
                class="btn btn-primary"
                type="button"
                data-bs-toggle="collapse"
                data-bs-target="#book"
                aria-expanded="false"
                aria-controls="book"
            >
                Cadastrar Livro
            </button>
            <button
                class="btn btn-secondary"
                type="button"
                data-bs-toggle="collapse"
                data-bs-target="#category"
                aria-expanded="false"
                aria-controls="category"
            >
                Cadastrar Categoria
            </button>
        </p>
        <div class="row">
            <div class="col-12">
                <div class="collapse multi-collapse" id="book" data-bs-parent=".row">
                    <div class="card card-body">
                        <FormBook ref="formBook" />
                    </div>
                </div>
            </div>
            <div class="col-12">
                <div class="collapse multi-collapse" id="category" data-bs-parent=".row">
                    <div class="card card-body">
                        <FormCategory @category-saved="refreshCategories" />
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
import FormBook from '@/components/FormBook.vue';
import FormCategory from '@/components/FormCategory.vue';

export default {
    components: {
        FormBook,
        FormCategory
    },
    methods: {
        refreshCategories() {
            this.$refs.formBook.listCategories();
        }
    }
}
</script>

<style></style>