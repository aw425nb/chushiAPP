<template>
  <footer>
    <router-link to="/index">首页</router-link>
    <router-link to="/classify">分类</router-link>
    <!-- 发布 -->
    <div class="btn_warp tabbar_list" @click.stop="showPopup" >
      <span class="icon">+</span>
      <span class="des">发布</span>
      <!-- 发布弹出层 -->
      <van-popup v-model="show" position="bottom" :style="{ height: '40%' }">
        <div class="pop_wrap">
          <router-link to="/ReleaseSupply">
            <img src="../../assets/img/supply.jpg" alt />
            <span>发供应</span>
          </router-link>
          <router-link to="/PostPurchase">
            <img src="../../assets/img/purchase.jpg" alt />
            <span>发采购</span>
          </router-link>
        </div>
        <van-icon name="cross" @click.stop="closePopup" />
      </van-popup>
      <!-- 发布弹出层 -->
    </div>
    <!-- 发布 -->
    <router-link to="/manifest">货单</router-link>
    <router-link to="/my">我的</router-link>
  </footer>
</template>

<script>
export default {
  data() {
    return {
      show: false
    };
  },
  methods: {
    showPopup() {
        this.show = true;
        console.log(this.show)
    },
    closePopup() {
        this.show = false;
        console.log(this.show)
    }
  }
};
</script>

<style lang="stylus" scoped>
footer
  width 100%
  display flex
  background red
  height 0.49rem
  position fixed
  bottom 0
  left 0
  line-height 0.49rem


  a
    flex 1
    text-align center

.btn_warp
    flex 1
    .des
        position relative
        bottom -0.15rem
        text-align center
    .icon
        display block
        height 0.5rem
        width 0.5rem
        position absolute
        background #4cc79b
        border-radius 50%
        top -40%
        left -0.25rem
        margin-left 50%
        line-height 0.5rem
        text-align center
        font-size 0.5rem
        color white

.tabbar_list
        height 100%
        display flex
        flex-direction column
        justify-content center
        position relative
        &.active
            color #4cc79b
        i
            font-size 0.24rem
            margin-bottom 0.05rem
        .des
            font-size 0.06rem

.pop_wrap
    display flex
    justify-content center
    height .9rem
    margin-top .8rem
    margin-bottom: .4rem
    width 100%
    a
        display flex
        flex-direction column
        align-items center
        margin 0 .3rem
        width 1.2rem
        img
            width .6rem
            height .6rem
            margin-bottom .1rem
        span
            color #000
            font-size .16rem
i
    left 50%
    font-size .24rem
    font-weight 800
    margin-left -.12rem
    color #005c60
</style>