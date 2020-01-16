<template>
  <div class="drop-menu">
    <van-dropdown-menu>
      <van-dropdown-item v-model="value" :options="option2" >
          <van-tree-select
            :items="items"
            :active-id.sync="activeId"
            :main-active-index.sync="activeIndex"
            />
      </van-dropdown-item>
      <van-dropdown-item v-model="value" :options="option2" />
      <van-dropdown-item title="筛选" ref="item">
        <van-switch-cell v-model="switch1" title="包邮" />
        <van-switch-cell v-model="switch2" title="团购" />
        <van-button block type="info" @click="onConfirm">确认</van-button>
      </van-dropdown-item>
    </van-dropdown-menu>
  </div>
</template>

<script>
export default {
  data() {
    return {
      value: 0,
      switch1: false,
      switch2: false,
      option1: [
        { text: "全国", value: 0 },
      ],
      option2: [
        { text: "综合排序", value: 0 },
        { text: "距离排序", value: 1 },
        { text: "价格排序", value: 2 }
      ],
      items:[
          {
            text: "浙江省",
            value: 1,
            children: [
              { text: "全部", id: 0 },
              { text: "杭州", id: 1 },
              { text: "温州", id: 2 },

            ]
          },
           {
            text: "江苏省",
            value: 2,
            children: [
             { text: "全部", id: 0 },
              { text: "南京", id: 1 },
              { text: "苏州", id: 2 }
            ]
          },
      ],
      activeId: 1,
      activeIndex: 0
    };
  },

  methods: {
    onConfirm() {
      this.$refs.item.toggle();
    }
  }
};
</script>