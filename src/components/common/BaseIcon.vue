<script setup lang="ts">
import { defineAsyncComponent } from 'vue'

const props = defineProps<{
    icon: string
}>()
const iconComponent = defineAsyncComponent(
    () => import(`icons/${props.icon}.svg`)
)
</script>

<template>
    <component :is="iconComponent" />
</template>

<style lang="scss" module="s"></style>
