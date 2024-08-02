<template>
    <div class="mt-20 flex">
        <div class="w-1/2 bg-cover bg-center bg-fixed">
            <img style="height: 80%;"
                src="https://scontent.fhan2-5.fna.fbcdn.net/v/t1.18169-9/24059201_2183309631694535_209216005089080199_n.png?_nc_cat=107&ccb=1-7&_nc_sid=53a332&_nc_eui2=AeEiiCZEjKTLYFqkFZvsFxaVHv9HecsEYmMe_0d5ywRiY65-_DGf4DoZitV0bcYDm4j13O0M5MdPa1s3sUFdeN8q&_nc_ohc=CeSlbREB9GQQ7kNvgE6u1VW&_nc_ht=scontent.fhan2-5.fna&oh=00_AYC14Zz7hL9yt170GJO5JWgu_4tEGEwNtqoqtYojG5zQsQ&oe=66CEFDFD"></img>
            <h1 class="flex items-center justify-center text-2xl font-bold mr-10 mb-4">Hiluu cậu, đố cậu biết tớ là ai
            </h1>
            <h3 class="flex items-center justify-center text-sm font-bold mr-10 mb-4">Chọn 1 trong các đáp án dưới cậu
                nhóe :3
            </h3>
        </div>
        <div class="flex flex-col w1/2 flex items-center justify-center">


            <router-link to="/NTM/tmii2" type="submit"
                class="flex items-center justify-center w-full bg-blue-500 hover:bg-blue-600 text-white font-bold py-2 px-4 rounded mb-4">
                Tonton chứ gì, biết thừa
            </router-link>
            <router-link to="/NTM/tmii3" type="submit"
                class="flex items-center justify-center w-full bg-blue-500 hover:bg-blue-600 text-white font-bold py-2 px-4 rounded mb-4">
                Cún coăn sao mùa hè lại quàng khăn
            </router-link>
            <router-link to="/NTM/tmii4" type="submit"
                class="flex items-center justify-center w-full bg-blue-500 hover:bg-blue-600 text-white font-bold py-2 px-4 rounded mb-4">
                Ăn ít thoii, bóe lắm rồi kìa
            </router-link>
            <router-link to="/NTM/tmii5" type="submit"
                class="flex items-center justify-center w-full bg-blue-500 hover:bg-blue-600 text-white font-bold py-2 px-4 rounded mb-4">
                Đếch quan tâm
            </router-link>
            <router-link to="/NTM/tmii6" type="submit"
                class="flex items-center justify-center w-full bg-blue-500 hover:bg-blue-00 text-white font-bold py-2 px-4 rounded mb-4">
                Muốn gì, nói?
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
