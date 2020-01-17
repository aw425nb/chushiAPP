<template>
  <!-- 二级导航
  item.title: 当季最热、其他
  fid: 一级导航的id
  sid: 二级导航的id
  sname: 二级导航分类的标题
  url: 二级导航分类的图片路径-->
  <div class="floor">
    <div class="hot" v-for="item of hotlist" :key="item.fid">
      <h3>{{item.title}}</h3>
      <ul>
        <li v-for="ele of item.list" :key="ele.sid">
          <a href>
            <img :src="ele.url" alt />
            <span>{{ele.sname}}</span>
          </a>
        </li>
      </ul>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      hotlist: [
        {
          title: "当季最热",
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
        }
      ]
    };
  }
};
</script>

<style scoped lang="stylus">
$width = .6rem
.floor
    padding .2rem
    .hot
        font-size .14rem
        margin-top -.05rem
        text-align left
        h3
            margin-bottom .14rem
    ul
        display flex
        flex-wrap wrap
        justify-content space-evenly
        li
            // width 33%
            padding 0 .08rem .08rem .08rem
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
</style>
