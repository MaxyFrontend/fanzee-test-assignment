<script setup lang="ts">
import type { MovieDetail } from 'types/Movies'
import LabelsGroup from 'common/LabelsGroup.vue'
import UILabel from 'ui/Label.vue'
import UIMainTitle from 'ui/MainTitle.vue'

const props =
    defineProps<
        Pick<MovieDetail, 'name' | 'poster' | 'genre' | 'duration' | 'rating'>
    >()
</script>

<template>
    <div :class="s.main">
        <UIMainTitle :class="s.title">{{ props.name }}</UIMainTitle>
        <img :class="s.image" :src="props.poster" alt="" />
        <LabelsGroup :class="s.labelsGroup">
            <UILabel type="rating" :value="Number(props.rating).toFixed(2)" />
            <UILabel type="genre" :value="props.genre" />
            <UILabel type="duration" :value="props.duration" />
        </LabelsGroup>
    </div>
</template>

<style lang="scss" module="s">
.main {
    width: 100%;
    max-width: 24rem;
    @include down(xs) {
        max-width: 32rem;
    }
}
.title {
}
.image {
    width: 100%;
    height: 32rem;
    margin-top: 2.4rem;
    @include down(xs) {
        height: 40rem;
    }
}
.labelsGroup {
    margin-top: 2.4rem;
}
</style>
