<script setup lang="ts">
import Container from 'core/Container.vue'
</script>

<template>
    <footer :class="s.footer">
        <Container :class="s.container">
            <p :class="s.copyright">Test Task, 2022</p>
            <div :class="s.contacts">
                <a href="tel:+5183632171" :class="s.phone">518-363-2171</a>
                <p :class="s.address">91 Park St. Fairhope, AL 36532</p>
            </div>
        </Container>
    </footer>
</template>

<style lang="scss" module="s">
.footer {
    padding: 3.2rem 0;
    background-color: $secondary-color;
}
.container {
    display: flex;
    justify-content: space-between;
    align-items: center;
}
.copyright {
    font-size: 1.8rem;
    line-height: auto;
    font-weight: bold;
    @include down(xs) {
        font-size: 2.8rem;
    }
}
.contacts {
    font-size: 1.4rem;
    @include down(xs) {
        font-size: 1.8rem;
    }
}
.phone {
    font-size: inherit;
    &:hover {
        text-decoration: underline;
    }
}
.address {
    font-size: inherit;
    margin-top: 0.4rem;
    @include down(xs) {
        margin-top: 0.8rem;
    }
}
</style>
