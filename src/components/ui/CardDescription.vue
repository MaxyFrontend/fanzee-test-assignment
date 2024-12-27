<script setup lang="ts"></script>

<template>
    <p :class="s.description">
        <slot />
    </p>
</template>

<style lang="scss" module="s">
.description {
    font-size: 1.4rem;
    line-height: 1.6rem;
    @include down(xs) {
        font-size: 2rem;
        line-height: 2.4rem;
    }
}
</style>
