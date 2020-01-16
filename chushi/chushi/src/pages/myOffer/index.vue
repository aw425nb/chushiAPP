<template>
  <div id="myoffer">
    <van-nav-bar
      title="我的报价"
      left-text=""
      left-arrow
      @click-left="onClickLeft"
      @click-right="onClickRight"
    />
    <van-tabs v-model="active">
      <van-tab title="发出的报价">发出的报价</van-tab>
      <van-tab title="收到的报价">收到的报价</van-tab>
    </van-tabs>
  </div>
</template>

<script>
export default {
  data() {
    return {
      active: 2
    }
  },
  methods: {
    onClickLeft() {
      alert(1)
    },
    onClickRight() {
      alert(1)
    }
  },
  
}
</script>

<style lang="stylus" scoped>
  #myoffer .van-tabs__line
    background-color #4cc79b
</style>