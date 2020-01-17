<template>
  <!-- 分类导航 CategoryNav -->
  <div class="release">
    <header>
      <Search></Search>
    </header>
    <section>
      <FirstNav />
    </section>
    <van-button type="primary" size="large" round>
      <!-- <span>选择完成，下一步</span> -->
      <span>下一步</span>
    </van-button>
  </div>
</template>

<script>
import FirstNav from "./FirstNav";
import Search from "./Search";
export default {
  components: {
    FirstNav,
    Search
  },
  data() {
    return {};
  }
};
</script>

<style scoped lang="stylus">
.release
    header
        margin .1rem
    section
        width 100%
        overflow auto
        padding-bottom 0.32rem
    .van-button
        width 2.4rem
        height 0.34rem
        margin-left 50%
        position absolute
        bottom 0.2rem
        left -1.2rem
        line-height 0.34rem
        background #4cc79b
</style>
