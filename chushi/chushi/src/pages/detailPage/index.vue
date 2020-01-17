<template>
  <div id="shop_detail">
    <header class="banner">
      <img src="../../assets/img/banner1.png" alt />
      <div class="heade_back">
        <van-icon name="arrow-left" />
      </div>
    </header>
    <section class="counter">
      <h1>湖南特产绿心猕猴桃</h1>
      <p class="address">
        300km
        <van-icon name="location" />
        浙江宁波市
      </p>
      <p class="introduce">
        <span class="price">20元/斤</span>
        <button>300斤起批</button>
        <button>零批</button>
        <button>包邮</button>
      </p>
    </section>
    <div class="pl">
      <span>发货地</span>
      <span>浙江省宁波市</span>
    </div>
    <div class="product_attribute">
      <h2>产品属性</h2>
      <div class="warp">
        <van-grid :border="true" :column-num="4" >
          <van-grid-item class="bc">
            单果重
          </van-grid-item>
          <van-grid-item>
            10-20克
          </van-grid-item>
          <van-grid-item class="bc">
            颜色
          </van-grid-item>
           <van-grid-item>
            点红
          </van-grid-item>
        </van-grid>
        <van-grid :border="true" :column-num="4">
          <van-grid-item class="bc">
            直径
          </van-grid-item>
          <van-grid-item>
            统货
          </van-grid-item>
          <van-grid-item class="bc">
            储存方式
          </van-grid-item>
           <van-grid-item>
            冷窖
          </van-grid-item>
        </van-grid>
      </div>
    </div>
    <div class="serve">
      <h2>商家服务</h2>
      <ul>
        <li>产地代办</li>
        <li>协助找车</li>
        <li>支持快递</li>
        <li>协助装车</li>
        <li>支持周边送货</li>
        <li>统货</li>
        <li>支持代办</li>
      </ul>
    </div>
    <div class="info">
      <img src="../../assets/img/userpic.png" alt="">
      <div class="introduction">
        <h3>宁波居食坊</h3>
        <section class="btn_warp">
          <button>养殖户</button>
          <button>实名</button>
          <button>企业</button>
        </section>
      </div>
    </div>
    <div class="description">
      描述描述描述描述描述描述描述描述
      描述描述描述描述描述描述描述描述描述描述描述描述描述描述描述描述描述描述
      描述描述描述描述描述描述描述描述描述描述描述描述描述描述描述描述描述描述
      描述描述描述描述描述描述描述描述描述描述描述描述描述描述描述描述描述描述
    </div>
    <div class="imglist">
      <img src="../../assets/img/banner1.jpg" alt="">
      <img src="../../assets/img/banner2.jpg" alt="">
    </div>
    <div class="correlation">
      <h3>相关产品</h3>
      <ul>
        <li>
          <img src="../../assets/img/10.png" alt="">
          <h4>产品名称</h4>
          <p>20斤/元</p>
        </li>
         <li>
          <img src="../../assets/img/10.png" alt="">
          <h4>产品名称</h4>
          <p>20斤/元</p>
        </li> 
        <li>
          <img src="../../assets/img/10.png" alt="">
          <h4>产品名称</h4>
          <p>20斤/元</p>
        </li>
      </ul>
    </div>
    <div class="agreement">
      <img src="../../assets/img/explain.png" alt="">
    </div>
    <div class="serial_number">
      <span class="serial_l">产品编号：001</span>
      <span class="serial_r">询价时请将产品编号报给对方</span>
    </div>
    <footer class="footer">
      <button class="footer_l">加入进货单</button>
      <button class="footer_r">立即询价</button>
    </footer>
  </div>
</template>

<script>
export default {
  methods: {

  }
}
</script>

