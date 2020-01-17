<template>
  <div>
    <!-- 导航分类 FirstNav -->
    <!-- 一级导航 -->
    <van-tree-select
      height="100%"
      :items="items"
      :active-id.sync="activeId"
      :main-active-index.sync="activeIndex"
    >
      <template slot="content">
        <!-- <SecondNav></SecondNav> -->
        <!-- 二级导航 SecondNavSecondNav
        item.title: 当季最热、其他
        fid: 一级导航的id
        sid: 二级导航的id
        sname: 二级导航分类的标题
        url: 二级导航分类的图片路径-->
        <div class="floor">
          <div class="hot" v-for="item of hotlist" :key="item.fid">
            <h3>{{item.title}}</h3>
            <ul>
              <li v-for="ele of item.list" :key="ele.sid" :class="{active:fruitType==ele.tname}" @click="chose([ele.tid,ele.tname])">
                <a href>
                  <img :src="ele.url" alt />
                  <span>{{ele.sname}}</span>
                </a>
              </li>
            </ul>
          </div>
        </div>
      </template>
    </van-tree-select>
  </div>
</template>

<script>
// import SecondNav from "./SecondNav";
export default {
  components: {
    // SecondNav
  },
  data() {
    return {
      activeId: 1,
      activeIndex: 0,
      hotlist: [
        {
          title: "当季最热",
          text: "水果",
          fid: 1,
          list: [
            {
              sid: 1,
              url:
                "https://img.yzcdn.cn/vant/cat.jpeg",
              sname: "葡萄"
            },
            {
              sid: 2,
              url:
                "https://img.yzcdn.cn/vant/cat.jpeg",
              sname: "西瓜"
            },
            {
              sid: 3,
              url:
                "https://img.yzcdn.cn/vant/cat.jpeg",
              sname: "蜜桃"
            },
            {
              sid: 4,
              url:
                "https://img.yzcdn.cn/vant/cat.jpeg",
              sname: "苹果"
            },
            {
              sid: 5,
              url:
                "https://img.yzcdn.cn/vant/cat.jpeg",
              sname: "梨"
            },
            {
              sid: 6,
              url:
                "https://img.yzcdn.cn/vant/cat.jpeg",
              sname: "李子"
            },
            {
              sid: 7,
              url:
                "https://img.yzcdn.cn/vant/cat.jpeg",
              sname: "猕猴桃"
            },
            {
              sid: 8,
              url:
                "https://img.yzcdn.cn/vant/cat.jpeg",
              sname: "柑橘"
            },
            {
              sid: 9,
              url:
                "https://img.yzcdn.cn/vant/cat.jpeg",
              sname: "鲜枣"
            }
          ]
        },
        {
          title: "当季最热",
          text: "蔬菜",
          fid: 2,
          list: [
            {
              sid: 1,
              url:
                "https://img.yzcdn.cn/vant/cat.jpeg",
              sname: "蔬菜1"
            },
            {
              sid: 2,
              url:
                "https://img.yzcdn.cn/vant/cat.jpeg",
              sname: "蔬菜2"
            },
            {
              sid: 3,
              url:
                "https://img.yzcdn.cn/vant/cat.jpeg",
              sname: "蔬菜3"
            },
            {
              sid: 4,
              url:
                "https://img.yzcdn.cn/vant/cat.jpeg",
              sname: "蔬菜4"
            },
            {
              sid: 5,
              url:
                "https://img.yzcdn.cn/vant/cat.jpeg",
              sname: "蔬菜5"
            },
            {
              sid: 6,
              url:
                "https://img.yzcdn.cn/vant/cat.jpeg",
              sname: "蔬菜6"
            },
            {
              sid: 7,
              url:
                "https://img.yzcdn.cn/vant/cat.jpeg",
              sname: "蔬菜7"
            },
            {
              sid: 8,
              url:
                "https://img.yzcdn.cn/vant/cat.jpeg",
              sname: "蔬菜8"
            },
            {
              sid: 9,
              url:
                "https://img.yzcdn.cn/vant/cat.jpeg",
              sname: "蔬菜9"
            }
          ]
        },
        {
          title: "当季最热",
          text: "粮油",
          fid: 3,
          list: [
            {
              sid: 1,
              url:
                "https://img.yzcdn.cn/vant/cat.jpeg",
              sname: "粮油1"
            },
            {
              sid: 2,
              url:
                "https://img.yzcdn.cn/vant/cat.jpeg",
              sname: "粮油2"
            },
            {
              sid: 3,
              url:
                "https://img.yzcdn.cn/vant/cat.jpeg",
              sname: "粮油3"
            },
            {
              sid: 4,
              url:
                "https://img.yzcdn.cn/vant/cat.jpeg",
              sname: "粮油4"
            },
            {
              sid: 5,
              url:
                "https://img.yzcdn.cn/vant/cat.jpeg",
              sname: "粮油5"
            },
            {
              sid: 6,
              url:
                "https://img.yzcdn.cn/vant/cat.jpeg",
              sname: "粮油6"
            },
            {
              sid: 7,
              url:
                "https://img.yzcdn.cn/vant/cat.jpeg",
              sname: "粮油7"
            },
            {
              sid: 8,
              url:
                "https://img.yzcdn.cn/vant/cat.jpeg",
              sname: "粮油8"
            },
            {
              sid: 9,
              url:
                "https://img.yzcdn.cn/vant/cat.jpeg",
              sname: "粮油9"
            }
          ]
        },
        {
          title: "当季最热",
          text: "食用菌",
          fid: 4,
          list: [
            {
              sid: 1,
              url:
                "https://img.yzcdn.cn/vant/cat.jpeg",
              sname: "食用菌1"
            },
            {
              sid: 2,
              url:
                "https://img.yzcdn.cn/vant/cat.jpeg",
              sname: "食用菌2"
            },
            {
              sid: 3,
              url:
                "https://img.yzcdn.cn/vant/cat.jpeg",
              sname: "食用菌3"
            },
            {
              sid: 4,
              url:
                "https://img.yzcdn.cn/vant/cat.jpeg",
              sname: "食用菌4"
            },
            {
              sid: 5,
              url:
                "https://img.yzcdn.cn/vant/cat.jpeg",
              sname: "食用菌5"
            },
            {
              sid: 6,
              url:
                "https://img.yzcdn.cn/vant/cat.jpeg",
              sname: "食用菌6"
            },
            {
              sid: 7,
              url:
                "https://img.yzcdn.cn/vant/cat.jpeg",
              sname: "食用菌7"
            },
            {
              sid: 8,
              url:
                "https://img.yzcdn.cn/vant/cat.jpeg",
              sname: "食用菌8"
            },
            {
              sid: 9,
              url:
                "https://img.yzcdn.cn/vant/cat.jpeg",
              sname: "食用菌9"
            }
          ]
        },
        {
          title: "当季最热",
          text: "水产",
          fid: 5,
          list: [
            {
              sid: 1,
              url:
                "https://img.yzcdn.cn/vant/cat.jpeg",
              sname: "水产1"
            },
            {
              sid: 2,
              url:
                "https://img.yzcdn.cn/vant/cat.jpeg",
              sname: "水产2"
            },
            {
              sid: 3,
              url:
                "https://img.yzcdn.cn/vant/cat.jpeg",
              sname: "水产3"
            },
            {
              sid: 4,
              url:
                "https://img.yzcdn.cn/vant/cat.jpeg",
              sname: "水产4"
            },
            {
              sid: 5,
              url:
                "https://img.yzcdn.cn/vant/cat.jpeg",
              sname: "水产5"
            },
            {
              sid: 6,
              url:
                "https://img.yzcdn.cn/vant/cat.jpeg",
              sname: "水产6"
            },
            {
              sid: 7,
              url:
                "https://img.yzcdn.cn/vant/cat.jpeg",
              sname: "水产7"
            },
            {
              sid: 8,
              url:
                "https://img.yzcdn.cn/vant/cat.jpeg",
              sname: "水产8"
            },
            {
              sid: 9,
              url:
                "https://img.yzcdn.cn/vant/cat.jpeg",
              sname: "水产9"
            }
          ]
        },
        {
          title: "当季最热",
          text: "畜禽",
          fid: 6,
          list: [
            {
              sid: 1,
              url:
                "https://img.yzcdn.cn/vant/cat.jpeg",
              sname: "畜禽1"
            },
            {
              sid: 2,
              url:
                "https://img.yzcdn.cn/vant/cat.jpeg",
              sname: "畜禽2"
            },
            {
              sid: 3,
              url:
                "https://img.yzcdn.cn/vant/cat.jpeg",
              sname: "畜禽3"
            },
            {
              sid: 4,
              url:
                "https://img.yzcdn.cn/vant/cat.jpeg",
              sname: "畜禽4"
            },
            {
              sid: 5,
              url:
                "https://img.yzcdn.cn/vant/cat.jpeg",
              sname: "畜禽5"
            },
            {
              sid: 6,
              url:
                "https://img.yzcdn.cn/vant/cat.jpeg",
              sname: "畜禽6"
            },
            {
              sid: 7,
              url:
                "https://img.yzcdn.cn/vant/cat.jpeg",
              sname: "畜禽7"
            },
            {
              sid: 8,
              url:
                "https://img.yzcdn.cn/vant/cat.jpeg",
              sname: "畜禽8"
            },
            {
              sid: 9,
              url:
                "https://img.yzcdn.cn/vant/cat.jpeg",
              sname: "畜禽9"
            }
          ]
        },
        {
          title: "当季最热",
          text: "干果",
          fid: 7,
          list: [
            {
              sid: 1,
              url:
                "https://img.yzcdn.cn/vant/cat.jpeg",
              sname: "干果1"
            },
            {
              sid: 2,
              url:
                "https://img.yzcdn.cn/vant/cat.jpeg",
              sname: "干果2"
            },
            {
              sid: 3,
              url:
                "https://img.yzcdn.cn/vant/cat.jpeg",
              sname: "干果3"
            },
            {
              sid: 4,
              url:
                "https://img.yzcdn.cn/vant/cat.jpeg",
              sname: "干果4"
            },
            {
              sid: 5,
              url:
                "https://img.yzcdn.cn/vant/cat.jpeg",
              sname: "干果5"
            },
            {
              sid: 6,
              url:
                "https://img.yzcdn.cn/vant/cat.jpeg",
              sname: "干果6"
            },
            {
              sid: 7,
              url:
                "https://img.yzcdn.cn/vant/cat.jpeg",
              sname: "干果7"
            },
            {
              sid: 8,
              url:
                "https://img.yzcdn.cn/vant/cat.jpeg",
              sname: "干果8"
            },
            {
              sid: 9,
              url:
                "https://img.yzcdn.cn/vant/cat.jpeg",
              sname: "干果9"
            }
          ]
        },
        {
          title: "当季最热",
          text: "中药材",
          fid: 8,
          list: [
            {
              sid: 1,
              url:
                "https://img.yzcdn.cn/vant/cat.jpeg",
              sname: "中药材1"
            },
            {
              sid: 2,
              url:
                "https://img.yzcdn.cn/vant/cat.jpeg",
              sname: "中药材2"
            },
            {
              sid: 3,
              url:
                "https://img.yzcdn.cn/vant/cat.jpeg",
              sname: "中药材3"
            },
            {
              sid: 4,
              url:
                "https://img.yzcdn.cn/vant/cat.jpeg",
              sname: "中药材4"
            },
            {
              sid: 5,
              url:
                "https://img.yzcdn.cn/vant/cat.jpeg",
              sname: "中药材5"
            },
            {
              sid: 6,
              url:
                "https://img.yzcdn.cn/vant/cat.jpeg",
              sname: "中药材6"
            },
            {
              sid: 7,
              url:
                "https://img.yzcdn.cn/vant/cat.jpeg",
              sname: "中药材7"
            },
            {
              sid: 8,
              url:
                "https://img.yzcdn.cn/vant/cat.jpeg",
              sname: "中药材8"
            },
            {
              sid: 9,
              url:
                "https://img.yzcdn.cn/vant/cat.jpeg",
              sname: "中药材9"
            }
          ]
        },
        {
          title: "当季最热",
          text: "茶叶",
          fid: 9,
          list: [
            {
              sid: 1,
              url:
                "https://img.yzcdn.cn/vant/cat.jpeg",
              sname: "茶叶1"
            },
            {
              sid: 2,
              url:
                "https://img.yzcdn.cn/vant/cat.jpeg",
              sname: "茶叶2"
            },
            {
              sid: 3,
              url:
                "https://img.yzcdn.cn/vant/cat.jpeg",
              sname: "茶叶3"
            },
            {
              sid: 4,
              url:
                "https://img.yzcdn.cn/vant/cat.jpeg",
              sname: "茶叶4"
            },
            {
              sid: 5,
              url:
                "https://img.yzcdn.cn/vant/cat.jpeg",
              sname: "茶叶5"
            },
            {
              sid: 6,
              url:
                "https://img.yzcdn.cn/vant/cat.jpeg",
              sname: "茶叶6"
            },
            {
              sid: 7,
              url:
                "https://img.yzcdn.cn/vant/cat.jpeg",
              sname: "茶叶7"
            },
            {
              sid: 8,
              url:
                "https://img.yzcdn.cn/vant/cat.jpeg",
              sname: "茶叶8"
            },
            {
              sid: 9,
              url:
                "https://img.yzcdn.cn/vant/cat.jpeg",
              sname: "茶叶9"
            }
          ]
        },
      ]
    };
  }
};
</script>

<style scoped lang="stylus">
.van-sidebar
  text-align center
  width 28%
  flex none
  .van-sidebar-item--select
    color #4cc79b
    border-width 0 0 0.02rem 0
    border-style solid
    border-color #4cc79b
  a
    padding .15rem
// 二级导航相关样式
$width = .6rem
.floor
    padding .1rem
    .hot
        font-size .14rem
        text-align left
        h3
            margin-bottom .18rem
            margin-top .06rem
            margin-left .15rem
    ul
        display flex
        flex-wrap wrap
        justify-content space-evenly
        li
            // width 33%
            padding 0 .08rem .18rem .08rem
            box-sizing border-box
            text-align center
        a
            display block
            display flex
            flex-direction column
        img
            width $width
            height $width
            border-radius .05rem
            margin-bottom 0.04rem
</style>
