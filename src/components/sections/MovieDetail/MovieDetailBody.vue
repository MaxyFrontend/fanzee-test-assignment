<script setup lang="ts">
import UIMainTitle from 'ui/MainTitle.vue'
import UICardDescription from 'ui/CardDescription.vue'
import UIList from 'ui/List.vue'
import { computed } from 'vue'
import type { MovieDetail } from 'types/Movies'

const props =
    defineProps<Pick<MovieDetail, 'description' | 'trivia' | 'actors'>>()

const actors = computed(() => props.actors.map((item) => item.name))
</script>

<template>
    <div :class="s.body">
        <div :class="s.block">
            <UIMainTitle :class="s.bodyTitle">Description</UIMainTitle>
            <UICardDescription :class="s.bodyDescription">{{
                props.description
            }}</UICardDescription>
        </div>
        <div :class="s.block">
            <UIMainTitle :class="s.bodyTitle">Trivia</UIMainTitle>
            <UIList :class="s.list" :items="props.trivia" />
        </div>
        <div :class="s.block">
            <UIMainTitle :class="s.bodyTitle">Actors</UIMainTitle>
            <UIList :class="s.list" :items="actors" />
        </div>
    </div>
</template>

<style lang="scss" module="s">
.body {
}
.bodyDescription {
    margin-top: 1.6rem;
}
.block {
    &:nth-child(n + 2) {
        margin-top: 1.6rem;
        @include down(xs) {
            margin-top: 3.2rem;
        }
    }
}
.list {
    margin-top: 1.6rem;
}
</style>
