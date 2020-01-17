<template>
    <div id="options">
        <van-grid :column-num="5" :center="true" :border="false">
            <van-grid-item default class="optionback" ><img src="../../../assets/img/1.png" alt="">水果</van-grid-item>
            <van-grid-item default class="optionback" ><img src="../../../assets/img/2.png" alt=""> 蔬菜</van-grid-item>
            <van-grid-item default class="optionback" ><img src="../../../assets/img/3.png" alt="">粮油</van-grid-item>
            <van-grid-item default class="optionback" ><img src="../../../assets/img/4.png" alt="">食用菌</van-grid-item>
            <van-grid-item default class="optionback" ><img src="../../../assets/img/5.png" alt="">中药材</van-grid-item>
            <van-grid-item default class="optionback" ><img src="../../../assets/img/6.png" alt="">畜禽</van-grid-item>
            <van-grid-item default class="optionback" ><img src="../../../assets/img/7.png" alt="">水产</van-grid-item>
            <van-grid-item default class="optionback" ><img src="../../../assets/img/8.png" alt="">干果</van-grid-item>
            <van-grid-item default class="optionback" ><img src="../../../assets/img/10.png" alt="">菜叶</van-grid-item>
            <van-grid-item default class="optionback" ><img src="../../../assets/img/9.png" alt="">更多</van-grid-item>

        </van-grid>
    </div>
</template>


<script>
import img from '../../../assets/img/1.png'
export default {
    data(){
        return {
            listIMG : img
        }
    }
}
</script>


<style lang="stylus" scoped>
    #options
        width 100%
        height 2.1rem
  
    img 
        width .5rem
        height .5rem
        margin-bottom .1rem
    .optionback
        background red
        /deep/ .van-grid-item__content--center
            background-color  #f6f6f6
          
    
        

    
        

</style>