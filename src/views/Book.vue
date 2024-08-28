<template>
    <div class="container">
        <nav aria-label="breadcrumb">
            <ol class="breadcrumb">
                <li class="breadcrumb-item">
                    <router-link to="/">Início</router-link>
                </li>
                <li class="breadcrumb-item">
                    <router-link to="/books">Livros</router-link>
                </li>
                <li class="breadcrumb-item active" aria-current="page">
                    {{ book.title }}
                </li>
            </ol>
        </nav>

        <div class="card mb-3">
            <div class="row g-0">
                <div class="col-md-4">
                    <img :src="book.image" class="img-fluid rounded-start" :alt="book.title" />
                </div>
                <div class="col-md-8">
                    <div class="card-body">
                        <h5 class="card-title">{{ book.title }}</h5>
                        <p class="card-text">{{ book.description }}</p>
                        <p class="card-text">
                            <small class="text-muted">Por {{ book.authors }}</small>
                        </p>

                        <div class="d-grid d-md-flex justify-content-md-start">
                            <button class="btn btn-primary me-md-2" type="button">
                                Download
                            </button>
                            <button class="btn btn-secondary" type="button">
                                Visualizar
                            </button>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
export default {
    name: "Book",
    data() {
        return {
            book: null,
        };
    },
    mounted() {
        this.fetchBook();
    },
    methods: {
        fetchBook() {
            const bookId = this.$route.params.id;

            this.$axios
                .get(`/books/${bookId}`)
                .then((response) => {
                    this.book = response.data;
                })
                .catch((error) => {
                    console.error("Error fetching book details:", error);
                });
        },
    },
};
</script>