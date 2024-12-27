<script setup lang="ts">
import type { MovieDetail } from 'types/Movies'
import Container from 'core/Container.vue'
import MovieDetailMain from './MovieDetailMain.vue'
import MovieDetailBody from './MovieDetailBody.vue'

const props = defineProps<MovieDetail>()
</script>

<template>
    <section :class="s.section">
        <Container :class="s.container">
            <MovieDetailMain v-bind="props" />
            <MovieDetailBody :class="s.body" v-bind="props" />
        </Container>
    </section>
</template>

<style lang="scss" module="s">
.section {
    padding: 2.4rem 0;
}
.container {
    display: flex;
    align-items: flex-start;
    @include down(xs) {
        flex-direction: column;
    }
}
.body {
    margin-left: 6.4rem;
    @include down(xs) {
        margin-left: 0;
        margin-top: 6rem;
    }
}
</style>
