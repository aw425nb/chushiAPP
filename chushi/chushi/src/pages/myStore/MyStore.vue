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
            @blur="errBlur"
            v-model="msg"></textarea>
            <div class="count-box"><span class="count">{{num}}/200</span></div>
        </div> 
        <!-- 企业图片 -->
        <div class="picture">
            <p class="pic-title">企业图片</p>
            <div class="fileList">
                <van-uploader class="pic"
                v-model="fileList"
                multiple
                :max-count="9"
                />
            </div>
            <div class="count-box"><span class="count">{{fileList.length}}/9</span></div>
        </div>
        <!-- 提交 -->
         <van-button round type="primary" 
         size="large" class="submit-btn">提交</van-button>
    </div>
  </div>
</template>

<script>
export default {
    data(){
        return {
            num:0,
            msg:'',
            fileList:[
                {url:'https://img.yzcdn.cn/vant/leaf.jpg'},
                {url:'https://img.yzcdn.cn/vant/leaf.jpg'},
                {url:'https://img.yzcdn.cn/vant/leaf.jpg'}
            ]
        }
    },
    methods: {
        onClickLeft() {//标题左箭头后退事件
        Toast("返回");
        },
        textInput(){//文本框计数事件
            //console.log(this.msg.length)//文本框的v-model长度
            this.num=this.msg.length
        },
        errBlur(){
            if(this.msg.length>200){//控制输入文字长度
                this.$toast('您输入的内容过长')
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
.picture 
    width 90%
    background #fff
    margin-top .1rem
    border-radius .1rem
    box-shadow: 8px 1px 10px 7px #f6f6f6;
    display flex
    flex-direction column
    padding .1rem .2rem
.pic-title
    font-size .16rem
    height .3rem
    line-height .2rem
.pic
    margin-left .2rem
.submit-btn
    margin-top .15rem
    width 80%
</style>