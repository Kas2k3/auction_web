<template>
    <a-space>
        <a-skeleton-button :active="active" :size="size" :shape="buttonShape" :block="block" />
        <a-skeleton-avatar :active="active" :size="size" :shape="avatarShape" />
        <a-skeleton-input style="width: 200px" :active="active" :size="size" />
    </a-space>
    <br />
    <br />
    <a-skeleton-button :active="active" :size="size" :shape="buttonShape" :block="block" />
    <br />
    <br />
    <a-skeleton-image />
    <a-divider />
    <a-form layout="inline" style="margin: 16px 0">
        <a-form-item label="Active">
            <a-switch v-model:checked="active" />
        </a-form-item>
        <a-form-item label="Button Block">
            <a-switch v-model:checked="block" />
        </a-form-item>
        <a-form-item label="Size">
            <a-radio-group v-model:value="size">
                <a-radio-button value="default">Default</a-radio-button>
                <a-radio-button value="large">Large</a-radio-button>
                <a-radio-button value="small">Small</a-radio-button>
            </a-radio-group>
        </a-form-item>
        <a-form-item label="Button Shape">
            <a-radio-group v-model:value="buttonShape">
                <a-radio-button value="default">Default</a-radio-button>
                <a-radio-button value="round">Round</a-radio-button>
                <a-radio-button value="circle">Circle</a-radio-button>
            </a-radio-group>
        </a-form-item>
        <a-form-item label="Avatar Shape">
            <a-radio-group v-model:value="avatarShape">
                <a-radio-button value="square">Square</a-radio-button>
                <a-radio-button value="circle">Circle</a-radio-button>
            </a-radio-group>
        </a-form-item>
    </a-form>
</template>
<script setup>
import { ref } from 'vue';
const active = ref(false);
const block = ref(false);
const size = ref('default');
const buttonShape = ref('default');
const avatarShape = ref('circle');
</script>