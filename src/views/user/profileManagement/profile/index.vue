<template>
    <div class="flex mt-8 mx-5 space-x-5">
        <div class="w-1/5 ml-4 mr-4">
            <Profile />
        </div>

        <div class="w-4/5 container border-l mx-auto p-10 mt-12">
            <a-card hoverable class=" w-full h-auto bg-white shadow-lg rounded-lg p-4">
                <template #cover>
                    <img src="../../../../assets/icon/avatar.svg" alt="Avatar" class="w-40 h-40 mr-4 ml-1" />
                </template>
                <a-tabs v-model:activeKey="activeKey" centered>
                    <a-tab-pane key="1" tab="Personal Informations">
                        <div class="ml-20 space-y-5">
                            <a-card-meta title="Full Name" description="This is the Full Name">
                            </a-card-meta>
                            <a-card-meta title="Birthday" description="This is the Birthday">
                            </a-card-meta>
                            <a-card-meta title="Gender" description="This is the Gender">
                            </a-card-meta>
                        </div>
                    </a-tab-pane>
                    <a-tab-pane key="2" tab="Contact Informations" force-render>
                        <div class="ml-20 space-y-5">
                            <a-card-meta title="Email" description="This is the Email">
                            </a-card-meta>
                            <a-card-meta title="Address" description="This is the Address">
                            </a-card-meta>
                            <a-card-meta title="Phone Number" description="This is the Phone number">
                            </a-card-meta>
                        </div>

                    </a-tab-pane>
                </a-tabs>
            </a-card>

            <TheChevron />
        </div>
    </div>
</template>

<script setup>
import TheChevron from '../../../../components/Chevron/index.vue';
import Profile from '../../../../components/Profile/index.vue';
import { ref } from 'vue';
const activeKey = ref('1');

</script>
