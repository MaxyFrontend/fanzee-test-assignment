<script setup lang="ts">
import { onMounted, ref } from 'vue'
import type { Ref } from 'vue'
import getMovieDetails from 'api/getMovieDetails'
import MovieDetailSection from 'sections/MovieDetail/index.vue'
import type { MovieDetail } from 'types/Movies'
import UILoader from 'ui/Loader.vue'

const movieDetail: Ref<MovieDetail | null> = ref(null)

onMounted(async () => {
    const { data, error } = await getMovieDetails()
    if (!error && data) {
        movieDetail.value = data
    }
})
</script>

<template>
    <main>
        <MovieDetailSection v-if="movieDetail" v-bind="movieDetail" />
        <UILoader :visible="!movieDetail" />
    </main>
</template>
