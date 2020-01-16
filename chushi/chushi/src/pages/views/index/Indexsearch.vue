
<template>
    <div class="index" style="background:#f6f6f6">
       
        <div class="search">
            <div class="logo">
                <img src="../../../assets/img/logo.jpg" alt="">
                
            </div>
            <div class="searchmain">
                <van-icon name="search" />
                搜好货
            </div>
            <div class="city" v-cloak>
                <van-icon name="location" />
                {{LocationCity}}
            </div>
          
        </div>
     


    </div>
     
         
</template>



 <script> 
 export default{
    data(){
        return{
            LocationCity:"....."     //给渲染层定义一个初始值
        }
    },
    created(){
        
        this.$city() //触发获取城市方法
    }
 }
 </script>

<style lang="stylus" scoped>
    .search
        height .5rem
        width 100%
        padding .09rem .16rem
        display flex
        align-items center
        justify-content space-around

        .logo
            width .38rem
            height .32rem
            img 
                display  block
                width .38rem
                height .18rem
                margin-top .08rem
        .searchmain
            width 2.22rem
            height .32rem
            border-radius .1rem
            padding 0 .3rem
            line-height  .32rem
            color #999999
            position relative
            background #fff
            .van-icon
                position absolute
                font-size .2rem 
                top 0.065rem
                left 0.28em
        .city
            width .65rem
            height .32rem
            position relative
            padding 0 0 0 0.25rem
            line-height .32rem
            cursor pointer
            .van-icon
                position absolute
                font-size .2rem 
                top 0.065rem
                left 0
               
</style>