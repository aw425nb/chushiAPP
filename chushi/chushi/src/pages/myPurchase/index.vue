<template>
  <div id="mypurchase">
     <van-nav-bar
      title="我的采购"
      left-text=""
      left-arrow
      @click-left="onClickLeft"
      @click-right="onClickRight"
    />
    <van-tabs v-model="active">
      <van-tab title="已发布">内容 1</van-tab>
      <van-tab title="已撤销">内容 2</van-tab>
      <van-tab title="未通过">内容 3</van-tab>
      <van-tab title="审核中">内容 4</van-tab>
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
  }

}
</script>