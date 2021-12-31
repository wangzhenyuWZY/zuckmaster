<template>
    <div class="coming">
        <Header />
            <div class="text">Coming Soon</div>
        <Footer />
    </div>
</template>

<script>
    import Header from '../components/Header.vue'
    import Footer from '../components/Footer.vue'
    export default {
        name: 'Coming',
        components: { Header, Footer },
        data() {
            return {}
        },
        methods: {},
    }
</script>

<style lang="less" scoped>
.coming {
    width: 100%;
    height: 100%;
    padding-top: 88px;
    background: url('../assets/myBox/place_bg1.png') no-repeat center/100% 100%;
    .text {
        width: max-content;
        height: 90%;
        margin: 0 auto;
        font-size: 8rem;
        font-family: zcoolqingkehuangyouti-Regular, zcoolqingkehuangyouti;
        font-weight: 400;
        color: #06FEFE;
        line-height: 36rem;
        letter-spacing: 2px;
    }
}
@media screen and (max-width: 1200px) {
    .coming {
        padding-top: 4rem;
        background: url('../assets/myBox/place_bg1_min.png') no-repeat center/100% 100%;
        .text {
            font-size: 2rem;
            line-height: 30rem;
        }
    }
}
</style>
