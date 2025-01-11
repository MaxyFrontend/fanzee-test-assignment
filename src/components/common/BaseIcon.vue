<script setup lang="ts">
import { computed } from 'vue'
import iconsMap from '@/constants/icons';

type IconName = keyof typeof iconsMap extends `/${string}/icons/${infer Name}.svg` ? Name : never;

const props = defineProps<{
    icon: IconName
}>()

const iconComponent = computed(() => {
    for (const key in iconsMap) {
        if(key.split('/').slice(-1)[0] === (props.icon + '.svg')) {
            return iconsMap[key]
        }
    }
    return null
})
</script>

<template>
    <component :is="iconComponent" />
</template>

<style lang="scss" module="s"></style>
