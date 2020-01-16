<template>
  <div id="mypurchase">
     <van-nav-bar
      title="我的采购"
      left-text=""
      left-arrow
      @click-left="onClickLeft"
    />
    <van-tabs v-model="active" color="#4cc79b" title-active-color="#4cc79b">
      <van-tab class="purchase_warp" title="已发布">
        <ul>
          <img v-if="imgshow1" class="bcimg" src="../../assets/img/bg3.jpg" alt="">
          <li>
            <div class="box">
              <h1>湖南特产绿心猕猴桃</h1>
              <p class="place">产地要求：全国</p>
              <p class="num">需求数量：200斤</p>
              <p class="address">
                <van-icon name="location" />
                <span>浙江宁波市</span>
              </p>
              <p class="button_warp">
                <button>撤销</button>
              </p>
            </div>   
            <button class="box_r">已发布</button>  
          </li>
         
        </ul>
      </van-tab>
      <van-tab class="purchase_warp"  title="已撤销">
         <ul>
           <img v-if="imgshow2" class="bcimg" src="../../assets/img/bg3.jpg" alt="">
          <li>
            <div class="box">
              <h1>湖南特产绿心猕猴桃</h1>
              <p class="place">产地要求：全国</p>
              <p class="num">需求数量：200斤</p>
              <p class="address">
                <van-icon name="location" />
                <span>浙江宁波市</span>
              </p>
              <p class="button_warp">
                <button>修改</button>
                <button>发布</button>
              </p>
            </div>   
            <button class="box_r">已撤销</button> 
          </li>
        </ul>
      </van-tab>
      <van-tab class="purchase_warp"  title="未通过">
         <ul>
           <img v-if="imgshow3" class="bcimg" src="../../assets/img/bg3.jpg" alt="">
         </ul>
      </van-tab>
      <van-tab class="purchase_warp"  title="审核中">
         <ul>
           <img v-if="imgshow4" class="bcimg" src="../../assets/img/bg3.jpg" alt="">
         </ul>
      </van-tab>
    </van-tabs>
    <van-button 
      round type="info" 
      style="width: 2.7rem;"
      color="#4cc79b"
    >发布新采购</van-button>
  </div>
</template>

<script>
export default {
  data() {
    return {
      active: 0,
      imgshow1: false,//背景图片时候显示隐藏
      imgshow2: false,
      imgshow3: true,
      imgshow4: true
    }
  },
  methods: {
    onClickLeft() {
      this.$router.history.push('/my')
    }

  }
}
</script>

<style lang="stylus" scoped>
  #mypurchase
    text-align center
    background-color #fbfbfb
  .purchase_warp
    width 100%
    height 5.2rem
    box-sizing border-box
    padding .2rem
    padding-top .05rem
    ul
      width 100%
      height 100%
      overflow auto 
      position relative
      // background url(../../assets/img/bg3.jpg) no-repeat 0 1.5rem
      .bcimg
        width 100%
        position absolute
        top 1.5rem
        left 0
      li
        width 100%
        height 1.4rem
        box-sizing border-box
        padding .2rem
        margin-bottom .1rem
        border-radius .1rem
        display flex
        align-items center
        justify-content left 
        position relative
        border .005rem solid #ccc
        color #646566
        background-color #fff
        .box
          width 60%
          display flex
          flex-direction column
          text-align left 
          h1
            font-size .14rem
            font-weight 500
            margin-bottom .1rem
            color black
          .place
            font-size .1rem
            margin-bottom .01rem
          .num
            font-size .03rem
            margin-bottom .03rem
            font-weight 500
          .address
            font-size .03rem
            margin-bottom .03rem
          .button_warp
            button
              width .48rem
              height .22rem
              line-height .22rem
              background-color #4cc79b
              border 0
              border-radius .05rem
              font-size .115rem
              margin-right .1rem
              color #ffffff
              cursor pointer
        .box_r
          position absolute
          top 0.1rem
          right .2rem
          color #ffffff
          border-radius .05rem
          background-color #4cc79b
          border 0
          font-size .115rem
          width .48rem
          height .22rem
          line-height .22rem
    

</style>