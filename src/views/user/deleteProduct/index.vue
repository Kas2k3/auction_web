<template>
    <div class="flex mt-20 mx-5 space-x-5">
        <div class="w-1/5 ml-4 mr-4">
            <MenuProductManagement />
        </div>
        <div class="w-4/5 container border-l bg-zinc-200 mx-auto p-10 rounded-md shadow-lg mt-6">
            <div class="relative w-full max-w-md mx-auto">
                <h1 class="text-2xl font-bold text-center text-gray-800">
                    Delete Product
                </h1>
                <div class="border-b-2 border-zinc-400 mt-2 mb-8"></div>
            </div>

        </div>
    </div>

    <TheChevron />
</template>

<script setup>
import MenuProductManagement from '../../../components/MenuProductManagement/index.vue';
import TheChevron from '../../../components/Chevron/index.vue';
import { ref } from 'vue';
import baseService from '../../../services/base-service';

const product = ref({
    name: '',
    category: '',
    description: '',
    image: ''
});

const imagePreview = ref(null);

const categories = ['Art', 'License Plate', 'Vehicles', 'Antiques', 'Other'];

const submitProduct = () => {
    baseService.post('/products', product.value)
        .then(() => {
            alert('Product added successfully!');
            product.value = {
                name: '',
                category: '',
                description: '',
                image: ''
            };
            imagePreview.value = null;
        });
};

const handleImageUpload = (event) => {
    const file = event.target.files[0];
    if (file) {
        const formData = new FormData();
        formData.append('file', file);

        baseService.post('/products/upload-image', formData)
            .then(response => {
                imagePreview.value = URL.createObjectURL(file);
                product.value.image = response.data;
            })
            .catch(error => {
                console.error('Error uploading image:', error);
            });
    }
};
</script>
