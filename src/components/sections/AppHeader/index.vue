<script setup lang="ts">
import Container from 'core/Container.vue'
import UILogo from '@/components/ui/AppLogo.vue'
</script>

<template>
    <header :class="s.header">
        <Container>
            <UILogo />
        </Container>
    </header>
</template>

<style lang="scss" module="s">
.header {
    background-color: $secondary-color;
    padding: 3.1rem 0;
}
</style>
