<script setup lang="ts"></script>

<template>
    <h3 :class="s.title">
        <slot />
    </h3>
</template>

<style lang="scss" module="s">
.title {
    font-size: 3.2rem;
    line-height: 3.6rem;
    color: $base-color;
}
</style>
