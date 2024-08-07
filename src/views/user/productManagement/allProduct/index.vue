<template>
    <div class="flex mt-20 mx-5 space-x-5">
        <div class="w-1/5 ml-4 mr-4">
            <MenuProductManagement />
        </div>
        <div class="w-4/5 container border-l bg-white mx-auto p-10 rounded-md shadow-lg mt-6">
            <div class="relative w-full max-w-md mx-auto">
                <h1 class="text-2xl font-bold text-center text-gray-800">
                    All Products
                </h1>
                <div class="border-b-2 border-zinc-400 mt-2 mb-8"></div>
            </div>
            <div class="product-list grid grid-cols-4 gap-4">
                <div v-for="(product, index) in paginatedProducts" :key="index"
                    class="product-item bg-white shadow-lg rounded-lg">
                    <a-card hoverable>
                        <template #cover>
                            <img src="../../../../assets/product.jpg" alt="Product" />
                        </template>
                        <a-card-meta :title="product.title">
                            <template #avatar>
                                <a-avatar :src="product.avatar" />
                            </template>
                        </a-card-meta>
                    </a-card>
                </div>
            </div>
            <button @click="prevSlide"
                class="absolute left-1/4 top-3/4 transform -translate-y-1/2 bg-slate-300 bg-opacity-50 p-2 rounded-full">
                <img src="../../../../assets/icon/prev-arrow-slide.svg" alt="Previous" class="w-6 h-6" />
            </button>
            <button @click="nextSlide"
                class="absolute right-12 top-3/4 transform -translate-y-1/2 bg-slate-300 bg-opacity-50 p-2 rounded-full">
                <img src="../../../../assets/icon/next-arrow-slide.svg" alt="Next" class="w-6 h-6" />
            </button>
            <div class="flex justify-center mt-4">
                <a-pagination v-model:current="currentPage" :total="totalProducts" :pageSize="pageSize * 2" />
            </div>
        </div>
    </div>
</template>

<script setup>
import MenuProductManagement from '../../../../components/MenuProductManagement/index.vue';
import { ref, computed } from 'vue';

const products = ref([
    { title: 'Demo Product', avatar: 'https://joeschmoe.io/api/v1/random' },
    { title: 'Product 2', avatar: 'https://joeschmoe.io/api/v1/random' },
    { title: 'Product 3', avatar: 'https://joeschmoe.io/api/v1/random' },
    { title: 'Product 4', avatar: 'https://joeschmoe.io/api/v1/random' },
    { title: 'Product 5', avatar: 'https://joeschmoe.io/api/v1/random' },
    { title: 'Product 6', avatar: 'https://joeschmoe.io/api/v1/random' },
    { title: 'Product 7', avatar: 'https://joeschmoe.io/api/v1/random' },
    { title: 'Product 8', avatar: 'https://joeschmoe.io/api/v1/random' },
    { title: 'Product 9', avatar: 'https://joeschmoe.io/api/v1/random' },
]);

const currentPage = ref(1);
const pageSize = 4;
const totalProducts = products.value.length;

const paginatedProducts = computed(() => {
    const start = (currentPage.value - 1) * pageSize * 2;
    const end = start + pageSize * 2;
    return products.value.slice(start, end);
});

const prevSlide = () => {
    if (currentPage.value > 1) {
        currentPage.value--;
    }
};

const nextSlide = () => {
    if (currentPage.value < Math.ceil(totalProducts / (pageSize * 2))) {
        currentPage.value++;
    }
};
</script>

<style scoped>
.product-list {
    display: grid;
    grid-template-columns: repeat(4, 1fr);
    gap: 2rem;
}
</style>
