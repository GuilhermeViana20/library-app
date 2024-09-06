<template>
    <div>
        <div v-if="categories.length === 0" class="d-flex align-items-center justify-content-center">
            <h5 class="pt-1">Nenhuma categoria encontrada. Por favor, cadastre uma nova categoria:</h5>
            <button class="btn btn-primary ms-3"
                data-bs-toggle="collapse"
                data-bs-target="#category"
                aria-expanded="false"
                aria-controls="category"
            >
                Cadastrar Categoria
            </button>
        </div>
        <div v-else>
            <div class="row g2">
                <div class="col-md">
                    <div class="form-floating mb-3">
                        <input v-model="book.title" type="text" class="form-control"
                            :class="{ 'is-invalid': isInvalid.title }" id="title" placeholder="" required>
                        <label for="title">Título</label>
                        <div v-if="isInvalid.title" class="invalid-feedback">
                            Por favor, insira um título.
                        </div>
                    </div>
                </div>
                <div class="col-md">
                    <div class="form-floating mb-3">
                        <input v-model="book.description" type="text" class="form-control" id="description" placeholder="">
                        <label for="description">Descrição</label>
                    </div>
                </div>
            </div>
            <div class="row g2">
                <div class="col-md">
                    <div class="form-floating mb-3">
                        <input v-model="book.image" type="text" class="form-control"
                            :class="{ 'is-invalid': isInvalid.image }" id="image" placeholder="" required>
                        <label for="image">Imagem</label>
                        <div v-if="isInvalid.image" class="invalid-feedback">
                            Por favor, insira uma URL de imagem.
                        </div>
                    </div>
                </div>
                <div class="col-md">
                    <div class="mb-3">
                        <input ref="pdfFile" class="form-control form-control-lg" id="pdf" type="file"
                            @change="handleFileUpload" :class="{ 'is-invalid': isInvalid.pdf }" required />
                        <div v-if="isInvalid.pdf" class="invalid-feedback">
                            Por favor, selecione um arquivo PDF.
                        </div>
                    </div>
                </div>
            </div>
            <div class="row mb-3 g2">
                <div class="col-md">
                    <div class="form-floating mb-3">
                        <input v-model="book.authors" type="text" class="form-control"
                            :class="{ 'is-invalid': isInvalid.authors }" id="authors" placeholder="">
                        <label for="authors">Autores</label>
                        <div v-if="isInvalid.authors" class="invalid-feedback">
                            Por favor, insira o(s) autor(es).
                        </div>
                    </div>
                </div>
                <div class="col-md">
                    <div class="form-floating mb-3">
                        <select class="form-select" id="category" v-model="selectedCategory"
                            :class="{ 'is-invalid': isInvalid.category }">
                            <option value="" disabled>Sem categoria</option>
                            <option v-for="category in categories" :key="category.id" :value="category.id">
                                {{ category.name }}
                            </option>
                        </select>
                        <label for="category">Selecione a categoria</label>
                        <div v-if="isInvalid.category" class="invalid-feedback">
                            Por favor, selecione uma categoria.
                        </div>
                    </div>
                </div>
            </div>

            <button @click="validateAndSave" class="btn btn-primary w-100">Salvar</button>
        </div>
    </div>
</template>

<script>
export default {
    data() {
        return {
            selectedFiles: undefined,
            selectedCategory: '',
            categories: [],
            book: {
                title: '',
                description: '',
                image: '',
                pdf: '',
                authors: '',
                category_id: ''
            },
            isInvalid: {
                title: false,
                image: false,
                authors: false,
                category: false,
                pdf: false,
            },
        };
    },
    created() {
        this.listCategories();
    },
    methods: {
        validateAndSave() {
            this.isInvalid.title = !this.book.title;
            this.isInvalid.image = !this.book.image;
            this.isInvalid.authors = !this.book.authors;
            this.isInvalid.category = !this.selectedCategory;
            this.isInvalid.pdf = !this.book.pdf;

            if (!this.isInvalid.title && !this.isInvalid.image && !this.isInvalid.authors && !this.isInvalid.category && !this.isInvalid.pdf) {
                this.saveBook();
            }
        },
        async saveBook() {
            try {
                this.book.category_id = this.selectedCategory;
                await this.$axios.post('/books', this.book);
                this.$toast.success("Livro salvo com sucesso!");

                this.clearFields();
            } catch (error) {
                this.$toast.error("Erro ao salvar o livro!");
            }
        },
        async listCategories() {
            try {
                const response = await this.$axios.get('/categories');
                this.categories = response.data;
            } catch (error) {
                console.error('Erro ao buscar categorias:', error);
            }
        },
        handleFileUpload(event) {
            const file = event.target.files[0];
            if (file) {
                const reader = new FileReader();
                reader.onloadend = () => {
                    this.book.pdf = reader.result.split(',')[1];
                };
                reader.readAsDataURL(file);
            } else {
                console.log('No file selected');
                this.isInvalid.pdf = true;
            }
        },
        clearFields() {
            this.category.title = '';
            this.category.description = '';
            this.category.image = '';
            this.category.pdf = '';
            this.category.authors = '';
            this.category.category_id = '';
        },
    }
}
</script>

<style scoped>
.form-control {
    line-height: 2.5;
}

.form-control-lg {
    font-size: 1rem;
}
</style>
