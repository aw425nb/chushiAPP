<template>
  <!-- 加号 发布供应 发布采购弹窗 -->
  <div class="pop">
    <van-popup v-model="show" position="bottom" :style="{ height: '40%' }">
      <div class="pop_wrap">
        <a href>
          <img src="../assets/img/supply.jpg" alt />
          <span>发供应</span>
        </a>
        <a href>
          <img src="../assets/img/purchase.jpg" alt />
          <span>发采购</span>
        </a>
      </div>
      <van-icon name="cross"/>
    </van-popup>
  </div>
</template>

<script>
import Vue from "vue";
import { Popup } from "vant";

Vue.use(Popup);

export default {
  data() {
    return {
      show: true
    };
  },
  methods: {
    showPopup() {
      this.show = true;
    }
  }
};
</script>

<style scoped lang="stylus">
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
