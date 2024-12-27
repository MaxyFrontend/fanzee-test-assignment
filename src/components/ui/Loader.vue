<script setup lang="ts">
const props = withDefaults(
    defineProps<{
        visible: boolean
        borderColors?: [string, string]
    }>(),
    {
        visible: false,
        borderColors: () => ['#000000', '#ffffff']
    }
)
</script>

<template>
    <Teleport to="body">
        <transition name="fade">
            <div v-if="props.visible" :class="s.loader">
                <div :class="s.loaderCircle">
                    <div
                        :class="[s.loaderCircleBorder, s.loaderCircleLine]"
                        :style="{ borderColor: props.borderColors[0] }"
                    ></div>
                    <div
                        :class="[s.loaderCircleBorder, s.loaderCircleSpin]"
                        :style="{ borderTopColor: props.borderColors[1] }"
                    ></div>
                </div>
            </div>
        </transition>
    </Teleport>
</template>

<style lang="scss" module="s">
.loader {
    position: fixed;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    display: flex;
    align-items: center;
    justify-content: center;
    background: rgba(0, 0, 0, 0.6);
    & .loaderCircle {
        width: 5rem;
        height: 5rem;
    }
    z-index: 1000;
}
.loaderCircle {
    position: relative;
    width: 100%;
    height: 100%;
    &Border {
        display: block;
        content: '';
        position: absolute;
        top: 0;
        left: 0;
        width: 100%;
        height: 100%;
        border-width: 0.3rem;
        border-style: solid;
        border-radius: 50%;
        border-color: transparent;
    }
    &Spin {
        animation: loader 0.5s linear infinite;
    }
}
@keyframes loader {
    0% {
        transform: rotate(0);
    }
    100% {
        transform: rotate(360deg);
    }
}
</style>
