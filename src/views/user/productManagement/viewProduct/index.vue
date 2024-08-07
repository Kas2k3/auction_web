<template>
    <div class="flex mt-20 mx-5 space-x-5">
        <div class=" container border-l bg-white mx-auto p-10 rounded-md shadow-lg mt-6">
            <div class=" flex absolute top-32 right-12 m-4 space-x-2">
                <button @click="editProduct"
                    class="flex justify-center items-center w-12 bg-teal-300 text-black hover:bg-teal-400 outline-gray-600 shadow-lg font-bold py-2 rounded">
                    <img src="../../../../assets/icon/pencil2.svg" alt="Cancel" class="w-6 h-6" />
                </button>
                <button @click="goBack"
                    class="flex justify-center items-center w-12 bg-red-300 text-black hover:bg-red-400 outline-gray-600 shadow-lg font-bold py-2 rounded">
                    <img src="../../../../assets/icon/cancel.svg" alt="Cancel" class="w-6 h-6" />
                </button>
            </div>
            <div class="relative w-full max-w-md mx-auto">
                <h1 class="text-2xl font-bold text-center text-gray-800">{{ }}</h1>
                <div class="border-b-2 border-zinc-400 mt-2 mb-8"></div>
            </div>

            <form @submit.prevent="submitAuction" class=" flex space-x-8">
                <div class="flex-1">
                    <img src="../../../../assets/product.jpg" alt="Session" class="h-100 w-100" />
                </div>
                <div class="flex-1">
                    <div class="mb-5">
                        <label for="description" class="block text-gray-700 mb-3 text-lg font-bold">Category</label>
                        <p id="description" class="text-gray-800" v-html="auction.product.category"></p>
                    </div>
                    <div class="mb-5">
                        <label for="description" class="block text-gray-700 mb-3 text-lg font-bold">Description</label>
                        <p id="description" class="text-gray-800" v-html="auction.description"></p>
                    </div>
                </div>
            </form>
        </div>
    </div>
    <TheChevron />
</template>

<script setup>
import TheChevron from '../../../../components/Chevron/index.vue';
import { ref } from 'vue';

const auction = ref({
    product: {
        name: '',
        category: '',
        image: ''
    },
    description: ''
});

const editProduct = () => {
    router.push('/editProduct/:id');
};


const goBack = () => {
    window.history.back();
};
</script>
