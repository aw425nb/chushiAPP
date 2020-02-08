<template>
    <div class="banner">
        <van-swipe :autoplay="3000" indicator-color="white">
            <van-swipe-item><div class="vandiv"><img src="../../../assets/img/banner.png" alt=""></div></van-swipe-item>
            <van-swipe-item><div class="vandiv"><img src="../../../assets/img/banner1.png" alt=""></div></van-swipe-item>
            <van-swipe-item><div class="vandiv"><img src="../../../assets/img/banner2.png" alt=""></div></van-swipe-item>
            <van-swipe-item><div class="vandiv"><img src="../../../assets/img/banner3.png" alt=""></div></van-swipe-item>
        </van-swipe>

    </div>
</template>



<script>
export default {
    
}
</script>


<style lang="stylus" scoped>

    .banner
        width 100%
        height 1.55rem
        .van-swipe 
            background #f6f6f6
            .vandiv
                width 3.43rem
                height 1.55rem
                background #f6f6f6
                margin-left .26rem
                img 
                    width 100%
                    height 1.55rem
                    border-radius .1rem

</style>