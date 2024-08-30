<template>
    <div>
        <div class="row g2">
            <div class="col-md">
                <div class="form-floating mb-3">
                    <input v-model="category.name" type="text" class="form-control" :class="{'is-invalid': isInvalid.name}" id="name" placeholder="" required>
                    <label for="name">Título</label>
                    <div v-if="isInvalid.name" class="invalid-feedback">
                        Por favor, insira um título.
                    </div>
                </div>
            </div>
            <div class="col-md">
                <div class="form-floating mb-3">
                    <input v-model="category.description" type="email" class="form-control" id="description" placeholder="">
                    <label for="description">Descrição</label>
                </div>
            </div>
        </div>

        <div class="row g2">
            <div class="col-md">
                <div class="form-floating mb-3">
                    <input v-model="category.image" type="text" class="form-control" :class="{'is-invalid': isInvalid.image}" id="image" placeholder="" required>
                    <label for="title">Imagem</label>
                    <div v-if="isInvalid.image" class="invalid-feedback">
                        Por favor, insira uma URL de imagem.
                    </div>
                </div>
            </div>
        </div>

        <button @click="validateAndSave" class="btn btn-primary w-100">Salvar</button>
    </div>
</template>

<script>
export default {
    data() {
        return {
            inputInvalid: false,
            category: {
                name: '',
                description: '',
                image: '',
            },
            isInvalid: {
                name: false,
                image: false,
            },
        };
    },
    methods: {
        validateAndSave() {
            this.isInvalid.name = !this.category.name;
            this.isInvalid.image = !this.category.image;

            if (!this.isInvalid.name && !this.isInvalid.image) {
                this.saveCategory();
            }
        },
        async saveCategory() {
            try {
                await this.$axios.post('/categories', this.category);
                this.$toast.success("Categoria salva com sucesso!");
                
                this.clearFields();
            } catch (error) {
                this.$toast.danger("Erro ao salvar a categoria!");
            }
        },
        clearFields() {
            this.category.name = '';
            this.category.description = '';
            this.category.image = '';
        },
    }
}
</script>