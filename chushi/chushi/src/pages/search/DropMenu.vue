<template>
  <div class="drop-menu">
    <van-dropdown-menu>
      <!-- 地区 -->
      <van-dropdown-item v-model="value" :options="option1">
        <!-- 选择省份/城市 -->
        <van-tree-select
          :items="items"
          :active-id.sync="activeId"
          :main-active-index.sync="activeIndex"
          @click-item="onClick"
        />
      </van-dropdown-item>
      <!-- 排序 -->
      <van-dropdown-item v-model="value" :options="option2" />
      <!-- 筛选 -->
      <van-dropdown-item title="筛选" ref="item">
          <!-- 筛选的价格区间 -->
       <div class="price-size">
           <p>价格</p>
           <div class="inps">
               <input type="text" placeholder="请输入最低价" class="inp-p" @blur="onBlur">
               <input type="text" placeholder="请输入最高价" class="inp-p" @blur="onBlur">
           </div>
       </div>
        <van-switch-cell v-model="switch1" title="包运费" />
        <van-switch-cell v-model="switch2" title="支持零售" />
        <div class="btn">
            <van-button 
            block type="info"
             @click="onConfirm" 
             class="button">确认</van-button>
        </div>
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
        //地区
        { text: "全国", value: 0 }
      ],
      option2: [
        //排序
        { text: "综合排序", value: 0 },
        { text: "距离排序", value: 1 },
        { text: "价格排序", value: 2 }
      ],
      items: [
        {
          text: "浙江省",
          value: 1,
          children: [
            { text: "杭州", id: 1 },
            { text: "温州", id: 2 },
            { text: "湖州", id: 3 },
            { text: "绍兴", id: 4 },
            { text: "宁波", id: 5 },
            { text: "嘉兴", id: 6 },
            { text: "丽水", id: 7 },
            { text: "金华", id: 8 },
            { text: "台州", id: 9 },
            { text: "衢州", id: 10 },
            { text: "舟山", id: 11 }
          ]
        },
        {
          text: "江苏省",
          value: 2,
          children: [
            { text: "南京", id: 1 },
            { text: "苏州", id: 2 },
            { text: "无锡", id: 3 },
            { text: "徐州", id: 4 },
            { text: "常州", id: 5 },
            { text: "南通", id: 6 },
            { text: "连云港", id: 7 },
            { text: "淮安", id: 8 },
            { text: "盐城", id: 9 },
            { text: "镇江", id: 10 },
            { text: "泰州", id: 11 },
            { text: "宿迁", id: 12 }
          ]
        },
        {
          text: "安徽省",
          value: 2,
          children: [
            { text: "合肥", id: 1 },
            { text: "芜湖", id: 2 },
            { text: "蚌埠", id: 3 },
            { text: "淮南", id: 4 },
            { text: "滁州", id: 5 },
            { text: "亳州", id: 6 },
            { text: "铜陵", id: 7 },
            { text: "安庆", id: 8 },
            { text: "黄山", id: 9 },
            { text: "池州", id: 10 },
            { text: "淮北", id: 11 },
            { text: "宿州", id: 12 },
            { text: "阜阳", id: 13 },
            { text: "六安", id: 14 },
            { text: "宣城", id: 15 }
          ]
        },
        {
          text: "江西省",
          value: 2,
          children: [
            { text: "南昌", id: 1 },
            { text: "九江", id: 2 },
            { text: "赣州", id: 3 },
            { text: "抚州", id: 4 },
            { text: "上饶", id: 5 },
            { text: "丰城", id: 6 },
            { text: "德兴", id: 7 },
            { text: "庐山", id: 8 },
            { text: "贵溪", id: 9 },
            { text: "瑞金", id: 10 },
            { text: "乐平", id: 11 },
            { text: "宜春", id: 12 }
          ]
        },
        {
          text: "四川省",
          value: 2,
          children: [
            { text: "成都", id: 1 },
            { text: "泸州", id: 2 },
            { text: "乐山", id: 3 },
            { text: "广元", id: 4 },
            { text: "德阳", id: 5 },
            { text: "绵阳", id: 6 },
            { text: "南充", id: 7 },
            { text: "重庆", id: 8 },
            { text: "内江", id: 9 },
            { text: "遂宁", id: 10 },
            { text: "雅安", id: 11 },
            { text: "崇州", id: 12 },
            { text: "彭州", id: 13 },
            { text: "达州", id: 14 },
            { text: "都江堰", id: 15 }
          ]
        },
        {
          text: "河南省",
          value: 2,
          children: [
            { text: "郑州", id: 1 },
            { text: "开封", id: 2 },
            { text: "洛阳", id: 3 },
            { text: "平顶山", id: 4 },
            { text: "新乡", id: 5 },
            { text: "许昌", id: 6 },
            { text: "濮阳", id: 7 },
            { text: "安阳", id: 8 },
            { text: "南阳", id: 9 },
            { text: "周口", id: 10 },
            { text: "信阳", id: 11 },
          ]
        },
        {
          text: "广东省",
          value: 2,
          children: [
            { text: "广州", id: 1 },
            { text: "深圳", id: 2 },
            { text: "珠海", id: 3 },
            { text: "汕头", id: 4 },
            { text: "汕尾", id: 5 },
            { text: "佛山", id: 6 },
            { text: "梅州", id: 7 },
            { text: "中山", id: 8 },
            { text: "东莞", id: 9 },
            { text: "揭阳", id: 10 }
          ]
        }
      ],
      activeId: 1,
      activeIndex: 0
    };
  },

  methods: {
    onConfirm() {
      this.$refs.item.toggle();
    },
    onClick(e) {
      console.log(e.text);
      console.log(this.option1);
      this.option1[0].text = e.text;
    },
    onBlur(e){
        console.log(e.target.value)
    }
  }
};
</script>

<style lang="stylus" scoped>
.price-size
    width 100%
    padding .08rem .2rem 
    border-bottom .01rem solid #ebedf0
.inps 
    margin-top .1rem
    display flex
    justify-content space-between
.inp-p
    width 1.5rem
    height .3rem
    border-radius .06rem
    padding 0 .2rem
    border none
    font-size .14rem
    background-color #f7f8fa
.btn 
    height .7rem
    display flex
.button
    width 70%
    margin auto
    border none
    border-radius .22rem
    background #4cc79b
.van-switch--on
    background #4cc79b
</style>