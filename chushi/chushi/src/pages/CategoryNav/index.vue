<template>
  <!-- 分类导航 CategoryNav -->
  <div class="release">
    <section>
      <Content />
    </section>
    <van-button type="primary" size="large" round>
      <!-- <span>选择完成，下一步</span> -->
      <span>下一步</span>
    </van-button>
  </div>
</template>

<script>
import Content from "./content";
export default {
  components: {
    Content
  },
  data() {
    return {};
  }
};
</script>

<style scoped>
</style>
