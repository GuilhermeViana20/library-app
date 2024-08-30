<template>
    <div class="container">
        <nav aria-label="breadcrumb">
            <ol class="breadcrumb">
                <li class="breadcrumb-item"><a href="/">Início</a></li>
                <li class="breadcrumb-item"><router-link to="/books">Livros</router-link></li>
                <li class="breadcrumb-item"><router-link :to="this.urlBook">{{ this.nameBook }}</router-link></li>
                <li class="breadcrumb-item active" aria-current="page">{{ this.$route.name }}</li>
            </ol>
        </nav>

        <div class="box">
            <div class="pdf-viewer-container">
                <iframe :src="pdfUrl" width="100%" height="100%" frameborder="0"></iframe>
            </div>
        </div>
    </div>
</template>

<script>
export default {
    data() {
        return {
            pdfUrl: null,
            nameBook: null,
            urlBook: null,
        };
    },
    mounted() {
        this.fetchPdf();
        this.urlBook = "/books/" + this.$route.params.id;
    },
    methods: {
        fetchPdf() {
            const bookId = this.$route.params.id;

            this.$axios
                .get(`/books/${bookId}`)
                .then((response) => {
                    const pdfBase64 = response.data.pdf;
                    this.pdfUrl = `data:application/pdf;base64,${pdfBase64}`;
                    this.nameBook = response.data.title;
                })
                .catch((error) => {
                    console.error("Error fetching PDF:", error);
                });
        },
    },
};
</script>

<style scoped>
.pdf-viewer-container {
    width: 100%;
    height: 100vh;
}

.box {
    background-color: rgb(44, 44, 44);
    padding: 10px;
    border-radius: 16px;
}
</style>
