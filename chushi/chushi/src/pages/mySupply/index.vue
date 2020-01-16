<template>
  <div id="mysupple">
    <van-nav-bar title="我的供应" left-text left-arrow @click-left="onClickLeft" />
    <van-tabs v-model="active" color="#4cc79b" title-active-color="#4cc79b">
      <van-tab class="purchase_warp" title="上架中">
        <ul>
          <img v-if="imgshow1" class="bcimg" src="../../assets/img/bg3.jpg" alt />
          <li>
            <div class="box">
              <img src="../../assets/img/1.png" alt />
            </div>
            <div class="box_r">
              <p class="title">湖南特产绿心猕猴桃</p>
              <p class="distance">
                300km
                <van-icon name="location" />浙江宁波市
              </p>
              <p class="price">200.00元/斤</p>
              <div class="button_warp">
                <button>下架</button>
              </div>
            </div>
          </li>
        </ul>
      </van-tab>
      <van-tab class="purchase_warp" title="下架中">
        <ul>
          <img v-if="imgshow2" class="bcimg" src="../../assets/img/bg3.jpg" alt />
          <li>
            <div class="box">
              <img src="../../assets/img/1.png" alt />
            </div>
            <div class="box_r">
              <p class="title">湖南特产绿心猕猴桃</p>
              <p class="distance">
                300km
                <van-icon name="location" />浙江宁波市
              </p>
              <p class="price">200.00元/斤</p>
              <div class="button_warp">
                <button>修改</button>
                <button>上架</button>
              </div>
            </div>
          </li>
        </ul>
      </van-tab>
      <van-tab class="purchase_warp" title="未通过">
        <ul>
          <img v-if="imgshow3" class="bcimg" src="../../assets/img/bg3.jpg" alt />
        </ul>
      </van-tab>
      <van-tab class="purchase_warp" title="审核中">
        <ul>
          <img v-if="imgshow4" class="bcimg" src="../../assets/img/bg3.jpg" alt />
        </ul>
      </van-tab>
    </van-tabs>
    <van-button round type="info" style="width: 2.7rem;" color="#4cc79b">发布新供应</van-button>
  </div>
</template>

<script>
export default {
  data() {
    return {
      active: 0,
      imgshow1: false, //背景图片时候显示隐藏
      imgshow2: false,
      imgshow3: true,
      imgshow4: true
    };
  },
  methods: {
    onClickLeft() {
      this.$router.history.push("/my");
    }
  }
};
</script>

<style lang="stylus" scoped>
#mysupple {
  text-align: center;
  background-color: #fbfbfb;

  .purchase_warp {
    width: 100%;
    height: 5.2rem;
    box-sizing: border-box;
    padding: 0.2rem;
    padding-top: 0.05rem;

    ul {
      width: 100%;
      height: 100%;
      overflow: auto;
      position: relative;

      .bcimg {
        width: 100%;
        position: absolute;
        top: 1.5rem;
        left: 0;
      }

      li {
        width: 100%;
        height: 1.4rem;
        box-sizing: border-box;
        padding: 0.2rem;
        margin-bottom: 0.1rem;
        border-radius: 0.1rem;
        display: flex;
        align-items: center;
        justify-content: left;
        position: relative;
        border: 0.005rem solid #ccc;
        color: #646566;
        background-color: #fff;

        .box {
          img {
            width: 1.2rem;
            height: 1.2rem;
          }
        }

        .box_r {
          padding: 0.1rem 0 0 0.2rem;
          height: 1.2rem;
          flex: 1;
          box-sizing: border-box;
          display: flex;
          flex-direction: column;
          align-items: flex-start;

          p {
            margin-bottom: 0.1rem;
          }

          .title {
            font-size: 0.14rem;
            font-weight: 500;
            color: #000;
          }

          .price {
            color: #ff6600;
          }

          .button_warp {
            button {
              width: 0.48rem;
              height: 0.22rem;
              line-height: 0.22rem;
              background-color: #4cc79b;
              border: 0;
              border-radius: 0.05rem;
              font-size: 0.115rem;
              margin-right: 0.1rem;
              color: #ffffff;
              cursor: pointer;
            }
          }
        }
      }
    }
  }
}
</style>