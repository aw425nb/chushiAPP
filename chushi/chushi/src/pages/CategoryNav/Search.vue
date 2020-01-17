<template>
  <div class="search">
    <form action="/">
        <van-search v-model="value" placeholder="请输入搜索关键词" show-action @search="onSearch" @cancel="onCancel"/>
    </form>
  </div>
</template>

<script>
export default {
  data() {
    return {
        value:''
    };
  },
  methods:{
      onSearch(){
          return this.value
      },
      onCancel(){
          return this.value=''
      }
  }
};
</script>

<style scoped lang="stylus">
.search
    width 90%
    margin-left 5%
    margin-bottom .02rem
    margin-top .02rem
    .van-search
        box-shadow 0 0 .06rem rgb(235, 235, 235)
        padding 0
        border-radius .1rem
        .van-search__content
            border-radius .1rem
            background #ffffff
</style>
