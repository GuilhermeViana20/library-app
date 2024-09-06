<template>
    <div class="my-3">
        <div v-for="(books, category) in books" :key="category">
            <h4 v-if="!hiddenTitle" class="mb-4">{{ category }}</h4>
            <div class="row">
                <div v-for="(book, index) in books" :key="index" class="col-sm-6 col-md-6 mb-4">
                    <div class="card" @click="goToBookDetail(book.id)" style="cursor: pointer;">
                        <div class="row">
                            <div class="col-md-4">
                                <img :src="book.image" class="img-fluid rounded-start" :alt="book.title" />
                            </div>
                            <div class="col-md-8">
                                <div class="card-body">
                                    <h5 class="card-title">{{ book.title }}</h5>
                                    <p class="card-text">{{ truncateDescription(book.description) }}</p>
                                    <p class="card-text"><small class="text-muted">por {{ book.authors }}</small></p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
export default {
    name: 'ListBooks',
    props: {
        books: {
            required: true,
        },
        hiddenTitle: {
            type: Boolean,
            default: false
        }
    },
    methods: {
        goToBookDetail(id) {
            this.$router.push(`/books/${id}`);
        },
        truncateDescription(description) {
            const maxLength = 100;
            if (description.length > maxLength) {
                return description.substring(0, maxLength) + '...';
            }
            return description;
        }
    }
};
</script>

<style scoped>
@media (min-width: 768px) {
    img {
        height: 240px;
    }
}

.card {
    transition: transform 0.3s ease;
}

.card:hover {
    transform: scale(1.02);
}
</style>