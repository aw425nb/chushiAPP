<template>
  <div>
    <!-- 导航分类 content -->
    <!-- 一级导航 -->
    <van-tree-select
      heigh="100%"
      :items="items"
      :active-id.sync="activeId"
      :main-active-index.sync="activeIndex"
    >
      <template slot="content">
        <Floor></Floor>
      </template>
    </van-tree-select>
  </div>
</template>

<script>
import Floor from "./floor";
export default {
  components: {
    Floor
  },
  data() {
    return {
      activeId: 1,
      activeIndex: 0,
      items: [
        { text: "水果" },
        { text: "蔬菜" },
        { text: "食用菌" },
        { text: "水产" },
        { text: "畜禽" },
        { text: "干果" },
        { text: "中药材" },
        { text: "茶叶" },
        { text: "其它" }
      ]
    };
  }
};
</script>

<style scoped lang="stylus">
.van-tree-select
    margin-top .13rem
</style>
