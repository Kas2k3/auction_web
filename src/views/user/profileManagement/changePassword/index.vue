<template>
    <div class="flex mt-8 mx-5 space-x-5">
        <div class="w-1/5 ml-4 mr-4">
            <Profile />
        </div>
        <div class="w-4/5 container border-l mx-auto p-10 mt-6">
            <div class="container border-l bg-white mx-auto p-10 rounded-md shadow-lg mt-6">
                <div class="relative w-full max-w-md mx-auto">
                    <h1 class="text-2xl font-bold text-center text-gray-800">
                        Change Password
                    </h1>
                    <div class="border-b-2 border-zinc-400 mt-2 mb-8"></div>
                </div>
                <div class="flex items-center justify-center text-center">
                    <form @submit.prevent="handleChangePassword">
                        <div class="mb-5 relative">
                            <label for="currentPassword" class="block text-gray-700 mb-2">Current Password</label>
                            <div class="relative">
                                <input :type="currentPasswordType" id="currentPassword" v-model="currentPassword"
                                    class="form-input w-full border border-gray-300 rounded-md px-2 py-2 pr-10 focus:outline-none focus:ring-2 focus:ring-blue-600" />
                                <button type="button" @click="toggleCurrentPasswordVisibility"
                                    class="absolute inset-y-0 right-2 flex items-center">
                                    <img src="../../../../assets/icon/eye-hide.svg" alt="Toggle password visibility"
                                        class="w-4 h-4 cursor-pointer" />
                                </button>
                            </div>
                            <span v-if="validation.currentPassword" class="text-red-500">{{ validation.currentPassword
                                }}</span>
                        </div>

                        <div class="mb-4 relative">
                            <label for="newPassword" class="block text-gray-700 mb-2">New Password</label>
                            <div class="relative">
                                <input :type="newPasswordType" id="newPassword" v-model="newPassword"
                                    class="form-input w-full border border-gray-300 rounded-md px-2 py-2 pr-10 focus:outline-none focus:ring-2 focus:ring-blue-600" />
                                <button type="button" @click="toggleNewPasswordVisibility"
                                    class="absolute inset-y-0 right-2 flex items-center">
                                    <img src="../../../../assets/icon/eye-hide.svg" alt="Toggle password visibility"
                                        class="w-4 h-4 cursor-pointer" />
                                </button>
                            </div>
                            <span v-if="validation.newPassword" class="text-red-500">{{ validation.newPassword }}</span>
                        </div>

                        <button type="submit"
                            class="btn btn-primary w-full bg-teal-400 hover:bg-green-500 text-white font-bold py-2 px-4 rounded">
                            Change Password
                        </button>
                    </form>
                </div>
            </div>
        </div>
    </div>
</template>

<script setup>
import { ref, reactive, computed } from 'vue';
import { useRouter } from 'vue-router';
import Profile from '../../../../components/Profile/index.vue';
// import { useAuthStore } from '../../../stores/auth/auth-store';

const currentPassword = ref('');
const newPassword = ref('');
const validation = reactive({ currentPassword: null, newPassword: null });
const router = useRouter();
// const authStore = useAuthStore();

const isCurrentPasswordVisible = ref(false);
const isNewPasswordVisible = ref(false);
const currentPasswordType = computed(() => isCurrentPasswordVisible.value ? 'text' : 'password');
const newPasswordType = computed(() => isNewPasswordVisible.value ? 'text' : 'password');

function validatePassword(password) {
    return password.length >= 4;
}

function handleChangePassword() {
    let isValid = true;

    if (!currentPassword.value) {
        validation.currentPassword = 'Current password is required.';
        isValid = false;
    } else {
        validation.currentPassword = null;
    }

    if (!newPassword.value) {
        validation.newPassword = 'New password is required.';
        isValid = false;
    } else if (!validatePassword(newPassword.value)) {
        validation.newPassword = 'New password must be at least 4 characters long.';
        isValid = false;
    } else {
        validation.newPassword = null;
    }

    if (!isValid) return;


    // authStore.changePassword(currentPassword.value, newPassword.value)
    //     .then(() => {
    //         router.push('/home/default');
    //     })
    //     .catch(error => {
    //         console.error('Error changing password:', error);
    //     });
}

function toggleCurrentPasswordVisibility() {
    isCurrentPasswordVisible.value = !isCurrentPasswordVisible.value;
}

function toggleNewPasswordVisibility() {
    isNewPasswordVisible.value = !isNewPasswordVisible.value;
}

</script>
