<template>
    <div class="search">
        <div class="search-top">
            <van-icon name="arrow-left" />
            <SearchBox/>
        </div>
    </div>
</template>

<script>
//引入搜索框
import SearchBox from "./SearchBox.vue"
export default {
    data(){
        return {
            
        }
    },
    components:{
        SearchBox,
    }
}
</script>


<style lang="stylus" scoped>
.search
    display flex
    flex-direction columns 
    height 100%
    width 100%
    .search-top
        width 100%
        padding .05rem .1rem
        display flex
        justify-content center
        align-items center
        border-bottom 1px pink solid


</style>