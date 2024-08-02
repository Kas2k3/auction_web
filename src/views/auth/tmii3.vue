<template>
    <div class="mt-20 flex ">
        <div class="w-1/2 bg-cover bg-center bg-fixed mr-10">
            <img style="height: 80%;"
                src="https://i.pinimg.com/564x/54/35/d2/5435d2879fabf7b79571bb45df6ec7bf.jpg"></img>
            <h1 class="flex items-center justify-center text-2xl font-bold mb-4">Tại cậu ấm áp quá đấy
            </h1>
            <h3 class="flex items-center justify-center text-sm font-bold  mb-4">Giờ thì cảm lạnh r, bỏ khăn nhé ^^
            </h3>
        </div>
        <div class="flex flex-col w1/2 flex items-center justify-center">


            <router-link to="/NTM/tmii13" type="submit"
                class="flex items-center justify-center w-full bg-blue-500 hover:bg-blue-600 text-white font-bold py-2 px-4 rounded mb-4">
                Ứ ừ ư, đeo tiếp đi
            </router-link>
            <router-link to="/NTM/tmii14" type="submit"
                class="flex items-center justify-center w-full bg-blue-500 hover:bg-blue-600 text-white font-bold py-2 px-4 rounded mb-4">
                Không có mồm à mà cầm biển OK
            </router-link>
            <router-link to="/NTM/tmii15" type="submit"
                class="flex items-center justify-center w-full bg-blue-500 hover:bg-blue-600 text-white font-bold py-2 px-4 rounded mb-4">
                Bcuoi v
            </router-link>
            <router-link to="/NTM/tmii16" type="submit"
                class="flex items-center justify-center w-full bg-blue-500 hover:bg-blue-600 text-white font-bold py-2 px-4 rounded mb-4">
                Hài skeleton à
            </router-link>
            <router-link to="/NTM/tmii17" type="submit"
                class="flex items-center justify-center w-full bg-blue-500 hover:bg-blue-00 text-white font-bold py-2 px-4 rounded mb-4">
                Nói gì đi
            </router-link>

            <br />
            <br />
            <router-link to="/NTM/tmii1"
                class="flex items-center space-x-2 -ml-16 mb-4 text-gray-600 hover:text-gray-900">
                <img src="../../assets/icon/auth-back.svg" alt="Back" class="w-6 h-6" />
                <span>Cho cậu chọn lại nee </span>
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
