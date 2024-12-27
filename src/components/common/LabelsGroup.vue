<script setup lang="ts"></script>

<template>
    <div :class="s.group">
        <slot />
    </div>
</template>

<style lang="scss" module="s">
.group {
    display: flex;
    align-items: stretch;
    gap: 0.8rem;
    margin-top: auto;
}
</style>
