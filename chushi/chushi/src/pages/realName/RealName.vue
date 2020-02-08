<template>
    <div id="real-name">
        <!-- 头部标题导航栏 -->
        <van-nav-bar class="title"
        title="实名认证"
        left-arrow
        @click-left="onClickLeft"
        />
        <div class="realname-inner">
            <!-- 保密所传资料 -->
            <p class="secrecy">上传的资料仅用于认证审核，公司会严格保密不会外传</p>
            <!-- 上传照片 -->
            <div class="content">
                <span class="up-pic">上传照片</span>
                <div class="photos">
                    <div class="fileList">
                        <van-uploader v-model="fileList1"
                        multiple :max-count="1"
                        preview-size="148px"/>
                        <van-icon name="card" size=".5rem"/>
                        <p class="idcard">身份证国徽面</p>
                    </div>
                    <div class="fileList">
                        <van-uploader v-model="fileList1"
                        multiple :max-count="1"
                        preview-size="148px"/>
                        <van-icon name="manager" size=".5rem"/>
                        <p class="idcard">身份证照片面</p>
                    </div>
                </div>
            </div>
             <!-- 实名验证的个人信息 -->
            <van-field v-model="user" label="姓名" rows="1" 
            placeholder="请输入您的真实姓名" />
            <van-field v-model="idcard" type="tel" label="身份证号" rows="1" is-link
            placeholder="请输入你的身份证号码"/>
            <!-- 下一步 -->
            <div class="next-button">
                <p>为避免审核不通过,请仔细阅读如歌提交实名验证？</p>
                <van-button round type="primary" 
                size="large" class="submit-btn">下一步</van-button>
            </div>

        </div>
    </div>
</template>

<script>
export default {
    data(){
        return {
            fileList1:[],
            fileList2:[],
            user:'',
            idcard:'',
        }
    },
    methods: {
        onClickLeft() {//标题左箭头后退事件
        Toast("返回");
        }
    }
}
</script>


<style lang="stylus" scoped>
.van-nav-bar .van-icon
    color #333
    font-size .16rem
    font-weight 600
.van-nav-bar__title
    font-weight 600
.realname-inner
    display flex
    flex-direction column
    align-items center
.secrecy
    height .25rem
    width 100%
    background #f1f9fd
    text-align: center
    line-height .25rem
.content 
    width 100%
    padding .1rem .2rem
.photos
    display flex
    justify-content space-between
    margin .1rem 0
    .fileList
        display flex
        flex-direction column
        align-items center
        .van-uploader__input
            width 100%
            height 100%
.idcard
    text-align center
.van-field__label 
    text-align justify
.next-button
    width 100%
    height 2rem
    display flex
    align-items center
    flex-direction column
    justify-content flex-end
.submit-btn
    margin-top .1rem
    width 80%
</style>