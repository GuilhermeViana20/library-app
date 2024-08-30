<template>
    <nav class="navbar navbar-expand-md border-bottom navbar-dark fixed-top bg-dark">
        <div class="container">
            <div class="me-4">
                <router-link class="nav-link" to="/">
                    <img height="40" src="@/assets/logo.png" alt="" />
                </router-link>
            </div>
            <button class="navbar-toggler collapsed" type="button" data-bs-toggle="collapse"
                data-bs-target="#navbarCollapse" aria-controls="navbarCollapse" aria-expanded="false"
                aria-label="Toggle navigation">
                <span class="navbar-toggler-icon"></span>
            </button>
            <div class="navbar-collapse collapse" id="navbarCollapse" style="">
                <ul class="navbar-nav me-auto mb-2 mb-md-0">
                    <li class="nav-item">
                        <router-link class="nav-link" to="/">
                            Início
                        </router-link>
                    </li>
                    <li class="nav-item">
                        <router-link class="nav-link" to="/books">
                            Livros
                        </router-link>
                    </li>
                    <li class="nav-item">
                        <router-link class="nav-link" to="/categories">
                            Categorias
                        </router-link>
                    </li>
                    <li class="nav-item">
                        <router-link class="nav-link" to="/registrations">
                            Cadastros
                        </router-link>
                    </li>
                </ul>
                <form @submit.prevent="search" class="d-flex" role="search">
                    <input v-model="query" class="form-control me-2" type="search" placeholder="Digite aqui..."
                        aria-label="Search" />
                    <button class="btn btn-outline-primary" type="submit">
                        Pesquisar
                    </button>
                </form>
            </div>
        </div>
    </nav>
</template>

<script>
export default {
    name: "NavbarComponent",
    data() {
        return {
            query: "",
        };
    },
    methods: {
        search() {
            if (this.query.trim()) {
                this.$router.push({ path: "/search", query: { q: this.query } });
            }
        },
    },
};
</script>