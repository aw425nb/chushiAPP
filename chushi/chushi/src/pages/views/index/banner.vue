<template>
    <div class="banner">
        <van-swipe :autoplay="3000" indicator-color="white">
            <van-swipe-item><img src="../../../assets/img/banner.png" alt=""></van-swipe-item>
            <van-swipe-item><img src="../../../assets/img/banner1.jpg" alt=""></van-swipe-item>
            <van-swipe-item><img src="../../../assets/img/banner2.jpg" alt=""></van-swipe-item>
            <van-swipe-item><img src="../../../assets/img/banner3.png" alt=""></van-swipe-item>
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
        padding 0 .16rem
        .van-swipe 
            border-radius .1rem
            img 
                width 100%
                height 1.55rem

</style>