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
                "https://img.alicdn.com/imgextra/i4/2053469401/O1CN01MeXEEF2JJhzeoqBBw_!!2053469401.png",
              sname: "葡萄"
            },
            {
              sid: 2,
              url:
                "https://img.alicdn.com/imgextra/i4/2053469401/O1CN01MeXEEF2JJhzeoqBBw_!!2053469401.png",
              sname: "西瓜"
            },
            {
              sid: 3,
              url:
                "https://img.alicdn.com/imgextra/i4/2053469401/O1CN01MeXEEF2JJhzeoqBBw_!!2053469401.png",
              sname: "蜜桃"
            },
            {
              sid: 4,
              url:
                "https://img.alicdn.com/imgextra/i4/2053469401/O1CN01MeXEEF2JJhzeoqBBw_!!2053469401.png",
              sname: "苹果"
            },
            {
              sid: 5,
              url:
                "https://img.alicdn.com/imgextra/i4/2053469401/O1CN01MeXEEF2JJhzeoqBBw_!!2053469401.png",
              sname: "梨"
            },
            {
              sid: 6,
              url:
                "https://img.alicdn.com/imgextra/i4/2053469401/O1CN01MeXEEF2JJhzeoqBBw_!!2053469401.png",
              sname: "李子"
            },
            {
              sid: 7,
              url:
                "https://img.alicdn.com/imgextra/i4/2053469401/O1CN01MeXEEF2JJhzeoqBBw_!!2053469401.png",
              sname: "猕猴桃"
            },
            {
              sid: 8,
              url:
                "https://img.alicdn.com/imgextra/i4/2053469401/O1CN01MeXEEF2JJhzeoqBBw_!!2053469401.png",
              sname: "柑橘"
            },
            {
              sid: 9,
              url:
                "https://img.alicdn.com/imgextra/i4/2053469401/O1CN01MeXEEF2JJhzeoqBBw_!!2053469401.png",
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
.floor
    li
        width .3rem
</style>
