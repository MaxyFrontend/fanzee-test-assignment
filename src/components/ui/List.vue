<script setup lang="ts">
const props = defineProps<{
    items: string[]
}>()
</script>

<template>
    <ul :class="s.list">
        <li v-for="item in props.items" :key="item" :class="s.item">
            {{ item }}
        </li>
    </ul>
</template>

<style lang="scss" module="s">
.list {
}
.item {
    position: relative;
    font-size: 1.4rem;
    line-height: 1.3;
    padding-left: var(--padding-left);
    --padding-left: 1.8rem;
    &::before {
        content: '';
        position: absolute;
        left: calc(var(--padding-left) / 2);
        top: 50%;
        transform: translateY(-50%);
        width: 0.4rem;
        height: 0.4rem;
        border-radius: 50%;
        background: $base-color;
        @include down(xs) {
            width: 0.8rem;
            height: 0.8rem;
        }
    }
    @include down(xs) {
        font-size: 2rem;
        line-height: 1.4;
    }
}
</style>
