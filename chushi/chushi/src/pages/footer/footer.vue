<template>
    <footer>
        <router-link to="/index">首页</router-link>
        <router-link to="/classify">分类</router-link>
        <router-link to="/publish">发布</router-link>
        <router-link to="/manifest">货单</router-link>
        <router-link to="/my">我的</router-link>
    </footer>

</template>

<script>
export default {
    
}
</script>

<style lang="stylus" scoped>
   footer
        width 100%
        display flex
        background red
        height .49rem
        position fixed
        bottom 0
        left 0
        line-height 0.49rem
        a 
            flex 1
            text-align center

</style>