<template>
    <div>
        <div class="row">
            <div v-for="(category, index) in categories" :key="index" class="col-sm-3 col-md-2">
                <div @click="goToCategoryDetail(category.id)" class="box bg-dark text-center mb-4">
                    <img :src="category.image ? category.image : 'https://via.placeholder.com/150/CCCCCC/FFFFFF?text=No+Image'"
                        alt="Category Image" class="img-fluid rounded-circle">
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
        loading: {
            type: Boolean,
            default: false
        }
    },
    methods: {
        goToCategoryDetail(id) {
            this.$router.push(`/categories/${id}`);
        },
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