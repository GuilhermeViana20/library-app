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
                    <li class="breadcrumb-item" aria-current="page">
                        <router-link class="link-body-emphasis" to="/books">
                            Livros
                        </router-link>
                    </li>
                    <li class="breadcrumb-item active" aria-current="page">
                        {{ book.title }}
                    </li>
                </ol>
            </nav>
        </div>

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
                            <button class="btn btn-primary me-md-2" @click="downloadBook" type="button">
                                Download
                            </button>
                            <button class="btn btn-secondary" @click="viewBook" type="button">
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
            book: [],
        };
    },
    async created() {
        await this.fetchBook();
    },
    methods: {
        async fetchBook() {
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
        viewBook() {
            this.$router.push({ name: 'Visualizador de PDF', params: { id: this.book.id } });
        },
        downloadBook() {
            const pdfBase64 = this.book.pdf;
            const link = document.createElement('a');
            link.href = `data:application/pdf;base64,${pdfBase64}`;
            link.download = `${this.book.title}.pdf`;
            link.click();
        }
    },
};
</script>