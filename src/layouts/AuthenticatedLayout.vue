<template>
    <TheUserHeader />
    <div class="w-full h-full bg-blue-100">
        <div class="p-4">
            <router-view></router-view>
        </div>
    </div>
</template>

<script>
import TheUserHeader from '../components/UserHeader/index.vue';

export default {
    components: {
        TheUserHeader
    }
}
</script>
