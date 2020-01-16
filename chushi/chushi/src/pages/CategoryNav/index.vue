<template>
  <!-- 分类导航 CategoryNav -->
  <div class="release">
    <header v-if="num<5">
      <van-search placeholder="请输入搜索关键词" v-model="value" v-if="num==1" />
      <div class="top" v-else-if="num==2">
        <i class="fas fa-chevron-left" @click="des"></i>
        <span>{{fruit.fruitType?fruit.fruitType:''}}</span>
      </div>
      <div class="top" v-else>
        <i class="fas fa-chevron-left" @click="des"></i>
        <span>{{fruit.fruitName?fruit.fruitName:''}}</span>
      </div>
    </header>
    <section>
      <Content />
    </section>
    <van-button type="primary" v-if="num<5" size="large" round @click="add">
      <span v-if="num==1">选择完成，下一步</span>
      <span v-else>下一步</span>
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
