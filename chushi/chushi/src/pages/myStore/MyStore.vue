<template>
  <div id="mystore">
    <!-- 头部标题导航栏 -->
    <van-nav-bar class="title"
      title="我的店铺"
      left-arrow
      @click-left="onClickLeft"
    />
    <div class="mystore-inner">
        <!-- 企业介绍 -->
        <div class="introduce">
            <p class="intro-title">企业介绍</p>
            <textarea name="" id="textarea" cols="30" rows="10" 
            placeholder="请输入对您企业规模以及企业实力的详细描述" 
            @input="textInput"
            v-model="msg"></textarea>
            <div class="count-box"><span class="count">{{num}}/10</span></div>
        </div> 
    </div>
  </div>
</template>

<script>
export default {
    data(){
        return {
            num:0,
            msg:''
        }
    },
    methods: {
        onClickLeft() {//标题左箭头后退事件
        Toast("返回");
        },
        textInput(){//文本框计数事件
            //console.log(this.msg.length)//文本框的v-model长度
            this.num=this.msg.length
            if(this.msg.length>=10){
                this.$toast('不能超过10个字')
                this.num=10
            }
        }
    }
};
</script>

<style lang="stylus" scoped>
.van-nav-bar .van-icon
    color #333
    font-size .16rem
    font-weight 600
.van-nav-bar__title
    font-weight 600
.mystore-inner
    display flex
    flex-direction column
    align-items center
.introduce 
    width 90%
    height 1.8rem
    background #fff
    margin-top .1rem
    border-radius .1rem
    box-shadow: 8px 1px 10px 7px #f6f6f6;
    display flex
    flex-direction column
    padding .1rem .2rem
.intro-title
    font-size .16rem
    height .2rem
    line-height .2rem
#textarea
    border none
    margin .05rem 0
.count-box
    width 100%
    height .3rem
    line-height .3rem
    text-align right
</style>