<style lang="stylus">
#shop_detail 
  width: 100%;
  background: #f8f8f8;
  .banner 
    width: 100%;
    height: 2.1rem;

    img 
      width: 100%;
      height: 100%;
      position: relative;
    

    .heade_back 
      width: 0.3rem;
      height: 0.3rem;
      background-color: #ffffff;
      border-radius: 50%;
      line-height: 0.4rem;
      text-align: center;
      font-size: 0.2rem;
      position: absolute;
      top: 0.27rem;
      left: 0.16rem;
      opacity: 0.5;
    
  

  .counter 
    width: 100%;
    height: 1.1rem
    padding .16rem
    background-color #fff
    h1 
      font-size .13rem
      color black
      margin-bottom .1rem
    .address
      font-size .08rem
      margin-bottom .19rem
    .introduce
      .price  
        color #ff6600
        margin-right .07rem
      button 
        border .005rem solid #4cc79b
        color #ffffff
        background-color #4cc79b
        margin-left .07rem
        border-radius .05rem
        padding 0 .05rem
  .pl
    width 100%
    height .33rem
    background-color #ffffff
    margin-top .12rem 
    display flex
    justify-content space-between
    align-items center
    padding 0 .16rem
    font-size .12rem
  .product_attribute
    width 100%
    padding 0 .16rem .2rem
    background-color #fff
    margin-top .12rem
    h2
      line-height .33rem
      height .33rem
      font-size .12rem
    .warp
      .bc
        /deep/ .van-grid-item__content 
          background #f4f4f4 

  .serve  
    width 100%
    padding 0 .16rem .2rem
    margin-top .12rem
    background-color #fff
    h2
      line-height .33rem
      height .33rem
      font-size .12rem
    ul
      display flex
      width 100%
      flex-wrap wrap
      li
        background-color #f4f4f4
        width 25%
        flex-shrink 0
        height .24rem
        text-align center
        line-height .24rem
        border .005rem solid #d8d8d8
        color black
        font-size .1rem
  .info
    width 100%
    height .8rem
    padding 0.2rem .16rem 
    margin-top .12rem
    background-color #ffffff
    display flex
    align-items center
    img 
      width .6rem
      height .6rem
      margin-right .11rem
    .introduction
      height .4rem
      width 4rem
      h3
        font-size .15rem
        margin-bottom .1rem
      button 
        height .2rem
        border .005rem solid #4cc79b
        background-color #4cc79b
        color #ffffff
        border-radius .06rem
        padding 0 .1rem
        margin-right .05rem
  .description
    width 100%
    padding .16rem .2rem  
    margin-top .12rem
    background-color #fff
    line-height .22rem
    font-size .16rem
    color #000000
    min-height .2rem
  .imglist
    width 100%
    padding .16rem .2rem .1rem 
    margin-top .12rem
    background-color #fff
    img 
      width 100%
      height  2.5rem
      margin-bottom .1rem
      border-radius .05rem
  .correlation
    width 100%
    padding .16rem .2rem  
    margin-top .12rem
    background-color #fff
    h3
      line-height .2rem
      font-size .12rem
      color #000000
    ul
      width 100%
      height 1.507rem
      display flex  
      justify-content space-between
      li 
        width 1.05rem
        height 1.507rem
        padding .02rem
        img 
          width 1rem
          height 1rem
        h4
          margin-top .1rem
        p
          margin-top .08rem
          color #ff6600
  .agreement
    width 100%
    height 1rem
    background-color #fff
    padding .1rem .2rem .1rem 
    margin-top .06rem
    img   
      width 100%
      height 100%
  .serial_number
    width 100%
    line-height .32rem
    font-size .12rem
    color #000000
    background-color #fff
    padding 0 .2rem
    display flex
    justify-content space-between
    .serial_r
      color #999999
  .footer
    width 100%
    height .6rem
    padding .09rem .2rem 
    button 
      width 50%
      height 100%
      border 0
    .footer_l
      border-radius .3rem 0rem 0rem .3rem
      background-color #81d8b9
    .footer_r
      border-radius 0rem .3rem .3rem 0rem
      background-color #4cc79b
          



</style>
