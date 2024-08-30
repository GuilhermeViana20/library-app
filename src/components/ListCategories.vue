<template>
    <div>
        <div class="row">
            <div v-for="(category, index) in categories" :key="index" class="category-box">
                <div @click="goToCategoryDetail(category.id)" class="box text-center mb-4">
                    <img :src="category.image" alt="Category Image" class="img-fluid rounded-circle">
                    <h6 class="fw-normal mt-2">{{ category.name }}</h6>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
export default {
    name: 'ListCategories',
    props: {
        categories: {
            type: Array,
            required: true,
        },
    },
    data() {
        return {
            chunkSize: window.innerWidth < 1024 ? 3 : 8,
        };
    },
    computed: {
        chunkedCategories() {
            let result = [];
            for (let i = 0; i < this.categories.length; i += this.chunkSize) {
                result.push(this.categories.slice(i, i + this.chunkSize));
            }
            return result;
        },
    },
    methods: {
        goToCategoryDetail(id) {
            this.$router.push(`/categories/${id}`);
        },
        updateChunkSize() {
            this.chunkSize = window.innerWidth < 1024 ? 3 : 8;
        },
    },
    mounted() {
        window.addEventListener('resize', this.updateChunkSize);
    },
    beforeDestroy() {
        window.removeEventListener('resize', this.updateChunkSize);
    },
};
</script>

<style scoped>
.row {
    display: flex;
    flex-wrap: wrap;
}

.category-box {
    width: 12.5%;
    display: flex;
    justify-content: center;
}

img {
    height: 70px;
    width: 70px;
    object-fit: cover;
    border-radius: 50%;
}

.box {
    transition: transform 0.3s ease;
    padding: 10px 0;
    border-radius: 10px;
    width: 100%;
}

.box:hover {
    transform: scale(1.02);
    box-shadow: 0 4px 8px rgba(0, 0, 0, 0.2);
    cursor: pointer;
}
</style>