<template>
    <div class="search-box">
        <van-search
        placeholder="请输入搜索关键词"
        show-action
        shape="round"
        @search="onSearch"
        >
        <div slot="action" @click="onSearch">搜索</div>
        </van-search>
    </div>
</template>

<script>
export default{
    methods:{
        onSearch(){
            console.log('search')
        }
    }
}
</script>

<style lang="stylus" scoped>
.search-box
    width 95%
</style>