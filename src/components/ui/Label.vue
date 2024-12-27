<script setup lang="ts">
import BaseIcon from 'common/BaseIcon.vue'
import { computed } from 'vue'

const props = defineProps<{
    type: 'rating' | 'genre' | 'duration'
    value: string
}>()

const isRed = computed(() => {
    return (
        (props.type === 'rating' && Number(props.value) < 3) ||
        (props.type === 'duration' && Number(props.value) < 1)
    )
})
const isViolet = computed(() => {
    return !isRed.value && !isBlue.value && !isGreen.value
})
const isBlue = computed(() => {
    return props.type === 'genre'
})
const isGreen = computed(() => {
    return (
        (props.type === 'rating' && Number(props.value) >= 7) ||
        (props.type === 'duration' && Number(props.value) >= 3)
    )
})
</script>

<template>
    <div
        :class="[
            s.label,
            {
                [s.red]: isRed,
                [s.blue]: isBlue,
                [s.violet]: isViolet,
                [s.green]: isGreen
            }
        ]"
    >
        <BaseIcon :class="s.icon" :icon="props.type" />
        <span :class="s.text">{{ props.value }}</span>
    </div>
</template>

<style lang="scss" module="s">
.label {
    display: flex;
    align-items: center;
    padding: 0.45rem 0.6rem;
    border-radius: 0.8rem;
    background-color: var(--background-color);
    &.red {
        --background-color: #e81a0c;
    }
    &.blue {
        --background-color: #2c81fb;
    }
    &.violet {
        --background-color: #702bfe;
    }
    &.green {
        --background-color: #039c55;
    }
    cursor: pointer;
    @include down(xs) {
        padding: 0.7rem 1.2rem;
        border-radius: 1.2rem;
    }
}
.text {
    font-size: 1.1rem;
    line-height: 1;
    margin-left: 0.2rem;
    text-transform: capitalize;
    @include down(xs) {
        font-size: 1.2rem;
        margin-left: 0.4rem;
    }
}
.icon {
    width: 0.8rem;
    height: 0.8rem;
    margin-top: -0.1rem;
    @include down(xs) {
        width: 1.6rem;
        height: 1.6rem;
    }
}
</style>
