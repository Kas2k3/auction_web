<template>
    <div v-if="isVisible" class="fixed inset-0 flex items-center justify-center bg-black bg-opacity-50"
        @click.self="closeModal">
        <div class="modal-content relative bg-white p-6 rounded-lg w-full max-w-screen-lg mx-4 mt-28">
            <button @click="closeModal" class="absolute top-4 right-4">
                <img src="../../../../assets/icon/cancel.svg" alt="Close" class="w-6 h-6" />
            </button>
            <div class="flex">
                <div class="w-1/2 p-4">
                    <img src="../../../../assets/images/product.jpg" alt="Session Image" class="modal-image mb-4" />

                </div>
                <div class="w-1/2 p-4 border-l border-gray-300">
                    <h2 class="text-2xl font-bold mb-4">{{ session.title }}</h2>
                    <p class="text-gray-700 mb-2"><strong>Description:</strong> {{ session.description }}</p>
                    <p class="text-gray-700 mb-2"><strong>Start Bid:</strong> {{ session.startBid }}</p>
                    <p class="text-gray-700 mb-2"><strong>Price per Step:</strong> {{ session.pricePerStep }}</p>
                    <p class="text-gray-700 mb-2"><strong>Start Time:</strong> {{ session.startTime }}</p>
                    <p class="text-gray-700 mb-2"><strong>End Time:</strong> {{ session.endTime }}</p>
                </div>
            </div>
        </div>
    </div>
</template>

<script setup>
const props = defineProps({
    isVisible: Boolean,
    session: Object,
});

const emit = defineEmits(['close']);

const closeModal = () => {
    emit('close');
};
</script>

<style scoped>
.modal-content {
    max-height: 90vh;
    overflow-y: auto;
    display: flex;
}

.modal-image {
    max-width: 100%;
    height: auto;
    max-height: 300px;
}
</style>
