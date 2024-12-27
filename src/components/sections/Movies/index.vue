<script setup lang="ts">
import MovieCard from './MovieCard.vue'
import Container from 'core/Container.vue'
import type MoviesList from 'types/Movies'

const props = defineProps<{
    moviesList: MoviesList
}>()
</script>

<template>
    <section :class="s.section">
        <Container :class="s.container">
            <MovieCard
                v-for="movie in props.moviesList"
                :key="movie.id"
                v-bind="movie"
            />
        </Container>
    </section>
</template>

<style lang="scss" module="s">
.section {
    padding: 3.2rem 0;
}
.container {
    display: grid;
    grid-template-columns: repeat(auto-fit, minmax(30rem, 1fr));
    grid-gap: 1.6rem;
}
</style>
