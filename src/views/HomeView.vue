<script setup lang="ts">
import { onMounted, ref } from 'vue'
import type { Ref } from 'vue'
import MoviesSection from 'sections/Movies/index.vue'
import getMovies from 'api/getMovies'
import UILoader from 'ui/Loader.vue'
import type MoviesList from 'types/Movies'

const moviesList: Ref<MoviesList> = ref([])

onMounted(async () => {
    const { data, error } = await getMovies()
    if (!error && data) {
        moviesList.value = data
    }
})
</script>

<template>
    <div>
        <MoviesSection :movies-list="moviesList" />
        <UILoader :visible="!moviesList.length" />
    </div>
</template>
