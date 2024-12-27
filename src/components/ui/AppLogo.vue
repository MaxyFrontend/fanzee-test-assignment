<script setup lang="ts">
import { RouterLink } from 'vue-router'
import UIMainTitle from 'ui/MainTitle.vue'
</script>

<template>
    <RouterLink to="/" :class="s.logo">
        <UIMainTitle>Test Task</UIMainTitle>
    </RouterLink>
</template>

<style lang="scss" module="s">
.logo {
}
</style>
