<script setup lang="ts"></script>

<template>
    <div :class="s.container">
        <slot />
    </div>
</template>

<style lang="scss" module="s">
.container {
    width: 100%;
    max-width: 144rem;
    padding: 0 4.8rem;
    margin: 0 auto;
}
</style>
