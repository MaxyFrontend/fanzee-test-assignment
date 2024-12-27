<script setup lang="ts">
import AppLayout from 'layouts/DefaultLayout.vue'
import { useRoute } from 'vue-router'

const route = useRoute()
</script>

<template>
    <div class="app">
        <AppLayout>
            <RouterView v-slot="{ Component }">
                <Transition name="slide">
                    <component :is="Component" :key="route.path" />
                </Transition>
            </RouterView>
        </AppLayout>
    </div>
</template>

<style lang="scss">
.app {
}
</style>
