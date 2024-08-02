<template>
    <div class="mt-20 flex ">
        <div class="w-1/2 bg-cover bg-center bg-fixed mr-10">
            <img style="height: 80%;"
                src="https://i.pinimg.com/originals/ea/cc/24/eacc24d2cbd4335d7941ecb996974106.gif"></img>
            <h1 class="flex items-center justify-center text-2xl font-bold mb-4">TientrivutruNTM à =))
            </h1>
        </div>
        <div class="flex flex-col w1/2 flex items-center justify-center">


            <router-link to="/NTM" type="submit"
                class="flex items-center justify-center w-full bg-blue-500 hover:bg-blue-600 text-white font-bold py-2 px-4 rounded mb-4">
                Gật gật :D
            </router-link>

            <br />
            <br />
            <router-link to="/NTM/tmii2"
                class="flex items-center space-x-2 -ml-16 mb-4 text-gray-600 hover:text-gray-900">
                <img src="../../assets/icon/auth-back.svg" alt="Back" class="w-6 h-6" />
                <span>Uebenhattrendoi </span>
            </router-link>
        </div>
    </div>

    <!-- <h2>
            Please provide your email, we will send you an OTP verification code:
        </h2>

        <form @submit.prevent="onSubmit">
            <div class="mt-6 mb-6">
                <label for="username" class="block text-gray-700">Email</label>
                <input type="text" id="username" v-model="username"
                    class="form-input w-full border border-gray-300 rounded-md px-2 py-2 focus:outline-none focus:ring-2 focus:ring-blue-600" />
            </div>

            <router-link to="/tmii1/tmii2" type="submit"
                class="flex items-center justify-center w-full bg-green-600 hover:bg-green-700 text-white font-bold py-2 px-4 rounded">
                Next
            </router-link>
        </form> -->
</template>
