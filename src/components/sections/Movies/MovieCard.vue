<script setup lang="ts">
import UICardTitle from 'ui/CardTitle.vue'
import UICardDescription from 'ui/CardDescription.vue'
import UILabel from 'ui/Label.vue'
import LabelsGroup from 'common/LabelsGroup.vue'
import type { Movie } from 'types/Movies'

const props = defineProps<Movie>()
</script>

<template>
    <RouterLink :to="`movie/${props.id}`" :class="s.card">
        <div :class="s.imageInner">
            <img :src="props.poster" alt="" :class="s.image" />
        </div>
        <UICardTitle :class="s.cardTitle">{{ props.name }}</UICardTitle>
        <UICardDescription :class="s.cardDescription">{{
            props.description
        }}</UICardDescription>
        <LabelsGroup :class="s.labels">
            <UILabel type="rating" :value="Number(props.rating).toFixed(2)" />
            <UILabel type="genre" :value="props.genre" />
            <UILabel type="duration" :value="props.duration" />
        </LabelsGroup>
    </RouterLink>
</template>

<style lang="scss" module="s">
.card {
    padding: 1.2rem;
    border-radius: 1.6rem;
    background: $secondary-color;
    display: flex;
    flex-direction: column;
    &:hover {
        & .cardTitle {
            text-decoration: underline;
        }
        & .image {
            transform: scale(1.05);
        }
    }
}
.cardTitle {
    margin-top: 1.2rem;
    @include down(xs) {
        margin-top: 2.4rem;
    }
}
.cardDescription {
    margin-top: 0.4rem;
    margin-bottom: 1.2rem;
    @include down(xs) {
        margin-top: 0.8rem;
        margin-bottom: 2.4rem;
    }
}
.imageInner {
    position: relative;
    width: 100%;
    aspect-ratio: 7 / 4;
    border-radius: 0.8rem;
    overflow: hidden;
}
.image {
    @include absolute-full;
    transition: transform 0.3s ease;
}
.labels {
    margin-top: auto;
}
</style>
