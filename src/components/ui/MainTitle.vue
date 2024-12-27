<script setup lang="ts"></script>

<template>
    <h1 :class="s.logo">Test Task</h1>
</template>

<style lang="scss" module="s">
.logo {
    display: inline-block;
    font-family: 'Roboto';
    font-style: normal;
    font-weight: 700;
    font-size: 3.2rem;
    line-height: 1;
    color: #ffffff;
    @include down(xs) {
        font-size: 4.8rem;
    }
}
</style>
